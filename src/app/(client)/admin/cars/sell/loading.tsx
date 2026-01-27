import Spinner from "@/components/Spinner";

const Loading = () => {
  return (
    <section className="py-24 flex items-center justify-center w-full">
      <Spinner className="h-16 w-16 fill-primary" />
    </section>
  );
};

export default Loading;
