import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/atoms/label";

const meta: Meta<typeof Label> = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};
