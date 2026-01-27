import { getRentalCarById } from "@/api/rentalCars";
import RentCarForm from "@/components/admin/cars/rent/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditCarRentPage = async ({ params }: Props) => {
  const id = (await params).id;

  const rentalCar = await getRentalCarById(id);

  return <RentCarForm isEditing={true} rentalCar={rentalCar} />;
};

export default EditCarRentPage;
