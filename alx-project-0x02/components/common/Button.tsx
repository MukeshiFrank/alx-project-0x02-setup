// components/common/Button.tsx
import React from "react";
import type { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "text-sm py-1 px-3",
  medium: "text-base py-2 px-4",
  large: "text-lg py-3 px-6",
};

const Button: React.FC<ButtonProps> = ({ label, size, shape, onClick }) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  const shapeClass = shape; // e.g. "rounded-md"

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold ${sizeClass} ${shapeClass} hover:bg-blue-600 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
