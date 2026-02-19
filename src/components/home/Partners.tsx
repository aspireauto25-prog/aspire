import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  image: string;
  info?: string;
}

const partners = [
  {
    image: "/images/partners/repco.svg",
    name: "Repco Australia",
  },
  {
    image: "/images/partners/napa.gif",
    name: "NAPA auto parts",
  },
  {
    image: "/images/partners/veale.jpeg",
    name: "Veale Auto Parts",
  },
  {
    image: "/images/partners/tempe-tyres.png",
    name: "Tempe Tyres",
  },
  {
    image: "/images/partners/integrity.png",
    name: "Integrity Extended Warranties",
  },
];

const Card = ({ name, image, info }: Props) => {
  return (
    <div className="brand-card shrink-0 mx-4 w-64 h-48 glass-effect rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
      <Image
        src={image}
        className="h-16 w-auto"
        alt={name}
        height={200}
        width={200}
      />
      <h4 className="text-xl font-bold my-2 text-center">{name}</h4>
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
            Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Collaborating with trusted brands and industry leaders to deliver
            quality and reliability.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <div className="overflow-x-auto py-10 flex justify-evenly">
          {partners.map((partner, index) => (
            <Card key={index} {...partner} />
          ))}
        </div>
      </div>
      {/* Brand Counter */}
      {/* <div className="mt-16 text-center">
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
      </div> */}
    </section>
  );
};

export default Partners;
