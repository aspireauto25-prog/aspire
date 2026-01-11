import { useEffect, useRef, useState } from "react";
import axios from "axios";

import {
  UPLOAD_FAILED,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
} from "@/constants/uploadState";
import ImagePreview from "./ImagePreview";

interface Props {
  disabled?: boolean;
  folder?: string;
  setImageUrl: (_: string | null) => void;
}

const ImageUpload = ({ disabled, folder, setImageUrl }: Props) => {
  const [error, setError] = useState<Error | null>(null);
  const [file, setFile] = useState<Record<string, unknown> | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadState, setUploadState] = useState<string | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const handleCancel = () => {
    reset();

    if (progress === 100) return;

    if (controllerRef.current) {
      controllerRef.current.abort(); // ⛔ actually stops request
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];

    if (!file) return;

    setFile({
      file: file,
      name: file.name,
      path: URL.createObjectURL(file),
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    });
  };

  function upload() {
    if (!file) return;

    setUploadState(UPLOAD_PROGRESS);

    const formData = new FormData();

    formData.append("file", file.file as File);

    if (folder) formData.append("folder", folder);

    controllerRef.current = new AbortController();

    axios
      .post("/api/file-upload/images", formData, {
        signal: controllerRef.current.signal,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 1)
          );

          setProgress(percent);
        },
      })
      .then((response) => {
        setImageUrl(response?.data?.url);
        setUploadState(UPLOAD_SUCCESS);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;

        setError(error);
        setUploadState(UPLOAD_FAILED);
      });
  }

  function reset() {
    setError(null);
    setFile(null);
    setProgress(0);
    setUploadState(null);
  }

  useEffect(() => {
    upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      <label
        htmlFor="images"
        className={`image-upload-area flex flex-col items-center justify-center w-full rounded-xl py-5 ${
          uploadState == UPLOAD_PROGRESS
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
            <span className="font-medium text-primary">Upload an image</span>
            <span className="pl-1">or drag and drop</span>
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5 MB</p>
        </div>
        <input
          accept=".png,.jpg,.jpeg"
          className="hidden"
          disabled={disabled || uploadState == UPLOAD_PROGRESS}
          id="images"
          type="file"
          onChange={handleFileChange}
        />
      </label>
      <ImagePreview
        file={file as Record<string, string>}
        onCancel={handleCancel}
        progress={progress}
        reupload={upload}
        uploadState={uploadState}
      />
      {error && <div>{error.message}</div>}
    </>
  );
};

export default ImageUpload;
