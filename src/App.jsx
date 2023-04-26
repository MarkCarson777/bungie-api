import { useState, useEffect } from "react";
import axios from "axios";

import { getBungieNetUser } from "./functions/getBungieNetUser";
import { getDestinyCharacters } from "./functions/getDestinyCharacters";
import { getItemDetails } from "./functions/getItemDetails";

export function App() {
  const [itemList, setItemList] = useState(null);
  const apiKey = "a798d7d065154b7895fb699091e173f4";

  useEffect(() => {
    const membershipType = 2;
    const destinyMembershipId = "4611686018440140266";

    axios
      .get(
        `https://www.bungie.net/Platform/Destiny2/${membershipType}/Profile/${destinyMembershipId}/?components=CharacterEquipment`,
        {
          headers: {
            "X-API-Key": apiKey,
          },
        }
      )
      .then((response) => {
        // contains item inventory for all three characters
        const characters = Object.values(
          response.data.Response.characterEquipment.data
        );

        // create array to store item hashes
        const itemHashArray = [];

        // store item hashes from first character into item hash array
        characters[0].items.forEach((item) =>
          itemHashArray.push(item.itemHash)
        );

        return Promise.all(
          itemHashArray.map((item) => getItemDetails(item, apiKey))
        );
      })
      .then((items) =>
        setItemList(
          items.map((item) => item.data.Response.displayProperties.name)
        )
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button onClick={() => getBungieNetUser()}>Get Bungie.Net User</button>
      <button onClick={() => getDestinyCharacters()}>
        Get Destiny Characters
      </button>
      <button onClick={() => getItemDetails(itemHash, apiKey)}>
        Get Item Definition
      </button>
      {itemList}
    </>
  );
}
