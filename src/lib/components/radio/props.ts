export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  name: string;
  legend: string;
  disabled?: boolean;
  disableAnimation?: boolean;
  onClick?: (value: RadioOption) => void;
}
