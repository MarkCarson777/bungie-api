import { getBungieNetUser } from "./functions/getBungieNetUser";

export function App() {
  return (
    <button onClick={() => getBungieNetUser()}>Get Bungie.Net User</button>
  );
}
