import { getSaleCarById } from "@/api/saleCars";
import SaleCarForm from "@/components/admin/cars/sale/Form";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditCarSalePage = async ({ params }: Props) => {
  const id = (await params).id;

  const saleCar = await getSaleCarById(id);

  return <SaleCarForm isEditing={true} saleCar={saleCar} />;
};

export default EditCarSalePage;
