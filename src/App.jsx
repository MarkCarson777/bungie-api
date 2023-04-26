import { getBungieNetUser } from "./functions/getBungieNetUser";
import { getDestinyCharacters } from "./functions/getDestinyCharacters";

export function App() {
  return (
    <>
      <button onClick={() => getBungieNetUser()}>Get Bungie.Net User</button>
      <button onClick={() => getDestinyCharacters()}>
        Get Destiny Characters
      </button>
    </>
  );
}
