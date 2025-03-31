import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  disabled = false,
  className,
  onClick,
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded text-sm font-medium transition-all";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-hover",
    secondary:
      "border border-secondary text-secondary hover:bg-secondary-hover",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
