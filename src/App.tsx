import { useState } from "react";

import {
  getBungieNetUser,
  getCharacterEquipment,
  getDestinyCharacters,
} from "./actions";

import { SelectCharacter } from "./views/SelectCharacter";

export function App() {
  const [data, setData] = useState();
  const apiKey = import.meta.env.VITE_BUNGIE_API_KEY;
  const membershipType = import.meta.env.VITE_BUNGIE_MEMBERSHIP_TYPE;
  const membershipId = import.meta.env.VITE_BUNGIE_MEMBERSHIP_ID;

  // retrieve data from the Bungie API

  const retrieveData = async (action: string) => {
    try {
      let response;

      switch (action) {
        case "bungieNetUser":
          response = await getBungieNetUser(
            membershipId,
            membershipType,
            apiKey
          );
          break;
        case "destinyCharacters":
          response = await getDestinyCharacters(membershipId, apiKey);
          break;
        case "characterEquipment":
          response = await getCharacterEquipment(membershipId, apiKey);
          break;
        default:
          throw new Error("Invalid action");
      }
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={() => retrieveData("bungieNetUser")}>
        Get Bungie.Net User
      </button>
      <button onClick={() => retrieveData("destinyCharacters")}>
        Get Destiny Characters
      </button>
      <button onClick={() => retrieveData("characterEquipment")}>
        Get Character Equipment
      </button>
      <main>{JSON.stringify(data)}</main>
      <SelectCharacter />
    </>
  );
}
