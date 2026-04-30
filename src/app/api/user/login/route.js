import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SendEmail } from "@/utility/EmailUtility";
import { CreateToken } from "@/utility/JWTTokenHelper";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const reqBody = await req.json();
    const user = await prisma.users.findUnique({ where: { email: reqBody.email, password: reqBody.password } });
    if (!user) {
      return NextResponse.json({
        status: "fail",
        message: "Invalid email or password",
      });
    }
    const code = (Math.floor(100000 + Math.random() * 900000)).toString();
    console.log(code);

    const EmailText = `Your OTP Code is = ${code}`;
    const EmailSubject = "Next Ecommerce Verification Code";
    await SendEmail(reqBody.email, EmailText, EmailSubject);
    const result = await prisma.users.update({
      where: { email: reqBody.email,role: "user"},
      data: { otp: code },
    });
    const token = await CreateToken(user.email, user.id);
    const expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    const cookieString = `token=${token}; expires=${expireDuration.toUTCString()}; path=/; httpOnly:true; SameSite=Strict`;
    console.log(token);

    return NextResponse.json({ status: "success", message: "6 Digit OTP Code has been sent to your email", data: { user: result, token: token } }, { status: 200, headers: { "Set-Cookie": cookieString } });
  }

  catch (e) { 
    return NextResponse.json({
      status: "fail", error: e.toString()
    });
  }
}
