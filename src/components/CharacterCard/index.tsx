type CharacterCardProps = {
  characterId: string;
};

export function CharacterCard(props: CharacterCardProps) {
  const { characterId } = props;

  return <h1>Character {characterId}</h1>;
}
