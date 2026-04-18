import { Resend } from "resend";
import fs from "fs";
import path from "path";

import config from "@/config";

async function sendEmail({ subject, html }: { subject: string; html: string }) {
  const resend = new Resend(config.resendApiKey);

  try {
    return await resend.emails.send({
      from: config.emailFrom,
      to: config.emailTo,
      subject,
      html,
    });
  } catch (error) {
    console.error("Email error:", error);

    throw error;
  }
}

export function getEmailTemplate(templateName: string) {
  const filePath = path.join(
    process.cwd(),
    `src/templates/${templateName}.template.html`,
  );

  return fs.readFileSync(filePath, "utf-8");
}

export default sendEmail;
