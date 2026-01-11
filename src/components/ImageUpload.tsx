import { useEffect, useRef, useState } from "react";
import axios from "axios";

import {
  UPLOAD_FAILED,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
} from "@/constants/uploadState";
import ImagePreview from "./ImagePreview";

export type ImageUrlsType = string | string[] | null;

interface Props {
  id: string;
  disabled?: boolean;
  folder?: string;
  multiple?: boolean;
  setImageUrls: (_: ImageUrlsType) => void;
}

const ImageUpload = ({
  id,
  disabled,
  folder,
  multiple = false,
  setImageUrls,
}: Props) => {
  const [error, setError] = useState<Error | null>(null);
  const [files, setFiles] = useState<
    Array<{ file: File; name: string; path: string; size: string }>
  >([]);
  const [progress, setProgress] = useState<number[]>([]); // progress per file
  const [uploadState, setUploadState] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const handleCancel = (index?: number) => {
    reset(index);

    if (progress[index ?? 0] === 100) return;

    if (controllerRef.current) controllerRef.current.abort();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event?.target?.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles).map((file) => ({
      file,
      name: file.name,
      path: URL.createObjectURL(file),
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    }));

    setFiles((prev) => [...prev, ...fileArray]);
    setProgress(Array(fileArray.length).fill(0));
  };

  async function upload() {
    if (files.length === 0) return;

    setUploadState(UPLOAD_PROGRESS);

    const formData = new FormData();
    files.forEach((f) => formData.append("file", f.file));
    if (folder) formData.append("folder", folder);

    controllerRef.current = new AbortController();

    try {
      const response = await axios.post("/api/file-upload/images", formData, {
        signal: controllerRef.current.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );
          setProgress(Array(files.length).fill(percent)); // simple shared progress
        },
      });

      // If multiple, response is array; if single, make it array
      const uploadedFiles = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setImageUrls(uploadedFiles); // pass array to parent
      setUploadState(UPLOAD_SUCCESS);
    } catch (error) {
      if (axios.isCancel(error)) return;

      setError(error as Error);
      setUploadState(UPLOAD_FAILED);
    }
  }

  function reset(index?: number) {
    if (typeof index === "number") {
      // remove a single file
      const newFiles = [...files];
      newFiles.splice(index, 1);
      setFiles(newFiles);

      const newProgress = [...progress];
      newProgress.splice(index, 1);
      setProgress(newProgress);
    } else {
      // reset all
      setError(null);
      setFiles([]);
      setProgress([]);
      setUploadState(null);
    }
  }

  useEffect(() => {
    if (files.length > 0) upload();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <>
      <label
        htmlFor={`${id}_images`}
        className={`image-upload-area flex flex-col items-center justify-center w-full rounded-xl py-5 ${
          uploadState === UPLOAD_PROGRESS
            ? "bg-gray-50 cursor-not-allowed opacity-85"
            : "cursor-pointer"
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="my-2 text-gray-500">
            <span className="font-medium text-primary">Upload image(s)</span>
            <span className="pl-1">or drag and drop</span>
          </p>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF up to {multiple ? "10 images (5 MB each)" : "5MB"}
          </p>
        </div>
        <input
          accept=".png,.jpg,.jpeg"
          className="hidden"
          disabled={disabled || uploadState === UPLOAD_PROGRESS}
          id={`${id}_images`}
          type="file"
          multiple={multiple}
          onChange={handleFileChange}
        />
      </label>

      {files.map((f, i) => (
        <ImagePreview
          key={i}
          file={f as unknown as Record<string, string>}
          onCancel={() => handleCancel(i)}
          progress={progress[i]}
          reupload={upload}
          uploadState={uploadState}
        />
      ))}

      {error && <div>{error.message}</div>}
    </>
  );
};

export default ImageUpload;
