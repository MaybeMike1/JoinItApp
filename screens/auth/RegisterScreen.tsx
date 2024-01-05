import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { useAuth } from "../../routes/AuthContext";
import { registerStyle } from "../../styles/auth/registerStyle";

const RegisterScreen : React.FC = () => {
    const auth = useAuth();

    return (
        <View style={registerStyle.registerContainer}>
            <TouchableOpacity>
               <Text></Text>
            </TouchableOpacity>
        </View>
    )
}
export default RegisterScreen;