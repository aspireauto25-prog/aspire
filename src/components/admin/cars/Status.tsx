import {
  CAR_STATUS_MAINTENANCE,
  CAR_STATUS_UNAVAILABLE,
} from "@/constants/cars";

interface Props {
  status: string;
}

const CarStatus = ({ status }: Props) => {
  if (status == CAR_STATUS_UNAVAILABLE)
    return (
      <span className="status-badge bg-red-100 text-red-700">Unavailable</span>
    );

  if (status == CAR_STATUS_MAINTENANCE)
    return (
      <span className="status-badge bg-yellow-100 text-yellow-700">
        Maintenance
      </span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700">Available</span>
  );
};

export default CarStatus;
