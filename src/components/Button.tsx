import { mergeProps, useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex justify-center items-center cursor-pointer hover:opacity-90 focus-visible:ring-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none rounded-xl",
  {
    variants: {
      variant: {
        default: "",
        pramary: "bg-blue-400",
        warning: "bg-yellow-400",
        destructive: "bg-red-400",
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
    className: twMerge(
      buttonVariants({ variant: props.variant, size: props.size }),
      props.className
    ),
  });

  const { render } = props;

  const element = useRender({
    defaultTagName: "button",
    render,
    props: mergedProps,
  });

  return element;
}
