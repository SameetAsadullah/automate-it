import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Dimensions
} from "react-native";
import apiip from '../serverConfig';
import axios from 'axios';

function SignUp(props) {

  const [ShowSuccess, setShowSuccess] = useState(false)
  const [Message, setMessage] = useState("")

  const onSignInPressed = () => {
    // navigation.goBack();
    props.navigation.pop();
  }

  const onLoginPressed = () => {
    if (Name === "" || Email === "" || Password === "" || ConfirmPassword === "") {
      setMessage("Fill all the Fields")

      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000);
    } else if (Password !== ConfirmPassword) {
      setMessage("Password Must Match")

      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000);
    } else {
      handleRegister();
    }
  }

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const handleRegister = () => {
    axios.post(`${apiip}/register`,
      {
        "Name": Name,
        "Email": Email,
        "Password": Password,
        "ProfileImage": "",
      },
      // {
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     "Access-Control-Allow-Origin": "*",
      //   }
      // }
    )
      .then(res => {
        console.log(res.data);
        setMessage("Successfully Registered")
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          props.navigation.navigate("LogIn")
        }, 1000);
      })

      .catch(err => {
        console.log('Axios Error:', err);

        setMessage("Couldn't Register")
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 2000);
      })
  }


  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.text} 
        onPress={() => {
          console.log("HHHHHHHHH");
          axios.post('http://localhost:3000/test')
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log("Lo karlo baat ");
          })
        }}
        >Sign Up</Text>
        <View style={styles.rect2}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder}
            onChangeText={text => {
              setName(text)
            }}
          ></TextInput>
        </View>
        <View style={styles.rect3}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder1}
            onChangeText={text => {
              setEmail(text)
            }}
          ></TextInput>
        </View>
        <View style={styles.rect4Stack}>
          <View style={styles.rect4}></View>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(119,134,146,1)"
            secureTextEntry={true}
            style={styles.placeholder2}
            onChangeText={text => {
              setPassword(text)
            }}
          ></TextInput>
        </View>
        <View style={styles.rect5Stack}>
          <View style={styles.rect5}></View>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="rgba(119,134,146,1)"
            secureTextEntry={true}
            style={styles.placeholder3}
            onChangeText={text => {
              setConfirmPassword(text)
            }}
          ></TextInput>
        </View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={ShowSuccess}
          onDismiss={() => setShowSuccess(false)}
        >
          <View style={{ height: Dimensions.get('screen').height, width: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 15, shadowColor: 'gray', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 10, borderRadius: 10, elevation: 10 }}>
              <Text style={{ fontSize: 20 }} onPress={() => setShowSuccess(false)}>{Message}</Text>
            </View>
          </View>
        </Modal>
        <View style={styles.rect6Row}>
          <View style={styles.rect6}></View>
          <Text style={styles.by}>By signing up, you accept the</Text>
          <Text style={styles.termsOfService}>Terms of Service</Text>
        </View>
        <View style={styles.andRow}>
          <Text style={styles.and}>and</Text>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </View>
        <TouchableOpacity
          onPress={() => onLoginPressed()}
          style={styles.submitBtn1}
        >
          <Text style={styles.submit2}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.loremIpsum1Row}>
          <Text style={styles.loremIpsum1}>_________________</Text>
          <Text style={styles.or3}>or</Text>
          <Text style={styles.loremIpsum2}>_________________</Text>
        </View>
        <View style={styles.rect9RowRow}>
          <View style={styles.rect9Row}>
            <View style={styles.rect9}>
              <Image
                source={require("./images/fb_icon.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
            <View style={styles.rect7}>
              <Image
                source={require("./images/google_icon.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </View>
          </View>
          <View style={styles.rect8Stack}>
            <View style={styles.rect8}></View>
            <Image
              source={require("./images/twitter_icon.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
          </View>
        </View>
        <View style={styles.termsOfService1Stack}>
          <Text style={styles.termsOfService1}></Text>
          <Text style={styles.termsOfService2}>
            Or sign up using these accounts.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 340,
    height: 679,
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 30,
    marginTop: 42,
    alignSelf: "center"
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    width: 189,
    fontSize: 40,
    textAlign: "center",
    height: 56,
    marginTop: 49,
    alignSelf: "center"
  },
  rect2: {
    width: 248,
    height: 41,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    marginTop: 32,
    alignSelf: "center"
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "left",
    alignSelf: "center"
  },
  rect3: {
    width: 248,
    height: 41,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    marginTop: 27,
    alignSelf: "center"
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "left",
    alignSelf: "center"
  },
  rect4: {
    top: 0,
    width: 248,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    left: 0
  },
  placeholder2: {
    top: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "left",
    left: 29
  },
  rect4Stack: {
    width: 248,
    height: 42,
    marginTop: 30,
    marginLeft: 46
  },
  rect5: {
    top: 0,
    width: 248,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    left: 0
  },
  placeholder3: {
    top: 1,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "left",
    left: 29
  },
  rect5Stack: {
    width: 248,
    height: 42,
    marginTop: 27,
    marginLeft: 46
  },
  rect6: {
    width: 14,
    height: 15,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 9
  },
  by: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12,
    marginLeft: 8,
    marginTop: 1
  },
  termsOfService: {
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    fontSize: 12,
    marginLeft: 2,
    marginTop: 1
  },
  rect6Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 30,
    marginRight: 41
  },
  and: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  },
  privacyPolicy: {
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    fontSize: 12,
    marginLeft: 5
  },
  andRow: {
    height: 16,
    flexDirection: "row",
    marginLeft: 52,
    marginRight: 189
  },
  submitBtn1: {
    width: 139,
    height: 39,
    backgroundColor: "rgba(184,97,100,1)",
    borderWidth: 1,
    borderColor: "rgba(184,97,100,1)",
    borderRadius: 100,
    marginTop: 22,
    alignSelf: "center"
  },
  submit2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    width: 74,
    height: 20,
    textAlign: "center",
    marginTop: 7,
    alignSelf: "center"
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10
  },
  or3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 10
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10,
    marginLeft: 11
  },
  loremIpsum1Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 77,
    marginRight: 75
  },
  rect9: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 50
  },
  image2: {
    width: 38,
    height: 33,
    marginTop: 5,
    marginLeft: 3
  },
  rect7: {
    width: 43,
    height: 43,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 50,
    marginLeft: 19
  },
  image1: {
    width: 32,
    height: 30,
    marginTop: 7,
    alignSelf: "center"
  },
  rect9Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 12
  },
  rect8: {
    top: 12,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 50,
    left: 8,
    right: 8
  },
  image3: {
    top: 0,
    height: 35,
    right: 0,
    width: 35,
    alignSelf: "center",
    marginTop: 16,
    marginLeft: 2
  },
  rect8Stack: {
    height: 68,
    flex: 1,
    marginLeft: 11
  },
  rect9RowRow: {
    height: 68,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 87,
    marginRight: 78
  },
  termsOfService1: {
    top: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    textAlign: "center",
    left: 122
  },
  termsOfService2: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(184,97,100,1)",
    textAlign: "center",
    width: 244,
    height: 22,
    left: 0
  },
  termsOfService1Stack: {
    width: 244,
    height: 22,
    marginLeft: 48
  }
});

export default SignUp;