import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { CreateToken } from "@/utility/JWTTokenHelper";

import { SendEmail } from "@/utility/EmailUtility";
import { headers } from "next/headers";
export async function POST(req, res) {
    try {
        let headerList = headers();
        let email = headerList.get('email');
        console.log("Email from header:", email);
        const prisma = new PrismaClient();
        if (!email) {
            return NextResponse.json({ status: "fail", data: "Email is missing" });
        }
        const user = await prisma.users.findUnique({ where: { email: email } })
        const newCode = (Math.floor(100000 + Math.random() * 900000).toString());
        const EmailText = `Your OTP Code is = ${newCode}`;
        const EmailSubject = "Next Ecommerce Verification Code";

        await SendEmail(user.email, EmailText, EmailSubject);
        console.log(email);
        const expiry = new Date(Date.now() + 60 * 1000)
        const result = await prisma.users.update({
            where: { email: email },
            data: {
                otp: newCode,
                otpExpireAt: expiry
            }
        });


        return NextResponse.json({ status: "success", data: result, message: "OTP Reesent Successfully,6 Digit OTP Code has been sent to your email" })

    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}