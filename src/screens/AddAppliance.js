import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";

function AddAppliance(props) {
  return (
    <View style={styles.container}>
        <View style={styles.backArrowView}> 
            <TouchableOpacity
                onPress={() => props.navigation.navigate("YourAppliance")}
            > 
                <Image
                source={require("./images/back_arrow.png")}
                resizeMode="contain"
                style={styles.backArrow}
                ></Image>
            </TouchableOpacity>
        </View>
      <View style={styles.iconRow}>
        <Text style={styles.text}>Add Appliance</Text>
      </View>
      <View style={styles.rectStackStackRow}>
        <View style={styles.rectStackStack}>
          <View style={styles.rectStack}>
            <View style={styles.rect}>
              <View style={styles.imageStack}>
                <Image
                  source={require("./images/AC.png")}
                  resizeMode="cover"
                  style={styles.image}
                ></Image>
                <Text style={styles.ac}>AC</Text>
              </View>
            </View>
            <Image
              source={require("./images/FAN.png")}
              resizeMode="cover"
              style={styles.image3}
            ></Image>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.fan}>Fan</Text>
          </View>
        </View>
        <View style={styles.rect1Column}>
          <View style={styles.rect1}>
            <Image
              source={require("./images/Music_player.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.musicBox}>MusicBox</Text>
          </View>
          <View style={styles.rect2}>
            <Image
              source={require("./images/Bulb.png")}
              resizeMode="cover"
              style={styles.image4}
            ></Image>
            <Text style={styles.lightBulb}>Light-Bulb</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.image5Stack}>
          <Image
            source={require("./images/TV.png")}
            resizeMode="cover"
            style={styles.image5}
          ></Image>
          <Text style={styles.tv}>TV</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 28
  },
  text: {
    fontFamily: "alike-angular-regular",
    color: "#121212",
    fontSize: 35,
    marginTop: 20,
    textAlign: "center",
    alignSelf: "center"
  },
  iconRow: {
    height: 74,
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center"
  },
  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 30,
    marginLeft: 20
  },
  backArrow: {
    width: 35,
    height: 35
  },
  rect: {
    top: 0,
    left: 0,
    width: 175,
    height: 168,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    top: 0,
    left: 0,
    width: 143,
    height: 132,
    position: "absolute"
  },
  ac: {
    top: 120,
    left: 55,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 25
  },
  imageStack: {
    width: 143,
    height: 150,
    marginTop: 14,
    marginLeft: 22
  },
  image3: {
    top: 161,
    left: 22,
    width: 143,
    height: 157,
    position: "absolute",
    zIndex: 2
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 175,
    height: 318,
    position: "absolute"
  },
  rect3: {
    top: 169,
    left: 0,
    width: 175,
    height: 168,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  fan: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 134,
    marginLeft: 69
  },
  rectStackStack: {
    width: 175,
    height: 337
  },
  rect1: {
    width: 185,
    height: 168,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image2: {
    width: 132,
    height: 109,
    marginTop: 18,
    marginLeft: 41
  },
  musicBox: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 11,
    marginLeft: 51
  },
  rect2: {
    width: 184,
    height: 168,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 1,
    marginLeft: 1
  },
  image4: {
    width: 139,
    height: 100,
    marginTop: 21,
    marginLeft: 32
  },
  lightBulb: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 11,
    marginLeft: 51
  },
  rect1Column: {
    width: 185
  },
  rectStackStackRow: {
    height: 337,
    flexDirection: "row",
    marginTop: 40,
    alignSelf: "center"
  },
  rect4: {
    width: 184,
    height: 168,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    alignSelf: "center"
  },
  image5: {
    top: 0,
    width: 161,
    height: 134,
    position: "absolute",
    left: 0
  },
  tv: {
    top: 129,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    textAlign: "center",
    left: 65
  },
  image5Stack: {
    width: 161,
    height: 159,
    marginLeft: 11
  }
});

export default AddAppliance;