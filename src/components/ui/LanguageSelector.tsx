import { Button } from "@heroui/react/button";
import { Popover } from "@heroui/react/popover";
import { useState } from "react";
import { type Language, useLanguage } from "../../hooks/stores/useLanguage";

const languageOptions: Language[] = ["en", "zh", "ja"];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const language = useLanguage((state) => state.language);
  const setLanguage = useLanguage((state) => state.setLanguage);

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="outline">Language: {language}</Button>
      <Popover.Content placement="bottom start">
        <Popover.Dialog>
          <div className="flex flex-col gap-2 p-2">
            {languageOptions.map((languageOption) => (
              <Button
                key={languageOption}
                variant={language === languageOption ? "primary" : "outline"}
                onPress={() => {
                  setLanguage(languageOption);
                  setIsOpen(false);
                }}
              >
                {languageOption}
              </Button>
            ))}
          </div>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
