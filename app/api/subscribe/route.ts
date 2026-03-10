import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "subscribers.json");

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }

  let subscribers: string[] = [];
  try {
    const raw = await fs.readFile(dataFile, "utf-8");
    subscribers = JSON.parse(raw);
  } catch {
    subscribers = [];
  }

  if (!subscribers.includes(email)) {
    subscribers.push(email);
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(subscribers, null, 2));
  }

  return NextResponse.json({ success: true });
}
