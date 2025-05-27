import { ListItem } from "../custom-ui";

interface AwardItemProps {
  award: string;
}

function AwardItem({ award }: AwardItemProps) {
  return <ListItem>{award}</ListItem>;
}

export default AwardItem;
