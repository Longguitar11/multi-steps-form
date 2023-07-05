import { BsAlarm } from "react-icons/bs";
import { Button, ButtonProps } from "components/ui/button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Design System/Components/Button",
  component: Button,
};

export const Default = (args: ButtonProps) => (
  <Button {...args}>Primary</Button>
);
export const Outline = (args: ButtonProps) => (
  <Button {...args} variant="outline-primary">
    Primary
  </Button>
);

export const WithIcon = (args: ButtonProps) => (
  <Button {...args}>
    <BsAlarm className="mr-3" />
    Wake me up
  </Button>
);
