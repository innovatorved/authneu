import { NextRequest, NextResponse } from "next/server";

export async function middleware(_req: NextRequest) {
  try {
    const token = _req.headers.get("token");

    if (!token) {
      let res_msg = {
        success: false,
        message: "Token not available",
      };

      return new Response(JSON.stringify(res_msg), {
        status: 401,
        headers: {
          authenticated: "false",
        },
      });
    }

    return NextResponse.next();
  } catch (error) {
    const res_msg = {
      success: false,
      message: error.message,
    };

    return new Response(JSON.stringify(res_msg), {
      status: 401,
      headers: {
        authenticated: "false",
      },
    });
  }
}

export const config = {
  matcher: "/api/private/:function*",
};
