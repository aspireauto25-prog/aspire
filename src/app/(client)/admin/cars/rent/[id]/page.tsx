import { getRentalCarById } from "@/api/rentalCars";
import RentCarForm from "@/components/admin/cars/rent/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ViewCarRentPage = async ({ params }: Props) => {
  const id = (await params).id;

  const rentalCar = await getRentalCarById(id);

  return <RentCarForm mode="view" rentalCar={rentalCar} />;
};

export default ViewCarRentPage;
