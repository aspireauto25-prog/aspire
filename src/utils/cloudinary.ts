import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "aspire";

async function uploadFile(file: File, subDirectory?: string) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const folder = subDirectory
    ? `${CLOUDINARY_FOLDER}/${subDirectory}`
    : CLOUDINARY_FOLDER;

  // Upload to Cloudinary
  return await new Promise((resolve, reject) => {
    return cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, data) => {
          if (error) return reject(error);

          resolve(data);
        }
      )
      .end(buffer);
  });
}

export default uploadFile;
