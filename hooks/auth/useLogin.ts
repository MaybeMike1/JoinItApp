import { useMutation } from "@tanstack/react-query";
import { AuthenticationRequestDto, AuthenticationResponseDto } from "../../@types/types";

 const postLogin = async (data: AuthenticationRequestDto ): Promise<AuthenticationResponseDto> => {
    const response = await fetch("https://464b-87-72-193-253.ngrok-free.app/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}

export const useLogin = () => {
    const {mutateAsync: loginAsync} = useMutation({
        mutationFn: postLogin,
        mutationKey:["loginKey"],
        onSuccess: () => {
            console.log("POST REQUEST WENT GOOD");
        },
        onError: () => {
            console.log("Something went wrong");
        }
    });

    return {
        loginAsync
    }
}