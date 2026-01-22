import { mergeProps, Switch, type useRender } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";

const switchVariants = cva(
  "inline-flex items-center cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-checked:bg-primary transition-all duration-350  border border-highlight data-checked:border-primary",
);
const thumbVariants = cva(
  "h-5 w-5 bg-background shadow-inset rounded-full block ease-out transition-all duration-350 translate-x-0 after:w-1 after:h-1 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-muted-foreground data-checked:after:bg-primary data-checked:translate-x-6.5 relative border border-highlight after:rounded-full",
);

interface SwitchProps
  extends
    useRender.ComponentProps<"switch">,
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
