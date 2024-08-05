import { useLoaderData } from "react-router-dom";

export function Character() {
  const character = useLoaderData();

  return <div>{JSON.stringify(character)}</div>;
}
