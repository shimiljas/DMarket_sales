import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PhoneInput from "../../../components/DMarketInputs/PhoneInput";
import Input from "../../../components/DMarketInputs/Input";
import { fonts } from "@config/styles/Fonts";
import { normalize } from "@utility/normalize";
import Button from "../../../components/DMarketButtons/Button";

//import {} from "react-native-gesture-handler";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      password: ""
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
          text={"Login"}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 30,
            marginTop: 15,
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: 25
          }}
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        >
          <Text
            style={{
              fontFamily: fonts.fontPrimaryLight,
              fontSize: normalize(15)
            }}
          >
            Forgot Password ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignupScreen")}
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
            Register an account?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
