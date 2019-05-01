import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PhoneInput from "../../../components/DMarketInputs/PhoneInput";
import Input from "../../../components/DMarketInputs/Input";
import Button from "../../../components/DMarketButtons/Button";
import { fonts, colors } from "@config/styles";
import { normalize } from "@utility/normalize";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      number: ""
    };
  }
  render() {
    console.log(colors, "colors");
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 200
        }}
      >
        <Input
          placeholder={"First Name"}
          secureTextEntry
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          placeholder={"Last Name"}
          secureTextEntry
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <PhoneInput
          value={this.state.number}
          onChangeText={text => this.setState({ number: text })}
        />
        <Input
          placeholder={"Password"}
          secureTextEntry
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          text={"Register"}
          onPress={() => this.props.navigation.navigate("OTPScreen")}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            width: "100%",
            height: 50,
            bottom: 50,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(14)
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
