"use client";

import { useState } from "react";
import Image from "next/image";

import { CarImage } from "@/lib/types/car.types";

interface Props {
  carImages: CarImage[];
}

const CarImages = ({ carImages }: Props) => {
  const [selectedImage, setSelectedImage] = useState(carImages[0]);

  if (carImages?.length == 0) return <></>;

  return (
    <section>
      <div className="main-image-container rounded-2xl overflow-hidden shadow-2xl relative zoom-in max-w-5xl h-150 object-center mx-auto">
        <Image
          alt="Tesla Model 3"
          src={selectedImage.url}
          width={800}
          height={550}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex space-x-4 overflow-x-auto custom-scrollbar py-5 justify-center">
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`thumbnail w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
              selectedImage == image ? " border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image.url}
              className="w-full h-full object-cover"
              alt=""
              width={100}
              height={100}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarImages;
