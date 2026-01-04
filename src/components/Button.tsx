import { mergeProps, useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex justify-center items-center px-4 py-2 rounded-lg cursor-pointer border inset-shadow-sm hover:inset-shadow-xs",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 text-white border-neutral-700",
        primary: "bg-primary text-white border-indigo-500",
        destructive: "bg-red-600 text-white border-red-500",
        warning: "bg-yellow-500 border-yellow-400 text-white",
        outline: "border border-neutral-600 text-neutral-800 bg-transparent",
      },
      size: {
        default: "h-12 px-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {
  const mergedProps = mergeProps(props, {
    className: buttonVariants({ variant: props.variant, size: props.size }),
  });

  const { render } = props;

  const element = useRender({
    defaultTagName: "button",
    render,
    props: mergedProps,
  });

  return element;
}
