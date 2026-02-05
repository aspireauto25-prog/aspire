import { getCarById } from "@/api/cars";
import CarForm from "@/components/admin/cars/Form";
import CarImages from "@/components/admin/cars/Images";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CarDetailsPage = async ({ params }: Props) => {
  const id = (await params).id;

  const car = await getCarById(id);

  return (
    <>
      <CarImages carImages={car.car_images ?? []} />
      <CarForm car={car} mode="view" />
    </>
  );
};

export default CarDetailsPage;
