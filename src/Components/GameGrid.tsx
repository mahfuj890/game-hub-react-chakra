import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponce {
  id: number;
  results: Games;
}

function GameGrid() {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponce>("/gamess")
      .then((response) => setGame(response.data.results))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
        {
            error && <Text> {error} </Text>
        }
      <ul>
        {game.map((item) => {
          return <li key={item?.id}>{item?.name} </li>;
        })}
      </ul>
    </div>
  );
}

export default GameGrid;
