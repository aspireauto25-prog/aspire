import Image, { StaticImageData } from "next/image";

interface Props {
  action?: React.ReactNode;
  backgroundImage: StaticImageData;
  subtitle: string;
  title: React.ReactNode;
}

const Hero = ({ action, backgroundImage, subtitle, title }: Props) => {
  return (
    <section className="relative py-20 bg-linear-to-br from-gray-900 to-black dark:from-gray-900 dark:to-black text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover object-center opacity-20"
      />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {action}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
