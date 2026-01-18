"use client";

import { FaCar, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  SALE_CAR_STATUS_AVAILABLE,
  SALE_CAR_STATUS_SOLD,
  SALE_CAR_STATUS_UNAVAILABLE,
} from "@/constants/saleCars";
import { updateSaleCarStatus } from "@/api/axios/saleCars";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface Props {
  id: number;
  status?: string;
}

const statuses = [
  SALE_CAR_STATUS_AVAILABLE,
  SALE_CAR_STATUS_SOLD,
  SALE_CAR_STATUS_UNAVAILABLE,
];

const Status = ({ status }: Props) => {
  if (status == SALE_CAR_STATUS_UNAVAILABLE)
    return (
      <span className="status-badge bg-red-100 text-red-700 hover:bg-red-200">
        Unavailable
      </span>
    );

  if (status == SALE_CAR_STATUS_SOLD)
    return (
      <span className="status-badge bg-gray-100 text-gray-700 hover:bg-gray-200">
        Sold
      </span>
    );

  return (
    <span className="status-badge bg-green-100 text-green-700 hover:bg-green-200">
      Available
    </span>
  );
};

const SaleStatus = ({ id, status }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status);

  const router = useRouter();

  const { error, loading, run, success } = useRequest(() =>
    updateSaleCarStatus(id, selectedStatus).finally(() => setShowModal(false)),
  );

  useEffect(() => {
    if (success) {
      toast.success("Status update successful.");

      router.refresh();

      setShowModal(false);
    }

    if (error) {
      toast.error("Status update failed.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <>
      <div className="cursor-pointer" onClick={() => setShowModal(true)}>
        <Status id={id} status={status} />
      </div>
      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Update Status"
        Icon={FaCar}
        action={
          <Button disabled={loading} onClick={run} size="sm">
            {loading ? <Spinner /> : <FaSave />}
            Update
          </Button>
        }
      >
        <select
          name="status"
          id="status"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 focus:outline-none transition-all"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {statuses.map((saleStatus) => (
            <option key={saleStatus} value={saleStatus}>
              {saleStatus}
            </option>
          ))}
        </select>
      </Modal>
    </>
  );
};

export default SaleStatus;
