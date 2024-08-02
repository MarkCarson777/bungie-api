import { useState, useEffect } from "react";

import { Icon } from "../Icon";

import { getClassDefinition } from "../../actions";

type CharacterCardProps = {
  classHash: number;
};

export function CharacterCard(props: CharacterCardProps) {
  const { classHash } = props;
  const [isLoading, setIsLoading] = useState(true);

  const [characterClass, setCharacterClass] = useState<string>("");
  const apiKey = import.meta.env.VITE_BUNGIE_API_KEY as string;

  useEffect(() => {
    const getCharacterClass = async () => {
      try {
        const response = await getClassDefinition(classHash, apiKey);
        setCharacterClass(response.displayProperties.name);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacterClass().finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex justify-center items-center h-24 w-24 border-2">
      {isLoading ? <div>Loading...</div> : <Icon icon={characterClass} />}
    </div>
  );
}
