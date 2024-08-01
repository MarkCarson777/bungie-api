import { useState, useEffect } from "react";

import { CharacterCard } from "../../components/CharacterCard";

import { getDestinyCharacters } from "../../actions";

type Character = {
  characterId: string;
};

type CharactersResponse = {
  characters: {
    data: Record<string, Character>;
  };
};

export function SelectCharacter() {
  const [characters, setCharacters] = useState<Record<string, Character>>({});
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
      } catch (error) {
        console.error(error);
      }
    };

    retrieveCharacters();
  }, []);

  return (
    <>
      {Object.values(characters).map((character, index) => (
        <CharacterCard key={index} characterId={character.characterId} />
      ))}
    </>
  );
}
