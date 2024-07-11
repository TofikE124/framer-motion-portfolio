"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: "right" | "left";
  handleClick?: () => void;
  className?: string;
}

const MagicButton = ({
  title,
  position,
  icon,
  className,
  handleClick = () => {},
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={twMerge(
          "inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl",
          className
        )}
      >
        {position == "left" ? icon : null}
        {title}
        {position == "right" ? icon : null}
      </span>
    </button>
  );
};

export default MagicButton;
