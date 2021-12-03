import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";

function AcRemote(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.rect2Row}>
            <View style={styles.rect2}>
              <FeatherIcon name="moon" style={styles.icon2}></FeatherIcon>
            </View>
            <View style={styles.rect3}>
              <MaterialCommunityIconsIcon
                name="snowflake"
                style={styles.icon3}
              ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.rect4}>
              <MaterialCommunityIconsIcon
                name="fan"
                style={styles.icon4}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
          <View style={styles.sleepRow}>
            <Text style={styles.sleep}>Sleep</Text>
            <Text style={styles.freeze}>Freeze</Text>
            <Text style={styles.fan}>Fan</Text>
          </View>
          <View style={styles.rect5Row}>
            <View style={styles.rect5}>
              <FeatherIcon
                name="chevrons-down"
                style={styles.icon6}
              ></FeatherIcon>
            </View>
            <View style={styles.rect8}>
              <Image
                source={require("./images/air_icon.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
            </View>
            <View style={styles.rect7}>
              <SimpleLineIconsIcon
                name="energy"
                style={styles.icon7}
              ></SimpleLineIconsIcon>
            </View>
          </View>
          <View style={styles.swingRow}>
            <Text style={styles.swing}>Swing</Text>
            <Text style={styles.breeze}>Breeze</Text>
            <Text style={styles.energy}>Energy</Text>
          </View>
        </View>
        <Center horizontal>
          <Svg viewBox="0 0 97.45 100.45" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(178,94,97,1)"
              cx={49}
              cy={50}
              rx={49}
              ry={50}
            ></Ellipse>
          </Svg>
        </Center>
        <Center horizontal>
          <Image
            source={require("./images/power_icon.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </Center>
      </View>
      <View style={styles.image2Row}>
          <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("YourAppliance")}
            > 
                <Image
                source={require("./images/back_arrow.png")}
                resizeMode="contain"
                style={styles.image2}
                ></Image>
            </TouchableOpacity>
          </View>
        <View style={styles.imageStack}>
          <Image
            source={require("./images/Red_AC.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.loremIpsum}>26</Text>
          <Text style={styles.c2}>°C</Text>
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
    height: "100%",
    position: "absolute",
    backgroundColor: "#304454",
    borderRadius: 30,
    top: 51,
    left: 0,
    right: 0,
    alignItems: "center"
  },
  rect2: {
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    width: 60,
    marginTop: 3
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: 35,
    width: 35,
    marginTop: 10,
    marginLeft: 12
  },
  rect3: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    marginLeft: 55
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    height: 39,
    width: 36,
    marginTop: 11,
    alignSelf: "center"
  },
  rect4: {
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    width: 60,
    marginLeft: 53,
    marginTop: 3
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: 50,
    width: 43,
    marginTop: 10,
    marginLeft: 11
  },
  rect2Row: {
    height: 63,
    flexDirection: "row",
    marginLeft: 35,
    marginRight: 37,
    marginBottom: 30
  },
  sleep: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 53,
    fontSize: 16,
    textAlign: "center",
    marginTop: -1
  },
  freeze: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 53,
    fontSize: 16,
    textAlign: "center",
    marginLeft: 63
  },
  fan: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 34,
    fontSize: 16,
    textAlign: "center",
    marginLeft: 69,
    marginTop: -1
  },
  sleepRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 38,
    marginRight: 50
  },
  rect5: {
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    width: 60,
    marginTop: 4
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    height: 35,
    width: 35,
    marginTop: 12,
    marginLeft: 12
  },
  rect8: {
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    width: 60,
    marginLeft: 55
  },
  image4: {
    width: 41,
    height: 47,
    marginTop: 7,
    alignSelf: "center",
    tintColor: "#FFFFFF"
  },
  rect7: {
    height: 60,
    backgroundColor: "rgba(128,140,151,1)",
    borderRadius: 50,
    width: 60,
    marginLeft: 54,
    marginTop: 4
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    height: 39,
    width: 35,
    marginTop: 11,
    marginLeft: 12
  },
  rect5Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 35,
    marginRight: 36
  },
  swing: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 53,
    fontSize: 16,
    textAlign: "center"
  },
  breeze: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 53,
    fontSize: 16,
    textAlign: "center",
    marginLeft: 63
  },
  energy: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 53,
    fontSize: 16,
    textAlign: "center",
    marginLeft: 59
  },
  swingRow: {
    height: 19,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 38,
    marginRight: 41
  },
  ellipse: {
    top: 0,
    width: 97,
    height: 100,
    position: "absolute"
  },
  image3: {
    top: 17,
    width: 55,
    height: 70,
    position: "absolute"
  },
  rectStack: {
    height: 352,
    marginTop: 413
  },
  image2: {
    width: 35,
    height: 35
  },
  image: {
    top: 19,
    width: 200,
    height: 200,
    position: "absolute",
    left: 50,
  },
  selectAppliance: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#304454",
    fontSize: 25,
    width: 251,
    height: 37
  },
  loremIpsum: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(48,68,84,1)",
    fontSize: 100,
    width: 129,
    textAlign: "center",
    bottom: 0,
    left: 80,
    height: 120
  },
  c2: {
    top: 225,
    left: 190,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(48,68,84,1)",
    fontSize: 30,
    height: 35,
    width: 40,
    textAlign: "center"
  },
  imageStack: {
    width: 251,
    height: 329,
    alignSelf: "center"
  },
  image2Row: {
    height: 330,
    flexDirection: "row",
    marginTop: -725,
    marginLeft: 15,
    marginRight: 59
  }
});

export default AcRemote;