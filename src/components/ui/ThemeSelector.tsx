import { Button } from "@heroui/react/button";
import { Popover } from "@heroui/react/popover";
import { useState } from "react";
import { type Theme, useTheme } from "../../hooks/stores/useTheme";

const themeOptions: Theme[] = ["light", "dark", "system"];

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme((state) => state.theme);
  const resolvedTheme = useTheme((state) => state.resolvedTheme);
  const setTheme = useTheme((state) => state.setTheme);

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="outline">
        Theme: {theme} ({resolvedTheme})
      </Button>
      <Popover.Content placement="bottom start">
        <Popover.Dialog>
          <div className="flex flex-col gap-2 p-2">
            {themeOptions.map((themeOption) => (
              <Button
                key={themeOption}
                variant={theme === themeOption ? "primary" : "outline"}
                onPress={() => {
                  setTheme(themeOption);
                  setIsOpen(false);
                }}
              >
                {themeOption}
              </Button>
            ))}
          </div>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
