import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
const { width, height } = Dimensions.get("window");
import {
  scale,
  verticalScale,
  moderateScale
} from "../../../utilities/Responsive";

export default class AccountScreen extends React.Component {
  render() {
    return <View style={styles.Container} />;
  }
}

const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "red" }
});
