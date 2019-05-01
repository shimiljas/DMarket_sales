import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { fonts } from "../../config/styles/Fonts";

import { normalize } from "../../utilities/normalize";

const PhoneInput = props => (
  <View
    style={{
      width: "90%",
      height: 60,
      margin: 10,
      backgroundColor: "#D3D3D3",
      borderColor: "#D3D3D3",
      borderWidth: 1,
      justifyContent: "center",
      borderRadius: 5,
      flexDirection: "row",
      padding: 5
    }}
  >
    <View
      style={{
        flex: 2,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("../../assets/icons/india.png")}
        style={{ width: 45, height: 30 }}
      />
    </View>
    <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontFamily: fonts.fontPrimaryLight,
          color: "black",
          fontSize: normalize(18)
        }}
      >
        +91
      </Text>
    </View>
    <View style={{ flex: 8 }}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={"9633898851"}
        style={{
          flex: 1,
          fontSize: normalize(18),
          fontFamily: fonts.fontPrimaryLight,
          paddingLeft: 15,
          borderLeftWidth: 1,
          borderLeftColor: "black"
        }}
      />
    </View>
  </View>
);

export default PhoneInput;
