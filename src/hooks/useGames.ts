import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[],
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () =>
    apiClient
      .get<FetchResponse<Game>>('/games', {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        }
      })
      .then(res => res.data),
  staleTime: 1 * 60 * 1000,   // 1m
})

export default useGames;