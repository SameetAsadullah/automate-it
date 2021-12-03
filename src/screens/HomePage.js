import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function HomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          onPress={() => props.navigation.navigate("MicrophoneInput")}
          style={styles.button}>
          <Image
            source={require("./images/mic_icon.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableOpacity>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("YourAppliance")}
          > 
            <Image
              source={require("./images/phone_icon.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rectStack}>
        <View style={styles.rect}></View>
        <Svg viewBox="0 0 149.92 150.42" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(119,134,146,1)"
            cx={75}
            cy={75}
            rx={75}
            ry={75}
          ></Ellipse>
          <Image
            source={require("./images/profile_icon.png")}
            resizeMode="contain"
            style={styles.image}
        ></Image>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: 153,
    height: 298,
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 30
  },
  image3: {
    width: 95,
    height: 161,
    marginTop: 69,
    marginLeft: 29
  },
  rect3: {
    top: 0,
    left: 6,
    width: 157,
    height: 298,
    position: "absolute",
    backgroundColor: "rgba(48,68,84,1)",
    borderRadius: 30
  },
  image4: {
    top: 95,
    left: 0,
    width: 170,
    height: 107,
    position: "absolute",
    tintColor: "#AAAAAA"
  },
  rect3Stack: {
    width: 170,
    height: 298,
    marginLeft: 15
  },
  buttonRow: {
    height: 298,
    flexDirection: "row",
    marginTop: 370,
    alignSelf: "center"
  },
  rect: {
    top: 0,
    width: "100%",
    height: 270,
    backgroundColor: "rgba(184,97,100,1)",
    borderRadius: 40,
    borderWidth: 5,
    borderColor: "rgba(184,97,100,1)",
    flexDirection: "row"
  },
  image6: {
    width: 30,
    height: 30,
    marginTop: 7,
    tintColor: "#FFFFFF"
  },
  image5: {
    width: 50,
    height: 50,
    marginLeft: 290,
    tintColor: "#FFFFFF"
  },
  image6Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 15,
    marginTop: 68
  },
  ellipse: {
    top: -80,
    width: 150,
    height: 150,
    alignSelf: "center"
  },
  image: {
    width: 109,
    height: 136,
    alignSelf: "center"
  },
  rectStack: {
    width: "100%",
    height: 344,
    marginTop: -701
  }
});

export default HomePage;