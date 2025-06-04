import { LabelGroup, Label } from "../custom-ui";
import { useLanguage } from "../../hooks/useLanguage";

function MusicGames() {
  const { t } = useLanguage();

  return (
    <LabelGroup title={t.hobbies.musicGame} variant="alt">
      {t.hobbies.items.musicGames.map((game: string, index: number) => (
        <Label
          key={index}
          icon="fas fa-music"
          className="!bg-[var(--secondary)] !p-2 !text-[var(--primary)] "
        >
          {game}
        </Label>
      ))}
    </LabelGroup>
  );
}

export default MusicGames;
