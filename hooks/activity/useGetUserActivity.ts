import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../routes/AuthContext";
import {
  ActivityDto,
  ActivityResponseDto,
  AuthenticationRequestDto,
  AuthenticationResponseDto,
} from "../../@types/types";


//const { currentJwtToken } = useAuth();
const getUserActivities = async (userGuid: string): Promise<ActivityResponseDto> => {
  const response = await fetch(
    `https://57f4-87-72-193-253.ngrok-free.app/api/activity/getuserActivities?userGuid=${userGuid}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  return await response.json();
};

export const useGetUserActivities = (userGuid: string) => {
  const result = useQuery({
    queryKey: ["getUserActivities"],
    queryFn: () => getUserActivities(userGuid),
    refetchInterval: 1000
  });

  return result;
};
