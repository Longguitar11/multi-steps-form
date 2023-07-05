import { BsSearch } from "react-icons/bs";
import { Input, InputProps } from "components/ui/input";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Components/Input",
  component: Input,
  args: {
    errorText: "",
    hintText: "This is the hint text",
    label: "Label",
    value: "Text goes here",
    disabled: false,
    maxLength: 200,
    prefix: "+65",
  },
};

export const Default = (args: InputProps) => <Input {...args} />;

export const Error = () => (
  <Input
    errorText="Error message"
    placeholder="Place holder text"
    hintText="This is the hint text"
    label="Label"
    maxLength={200}
  />
);

export const WithIcon = () => (
  <Input
    placeholder="Place holder text"
    hintText="This is the hint text"
    label="Label"
    icon={BsSearch}
    maxLength={200}
  />
);

export const WithPrefix = (args: InputProps) => (
  <Input
    placeholder="Place holder text"
    hintText="This is the hint text"
    label="Label"
    icon={BsSearch}
    maxLength={200}
    {...args}
  />
);
