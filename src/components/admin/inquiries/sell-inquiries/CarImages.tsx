"use client";

import Image from "next/image";

import { SellInquiryImage } from "@/lib/types/sellInquiry.types";
import { useState } from "react";

interface Props {
  images: SellInquiryImage[];
}

const CarImages = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-900 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Car Images
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Photos submitted by the owner
        </p>
      </div>
      <div className="p-6">
        {/* Featured Image */}
        <div className="mb-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
            <Image
              alt=""
              className="w-full h-125 object-cover gallery-image"
              height={800}
              src={selectedImage}
              width={1200}
            />
          </div>
        </div>
        {/* Thumbnail Gallery */}
        <div>
          <div className="flex items-center justify-center gap-4">
            {images?.map((image, index) => (
              <div
                key={index}
                className={`${image.url == selectedImage ? "outline-2 outline-primary" : ""} aspect-square h-28 w-auto object-center bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer gallery-image`}
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt=""
                  height={200}
                  width={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarImages;
