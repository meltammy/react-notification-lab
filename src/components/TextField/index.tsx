import { forwardRef } from "react";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, placeholder, id, type = "text" }, ref) => {
    return (
      <label>
        {label}
        <input id={id} ref={ref} placeholder={placeholder} type={type} />
      </label>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
