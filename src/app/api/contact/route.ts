import { NextRequest, NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

function sanitize(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const firstName = sanitize(body.firstName, MAX_FIELD_LENGTH);
    const lastName = sanitize(body.lastName, MAX_FIELD_LENGTH);
    const email = sanitize(body.email, MAX_FIELD_LENGTH);
    const company = sanitize(body.company, MAX_FIELD_LENGTH);
    const industry = sanitize(body.industry, MAX_FIELD_LENGTH);
    const employees = sanitize(body.employees, MAX_FIELD_LENGTH);
    const message = sanitize(body.message, MAX_MESSAGE_LENGTH);

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

    // TODO: Wire up an email service (e.g., Resend or SendGrid) and/or persist
    // submissions to a database so leads are not lost. Logging alone is not
    // a reliable delivery mechanism.
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
        message: "Thank you for your interest! Our team will be in touch soon.",
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
