import { NextRequest, NextResponse } from "next/server";
import { updateSession, getSession } from "@/app/actions/lib";


export async function middleware(request: NextRequest) {
    await updateSession(request);
    console.log('session updated');
    const session = await getSession();

    const path = request.nextUrl.pathname;

    const checkPublicPath = path === "/login" || path === "/" ;
    console.log('path is=======26MAY====== ', checkPublicPath);

    if(checkPublicPath && session !== null) {  // user will not go to the login page if already logged in
        console.log('>>>>>>redirecting to dashboard>>>>>>>>');
        return NextResponse.redirect(new URL('/dashboard' , request.nextUrl));
    }
    if(!checkPublicPath && session === null) { //any path that is not login or signup will be redirected to login page if not logged in
        return NextResponse.redirect(new URL('/login' , request.nextUrl));
    }

}

export const config = {
    matcher: ["/about/:path*", "/dashboard/:path*", "/login","/"],
};

// ref: https://github.com/vercel/next.js/blob/canary/examples/middleware/middleware.ts

