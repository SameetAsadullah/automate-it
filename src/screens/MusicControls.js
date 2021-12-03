import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Slider } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MusicControls(props) {
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
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>Hall of Fame{"\n"}- The Script</Text>
      </View>
      <View style={styles.rect2Row}>
        <View style={styles.rect2}>
          <FeatherIcon name="chevrons-left" style={styles.icon}></FeatherIcon>
        </View>
        <View style={styles.rect4}>
          <FontAwesomeIcon name="pause" style={styles.icon3}></FontAwesomeIcon>
        </View>
        <View style={styles.rect3}>
          <FeatherIcon name="chevrons-right" style={styles.icon2}></FeatherIcon>
        </View>
      </View>
      <Slider
        value={50}
        minimumTrackTintColor="rgba(132,84,92,1)"
        thumbTintColor="rgba(178,94,97,1)"
        maximumTrackTintColor="rgba(255,255,255,1)"
        style={styles.slider}
      ></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(48,68,84,1)"
  },
  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 50,
    marginLeft: 30
  },
  backArrow: {
    width: 35,
    height: 35,
    tintColor: "#FFFFFF"
  },
  rect: {
    width: 284,
    height: 208,
    backgroundColor: "rgba(178,94,97,1)",
    borderRadius: 69,
    marginTop: 60,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    width: 196,
    height: 78,
    textAlign: "center",
    marginTop: 65,
    alignSelf: "center"
  },
  rect2: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(132,84,92,1)",
    borderRadius: 20
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 40,
    height: 40,
    marginTop: 14,
    marginLeft: 12
  },
  rect4: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(132,84,92,1)",
    borderRadius: 20,
    marginLeft: 7
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 35,
    marginTop: 15,
    marginLeft: 18
  },
  rect3: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(132,84,92,1)",
    borderRadius: 20,
    marginLeft: 7
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 15
  },
  rect2Row: {
    height: 70,
    flexDirection: "row",
    marginTop: 120,
    alignSelf: "center"
  },
  slider: {
    height: 100,
    width: 271,
    marginTop: 12,
    alignSelf: "center"
  }
});

export default MusicControls;