import { useState, useEffect } from "react";

import { getClassDefinition } from "../../actions";

type CharacterCardProps = {
  character: {
    characterId: string;
    classHash: number;
  };
};

export function CharacterCard(props: CharacterCardProps) {
  const { character } = props;
  const [characterClass, setCharacterClass] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_BUNGIE_API_KEY as string;

  useEffect(() => {
    const getCharacterClass = async () => {
      try {
        const response = await getClassDefinition(character.classHash, apiKey);
        setCharacterClass(response.displayProperties.name);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacterClass();
  }, []);

  return (
    <div className="flex justify-center items-center h-24 w-24 border-2">
      <span>{characterClass}</span>
    </div>
  );
}
