import React from "react";
import clsx from "clsx";

type CardProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

export const Card = ({
  title,
  description,
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-surface text-text p-6 rounded shadow-md transition-colors",
        className
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      {children}
    </div>
  );
};
