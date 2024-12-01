export type DropdownItem = {
  id: string;
  label: string;
  action: () => void;
  active: boolean;
};
