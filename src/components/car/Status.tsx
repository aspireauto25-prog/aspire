import {
  CAR_STATUS_BOOKED,
  CAR_STATUS_MAINTENANCE,
  CAR_STATUS_RENTED,
  CAR_STATUS_SOLD,
  CAR_STATUS_UNAVAILABLE,
} from "@/constants/cars";

interface Props {
  status: number;
}

const CarStatus = ({ status }: Props) => {
  if (status == CAR_STATUS_UNAVAILABLE)
    return (
      <span className="status-badge bg-red-100 text-red-700">
        Unavailable
      </span>
    );

  if (status == CAR_STATUS_SOLD)
    return (
      <span className="status-badge bg-gray-100 text-gray-700">
        Sold
      </span>
    );

  if (status == CAR_STATUS_RENTED)
    return (
      <span className="status-badge bg-purple-100 text-purple-700">
        Rented
      </span>
    );

  if (status == CAR_STATUS_BOOKED)
    return (
      <span className="status-badge bg-blue-100 text-blue-700">
        Booked
      </span>
    );

  if (status == CAR_STATUS_MAINTENANCE)
    return (
      <span className="status-badge bg-amber-100 text-amber-700">
        Maintenance
      </span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700">
      Available
    </span>
  );
};

export default CarStatus;
