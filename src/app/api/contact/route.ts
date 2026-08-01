import { NextResponse } from "next/server";

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

    // Read key exclusively from Vercel / server environment variables
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Return clear status asking to set key in Vercel environment variables
      return NextResponse.json(
        {
          success: false,
          fallback: true,
          message: "WEB3FORMS_ACCESS_KEY is not configured in Vercel environment variables.",
        },
        { status: 200 }
      );
    }

    // Forward to Web3Forms securely from server (key is NEVER exposed to client browser)
    const payload = {
      access_key: accessKey,
      from_name: "Kashyap Tutorial Website",
      subject: `New Lead: ${name} (${standard} - ${interest})`,
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

    return NextResponse.json(
      {
        success: false,
        fallback: true,
        message: data.message || "Upstream provider error.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error processing enquiry." },
      { status: 500 }
    );
  }
}
