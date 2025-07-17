import { useQuery } from "@tanstack/react-query";
import { games } from "../../../helpers/games";

function getGame(slug: string) {
    return games.find(game => game.slug === slug)
}

export const useGetGame = (slug: string) =>
    useQuery({
        queryKey: ["GET_GAME"],
        queryFn: () => getGame(slug),
        staleTime: 1000 * 60 * 5,
    });