const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  appName: process.env.NEXT_PUBLIC_APP_NAME || "",
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  emailFrom: process.env.EMAIL_FROM || "",
  emailTo: process.env.EMAIL_TO || "",
  jwtSecret: process.env.JWT_SECRET || "",
  resendApiKey: process.env.RESEND_API_KEY || "",
  supabaseKey: process.env.SUPABASE_API_KEY || "",
  supabaseUrl: process.env.SUPABASE_URL || "",
  tinymceKey: process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
};

export default config;
