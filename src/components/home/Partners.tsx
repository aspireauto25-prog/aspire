import Image, { StaticImageData } from "next/image";

import audiLogo from "@/assets/images/partners/audi.png";
import bmwLogo from "@/assets/images/partners/bmw.png";
import ferrariLogo from "@/assets/images/partners/ferrari.png";
import jaguarLogo from "@/assets/images/partners/jaguar.png";
import landroverLogo from "@/assets/images/partners/land-rover.png";
import mercedezLogo from "@/assets/images/partners/mercedez.svg";
import porcheLogo from "@/assets/images/partners/porche.png";
import teslaLogo from "@/assets/images/partners/tesla.png";

interface Props {
  brand: string;
  image: StaticImageData;
  info: string;
}

const partners = [
  {
    brand: "Land Rover",
    image: landroverLogo,
    info: "Go Anywhere",
  },
  {
    brand: "Tesla",
    image: teslaLogo,
    info: "Electric Innovation",
  },
  {
    brand: "Mercedes-Benz",
    image: mercedezLogo,
    info: "German Luxury",
  },
  {
    brand: "Audi",
    image: audiLogo,
    info: "Vorsprung durch Technik",
  },
  {
    brand: "Jaguar",
    image: jaguarLogo,
    info: "British Luxury",
  },
  {
    brand: "Porsche",
    image: porcheLogo,
    info: "German Engineering",
  },
  {
    brand: "Ferrari",
    image: ferrariLogo,
    info: "Italian Excellence",
  },
  {
    brand: "BMW",
    image: bmwLogo,
    info: "Ultimate Driving",
  },
];

const Card = ({ brand, image, info }: Props) => {
  return (
    <div className="brand-card shrink-0 mx-4 w-64 h-48 glass-effect rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
      <Image src={image} className="h-16 w-auto" alt={brand} />
      <h4 className="text-xl font-bold mb-2">{brand}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
        {info}
      </p>
    </div>
  );
};

const Partners = () => {
  return (
    <section className="py-16 bg-linear-to-b from-light to-gray-100 dark:from-dark dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 slide-up">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 mb-4">
            <span className="text-primary font-bold">OUR PARTNERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Car <span className="text-primary">Brands</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer vehicles from the world&apos;s most prestigious and
            reliable automotive manufacturers.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <div className="marquee-container overflow-x-hidden py-10 relative">
          <div className="marquee-content flex marquee">
            {partners.map((partner, index) => (
              <Card key={index} {...partner} />
            ))}
          </div>
        </div>
      </div>
      {/* Brand Counter */}
      <div className="mt-16 text-center">
        <div className="inline-block px-8 py-6 rounded-2xl glass-effect backdrop-blur-sm">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-5">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                30+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Car Brands</div>
            </div>
            <div className="hidden md:block">
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                200+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Vehicle Models
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                15
              </div>
              <div className="text-gray-600 dark:text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
