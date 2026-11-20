"use client";

import {
  FaBold,
  FaHeading,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaQuoteRight,
  FaRedo,
  FaUnderline,
  FaUndo,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

interface ToolbarButton {
  Icon: React.ComponentType<{ className?: string }>;
  command: string;
  label: string;
  value?: string;
}

// document.execCommand is deprecated but remains the simplest cross-browser way
// to drive a contentEditable surface without pulling in an editor dependency.
const toolbar: ToolbarButton[][] = [
  [
    { Icon: FaHeading, command: "formatBlock", label: "Heading", value: "h2" },
    { Icon: FaBold, command: "bold", label: "Bold" },
    { Icon: FaItalic, command: "italic", label: "Italic" },
    { Icon: FaUnderline, command: "underline", label: "Underline" },
  ],
  [
    { Icon: FaListUl, command: "insertUnorderedList", label: "Bullet list" },
    { Icon: FaListOl, command: "insertOrderedList", label: "Numbered list" },
    {
      Icon: FaQuoteRight,
      command: "formatBlock",
      label: "Quote",
      value: "blockquote",
    },
  ],
  [
    { Icon: FaUndo, command: "undo", label: "Undo" },
    { Icon: FaRedo, command: "redo", label: "Redo" },
  ],
];

interface Props {
  disabled?: boolean;
  onChange: (html: string) => void;
  value: string;
}

const Editor = ({ disabled = false, onChange, value }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Sync external value changes into the editable surface. While typing, the
  // DOM already matches `value`, so this is a no-op and the caret is preserved.
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const exec = (command: string, val?: string) => {
    if (disabled) return;

    editorRef.current?.focus();
    document.execCommand(command, false, val);
    handleInput();
  };

  const insertLink = () => {
    if (disabled) return;

    const url = window.prompt("Enter the URL");

    if (url) {
      exec("createLink", url);
    }
  };

  const handleInput = () => {
    onChange(editorRef.current?.innerHTML ?? "");
  };

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      {!disabled && (
        <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-3 py-2">
          {toolbar.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center gap-1 pr-2 mr-1 border-r border-gray-200 last:border-none last:mr-0 last:pr-0"
            >
              {group.map(({ Icon, command, label, value: val }) => (
                <button
                  key={label}
                  type="button"
                  title={label}
                  aria-label={label}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => exec(command, val)}
                  className="h-8 w-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  <Icon className="text-sm" />
                </button>
              ))}
            </div>
          ))}
          <button
            type="button"
            title="Insert link"
            aria-label="Insert link"
            onMouseDown={(event) => event.preventDefault()}
            onClick={insertLink}
            className="h-8 w-8 flex items-center justify-center rounded-md text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
          >
            <FaLink className="text-sm" />
          </button>
        </div>
      )}

      <div
        ref={editorRef}
        contentEditable={!disabled}
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder="Start writing the document..."
        className="legal-content wysiwyg-editor min-h-[420px] max-h-[70vh] overflow-y-auto px-6 py-5 focus:outline-none"
      />
    </div>
  );
};

export default Editor;
