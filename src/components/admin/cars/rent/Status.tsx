import {
  RENTAL_CAR_STATUS_BOOKED,
  RENTAL_CAR_STATUS_RENTED,
} from "@/constants/rentalCars";

interface Props {
  status?: string;
}

const RentalStatus = ({ status }: Props) => {
  if (status == RENTAL_CAR_STATUS_RENTED)
    return <span className="status-badge bg-red-100 text-red-700">Rented</span>;

  if (status == RENTAL_CAR_STATUS_BOOKED)
    return (
      <span className="status-badge bg-orange-100 text-orange-700">Booked</span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700">Available</span>
  );
};

export default RentalStatus;
