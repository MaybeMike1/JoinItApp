import { QueryKey, useQuery } from "@tanstack/react-query";
import { AuthenticationRequestDto, AuthenticationResponseDto } from "../../@types/types";

const getMember = async (userGuid: string): Promise<any> => {
    const response = await fetch(`https://57f4-87-72-193-253.ngrok-free.app/api/User?userGuid=${userGuid}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });

    return response.json();
}

export const useMember = (userGuid: string) => {
    return useQuery({
        queryFn: () => getMember(userGuid),
        queryKey: ["getMember"]
    })
}
