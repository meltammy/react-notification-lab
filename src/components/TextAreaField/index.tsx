import { forwardRef } from "react";

interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  id: string;
  rows?: number;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, placeholder, id, rows = 3 }, ref) => {
    return (
      <label>
        {label}
        <textarea id={id} ref={ref} placeholder={placeholder} rows={rows} />
      </label>
    );
  }
);

TextAreaField.displayName = "TextAreaField";

export default TextAreaField;
