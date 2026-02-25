"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeadset, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";

import {
  REVIEWS_STATUS_PENDING,
  REVIEWS_STATUS_APPROVED,
} from "@/constants/reviews";
import { parseNumber } from "@/utils/inputFormatter";
import { updateReviewStatus } from "@/api/axios/reviews";
import Button from "@/components/Button";
import ErrorComponent from "@/components/ErrorComponent";
import Modal from "@/components/Modal";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface Props {
  id: number;
  status: number;
}

const statuses = [
  {
    label: "Pending",
    value: REVIEWS_STATUS_PENDING,
  },
  {
    label: "Approved",
    value: REVIEWS_STATUS_APPROVED,
  },
];

const Status = ({ status }: Props) => {
  if (status == REVIEWS_STATUS_APPROVED)
    return (
      <span className="status-badge bg-green-100 text-green-700 hover:bg-green-200">
        Approved
      </span>
    );

  return (
    <span className="status-badge bg-amber-100 text-amber-700 hover:bg-amber-200">
      Pending
    </span>
  );
};

const ReviewInquiryStatus = ({ id, status }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<number | undefined>(
    status,
  );

  const router = useRouter();

  const { error, loading, run, success } = useRequest(() =>
    updateReviewStatus(id, selectedStatus).finally(() => setShowModal(false)),
  );

  useEffect(() => {
    if (success) {
      toast.success("Status update successful.");

      router.refresh();

      setShowModal(false);
    }

    if (error) {
      toast.error(
        <ErrorComponent defaultError="Status update failed!" error={error} />,
        { icon: false },
      );
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
        Icon={FaHeadset}
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
          onChange={(e) => setSelectedStatus(parseNumber(e.target.value))}
        >
          {statuses.map((saleStatus) => (
            <option key={saleStatus.value} value={saleStatus.value}>
              {saleStatus.label}
            </option>
          ))}
        </select>
      </Modal>
    </>
  );
};

export default ReviewInquiryStatus;
