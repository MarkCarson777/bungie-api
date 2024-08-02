import { useState, useEffect } from "react";

import { Icon } from "../Icon";

import { getClassDefinition } from "../../actions";

type CharacterCardProps = {
  character: {
    characterId: string;
    classHash: number;
  };
};

export function CharacterCard(props: CharacterCardProps) {
  const { character } = props;
  const [characterClass, setCharacterClass] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  const apiKey = import.meta.env.VITE_BUNGIE_API_KEY as string;

  useEffect(() => {
    setPending(true);
    const getCharacterClass = async () => {
      try {
        const response = await getClassDefinition(character.classHash, apiKey);
        setCharacterClass(response.displayProperties.name);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacterClass().finally(() => setPending(false));
  }, []);

  return (
    <div className="flex justify-center items-center h-24 w-24 border-2">
      {pending ? <span>Loading...</span> : <Icon icon={characterClass} />}
    </div>
  );
}
