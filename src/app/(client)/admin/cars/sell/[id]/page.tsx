import { getSaleCarById } from "@/api/saleCars";
import SaleCarForm from "@/components/admin/cars/sale/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const CarSalePage = async ({ params }: Props) => {
  const id = (await params).id;

  const saleCar = await getSaleCarById(id);

  return <SaleCarForm mode="view" saleCar={saleCar} />;
};

export default CarSalePage;
