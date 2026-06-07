import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, industry, employees, message } = body;

    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      firstName,
      lastName,
      email,
      company,
      industry,
      employees,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest! Our team will contact you within 2 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
