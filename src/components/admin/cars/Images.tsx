"use client";

import { useState } from "react";
import Image from "next/image";

import { CarImage } from "@/lib/types/car.types";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";

interface Props {
  carImages?: CarImage[];
  isFeatured?: boolean;
}

const CarImages = ({ carImages, isFeatured = false }: Props) => {
  const [url, setUrl] = useState<string | boolean>();

  if (carImages?.length == 0) return <></>;

  return (
    <div className="flex items-center gap-4 pb-8">
      {carImages
        ?.filter((image) => (isFeatured ? image.featured : !image.featured))
        .map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt=""
            height={200}
            width={200}
            className="h-24 max-w-24 object-cover rounded-lg hover:outline-primary hover:outline-2"
            onClick={() => {
              setUrl(image.url);
            }}
          />
        ))}

      <Modal
        setShow={(value) => setUrl(value)}
        show={url ? true : false}
        title="Car Image Preview"
      >
        {url ? (
          <Image
            src={(url as string) ?? ""}
            alt=""
            height={600}
            width={800}
            className="w-full h-auto rounded"
          />
        ) : (
          <div className="flex items-center justify-center py-16">
            <Spinner />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CarImages;
