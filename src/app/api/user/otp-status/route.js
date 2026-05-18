import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        let headerList = headers();
        let email = headerList.get('email');
        console.log("Email from header:", email);
        const prisma = new PrismaClient();
        if (!email) {
            return NextResponse.json({ status: "fail", message: "No email" });
        }

        const user = await prisma.users.findUnique({
            where: { email },
            select: {
                otpExpireAt: true,
                otpResendAt: true,
            }
        });

        return NextResponse.json({
            status: "success",
            otpResendAt: user.otpResendAt,
            otpExpireAt: user.otpExpireAt,
        });

    } catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() });
    }
}