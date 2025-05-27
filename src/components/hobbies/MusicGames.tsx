import { LabelGroup, Label } from "../custom-ui";
import { useLanguage } from "../../hooks/useLanguage";

function MusicGames() {
  const { t } = useLanguage();

  return (
    <LabelGroup title={t.hobbies.musicGame} variant="alt">
      {t.hobbies.items.musicGames.map((game, index) => (
        <Label key={index} icon="fas fa-music">
          {game}
        </Label>
      ))}
    </LabelGroup>
  );
}

export default MusicGames;
