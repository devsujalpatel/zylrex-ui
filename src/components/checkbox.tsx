"use client";
import * as React from "react";
import { Checkbox, mergeProps } from "@base-ui-components/react";
import { cva } from "class-variance-authority";
import { CheckIcon } from "lucide-react";

const checkboxVariants = cva(
  "h-5 w-5 shrink-0 rounded-sm inline-block border border-highlight bg-background shadow-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 data-checked:bg-linear-tl data-checked:from-primary/5 data-checked:to-primary/25 data-checked:shadow-raised",
);

const checkIndicatorVariants = cva("flex items-center justify-center w-full h-full");

interface CheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {}

export const NeuCheckbox = (props: CheckboxProps) => {
  const mergedProps = mergeProps(props, {
    className: checkboxVariants(),
  });
  const mergedIndicatorProps = mergeProps(props, {
    className: checkIndicatorVariants(),
  });

  return (
    <Checkbox.Root {...mergedProps}>
      <Checkbox.Indicator {...mergedIndicatorProps}>
        <CheckIcon className="size-3 text-primary" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};
