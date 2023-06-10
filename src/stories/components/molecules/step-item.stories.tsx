import type { Meta, StoryObj } from "@storybook/react";

import Step1 from "@/assets/step1.svg";
import { StepItem } from "@/components/molecules/home/step-item";

const meta: Meta<typeof StepItem> = {
  title: "Components/Molecules/StepItem",
  component: StepItem,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StepItem>;

export const Default: Story = {
  args: {
    icon: <Step1 />,
    title: "1. Start",
    desc1: "Pilih salah satu game",
    desc2: "yang ingin kamu top up",
  },
};
