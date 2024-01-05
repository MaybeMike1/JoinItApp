import { useMutation } from "@tanstack/react-query";
import { AuthenticationRequestDto, AuthenticationResponseDto, MetaRequestDto } from "../../@types/types";

 const postFacebookLogin = async (data: MetaRequestDto ): Promise<AuthenticationResponseDto> => {
    const response = await fetch("https://57f4-87-72-193-253.ngrok-free.app/api/auth/facebook-register", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
}

export const useFacebookLogin = () => {
    const {mutateAsync: loginAsync} = useMutation({
        mutationFn: postFacebookLogin,
        mutationKey:["facebookLoginKey"],
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