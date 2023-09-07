import { RecoverPwDataType } from "@/app/(auth)/auth/recover-password/page";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json() as RecoverPwDataType;
  console.log(req.body);
  console.log(email);
  const result = await fetch('http://localhost:3001/auth/recover-password', {
    method: 'post',
    body: JSON.stringify({email}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(result.ok);
  return NextResponse.json({success: true});
};