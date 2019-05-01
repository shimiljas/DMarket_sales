import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { fonts, colors } from "@config/styles";

import { normalize } from "../../utilities/normalize";

const Button = props => (
  <TouchableOpacity
    style={{
      width: "90%",
      height: 60,
      margin: 10,
      backgroundColor: colors.green,
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        fontFamily: fonts.fontPrimaryBold,
        fontSize: normalize(18),
        color: colors.white
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default Button;
