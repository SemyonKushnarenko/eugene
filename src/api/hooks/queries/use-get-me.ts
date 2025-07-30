import { useQuery } from "@tanstack/react-query";
import {
  AuthorizationService,
  UserRegisterRequestModel,
} from "../../generated";

export const useGetMe = (data: UserRegisterRequestModel) =>
  useQuery({
    queryKey: ["GET_ME"],
    queryFn: () => AuthorizationService.telegramLoginAuthV1TelegramLoginPost(),
    staleTime: 1000 * 60 * 5,
  });