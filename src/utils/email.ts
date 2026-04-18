import { Resend } from "resend";

import config from "@/config";

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  const resend = new Resend(config.resendApiKey);

  try {
    return await resend.emails.send({
      from: config.emailFrom,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Email error:", error);

    throw error;
  }
}

export default sendEmail;
