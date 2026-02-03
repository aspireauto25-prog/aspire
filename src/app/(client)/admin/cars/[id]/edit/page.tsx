import { getCarById } from "@/api/cars";
import CarForm from "@/components/admin/cars/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditCarPage = async ({ params }: Props) => {
  const id = (await params).id;

  const car = await getCarById(id);

  return <CarForm mode="edit" car={car} />;
};

export default EditCarPage;
