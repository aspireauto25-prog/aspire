const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "",
  appName: process.env.NEXT_PUBLIC_APP_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  supabaseKey: process.env.SUPABASE_API_KEY || "",
  supabaseUrl: process.env.SUPABASE_URL || "",
};

export default config;
