import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../routes/AuthContext";
import {
  ActivityDto,
  AuthenticationRequestDto,
  AuthenticationResponseDto,
} from "../../@types/types";


//const { currentJwtToken } = useAuth();
const getActivities = async (): Promise<ActivityDto[]> => {
  const response = await fetch(
    "https://57f4-87-72-193-253.ngrok-free.app/api/activity/get",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return await response.json();
};

export const useGetActivity = () => {
  const result = useQuery({
    queryKey: ["getActivities"],
    queryFn: getActivities,
    refetchInterval: 1000,
  });

  return result;
};
