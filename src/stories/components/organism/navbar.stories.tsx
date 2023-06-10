import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "@/components/organisms/navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Organisms/Navbar",
  component: Navbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
