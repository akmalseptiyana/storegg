import { Dispatch, SetStateAction } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/atoms/button";

interface ToggleMenuProps {
  isMenuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}

export function ToggleMenu({ isMenuActive, setMenuActive }: ToggleMenuProps) {
  return (
    <Button
      className="lg:hidden"
      type="button"
      variant="ghost"
      size={null}
      aria-label="Toggle navigation"
      onClick={() => setMenuActive(!isMenuActive)}
    >
      <Menu size={32} />
    </Button>
  );
}
