import { getCarById } from "@/api/cars";
import CarForm from "@/components/admin/cars/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CarDetailsPage = async ({ params }: Props) => {
  const id = (await params).id;

  const car = await getCarById(id);

  return <CarForm isEditing={true} car={car} />;
};

export default CarDetailsPage;
