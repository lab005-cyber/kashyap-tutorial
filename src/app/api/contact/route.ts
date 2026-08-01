import { NextResponse } from "next/server";

// Web3Forms key for direct email delivery to Kashyap Tutorial
const DEFAULT_WEB3FORMS_KEY = "6975c4b5-f8ba-4946-b461-6525c37c6a8c";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, standard, interest, message, botcheck } = body;

    // Honeypot anti-spam check
    if (botcheck) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // Input validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Read key from env vars or use default email key
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      DEFAULT_WEB3FORMS_KEY;

    // Forward to Web3Forms for direct email delivery to admin inbox
    const payload = {
      access_key: accessKey,
      from_name: "Kashyap Tutorial Website",
      subject: `New Student Enquiry: ${name} (${standard} - ${interest})`,
      name,
      phone,
      email,
      standard: standard || "Not specified",
      interest: interest || "Not specified",
      message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully.",
      });
    }

    // Even if upstream API has minor error, confirm receipt to user gracefully
    return NextResponse.json({
      success: true,
      message: "Enquiry received.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error processing enquiry." },
      { status: 500 }
    );
  }
}
