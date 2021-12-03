import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

function TvRemote(props) {
  return (
    <View style={styles.container}>
        <View style={styles.backArrowView}> 
            <TouchableOpacity
                onPress={() => props.navigation.navigate("YourAppliance")}> 
                <Image
                source={require("./images/back_arrow.png")}
                resizeMode="contain"
                style={styles.backArrow}
                ></Image>
            </TouchableOpacity>
        </View>

        <View style={styles.ellipseStackRow}>
            <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse}>
                    <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                    ></Ellipse>
                </Svg>
                <FeatherIcon name="power" style={styles.icon8}></FeatherIcon>
            </View>

            <View style={styles.ellipse2Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse2}>
                    <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                    ></Ellipse>
                </Svg>
                <FontAwesomeIcon
                    name="mail-forward"
                    style={styles.icon12}
                ></FontAwesomeIcon>
            </View>

            <View style={styles.ellipse3Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse3}>
                    <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                    ></Ellipse>
                </Svg>
                <FontAwesomeIcon name="bars" style={styles.icon11}></FontAwesomeIcon>
            </View>
        </View>

        <View style={styles.ellipse6StackRow}>
            <View style={styles.ellipse6Stack}>
            <Svg viewBox="0 0 50 50" style={styles.ellipse6}>
                <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
                ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
                name="rhombus-outline"
                style={styles.icon13}
            ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.ellipse5Stack}>
            <Svg viewBox="0 0 50 50" style={styles.ellipse5}>
                <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
                ></Ellipse>
            </Svg>
            <MaterialCommunityIconsIcon
                name="numeric-1-box-outline"
                style={styles.icon9}
            ></MaterialCommunityIconsIcon>
            </View>
            <View style={styles.ellipse4Stack}>
            <Svg viewBox="0 0 50 50" style={styles.ellipse4}>
                <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
                ></Ellipse>
            </Svg>
            <EntypoIcon name="back" style={styles.icon10}></EntypoIcon>
            </View>
        </View>

        <View style={styles.ellipse7Stack}>
            <Svg viewBox="0 0 200.06 200.03" style={styles.ellipse7}>
            <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={100}
                cy={100}
                rx={100}
                ry={100}
            ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 70 70" style={styles.ellipse8}>
            <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(117,130,141,1)"
                cx={35}
                cy={35}
                rx={35}
                ry={35}
            ></Ellipse>
            </Svg>
            <Text style={styles.ok}>OK</Text>
            <EntypoIcon name="dot-single" style={styles.icon14}></EntypoIcon>
            <EntypoIcon name="dot-single" style={styles.icon15}></EntypoIcon>
            <EntypoIcon name="dot-single" style={styles.icon16}></EntypoIcon>
            <EntypoIcon name="dot-single" style={styles.icon18}></EntypoIcon>
        </View>

        <View style={styles.ellipse9StackStackColumnRow}>
            <View style={styles.ellipse9StackStackColumn}>
            <View style={styles.ellipse9StackStack}>
                <View style={styles.ellipse9Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse9}>
                    <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                    ></Ellipse>
                </Svg>
                <View style={styles.rect}>
                    <Text style={styles.ch}>CH</Text>
                </View>
                <EntypoIcon
                    name="chevron-small-up"
                    style={styles.icon}
                ></EntypoIcon>
                <EntypoIcon
                    name="chevron-small-up"
                    style={styles.icon2}
                ></EntypoIcon>
                </View>
                <Svg viewBox="0 0 50 50" style={styles.ellipse10}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                ></Ellipse>
                </Svg>
            </View>
            <View style={styles.ellipse13Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse13}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                ></Ellipse>
                </Svg>
                <EntypoIcon
                name="dots-three-horizontal"
                style={styles.icon5}
                ></EntypoIcon>
            </View>
            </View>
            <View style={styles.ellipse15Stack}>
            <Svg viewBox="0 0 100 100" style={styles.ellipse15}>
                <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(178,94,97,1)"
                cx={50}
                cy={50}
                rx={50}
                ry={50}
                ></Ellipse>
            </Svg>
            <FontAwesomeIcon
                name="microphone"
                style={styles.icon7}
            ></FontAwesomeIcon>
            </View>
            <View style={styles.ellipse11StackStackColumn}>
            <View style={styles.ellipse11StackStack}>
                <View style={styles.ellipse11Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse11}>
                    <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                    ></Ellipse>
                </Svg>
                <View style={styles.rect2}>
                    <Text style={styles.vol}>Vol</Text>
                </View>
                <FeatherIcon name="plus" style={styles.icon3}></FeatherIcon>
                <FeatherIcon name="minus" style={styles.icon4}></FeatherIcon>
                </View>
                <Svg viewBox="0 0 50 50" style={styles.ellipse12}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                ></Ellipse>
                </Svg>
            </View>
            <View style={styles.ellipse14Stack}>
                <Svg viewBox="0 0 50 50" style={styles.ellipse14}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(48,68,84,1)"
                    cx={25}
                    cy={25}
                    rx={25}
                    ry={25}
                ></Ellipse>
                </Svg>
                <SimpleLineIconsIcon
                name="volume-off"
                style={styles.icon6}
                ></SimpleLineIconsIcon>
            </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon8: {
    top: 9,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  backArrow: {
    width: 35,
    height: 35
  },
  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 40,
    marginLeft: 20
  },
  ellipseStack: {
    width: 50,
    height: 50
  },
  ellipse2: {
    top: 0,
    width: 50,
    height: 50,
    position: "absolute",
    left: 0
  },
  icon12: {
    top: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    left: 12
  },
  ellipse2Stack: {
    width: 50,
    height: 50,
    marginLeft: 92
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon11: {
    top: 12,
    left: 14,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  ellipse3Stack: {
    width: 50,
    height: 50,
    marginLeft: 90
  },
  ellipseStackRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 40,
    alignSelf: "center"
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon13: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    alignSelf: "center",
    marginTop: 8
  },
  ellipse6Stack: {
    width: 50,
    height: 50
  },
  ellipse5: {
    top: 0,
    width: 50,
    height: 50,
    position: "absolute",
    left: 0
  },
  icon9: {
    top: 11,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    left: 12
  },
  ellipse5Stack: {
    width: 50,
    height: 50,
    marginLeft: 92
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon10: {
    top: 11,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 28
  },
  ellipse4Stack: {
    width: 50,
    height: 50,
    marginLeft: 90
  },
  ellipse6StackRow: {
    height: 50,
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center"
  },
  ellipse7: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    left: 0
  },
  ellipse8: {
    top: 65,
    width: 70,
    height: 70,
    position: "absolute",
    left: 65
  },
  ok: {
    top: 87,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    left: 85
  },
  icon14: {
    top: 0,
    position: "absolute",
    color: "rgba(117,130,141,1)",
    fontSize: 40,
    left: 80
  },
  icon15: {
    top: 79,
    position: "absolute",
    color: "rgba(117,130,141,1)",
    fontSize: 40,
    right: 2
  },
  icon16: {
    top: 79,
    left: 0,
    position: "absolute",
    color: "rgba(117,130,141,1)",
    fontSize: 40
  },
  icon18: {
    top: 159,
    position: "absolute",
    color: "rgba(117,130,141,1)",
    fontSize: 40,
    left: 80
  },
  ellipse7Stack: {
    width: 200,
    height: 204,
    marginTop: 68,
    alignSelf: "center"
  },
  ellipse9: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  rect: {
    top: 25,
    left: 0,
    width: 50,
    height: 75,
    position: "absolute",
    backgroundColor: "rgba(48,68,84,1)"
  },
  ch: {
    fontFamily: "roboto-regular",
    color: "rgba(117,130,141,1)",
    fontSize: 19,
    marginTop: 23,
    marginLeft: 14
  },
  icon: {
    top: 0,
    left: 5,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    top: 80,
    left: 6,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    zIndex: 4,
    transform: [
      {
        rotate: "180.00deg"
      }
    ]
  },
  ellipse9Stack: {
    top: 0,
    left: 0,
    width: 50,
    height: 121,
    position: "absolute"
  },
  ellipse10: {
    top: 75,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  ellipse9StackStack: {
    width: 50,
    height: 125
  },
  ellipse13: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon5: {
    top: 14,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 22
  },
  ellipse13Stack: {
    width: 50,
    height: 50,
    marginTop: 11,
    marginLeft: 1
  },
  ellipse9StackStackColumn: {
    width: 51
  },
  ellipse15: {
    top: 0,
    width: 100,
    height: 100,
    position: "absolute",
    left: 0
  },
  icon7: {
    top: 32,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    left: 38
  },
  ellipse15Stack: {
    width: 100,
    height: 100,
    marginLeft: 52,
    marginTop: 59
  },
  ellipse11: {
    top: 65,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  rect2: {
    top: 15,
    left: 0,
    width: 50,
    height: 75,
    position: "absolute",
    backgroundColor: "rgba(48,68,84,1)"
  },
  vol: {
    fontFamily: "roboto-regular",
    color: "rgba(117,130,141,1)",
    fontSize: 19,
    marginTop: 25,
    marginLeft: 12
  },
  icon3: {
    top: 0,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    zIndex: 4
  },
  icon4: {
    top: 76,
    left: 13,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 26
  },
  ellipse11Stack: {
    top: 10,
    left: 0,
    width: 50,
    height: 115,
    position: "absolute"
  },
  ellipse12: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  ellipse11StackStack: {
    width: 50,
    height: 125
  },
  ellipse14: {
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    position: "absolute"
  },
  icon6: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 30
  },
  ellipse14Stack: {
    width: 50,
    height: 50,
    marginTop: 11,
    marginLeft: 1
  },
  ellipse11StackStackColumn: {
    width: 51,
    marginLeft: 47
  },
  ellipse9StackStackColumnRow: {
    height: 186,
    flexDirection: "row",
    marginTop: 52,
    alignSelf: "center"
  },
  cupertinoHeaderWithSubTitle: {
    height: 50,
    width: 360,
    backgroundColor: "rgba(178,94,97,1)",
    marginTop: -688
  }
});

export default TvRemote;