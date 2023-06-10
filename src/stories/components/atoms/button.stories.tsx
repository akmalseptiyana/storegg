import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/atoms/button";

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Get Started",
    className: "w-[200px] font-medium",
  },
};
