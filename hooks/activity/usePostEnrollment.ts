import { useMutation } from "@tanstack/react-query";
import { ActivityEnrollmentParams, AuthenticationRequestDto, AuthenticationResponseDto } from "../../@types/types";

 const postEnrollment = async (data: ActivityEnrollmentParams ): Promise<any> => {
    console.log("data: ",data);
    const response = await fetch(`https://57f4-87-72-193-253.ngrok-free.app/api/activity/enroll?activityGuid=${data.activityGuid}&userGuid=${data.userGuid}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
    })
    console.log("testsss", await response.json());
    return await response.json();
}

export const usePostEnrollment = () => {
    const {mutateAsync: enrollActivityAsync, ...rest} = useMutation({
        mutationFn: postEnrollment,
        mutationKey:["EnrollmentKey"],
        onSuccess: () => {
            console.log("POST REQUEST WENT GOOD");
        },
        onError: (e) => {
            console.log("Something went wrong",e);
        }
    });

    return {
        enrollActivityAsync,
        rest
    }
}