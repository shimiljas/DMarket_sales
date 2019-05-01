import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PhoneInput from "../../../components/DMarketInputs/PhoneInput";
import Input from "../../../components/DMarketInputs/Input";
import { fonts } from "@config/styles/Fonts";
import { normalize } from "@utility/normalize";
import Button from "../../../components/DMarketButtons/Button";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: fonts.fontPrimaryBold,
            marginBottom: 10
          }}
        >
          Enter the Mobile Nuumber to get OTP
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <PhoneInput
            value={this.state.number}
            onChangeText={text => this.setState({ number: text })}
          />
        </View>
        <Button
          text={"Get OTP"}
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
