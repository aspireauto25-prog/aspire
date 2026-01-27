import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

import {
  UPLOAD_FAILED,
  UPLOAD_PROGRESS,
  UPLOAD_SUCCESS,
} from "@/constants/uploadState";
import Spinner from "@/components/Spinner";

interface Props {
  file: Record<string, string> | null;
  onCancel: () => void;
  progress: number;
  reupload: () => void;
  uploadState: string | null;
}

const UploadState = ({ state }: { state: string | null }) => {
  switch (state) {
    case UPLOAD_PROGRESS:
      return (
        <div className="flex items-center">
          <Spinner className="w-3 h-3 fill-primary mr-1" />
          <span>Uploading...</span>
        </div>
      );

    case UPLOAD_SUCCESS:
      return (
        <div className="flex items-center">
          <FaCircleCheck className="w-3 h-3 text-green-600 mr-1" />
          <span>Upload success</span>
        </div>
      );

    case UPLOAD_FAILED:
      return (
        <div className="flex items-center">
          <FaCircleExclamation className="w-3 h-3 text-orange-400 mr-1" />
          <span>Upload failed</span>
        </div>
      );

    default:
      return null;
  }
};

const ImagePreview = ({
  file,
  onCancel,
  progress = 0,
  reupload,
  uploadState = null,
}: Props) => {
  if (!file) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 shadow-sm dark:shadow-gray-700 my-5">
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-4">
        <Image
          src={file.path}
          alt="Preview"
          height={200}
          width={200}
          className="flex-1 h-12 w-12 object-cover rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-90 dark:text-white mb-1">{file.name}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <p>{file.size}</p>
            <span>•</span>
            <UploadState state={uploadState} />
            {uploadState == UPLOAD_FAILED && (
              <button
                type="button"
                className="text-secondary hover:underline cursor-pointer"
                onClick={reupload}
              >
                Retry
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end h-full justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 cursor-pointer"
          >
            <IoClose />
          </button>
          <span className="text-xs text-gray-500">{progress}%</span>
        </div>
      </div>
      <div className="mt-3">
        <div className="w-full bg-primary/20 rounded-full h-1">
          <div
            className="progress-bar bg-primary h-1 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
