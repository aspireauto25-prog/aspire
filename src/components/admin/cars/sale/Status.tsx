import {
  SALE_CAR_STATUS_SOLD,
  SALE_CAR_STATUS_UNAVAILABLE,
} from "@/constants/saleCars";

interface Props {
  status?: string;
}

const SaleStatus = ({ status }: Props) => {
  if (status == SALE_CAR_STATUS_UNAVAILABLE)
    return (
      <span className="status-badge bg-red-100 text-red-700">Unavailable</span>
    );

  if (status == SALE_CAR_STATUS_SOLD)
    return (
      <span className="status-badge bg-gray-100 text-gray-700">Booked</span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700">Available</span>
  );
};

export default SaleStatus;
