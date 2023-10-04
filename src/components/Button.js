import * as React from "react";

const Button = ({
  children,
  label,
  type = "button",
  variant = "success",
  onClick
}) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 font-semibold text-sm text-white rounded-md shadow-sm ${
        variant === "success" ? "bg-slate-500" : "bg-rose-600"
      }`}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
};

export default Button;
