"use client";

import { FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import { CarImage } from "@/lib/types/car.types";
import { deleteCarImage } from "@/api/axios/carImages";
import Modal from "@/components/Modal";

interface Props {
  carImages: CarImage[];
}

const CarImages = ({ carImages }: Props) => {
  const [selectedImage, setSelectedImage] = useState<CarImage>();
  const [show, setShow] = useState(false);

  const router = useRouter();

  if (carImages?.length == 0) return <></>;

  function onDeleteImage(id: number) {
    if (confirm("Are you sure you want to delete?")) {
      deleteCarImage(id)
        .then(() => {
          router.refresh();

          toast.success("Image deleted successfully.");
        })
        .catch(() => {
          toast.error("Image delete failed.");
        });
    }
  }

  return (
    <section className="grid grid-cols-1 gap-5 mb-8">
      <div className="flex justify-left sm:justify-center gap-4 overflow-x-auto sm:overflow-visible">
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`min-w-24 max-w-24 h-24 rounded-lg overflow-hidden border-2 relative group ${
              selectedImage?.id == image.id
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              className="w-full h-full object-cover"
              alt=""
              width={100}
              height={100}
            />

            <div className="px-2 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setSelectedImage(image);
                  setShow(true);
                }}
                className="p-2 bg-blue-500 text-white rounded-lg text-xs cursor-pointer hover:scale-105 transition-all"
              >
                <FaEye />
              </button>
              {
                <button
                  onClick={() => onDeleteImage(image.id)}
                  className="p-2 bg-primary text-white rounded-lg text-xs cursor-pointer hover:scale-105 transition-all"
                >
                  <FaTrash />
                </button>
              }
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} setShow={setShow} title="Preview Car Image">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative max-w-5xl h-150 object-center mx-auto">
          <Image
            alt="Tesla Model 3"
            src={selectedImage?.url ?? ""}
            width={800}
            height={550}
            className="w-full h-full object-cover"
          />
          {selectedImage?.featured && (
            <div className="absolute top-5 right-5 bg-primary text-white px-4 py-1 rounded-2xl">
              Featured
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default CarImages;
