import { LoaderFunctionArgs } from "react-router-dom";

import { getCharacter } from "../actions";

type LoaderParams = {
  characterId: string;
};

export async function characterLoader({
  params,
}: LoaderFunctionArgs): Promise<any> {
  const { characterId } = params as LoaderParams;
  const character = await getCharacter(characterId);
  console.log("character", character);

  return character;
}
