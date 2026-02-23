"use client";

import { Editor } from "@tinymce/tinymce-react";
import { FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { addLegalDocument } from "@/api/axios/legalDocuments";
import Button from "@/components/Button";
import config from "@/config";
import ErrorComponent from "@/components/ErrorComponent";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface Props {
  initialValue?: string;
  type: string;
}

const TextEditor = ({ initialValue, type }: Props) => {
  const [content, setContent] = useState("");

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
        apiKey={config.tinymceKey}
        initialValue={initialValue}
        onEditorChange={(newValue) => setContent(newValue)}
        value={content}
        init={{
          height: 600,
          menubar: false,
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks fontsize | bold italic underline strikethrough | align lineheight | numlist bullist | link table |  emoticons charmap | removeformat",
        }}
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
