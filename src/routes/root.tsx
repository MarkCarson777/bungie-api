import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CharacterCard } from "../components/CharacterCard";

import { getDestinyCharacters } from "../actions";

type Character = {
  characterId: string;
  classHash: number;
};

type CharactersResponse = {
  characters: {
    data: Record<string, Character>;
  };
};

export function Root() {
  const [characters, setCharacters] = useState<Record<string, Character>>({});
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
        setCharacters(response.characters.data);
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
              <CharacterCard classHash={character.classHash} />
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
