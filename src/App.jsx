import { getBungieNetUser } from "./functions/getBungieNetUser";
import { getCharacterEquipment } from "./functions/getCharacterEquipment";
import { getDestinyCharacters } from "./functions/getDestinyCharacters";
import { getItemDetails } from "./functions/getItemDetails";

export function App() {
  const itemHash = "1366394399";
  const apiKey = "a798d7d065154b7895fb699091e173f4";

  return (
    <>
      <button onClick={() => getBungieNetUser()}>Get Bungie.Net User</button>
      <button onClick={() => getDestinyCharacters()}>
        Get Destiny Characters
      </button>
      <button onClick={() => getCharacterEquipment()}>
        Get Character Equipment
      </button>
      <button onClick={() => getItemDetails(itemHash, apiKey)}>
        Get Item Definition
      </button>
    </>
  );
}
