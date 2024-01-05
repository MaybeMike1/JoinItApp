import React,{ createContext, ReactNode, useContext, useEffect, useState } from "react";
import {
  AuthenticationRequestDto,
  AuthenticationResponseDto,
  MetaRequestDto,
  UpdateUserPasswordDto,
  UpdateUserResponseDto,
} from "../@types/types";
import useAsyncStorage from "../utils/useAsyncStorage";
import { useMutation } from "@tanstack/react-query";
import { useLogin } from "../hooks/auth/useLogin";
import { View } from "react-native";
import LoadingSpinner from "../components/LoadingSpinner";
import * as Facebook from 'expo-auth-session/providers/facebook';
import { useFacebookLogin } from "../hooks/auth/useFacebookLogin";

type AuthProvider = "Google" | "Facebook";

// Initializing AuthState blueprint.

interface AuthState {
  currentGuid: string;
  currentJwtToken: string;
  isAuthenticated: boolean;
  currentUser: any;
  register: (
    credentials: AuthenticationRequestDto
  ) => Promise<AuthenticationResponseDto>;
  login: (
    credentials: AuthenticationRequestDto
  ) => Promise<AuthenticationResponseDto>;
  loginWithSocialProvider: (provider: AuthProvider) => Promise<any>;
  logout: () => void;
  changePassword: (
    updateUserDto: UpdateUserPasswordDto
  ) => Promise<UpdateUserResponseDto>;
}

let initialResponseDto: AuthenticationResponseDto = null;
let initialUpdateUserDto: UpdateUserResponseDto = null;

const initialAuthState: AuthState = {
  currentGuid: "",
  isAuthenticated : false,
  currentJwtToken: "",
  currentUser: null,
  register: async (credentials: AuthenticationRequestDto) => {
    return initialResponseDto;
  },
  login: async (credentials: AuthenticationRequestDto) => {
    return initialResponseDto;
  },
  loginWithSocialProvider: async (provider: AuthProvider) => {},
  logout: () => {},
  changePassword: async (updateUserDto: UpdateUserPasswordDto) => {
    return initialUpdateUserDto;
  },
};
const AuthContext = createContext<AuthState>(initialAuthState);

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '1085543979271332'
  })
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAuthState.isAuthenticated);
  const [currentGuid, setCurrentGuid] = useState<string>(null);
  const [currentJwtToken, setCurrentJwtToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>();
  const [credentials, setCredentials] =
    useState<AuthenticationRequestDto>(null);
  const [updatePasswordDto, setUpdatePasswordDto] =
    useState<UpdateUserPasswordDto>(null);
  const { setItem } = useAsyncStorage("guid");
  const { loginAsync } = useLogin();
  const {loginAsync: loginFacebookAsync} = useFacebookLogin();

  async function register(credentials: AuthenticationRequestDto) {
    setCredentials(credentials);
    alert(
      `Setting credentials - values ${credentials.email} - ${credentials.password}`
    );
    return null;
  }

  async function login(credentials: AuthenticationRequestDto) {
    return new Promise<AuthenticationResponseDto>((resolve, reject) => {
      setLoading(true);
      loginAsync(credentials)
        .then((data) => {
          setCurrentGuid(data.guid);
          setCurrentJwtToken(data.token);
          setLoading(false);
          setItem(data.guid);
          setIsAuthenticated(true);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  useEffect(() => {
    if(response && response.type === 'success' && response.authentication){
      (async () => {
        console.log(response.authentication.accessToken);
        const userInfoResponse = await fetch(`https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`)

        const userInfo = await userInfoResponse.json();
        const metaRequestDto = {metaUserId: userInfo.id, metaUserFullName: userInfo.name } as MetaRequestDto;
        const metaResponse = await loginFacebookAsync(metaRequestDto);
        setCurrentGuid(metaResponse.guid);
        console.log(userInfo);
        setCurrentUser(userInfo);
        setIsAuthenticated(true);
        setCurrentJwtToken(metaResponse.token);
        console.log("lol123")
      })();
    }
  }, [response])

  async function logout() {
    setCredentials(null);
    setCurrentGuid(null);
    setCurrentUser(null);
    setCurrentJwtToken(null)
    setIsAuthenticated(false);
  }

  async function loginWithSocialProvider(provider: AuthProvider) {
    if (provider === "Facebook") {
      const result = await promptAsync();
      if(result.type !== "success"){
        alert("Not success");
        return
      }
    }
    if (provider === "Google") {
    }
  }
  async function changePassword(updatePasswordDto: UpdateUserPasswordDto) {
    return null;
  }

  const value: AuthState = {
    currentJwtToken,
    currentGuid,
    currentUser,
    isAuthenticated,
    login,
    register,
    logout,
    changePassword,
    loginWithSocialProvider,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? (
        props.children
      ) : (
        <LoadingSpinner hideSpinner={false} text="Indlæser..." />
      )}
    </AuthContext.Provider>
  );
}
