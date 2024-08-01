"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "@/lib/utils";

interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  text?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      text,
      ...props
    },
    ref
  ) => (
    <div
      className={cn(
        "flex items-center",
        orientation === "horizontal" ? "w-full" : "h-full flex-col"
      )}
    >
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-[#e43d12]/50",
          orientation === "horizontal" ? "h-[1px] w-[10%]" : "h-full w-[1px]",
          text
            ? orientation === "horizontal"
              ? "flex-grow"
              : "flex-grow-0"
            : "",
          className
        )}
        {...props}
      />
      {text && (
        <span
          className={cn(
            "mx-2 text-[#e43d12] text-2xl outfit-medium opacity-75",
            orientation === "horizontal" ? "px-2" : "py-2",
            orientation === "horizontal"
              ? "whitespace-nowrap"
              : "writing-mode-vertical-lr"
          )}
        >
          {text}
        </span>
      )}
      {text && (
        <SeparatorPrimitive.Root
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "shrink-0 bg-[#e43d12]/50",
            orientation === "horizontal" ? "h-[1px] w-[10%]" : "h-full w-[1px]",
            text
              ? orientation === "horizontal"
                ? "flex-grow"
                : "flex-grow-0"
              : "",
            className
          )}
          {...props}
        />
      )}
    </div>
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
