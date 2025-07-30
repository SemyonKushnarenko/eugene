import { useQuery } from "@tanstack/react-query";
import { games, IGame } from "../../../helpers/games";

function getGame(slug: string): IGame | undefined {
  return games.find((game) => game.slug === slug);
}

export const useGetGame = (slug: string) =>
    useQuery({
        queryKey: ["GET_GAME"],
        queryFn: () => getGame(slug),
        staleTime: 400,
    });