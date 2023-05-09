import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponce {
  id: number;
  results: Games;
}

function useGames() {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponce>("/games", { signal: controller.signal })
      .then((response) => setGame(response.data.results))
      .catch((error) => {

        if(error instanceof CanceledError) return ;
        setError(error.message)});

    return () => {
      controller.abort();
    };
  }, []);

  return { game, error };
}

export default useGames;
