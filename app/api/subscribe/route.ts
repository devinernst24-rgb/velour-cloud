import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "subscribers.json");
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
const MAX_SUBSCRIBERS = 10_000;

const ALLOWED_ORIGINS = [
  "https://velourcloud.com",
  "https://www.velourcloud.com",
  "http://localhost:3000",
];

export async function POST(req: NextRequest) {
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
