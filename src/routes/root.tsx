import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../components/Icon";

import { getClassDefinition, getDestinyCharacters } from "../actions";

type Character = {
  id: string;
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

        const characterData = response.characters.data;

        const characters = await Promise.all(
          Object.values(characterData).map(async (character) => {
            let characterClass = "";

            try {
              const response = await getClassDefinition(
                character.classHash,
                apiKey
              );
              characterClass = response.displayProperties.name;
            } catch (error) {
              console.error(error);
            }

            return {
              id: character.characterId,
              class: characterClass,
            };
          })
        );

        setCharacters(characters);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    retrieveCharacters();
  }, []);

  return (
    <div className="h-screen w-full justify-center items-center flex gap-4">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {Object.values(characters).map((character, index) => (
            <Link key={index} to={`character/${character.id}`}>
              <div className="flex justify-center items-center h-48 w-48 border-2">
                <Icon icon={character.class} />
              </div>
            </Link>
          ))}
          <Link to={`/testData`}>
            <div className="flex justify-center items-center h-48 w-48 border-2">
              <span>Data</span>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
