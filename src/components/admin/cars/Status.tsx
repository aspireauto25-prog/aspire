import {
  CAR_STATUS_MAINTENANCE,
  CAR_STATUS_UNAVAILABLE,
} from "@/constants/car";

interface Props {
  status: string;
}

const CarStatus = ({ status }: Props) => {
  if (status == CAR_STATUS_UNAVAILABLE)
    return (
      <span className="status-badge bg-red-100 text-red-700">{status}</span>
    );

  if (status == CAR_STATUS_MAINTENANCE)
    return (
      <span className="status-badge bg-orange-100 text-orange-700">
        {status}
      </span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700">{status}</span>
  );
};

export default CarStatus;
