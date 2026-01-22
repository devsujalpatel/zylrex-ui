import { Checkbox } from "@base-ui-components/react";

interface CheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {}

export const NeuCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox.Root {...props}>
      <Checkbox.Indicator />
    </Checkbox.Root>
  );
};
