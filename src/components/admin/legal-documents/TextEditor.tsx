"use client";

import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { addLegalDocument } from "@/api/axios/legalDocuments";
import Button from "@/components/Button";
import ErrorComponent from "@/components/ErrorComponent";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";
import Editor from "./Editor";

interface Props {
  initialValue?: string;
  type: string;
}

const TextEditor = ({ initialValue, type }: Props) => {
  const [content, setContent] = useState(initialValue ?? "");

  const { loading, error, run, success } = useRequest(() =>
    addLegalDocument(type, content),
  );

  useEffect(() => {
    if (success) {
      toast.success("Document saved successfully.");
    }

    if (error) {
      toast.error(
        <ErrorComponent defaultError="Document save failed!" error={error} />,
        { icon: false },
      );
    }
  }, [success, error]);

  return (
    <>
      <Editor
        value={content}
        onChange={setContent}
      />
      <div className="mt-4 flex justify-end">
        <Button size="md" onClick={run} disabled={loading}>
          {loading ? <Spinner /> : <FaSave />} Save Document
        </Button>
      </div>
    </>
  );
};

export default TextEditor;
