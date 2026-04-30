import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { SendEmail } from "@/utility/EmailUtility";
import { CreateToken } from  "@/utility/JWTTokenHelper";
export async function POST(req, res) {
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        const code = (Math.floor(100000 + Math.random() * 900000).toString());
        const result = await prisma.users.create({
            data: {
                email: reqBody.email,
                password: reqBody.password,
                otp: code,
                role: "user",
                customer_profiles: {
                    create: {
                        cus_name: reqBody.cus_name,
                        cus_add: reqBody.cus_add,
                        cus_city: reqBody.cus_city,
                        cus_state: reqBody.cus_state,
                        cus_postcode: "0",
                        cus_country: "0",
                        cus_phone: "0",
                        ship_name: "0",
                        ship_add: "0",
                        ship_city: "0",
                        ship_state: "0",
                        ship_postcode: "0",
                        ship_country: "0",
                        ship_phone: "0",
                        cus_fax: "0",

                    }
                }
            }

        })
        const EmailText = `Your OTP Code is = ${code}`;
        const EmailSubject = "Next Ecommerce Verification Code";
        await SendEmail(reqBody.email, EmailText, EmailSubject);
        const token = await CreateToken(reqBody.email, reqBody.id);
        const expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);//24hours
        const cookieString = `token=${token}; expires=${expireDuration.toUTCString()}; path=/; HttpOnly;SameSite=Strict`;

        return NextResponse.json({ status: "success", data: {result,token:token}, message: "User Registered Successfully, 6 Digit OTP Code has been sent to your email" },{status:200,headers:{"set-Cookie":cookieString}});
    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e.toString() })
    }

}