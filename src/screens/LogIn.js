import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";

function LogIn(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2RowRowColumn}>
        <View style={styles.rect2RowRow}>
          <View style={styles.rect2}>
            <Image
              source={require("./images/fb_icon.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </View>
          <View style={styles.rect}>
            <Image
              source={require("./images/google_icon.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </View>
          <View style={styles.rect1Stack}>
            <Image
              source={require("./images/twitter_icon.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </View>
        <View style={styles.usernameEmailStack}>
          <TextInput
            placeholder="Username or Email"
            style={styles.usernameEmail}
          ></TextInput>
          <Text style={styles.title}>Sign Into Your Account</Text>
        </View>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.password}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("HomePage")}
          style={styles.submitBtn}
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.loremIpsum3RowRow}>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}>_________________</Text>
            <Text style={styles.or6}>or</Text>
            <Text style={styles.loremIpsum5}>_________________</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect2RowRowColumnFiller}></View>
      <View style={styles.signUpBtnStack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignUp")}
          style={styles.signUpBtn}
        >
          <Text style={styles.selectFromPhone1}>Don&#39;t have an account?</Text>
          <Text style={styles.loremIpsum}>Click here to sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    marginTop: 5
  },
  image2: {
    width: 38,
    height: 33,
    marginTop: 5,
    marginLeft: 3
  },
  rect: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 5
  },
  image4: {
    width: 32,
    height: 30,
    marginTop: 7,
    marginLeft: 5
  },
  rect2Row: {
    height: 43,
    flexDirection: "row",
    marginLeft: 101,
    marginTop: 12
  },
  image: {
    width: 33,
    height: 27,
    marginTop: 20
  },
  rect1: {
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    right: 8,
    width: 43
  },
  image3: {
    width: 35,
    height: 35,
    alignSelf: "center",
    marginTop: 5,
    marginLeft: 1
  },
  rect1Stack: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 5
  },
  rect2RowRow: {
    height: 68,
    flexDirection: "row",
    marginTop: 313,
    alignSelf: "center"
  },
  usernameEmail: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 245,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(48,68,84,1)",
    borderRadius: 20,
    top: 111,
    left: 0
  },
  title: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 40,
    textAlign: "center",
    left: 0,
    height: 112
  },
  usernameEmailStack: {
    width: 245,
    height: 160,
    marginTop: -381,
    alignSelf: "center"
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 245,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(48,68,84,1)",
    borderRadius: 20,
    marginTop: 13,
    alignSelf: "center"
  },
  submitBtn: {
    width: 139,
    height: 39,
    backgroundColor: "rgba(184,97,100,1)",
    borderWidth: 1,
    borderColor: "rgba(184,97,100,1)",
    borderRadius: 100,
    marginTop: 13,
    alignSelf: "center"
  },
  submit: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    width: 74,
    height: 20,
    textAlign: "center",
    marginTop: 8,
    alignSelf: "center"
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(48,68,84,1)",
    fontSize: 10
  },
  or6: {
    fontFamily: "roboto-regular",
    color: "rgba(48,68,84,1)",
    fontSize: 16,
    marginLeft: 5
  },
  loremIpsum3Row: {
    height: 19,
    flexDirection: "row",
    alignItems: "center"
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "rgba(48,68,84,1)",
    fontSize: 10,
    marginLeft: 5
  },
  loremIpsum3RowRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 19,
    alignSelf: "center"
  },
  rect2RowRowColumn: {
    marginTop: 184
  },
  rect2RowRowColumnFiller: {
    flex: 1
  },
  signUpBtn: {
    width: 200,
    height: 37,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    textAlign: "center",
    height: 20
  },
  selectFromPhone1: {
    fontFamily: "roboto-regular",
    color: "rgba(32,45,56,1)",
    fontSize: 14,
    textAlign: "center",
    height: 15
  },
  signUpBtnStack: {
    width: 250,
    height: 48,
    marginBottom: 20,
    alignSelf: "center"
  }
});

export default LogIn;
