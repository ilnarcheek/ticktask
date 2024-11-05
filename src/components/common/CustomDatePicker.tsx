import { ru } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
registerLocale("ru", ru);
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)<{ disabled: boolean }>`
  color: ${(props) =>
    props.disabled ? "var(--fc-gray)" : "var(--fc-black)"} !important;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

interface CustomDatePickerProps {
  value: Date;
  onChange: () => void;
  disabled: boolean;
  id: string;
}

function CustomDatePicker({
  value,
  onChange,
  disabled,
  id,
}: CustomDatePickerProps) {
  return (
    <StyledDatePicker
      disabled={disabled}
      locale="ru"
      selected={value}
      showTimeInput
      onChange={onChange}
      dateFormat="Pp"
      id={id}
    />
  );
}

export default CustomDatePicker;
