import type { Meta, StoryObj } from "@storybook/react";

import { GameItem } from "@/components/molecules/home/game-item";

const meta: Meta<typeof GameItem> = {
  title: "Components/Molecules/GameItem",
  component: GameItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GameItem>;

export const Default: Story = {
  render: () => (
    <ul>
      <GameItem
        id="1"
        name="Super Mechs"
        category="Mobile"
        thumbnail="/images/Thumbnail-1.png"
      />
    </ul>
  ),
};
