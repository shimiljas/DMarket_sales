import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { fonts } from "../../config/styles/Fonts";

import { normalize } from "../../utilities/normalize";

const Input = props => (
  <View
    style={{
      width: "90%",
      height: 60,
      margin: 10,
      backgroundColor: "#D3D3D3",
      borderColor: "#D3D3D3",
      justifyContent: "center",
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: "row",
      padding: 5
    }}
  >
    <TextInput
      value={props.value}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      secureTextEntry={props.secureTextEntry}
      style={{
        flex: 1,
        fontSize: normalize(18),
        fontFamily: fonts.fontPrimaryLight,
        paddingLeft: 15
      }}
    />
  </View>
);

export default Input;
