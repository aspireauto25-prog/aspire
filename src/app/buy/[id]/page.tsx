import { FaCheck, FaLock } from "react-icons/fa6";
import { Params } from "next/dist/server/request/params";
import type { Metadata } from "next";

import { carStatuses } from "@/constants/cars";
import { CONTACT_ROUTE } from "@/constants/routes";
import { getSaleCarById } from "@/api/saleCars";
import Button from "@/components/Button";
import CarImagePreview from "@/components/car/ImagePreview";
import RentDetailsBreadCrumb from "@/components/rent/details/BreadCrumb";

interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params)?.id;

  const car = await getSaleCarById(id as string);

  if (!car) {
    return {
      title: "Car Not Found",
    };
  }

  return {
    title: `${car.brand} ${car.model} ${car.year} - ${car.price}`,
    description: car.description,
    keywords: [
      car.brand,
      car.model,
      car.year?.toString(),
      car.category,
      "buy car",
      "used car",
    ],
    openGraph: {
      title: `${car.brand} ${car.model}`,
      description: car.description,
      images: [
        {
          url: car.images && car.images.length > 0 ? car.images[0]?.url : "",
          width: 1200,
          height: 630,
          alt: `${car.brand} ${car.model}`,
        },
      ],
    },
    alternates: {
      canonical: `/buy/${car.id}`,
    },
  };
}

const CarDetailsPage = async ({ params }: Props) => {
  const id = (await params)?.id;

  const car = await getSaleCarById(id as string);

  const carName = `${car.brand} ${car.model} ${car.variant}`;

  return (
    <>
      <RentDetailsBreadCrumb car={carName} />
      {/* Car Details Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Videos */}
            <div className="lg:col-span-2">
              <CarImagePreview carName={carName} images={car.images ?? []} />

              {/* Detailed Description */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">
                  Detailed Description
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {car.description}
                </div>
              </div>
              {/* Features */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <ul
                  id="features-list"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {car.features?.map((feature) => (
                    <li key={feature} className="flex items-center mb-3">
                      <FaCheck className="text-primary mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Specifications */}
              <div className="mt-12 slide-up">
                <h3 className="text-2xl font-bold mb-6">
                  Technical Specifications
                </h3>
                <div
                  id="specifications-list"
                  className="spec-table bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Mileage
                    </span>
                    <span className="font-bold">
                      {car?.mileage ? `${car.mileage} km` : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Transmission Type
                    </span>
                    <span className="font-bold">
                      {car?.transmission_type ?? "-"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Engine Capacity
                    </span>
                    <span className="font-bold">
                      {car?.engine_capacity ? `${car.engine_capacity} L` : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Fuel Type
                    </span>
                    <span className="font-bold">{car?.fuel_type ?? "-"}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Drive Type
                    </span>
                    <span className="font-bold">{car.drive_type}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Number of Seats
                    </span>
                    <span className="font-bold">
                      {car?.seat_capacity ?? "-"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-600 dark:text-gray-400">
                      Color
                    </span>
                    <span className="font-bold">{car.color}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* Car Info Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{carName}</h1>
                    <p
                      id="car-category"
                      className="text-gray-600 dark:text-gray-400 mb-4"
                    >
                      {car.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary mb-2">
                      $
                      {(
                        car.full_price - (car.discount_price ?? 0)
                      ).toLocaleString()}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 line-through">
                      ${car.full_price.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Year
                    </div>
                    <div id="car-year" className="font-bold text-lg">
                      {car.year}
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Mileage
                    </div>
                    <div id="car-mileage" className="font-bold text-lg">
                      {car.mileage} km
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Condition
                    </div>
                    <div id="car-condition" className="font-bold text-lg">
                      {car.condition ?? "-"}
                    </div>
                  </div>
                  <div className="text-center bg-gray-100 dark:bg-gray-900 p-3 rounded-xl">
                    <div className="text-gray-600 dark:text-gray-400 mb-1">
                      Availability
                    </div>
                    <div
                      id="availability-badge"
                      className={`px-4 py-2 rounded-full text-sm font-bold car-status-${car.status}`}
                    >
                      {
                        carStatuses.find((status) => status.value == car.status)
                          ?.label
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* Booking Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right delay-100">
                <h3 className="text-2xl font-bold mb-6">Buy This Car</h3>
                <div className="space-y-4">
                  <Button href={CONTACT_ROUTE}>
                    <FaLock /> Buy Now
                  </Button>
                </div>
              </div>
              {/* What's Included */}
              {/* <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right delay-200  ">
                <h3 className="text-2xl font-bold mb-6">
                  What&apos;s Included
                </h3>
                <ul id="includes-list">
                  {carData.includes.map((include, index) => (
                    <li key={index} className="flex items-center mb-3 p-1">
                      <FaCheckCircle className="text-primary mr-3" />
                      <span>{include}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* Requirements */}
              {/* <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl slide-in-right delay-300">
                <h3 className="text-2xl font-bold mb-6">Rental Requirements</h3>
                <ul id="requirements-list">
                  {carData.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center mb-3 p-1">
                      <FaInfoCircle className="text-primary mr-3" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetailsPage;
