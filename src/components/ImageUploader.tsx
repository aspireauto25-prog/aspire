"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import {
  UPLOAD_FAILED,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
} from "@/constants/uploadState";
import ImagePreview from "./ImagePreview";

type UploadFile = {
  id: string;
  file: File;
  name: string;
  path: string;
  size: string;
  progress: number;
  status: "IDLE" | "PROGRESS" | "SUCCESS" | "FAILED";
};

interface Props {
  disabled?: boolean;
  folder?: string;
  id: string;
  multiple?: boolean;
  setImageUrls: (urls: string[] | ((prev: string[]) => string[])) => void;
}

const ImageUploader = ({
  disabled,
  folder,
  id,
  multiple = false,
  setImageUrls,
}: Props) => {
  const [error, setError] = useState<Error | null>(null);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [uploadState, setUploadState] = useState<string | null>(null);

  const handleFiles = (selectedFiles: File[]) => {
    if (!selectedFiles.length) return;

    const mapped = selectedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      path: URL.createObjectURL(file),
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      progress: 0,
      status: "IDLE" as const,
    }));

    setFiles((prev) => [...prev, ...mapped]);

    mapped.forEach((f) => uploadFile(f));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
      "image/webp": [],
    },
    multiple,
    disabled: disabled || uploadState === UPLOAD_PROGRESS,
    onDrop: handleFiles,
    noDragEventsBubbling: true,
    preventDropOnDocument: true,
  });

  async function uploadFile(uploadFile: UploadFile) {
    const controller = new AbortController();

    setUploadState(UPLOAD_PROGRESS);

    setFiles((prev) =>
      prev.map((f) =>
        f.id === uploadFile.id ? { ...f, status: "PROGRESS" } : f,
      ),
    );

    const formData = new FormData();
    formData.append("file", uploadFile.file);
    if (folder) formData.append("folder", folder);

    try {
      const response = await axios.post("/api/file-upload/images", formData, {
        signal: controller.signal,
        onUploadProgress: (e) => {
          if (!e.total) return;

          const percent = Math.round((e.loaded * 100) / e.total);

          setFiles((prev) =>
            prev.map((f) =>
              f.id === uploadFile.id ? { ...f, progress: percent } : f,
            ),
          );
        },
      });

      setFiles((prev) =>
        prev.map((f) =>
          f.id === uploadFile.id
            ? { ...f, status: "SUCCESS", progress: 100 }
            : f,
        ),
      );

      const uploadedFiles = Array.isArray(response.data)
        ? response.data
        : [response.data];

      setImageUrls((prev: string[]) => [
        ...prev,
        ...uploadedFiles.map((file) => file.url as string),
      ]);
      setUploadState(UPLOAD_SUCCESS);
    } catch (error) {
      if (axios.isCancel(error)) return;
      setError(error as Error);
      setUploadState(UPLOAD_FAILED);
    }
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <>
      <div
        {...getRootProps()}
        className={`image-upload-area flex flex-col items-center justify-center w-full rounded-xl py-5 relative overflow-hidden transition
          ${
            uploadState === UPLOAD_PROGRESS
              ? "bg-gray-50 dark:bg-gray-700 cursor-not-allowed opacity-85"
              : "cursor-pointer"
          }
          ${isDragActive ? "ring-2 ring-primary/50" : ""}
          ${disabled ? "bg-gray-50 hover:cursor-not-allowed" : ""}
        `}
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
            PNG, JPG, WEBP up to {multiple ? "10 images (5 MB each)" : "5MB"}
          </p>
        </div>
        <input {...getInputProps()} id={`${id}_images`} />
      </div>

      {files.map((f, i) => (
        <ImagePreview
          key={i}
          file={f as unknown as Record<string, string>}
          onCancel={() => removeFile(f.id)}
          progress={f.progress}
          reupload={() => uploadFile(f)}
          uploadState={f.status}
        />
      ))}

      {error && <div>{error.message}</div>}
    </>
  );
};

export default ImageUploader;
