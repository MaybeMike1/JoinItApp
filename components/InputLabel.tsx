import { AuthenticationRequestDto, FieldValueType } from "../@types/types";
import React, { BaseSyntheticEvent, MutableRefObject, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { Control, useController, UseControllerProps } from "react-hook-form";

interface InputLabelProps {
  fieldName: string;
  value: string;
  isPassword?: boolean;
  onChange: (text: string) => void;
  fieldValueType: FieldValueType;
  control : Control<AuthenticationRequestDto, any>
}

const InputLabel: React.FC<InputLabelProps> = React.forwardRef<
  TextInput,
  InputLabelProps
>((props: InputLabelProps, ref) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name : props.fieldValueType,
    control : props.control,
    rules: { required: true },
  });
  return (
    <View>
      <Text
        style={{ textAlign: "center", paddingVertical: 12, fontSize: 22 }}
      ></Text>
      <TextInput
        ref={ref}
        secureTextEntry={props.fieldValueType === "password"}
        placeholder={`Vælg venligst dit ${props.fieldName.toLocaleLowerCase()}`}
        onChangeText={(e) => props.onChange(e)}
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          fontSize: 18,
          paddingBottom: 7.5,
          textAlign: "center",
        }}
        value={props.value}
      ></TextInput>
    </View>
  );
});

export default InputLabel;
