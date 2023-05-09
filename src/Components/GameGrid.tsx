import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { game, error } = useGames();

  return (
    <div>
      {error && <Text> {error} </Text>}
      <ul>
        {game.map((item) => {
          return <li key={item?.id}>{item?.name} </li>;
        })}
      </ul>
    </div>
  );
}

export default GameGrid;
