import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";

function ApplianceProperties(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect7}>
        <View style={styles.rect6}>
          <Text style={styles.loremIpsum}>Appliance Specifications</Text>
        </View>
        <Text style={styles.brand}>Brand</Text>
        <View style={styles.rect1}>
          <TextInput
            placeholder="Enter Brand"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder1}
          ></TextInput>
        </View>
        <Text style={styles.model}>Model</Text>
        <View style={styles.rect4}>
          <TextInput
            placeholder="Enter Model"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder2}
          ></TextInput>
        </View>
        <Text style={styles.name}>Name</Text>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder3}
          ></TextInput>
        </View>
        <Text style={styles.frequency}>Frequency</Text>
        <View style={styles.rect2}>
          <TextInput
            placeholder="Enter Frequency"
            placeholderTextColor="rgba(119,134,146,1)"
            style={styles.placeholder4}
          ></TextInput>
        </View>
        <View style={styles.rect5}>
          <View style={styles.addRow}>
            <Text style={styles.add}>Add</Text>
            <Image
              source={require("./images/back_arrow.png")}
              resizeMode="contain"
              style={styles.image1}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("./images/back_arrow.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.selectAppliance}>Select Appliance</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(48,68,84,1)"
  },
  rect7: {
    height: 652,
    backgroundColor: "rgba(242,243,243,1)",
    borderRadius: 30,
    marginTop: 110
  },
  rect6: {
    width: 313,
    height: 59,
    backgroundColor: "rgba(184,97,100,1)",
    borderRadius: 30,
    marginTop: 38,
    marginLeft: 24
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 23,
    marginTop: 15,
    marginLeft: 28
  },
  brand: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 20,
    marginTop: 39,
    marginLeft: 74
  },
  rect1: {
    width: 248,
    height: 41,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    marginTop: 14,
    marginLeft: 56
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "center",
    marginLeft: 29
  },
  model: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 20,
    marginTop: 17,
    marginLeft: 74
  },
  rect4: {
    width: 248,
    height: 41,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 56
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "center",
    marginLeft: 29
  },
  name: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 74
  },
  rect3: {
    width: 248,
    height: 41,
    position: "absolute",
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    left: 0,
    top: 1
  },
  placeholder3: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "center",
    top: 0,
    left: 29
  },
  rect3Stack: {
    width: 248,
    height: 42,
    marginTop: 9,
    marginLeft: 56
  },
  frequency: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    fontSize: 20,
    marginTop: 14,
    marginLeft: 74
  },
  rect2: {
    width: 248,
    height: 41,
    backgroundColor: "rgba(77,96,110,1)",
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 56
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 189,
    borderRadius: 30,
    textAlign: "center",
    marginLeft: 29
  },
  rect5: {
    width: 109,
    height: 49,
    backgroundColor: "rgba(184,97,100,1)",
    borderRadius: 30,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 126
  },
  add: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 1
  },
  image1: {
    width: 22,
    height: 28,
    transform: [
      {
        rotate: "180.00deg"
      }
    ],
    marginLeft: 14,
    tintColor: "#FFFFFF"
  },
  addRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 12,
    marginLeft: 22,
    marginTop: 10
  },
  image2: {
    width: 35,
    height: 35,
    tintColor: "#FFFFFF"
  },
  selectAppliance: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 235,
    height: 37,
    marginTop: 2
  },
  image2Row: {
    height: 39,
    flexDirection: "row",
    marginTop: -723,
    marginLeft: 15,
    marginRight: 75
  }
});

export default ApplianceProperties;