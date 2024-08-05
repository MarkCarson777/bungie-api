import { useState } from "react";

import {
  getBungieNetUser,
  getCharacterEquipment,
  getCharacter,
} from "../actions";

export function Data() {
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
        case "characterEquipment":
          response = await getCharacterEquipment(membershipId, apiKey);
          break;
        case "character":
          response = await getCharacter(
            membershipId,
            "2305843009719514198",
            apiKey
          );
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
      <button onClick={() => retrieveData("characterEquipment")}>
        Get Character Equipment
      </button>
      <button onClick={() => retrieveData("character")}>Get Character</button>
      <main>{JSON.stringify(data)}</main>
    </>
  );
}
