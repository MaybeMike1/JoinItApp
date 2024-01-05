import InputLabel from "../../components/InputLabel";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { loginStyles } from "../../styles/auth/loginStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthenticationRequestDto } from "../../@types/types";
import { useFocusNotifyOnChangeProps } from "../../hooks/react-query/useFocusNotifyOnChangeProps";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../routes/AuthContext";
import IonIcons from "@expo/vector-icons/Ionicons";

interface LoginScreenProps {}

const LoginScreen: React.FC = () => {
  const notifyOnChangeProps = useFocusNotifyOnChangeProps();
  const auth = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<AuthenticationRequestDto>();

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };
  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  function onSubmit(formData: AuthenticationRequestDto) {
    auth
      .login(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.bannerContainer}></View>
      <View style={loginStyles.authenticationContainer}>
        <Text style={{ fontSize: 24, color: "#daf5da" }}>Email/Brugernavn</Text>
        <TextInput
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginVertical: 15,
            fontSize: 20,
          }}
          value={email}
          onChangeText={handleEmailChange}
        />
        <Text style={{ fontSize: 24, color: "#daf5da" }}>Adgangskode</Text>
        <TextInput
          style={{
            borderBottomColor: "lightgray",
            borderBottomWidth: 1,
            marginVertical: 18,
            fontSize: 20,
          }}
          value={password}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity
          onPressIn={() => onSubmit({ email: email, password: password })}
          style={loginStyles.submitBtn}
        >
          <Text>Log på</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#2deb30",  padding: 10, borderRadius: 12, justifyContent: 'space-evenly', alignItems: "center", flexDirection: 'row' }} onPress={( ) => {auth.loginWithSocialProvider('Facebook')}}>
          <Text>Facebook</Text>
          <IonIcons size={20} name="logo-facebook"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
