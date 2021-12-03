import React, { Component } from "react";
import Svg, { Ellipse } from "react-native-svg";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Switch,
  Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function YourAppliance(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backArrowView}> 
          <TouchableOpacity
              onPress={() => props.navigation.navigate("HomePage")}
          > 
            <Image
            source={require("./images/back_arrow.png")}
            resizeMode="contain"
            style={styles.backArrow}
            ></Image>
          </TouchableOpacity>
      </View>
      <Text style={styles.yourAppliances}>Your Appliances</Text>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <TouchableOpacity
              onPress={() => props.navigation.navigate("AcRemote")}
          > 
              <ImageBackground
                  source={require("./images/AC.png")}
                  resizeMode="contain"
                  style={styles.image6}
                  imageStyle={styles.image6_imageStyle}
              >
                <Text style={styles.acRoom}>AC-Room</Text>
              </ImageBackground>
          </TouchableOpacity>
          <Switch
            value={true}
            trackColor={{
                true: "rgba(48,68,84,1)",
                false: "rgba(255,255,255,1)"
            }}
            thumbColor="rgba(117,130,141,1)"
            style={styles.switch6}
          ></Switch>
        </View>
        <View style={styles.rect3}>
          <View style={styles.image4Stack}>
              <ImageBackground
              source={require("./images/FAN.png")}
              resizeMode="contain"
              style={styles.image4}
              imageStyle={styles.image4_imageStyle}
              >
              <Switch
                  value={true}
                  trackColor={{
                  true: "rgba(48,68,84,1)",
                  false: "rgba(255,255,255,1)"
                  }}
                  thumbColor="rgba(117,130,141,1)"
                  style={styles.switch4}
              ></Switch>
              </ImageBackground>
              <Text style={styles.fanKitchen}>Fan-Kitchen</Text>
          </View>
        </View>
      </View>
      <View style={styles.rect4Row}>
          <View style={styles.rect4}>
              <View style={styles.image3Stack}>
                  <Image
                  source={require("./images/FAN.png")}
                  resizeMode="contain"
                  style={styles.image3}
                  ></Image>
                  <Text style={styles.fanLounge}>Fan-Lounge</Text>
                  <Switch
                  value={true}
                  trackColor={{
                      true: "rgba(48,68,84,1)",
                      false: "rgba(255,255,255,1)"
                  }}
                  thumbColor="rgba(117,130,141,1)"
                  style={styles.switch5}
                  ></Switch>
              </View>
          </View>
          <View style={styles.rect5Stack}>
          <View style={styles.rect5}>
              <Text style={styles.bulbLounge}>Bulb-Lounge</Text>
          </View>
          <ImageBackground
              source={require("./images/Bulb.png")}
              resizeMode="contain"
              style={styles.image5}
              imageStyle={styles.image5_imageStyle}
          >
              <Switch
              value={true}
              trackColor={{
                  true: "rgba(48,68,84,1)",
                  false: "rgba(255,255,255,1)"
              }}
              thumbColor="rgba(117,130,141,1)"
              style={styles.switch3}
              ></Switch>
          </ImageBackground>
          </View>
      </View>
      <View style={styles.rect6StackRow}>
          <View style={styles.rect6Stack}>
              <View style={styles.rect6}>
                  <TouchableOpacity
                      onPress={() => props.navigation.navigate("TvRemote")}
                      style={styles.rect6}
                  > 
                      <Image
                      source={require("./images/TV.png")}
                      resizeMode="contain"
                      style={styles.image}
                      ></Image>
                      <Text style={styles.tvLounge}>TV-Lounge</Text>
                  </TouchableOpacity>
              </View>
              <Switch
                  value={true}
                  trackColor={{
                  true: "rgba(48,68,84,1)",
                  false: "rgba(255,255,255,1)"
                  }}
                  thumbColor="rgba(117,130,141,1)"
                  style={styles.switch2}
              ></Switch>
          </View>
          <View style={styles.rect7Stack}>
              <View style={styles.rect6}>
                  <TouchableOpacity
                      onPress={() => props.navigation.navigate("MusicControls")}
                      style={styles.rect6}> 
                      <Image
                      source={require("./images/Music_player.png")}
                      resizeMode="contain"
                      style={styles.image2}
                      ></Image>
                      <Text style={styles.mbRoom}>MB-Room</Text>
                  </TouchableOpacity>
              </View>
              <Switch
                  value={true}
                  trackColor={{
                      true: "rgba(48,68,84,1)",
                      false: "rgba(255,255,255,1)"
                  }}
                  thumbColor="rgba(117,130,141,1)"
                  style={styles.switch}
                  ></Switch>
          </View>
      </View>
      <View style={styles.plusButtonView}>
        <TouchableOpacity
            onPress={() => props.navigation.navigate("AddAppliance")}
        > 
            <Svg viewBox="0 0 70.06 69.64" style={styles.ellipse}>
                <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={35}
                cy={35}
                rx={35}
                ry={35}
                ></Ellipse>
                <Text style={styles.loremIpsum}>+</Text>
            </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    alignSelf: "center"
  },
  plusButtonView: {
    width: 70,
    height: 70,
    marginTop: 280,
    marginLeft: 310
  },
  ellipse: {
    width: 70,
    height: 70
  },
  rect2: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(86,75,87,1)",
    borderRadius: 30
  },
  image6: {
    width: 115,
    height: 147,
    marginLeft: 17
  },
  image6_imageStyle: {
      tintColor: "#FFFFFF"
  },
  switch6: {
    marginTop: 14,
    marginLeft: 90,
    position: "absolute"
  },
  acRoom: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 99,
    height: 18,
    textAlign: "center",
    fontSize: 16,
    marginTop: 118,
    marginLeft: 9
  },
  rect3: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(86,75,87,1)",
    borderRadius: 30,
    marginLeft: 7
  },
  image4: {
    top: 0,
    left: 0,
    width: 108,
    height: 121,
    position: "absolute"
  },
  image4_imageStyle: {
      tintColor: "#FFFFFF"
  },
  switch4: {
    marginLeft: 68
  },
  fanKitchen: {
    top: 106,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 99,
    height: 18,
    textAlign: "center",
    fontSize: 16
  },
  image4Stack: {
    width: 108,
    height: 124,
    marginTop: 14,
    marginLeft: 25
  },
  rect2Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 365,
    alignSelf: "center"
  },
  rect4: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(132,84,92,1)",
    borderRadius: 30,
    marginTop: 11,
    marginLeft: 10
  },
  image3: {
    top: 5,
    left: 0,
    width: 108,
    height: 106,
    position: "absolute",
    tintColor: "#FFFFFF"
  },
  fanLounge: {
    top: 108,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 99,
    height: 22,
    textAlign: "center",
    fontSize: 16
  },
  switch5: {
    position: "absolute",
    top: 0,
    left: 71
  },
  image3Stack: {
    width: 111,
    height: 126,
    marginTop: 17,
    marginLeft: 22
  },
  rect5: {
    top: 11,
    left: 7,
    width: 150,
    height: 150,
    position: "absolute",
    backgroundColor: "rgba(132,84,92,1)",
    borderRadius: 30
  },
  bulbLounge: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 92,
    height: 23,
    textAlign: "center",
    fontSize: 16,
    marginTop: 125,
    marginLeft: 28
  },
  image5: {
    top: 0,
    left: 0,
    width: 167,
    height: 169,
    position: "absolute"
  },
  image5_imageStyle: {
    tintColor: "#FFFFFF"
  },
  switch3: {
      position: "absolute",
    marginTop: 28,
    marginLeft: 101
  },
  rect5Stack: {
    width: 167,
    height: 169
  },
  rect4Row: {
    height: 169,
    flexDirection: "row",
    marginTop: -330,
    alignSelf: "center"
  },
  rect6: {
    width: 150,
    height: 150
  },
  image: {
        width: 100,
        height: 100,
        tintColor: "#FFFFFF",
        alignSelf: "center",
        marginTop: 25,
  },
  switch2: {
    position: "absolute",
    top: 15,
    left: 90
  },
  imageStack: {
    width: 124,
    height: 114,
    marginTop: 14,
    marginLeft: 13
  },
  tvLounge: {
    top: 120,
    left: 37,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 77,
    height: 80,
    textAlign: "center",
    fontSize: 16
  },
  rect6Stack: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(178,94,97,1)",
    borderRadius: 30
  },
  switch: {
        position: "absolute",
        marginTop: 14,
        marginLeft: 93
  },
  image2: {
    width: 60,
    height: 100,
    marginTop: 27,
    tintColor: "#FFFFFF",
    alignSelf: "center"
  },
  backArrow: {
    width: 35,
    height: 35
  },
  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 30,
    marginLeft: 30
  },
  mbRoom: {
    top: 120,
    left: 36,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 77,
    height: 28,
    textAlign: "center",
    fontSize: 16
  },
  rect7Stack: {
    width: 150,
    height: 150,
    marginLeft: 8,
    backgroundColor: "rgba(178,94,97,1)",
    borderRadius: 30
  },
  rect6StackRow: {
    height: 158,
    flexDirection: "row",
    marginTop: -327,
    alignSelf: "center"
  },
  yourAppliances: {
    fontFamily: "roboto-700",
    color: "rgba(48,68,84,1)",
    textAlign: "center",
    width: 230,
    height: 100,
    fontSize: 40,
    marginTop: 5,
    alignSelf: "center"
  },
  image7: {
    width: 35,
    height: 35,
    marginTop: -165,
    marginLeft: 15
  }
});

export default YourAppliance;