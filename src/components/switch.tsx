import { mergeProps, Switch, type useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-checked:bg-primary"
);
const thumbVariants = cva(
  "h-5 w-5 bg-background shadow-inset rounded-full block translate-x-0 data-checked:translate-x-6.5 relative"
);

interface SwitchProps
  extends useRender.ComponentProps<"switch">,
    VariantProps<typeof switchVariants> {}

export const NeuSwitch = (props: SwitchProps) => {
  const mergedProps = mergeProps(props, {
    className: switchVariants(),
  });

  const thumbProps = mergeProps(props, {
    className: thumbVariants(),
  });

  return (
    <Switch.Root {...mergedProps}>
      <Switch.Thumb {...thumbProps} />
    </Switch.Root>
  );
};
