import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_FOLDER = "aspire";

async function uploadFile(file: File | File[], subDirectory?: string) {
  const files = Array.isArray(file) ? file : [file];

  const folder = subDirectory
    ? `${CLOUDINARY_FOLDER}/${subDirectory}`
    : CLOUDINARY_FOLDER;

  const uploadSingle = async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader
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
  };

  const results = await Promise.all(files.map(uploadSingle));

  return Array.isArray(file) ? results : results[0];
}

export default uploadFile;
