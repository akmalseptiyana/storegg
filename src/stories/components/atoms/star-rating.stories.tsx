import type { Meta, StoryObj } from "@storybook/react";

import { StarRating } from "@/components/atoms/star-rating";

const meta: Meta<typeof StarRating> = {
  title: "Components/Atoms/StarRating",
  component: StarRating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    value: 5,
  },
};
