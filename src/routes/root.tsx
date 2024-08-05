import { Link, useLoaderData } from "react-router-dom";
import { Icon } from "../components/Icon";

type Character = {
  id: string;
  class: string;
};

export function Root() {
  const { characters } = useLoaderData() as {
    characters: Character[];
  };

  return (
    <div className="h-screen w-full justify-center items-center flex gap-4">
      {Object.values(characters).map((character, index) => (
        <Link key={index} to={`character/${character.id}`}>
          <div className="flex justify-center items-center h-48 w-48 border-2">
            <Icon icon={character.class} />
          </div>
        </Link>
      ))}
      <Link to={`/testData`}>
        <div className="flex justify-center items-center h-48 w-48 border-2">
          <span>Data</span>
        </div>
      </Link>
    </div>
  );
}
