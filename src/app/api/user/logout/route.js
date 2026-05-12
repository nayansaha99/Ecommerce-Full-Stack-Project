import { NextResponse } from "next/server";

export async function GET(req) {
    const response = NextResponse.redirect(new URL("/", req.url));

    response.cookies.set("token", "", {
        expires: new Date(0),
        path: "/",
    });

    return response;
}