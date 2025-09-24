import { forwardRef } from "react";

interface CheckboxFieldProps {
  label: string;
  id: string;
}

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ label, id }, ref) => {
    return (
      <label className="checkbox">
        <input type="checkbox" id={id} ref={ref} />
        {label}
      </label>
    );
  }
);

CheckboxField.displayName = "CheckboxField";

export default CheckboxField;
