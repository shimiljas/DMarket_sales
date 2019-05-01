import React, { Component } from "react";
import { View, Text } from "react-native";
import PhoneInput from "../../../components/DMarketInputs/PhoneInput";
import Input from "../../../components/DMarketInputs/Input";
import Button from "../../../components/DMarketButtons/Button";
import { fonts, colors } from "@config/styles";
import { normalize } from "@utility/normalize";
export default class OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ""
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontFamily: fonts.fontPrimaryBold,
            marginBottom: 10,
            textAlign: "left"
          }}
        >
          Enter the OTP to confirm
        </Text>
        <Input
          value={this.state.otp}
          onChangeText={text => this.setState({ otp: text })}
        />
        <Button
          text={"Confirm"}
          onPress={() => this.props.navigation.navigate("OTPScreen")}
        />
      </View>
    );
  }
}
