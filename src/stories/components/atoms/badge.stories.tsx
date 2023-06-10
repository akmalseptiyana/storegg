import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/atoms/badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: "pending",
    children: "Pending",
    className: "w-[130px]",
  },
};
