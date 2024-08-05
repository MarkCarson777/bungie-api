import { LoaderFunctionArgs } from "react-router-dom";

import { getCharacter } from "../actions";

const membershipId = import.meta.env.VITE_BUNGIE_MEMBERSHIP_ID as string;
const apiKey = import.meta.env.VITE_BUNGIE_API_KEY as string;

type LoaderParams = {
  characterId: string;
};

export async function characterLoader({
  params,
}: LoaderFunctionArgs): Promise<any> {
  const { characterId } = params as LoaderParams;
  const character = await getCharacter(membershipId, characterId, apiKey);

  return character;
}
