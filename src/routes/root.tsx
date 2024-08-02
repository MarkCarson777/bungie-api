import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../components/Icon";

import { getClassDefinition, getDestinyCharacters } from "../actions";

type Character = {
  characterId: string;
  class: string;
};

type CharactersResponse = {
  characters: {
    data: Record<string, { characterId: string; classHash: number }>;
  };
};

export function Root() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const membershipId = import.meta.env.VITE_BUNGIE_MEMBERSHIP_ID as string;
  const apiKey = import.meta.env.VITE_BUNGIE_API_KEY as string;

  useEffect(() => {
    const retrieveCharacters = async () => {
      try {
        const response: CharactersResponse = await getDestinyCharacters(
          membershipId,
          apiKey
        );

        const charactersData = response.characters.data;

        const characterPromises = Object.values(charactersData).map(
          async (character) => {
            let className = "";
            try {
              const response = await getClassDefinition(
                character.classHash,
                apiKey
              );
              className = response.displayProperties.name;
            } catch (error) {
              console.error(error);
            }

            return {
              characterId: character.characterId,
              class: className,
            };
          }
        );

        const characters = await Promise.all(characterPromises);

        setCharacters(characters);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    retrieveCharacters();
  }, []);

  return (
    <div className="flex gap-4">
      {isLoading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <>
          {Object.values(characters).map((character, index) => (
            <Link key={index} to={`character/${character.characterId}`}>
              <div className="flex justify-center items-center h-24 w-24 border-2">
                <Icon icon={character.class} />
              </div>
            </Link>
          ))}
          <Link to={`/testData`}>
            <div className="flex justify-center items-center h-24 w-24 border-2">
              <span>Data</span>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
