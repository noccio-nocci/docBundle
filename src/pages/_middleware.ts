import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // plasmic-hostのみBasic認証をかける
  if (req.nextUrl.pathname != "/plasmic-host") {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

    if (
      user === process.env.NEXT_PUBLIC_PLASMIC_BASCIAUTH_USER &&
      pwd === process.env.NEXT_PUBLIC_PLASMIC_BASCIAUTH_PASS
    ) {
      return NextResponse.next();
    } else {
      req.nextUrl.pathname = "/404";
      return NextResponse.rewrite(req.nextUrl);
    }
  }

  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
