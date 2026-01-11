import cloudinaryConfig from "@/config/cloudinary";
import uploadFile from "@/utils/cloudinary";

cloudinaryConfig();

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export const POST = async (req: Request) => {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  const folder = formData.get("folder") as string;

  if (!file) {
    return Response.json({ error: "No file uploaded." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return Response.json(
      { error: "Only image files are allowed." },
      { status: 400 }
    );
  }

  try {
    const uploadedFile = await uploadFile(file, folder);

    return Response.json(uploadedFile, { status: 201 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
