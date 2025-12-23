import React from "react";

const UniButton = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
  size = "md",
}) => {
  const baseStyles =
    "bg-bg-accent text-white hover: font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-bg-accent-hover cursor-pointer transition";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm md:text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }  `}
    >
      {children}
    </button>
  );
};

export default UniButton;
