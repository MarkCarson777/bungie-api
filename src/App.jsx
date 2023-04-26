import { fetchData } from "./api/destiny.jsx";

import "./App.css";

export function App() {
  return <button onClick={() => fetchData()}>Get Data</button>;
}
