import React from "react";

type Props = {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required = false,
}: Props) {
  return (
    <div className="relative w-full">
      
      {/* Label */}
      <label className="absolute -top-2 left-3 bg-white px-1 text-xs font-medium text-[#6C25FF]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm outline-none focus:border-[#6C25FF]"
      />
    </div>
  );
}