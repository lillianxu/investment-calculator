import React from 'react';

interface NumberInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (id: string, value: string) => void;
}
export const NumberInput: React.FC<NumberInputProps> = ({
  id,
  label,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="number"
      value={value}
      onChange={event => onChange(id, event.target.value)}
      required
    />
  </div>
);
