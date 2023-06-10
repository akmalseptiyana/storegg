import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/Atoms/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src="/images/avatar-1.png" alt="" width={40} height={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={20}>
        <DropdownMenuItem>
          <Link href="/member">My Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Wallet</DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/member/edit-profile">Account Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/sign-in">Log Out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
