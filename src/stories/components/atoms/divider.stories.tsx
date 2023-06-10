import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "@/components/atoms/divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
};
