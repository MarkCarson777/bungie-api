import { getClassDefinition, getDestinyCharacters } from "../actions";

type CharactersResponse = {
  characters: {
    data: Record<string, { characterId: string; classHash: number }>;
  };
};

export async function charactersLoader() {
  const response: CharactersResponse = await getDestinyCharacters();

  const characterData = response.characters.data;

  const characters = await Promise.all(
    Object.values(characterData).map(async (character) => {
      let characterClass = "";

      try {
        const response = await getClassDefinition(character.classHash);
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

  return { characters };
}
