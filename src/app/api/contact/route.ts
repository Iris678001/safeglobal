import { NextRequest, NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

function sanitize(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    // Send the email using Nodemailer
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@safeglobal.world',
      to: 'chand.mohamed@safeglobal.world',
      replyTo: email,
      subject: `New Lead: ${firstName} ${lastName} from ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
        <p><strong>Employees:</strong> ${employees || 'N/A'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>') || 'No message provided.'}</p>
        <hr />
        <small>Submitted at: ${new Date().toISOString()}</small>
      `,
    };

    await transporter.sendMail(mailOptions);

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
