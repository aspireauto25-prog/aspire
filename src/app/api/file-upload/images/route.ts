import cloudinaryConfig from "@/config/cloudinary";
import uploadFile from "@/utils/cloudinary";

cloudinaryConfig();

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export const POST = async (req: Request) => {
  const formData = await req.formData();

  const files = formData.getAll("file") as File[]; // getAll supports multiple files
  const folder = formData.get("folder") as string;

  if (!files || files.length === 0) {
    return Response.json({ error: "No file uploaded." }, { status: 400 });
  }

  // Validate all files
  for (const file of files) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json(
        { error: "Only image files are allowed." },
        { status: 400 }
      );
    }
  }

  try {
    const uploadedFiles = await uploadFile(files, folder);

    return Response.json(uploadedFiles, { status: 201 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
