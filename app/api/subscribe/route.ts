import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Simple in-memory rate limiter (resets on cold start — sufficient for serverless)
const subscribeRateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = subscribeRateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    subscribeRateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count++;
  return false;
}

// Vercel serverless: only /tmp is writable at runtime
const dataFile = path.join("/tmp", "subscribers.json");
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const MAX_SUBSCRIBERS = 10_000;

const ALLOWED_ORIGINS = [
  "https://velourcloud.com",
  "https://www.velourcloud.com",
  "http://localhost:3000",
];

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip, 3, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const origin = req.headers.get("origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const raw = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!raw || !EMAIL_REGEX.test(raw)) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }

  let subscribers: string[] = [];
  try {
    const data = await fs.readFile(dataFile, "utf-8");
    subscribers = JSON.parse(data);
  } catch {
    subscribers = [];
  }

  if (subscribers.length >= MAX_SUBSCRIBERS) {
    return NextResponse.json({ success: false, error: "List full" }, { status: 503 });
  }

  if (!subscribers.includes(raw)) {
    subscribers.push(raw);
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(subscribers, null, 2));
  }

  return NextResponse.json({ success: true });
}
