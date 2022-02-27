import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import Navigation from "../navigation";

const LoginScreen = () => {
  const onPressButton = () => {
    Navigation.navigate('EmailSign');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VIMA</Text>
      <Button
        title="Sign in with Email"
        color="green"
        onPress={onPressButton}
      />
      <Text> </Text>
      <Button
        title="Sign in with Phone Number"
        color="green"
        onPress={() => alert("Put in Number")}
      />
      <Text> </Text>
      <Button
        title="Sign in with Student ID"
        color="green"
        onClick
      />
    </View>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingVertical: 200,
    backgroundColor: "#BDFFB6"
  },
  // header: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingHorizontal: 20,
  //   paddingBottom: 50
  // },
  // footer: {
  //   flex: 3,
  //   backgroundColor: '#BDFFB6',
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   paddingHorizontal: 20,
  //   paddingVertical: 30
  // },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 80
  },
  text_button: {
    color: "#000",
    fontSize: 18
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#BDFFB6"
  },
  button: {
    alignItems: "center",
    marginTop: 500,
    backgroundColor: "#fff"
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold"
  }
})
