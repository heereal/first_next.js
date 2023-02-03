import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

//   if (pathname === "/ping") {
//     url.pathname = "/pong"
//     return NextResponse.redirect(url);
//   }

  if (pathname === "/ping") {
    url.pathname = "/pong"
    return NextResponse.rewrite(url);
  }
};