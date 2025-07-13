import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  try {
    const token = crypto.randomBytes(16).toString("hex");

    const now = Math.floor(Date.now() / 1000);
    const expire =1752429485 // 

    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) throw new Error("Missing IMAGEKIT_PRIVATE_KEY");

    const signature = crypto
      .createHmac("sha1", privateKey)
      .update(token + expire)
      .digest("hex");

    return NextResponse.json({ token, expire, signature });
  } catch (err) {
    console.error(" Fallback error:", err);
    return NextResponse.json({ error: "Fallback failed" }, { status: 500 });
  }
}
