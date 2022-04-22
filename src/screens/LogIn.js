import axios from "axios";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions
} from "react-native";
//import axios from "axios";
import apiip from "../serverConfig";
import { useDispatch, useSelector } from 'react-redux';
import { setEmailState, setPasswordState } from '../user_files/data/stateSlice';

function LogIn(props) {

  const emailState = useSelector(state => state.appState.email);
  const dispatch = useDispatch()

  const [ShowMessage, setShowMessage] = useState(false)
  const [Message, setMessage] = useState("")

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onLoginPressed = () => {
    if (Email === "" || Password === "") {
      setMessage("Fill all the Fields")

      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 2000);
    } else {
      handleRegister();
    }
  }

  const handleRegister = () => {
    axios.post(`${apiip}/login`, {
        "Email": Email,
        "Password": Password,
    })
    .then(res => {
        console.log(res.data);
        if (res.data === "OK") {
            setMessage("Successfully Logged In")
            dispatch(setEmailState(Email))
            dispatch(setPasswordState(Password))
            props.navigation.navigate("HomePage");
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)

            }, 100);
        } else {
            setMessage("Incorrect Email or Password")
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 1500);
            console.log("Error 1");
        }
    })
    .catch(err => {
        console.log(err);
        setMessage("Incorrect Email or Password")
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 1500);
      })
    }


  return (
    <View style={styles.container}>
      <Modal
          transparent={true}
          visible={ShowMessage}
          animationType="fade"
      >
          <View style={{
              height: Dimensions.get("screen").height, width: '100%',
              alignItems: 'center', justifyContent: 'center'
          }}>
              <View style={{
                  backgroundColor: 'white', padding: 15, shadowColor: 'gray',
                  shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1, shadowRadius: 5, elevation: 5,
                  borderRadius: 10
              }}>
                  <Text style={{ fontSize: 20 }}>{Message}</Text>
              </View>
          </View>
      </Modal>
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
          <Text style={styles.title}>Sign In</Text>
          <TextInput
            placeholder="Email"
            style={styles.usernameEmail}
            onChangeText={text => setEmail(text)}
          ></TextInput>
        </View>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.password}
          onChangeText={text => setPassword(text)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => onLoginPressed()}
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
    flex: 1,
    alignItems: 'center'
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
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 245,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    marginTop: 25
  },
  title: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 40,
    textAlign: "center",
    width: '100%',
    marginTop: 20
  },
  usernameEmailStack: {
    width: 245,
    height: 160,
    marginTop: -381,
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 245,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(48,68,84,1)",
    borderRadius: 50,
    alignSelf: "center",
  },
  submitBtn: {
    width: 139,
    height: 39,
    backgroundColor: "rgba(184,97,100,1)",
    borderWidth: 1,
    borderColor: "rgba(184,97,100,1)",
    borderRadius: 50,
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
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    textAlign: "center",
    height: 20,
    marginTop: 5
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
    alignSelf: "center",
    marginTop: 180
  }
});

export default LogIn;
