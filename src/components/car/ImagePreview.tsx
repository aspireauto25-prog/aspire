"use client";

import { FaChevronLeft, FaChevronRight, FaImage } from "react-icons/fa";
import Image from "next/image";

import { CarImage } from "@/lib/types/car.types";
import { useState } from "react";

interface Props {
  carName: string;
  images: CarImage[];
}

const CarImagePreview = ({ carName, images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<{
    index: number;
    url: string;
  }>({ index: 0, url: images[0]?.url });

  function previewPreviousImage() {
    let index = selectedImage.index - 1;

    if (index < 0) index = images.length - 1;

    setSelectedImage({ index, url: images[index]?.url });
  }

  function previewNextImage() {
    let index = selectedImage.index + 1;

    if (index >= images.length) index = 0;

    setSelectedImage({ index, url: images[index]?.url });
  }

  if (images.length == 0) {
    return (
      <div className="main-image-container rounded-2xl dark:bg-gray-800 overflow-hidden shadow-2xl relative zoom-in w-full flex items-center justify-center h-120">
        <FaImage className="text-9xl text-gray-500" />
      </div>
    );
  }

  return (
    <>
      <div className="main-image-container rounded-2xl overflow-hidden shadow-2xl relative zoom-in">
        <Image
          alt={carName}
          src={selectedImage.url}
          width={1200}
          height={950}
          className="w-full h-full object-cover"
        />
        <button
          onClick={previewPreviousImage}
          className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={previewNextImage}
          className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Thumbnails */}
      <div className="mt-4">
        <div className="flex space-x-4 overflow-x-auto custom-scrollbar pb-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-24 max-w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 hover:border-primary ${
                selectedImage.index === index
                  ? " border-primary"
                  : "border-transparent"
              }`}
            >
              <Image
                src={image.url}
                className="w-full h-full object-cover"
                alt={carName}
                width={100}
                height={100}
                onClick={() => setSelectedImage({ index, url: image.url })}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarImagePreview;
