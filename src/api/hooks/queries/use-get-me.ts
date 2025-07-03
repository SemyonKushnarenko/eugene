import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../generated";

export const useGetMe = () =>
    useQuery({
        queryKey: ["GET_ME"],
        queryFn: () => UserService.userGetTmaMe(),
        staleTime: 1000 * 60 * 5,
    });