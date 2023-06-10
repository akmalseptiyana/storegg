import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/components/atoms/select";

const meta: Meta<typeof Select> = {
  title: "Components/Atoms/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select
      id="category"
      name="category"
      aria-label="Favorite game"
      defaultValue="default"
    >
      <option value="default" disabled>
        Select Category
      </option>
      <option value="fps">First Person Shoter</option>
      <option value="rpg">Role Playing Game</option>
      <option value="arcade">Arcade</option>
      <option value="sport">Sport</option>
    </Select>
  ),
};
