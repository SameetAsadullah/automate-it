import React, { Component } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from "react-native-gesture-handler";

function AddAppliance(props) {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backArrowView}> 
        <TouchableOpacity
          onPress={() => props.navigation.navigate("YourAppliance")}
        > 
          <Image
            source={require("./images/back_arrow.png")}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.addAppliances}>Add Appliances</Text>

      <View style={styles.tableContainer}>

        <View style={styles.rowContainer}>

          <View style={styles.tableElement1}>
            <TouchableOpacity>
              <ImageBackground
                source={require("./images/AC.png")}
                resizeMode="contain"
                style={{width: 115, height: 135, marginLeft: 17}}
                imageStyle={{tintColor: "#FFFFFF"}}
              >
                <Text style={styles.tableText}>AC</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={{width:10}} />

          <View style={styles.tableElement1}>
            <TouchableOpacity>
              <ImageBackground
                source={require("./images/BULB.png")}
                resizeMode="contain"
                style={{width: 115, height: 135, marginLeft: 17}}
                imageStyle={{tintColor: "#FFFFFF"}}
              >
                <Text style={styles.tableText}>Bulb</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.rowContainer1}>

          <View style={styles.tableElement2}>
            <TouchableOpacity style={{top:30, height:100}}>
              <ImageBackground
                source={require("./images/MB.png")}
                resizeMode="contain"
                style={{width: 115, height: 70, marginLeft: 17}}
                imageStyle={{tintColor: "#FFFFFF"}}
              >
                <Text style={styles.tableText1}>Music Box</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <View style={styles.tableElement2}>
            <TouchableOpacity>
              <ImageBackground
                source={require("./images/TV.png")}
                resizeMode="contain"
                style={{width: 120, height: 128, marginLeft: 17}}
                imageStyle={{tintColor: "#FFFFFF"}}
              >
                <Text style={styles.tableText}>TV</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backArrow: {
    width: 35,
    height: 35
  },

  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 30,
    marginLeft: 30,
  },

  addAppliances: {
    fontFamily: "roboto-700",
    color: "#35485D",
    textAlign: "center",
    width: 230,
    height: 100,
    fontSize: 40,
    marginTop: 20,
    alignSelf: "center"
  },

  tableContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    alignContent: 'center',
    padding: 50
  },

  rowContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  rowContainer1: {
    flex: 3,
    flexDirection: "row",
    justifyContent: 'space-between'
  },

  tableText: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 99,
    height: 20,
    textAlign: "center",
    fontSize: 16,
    marginTop: 110,
    marginLeft: 9,
    zIndex: 10
  },

  tableText1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    width: 99,
    height: 20,
    textAlign: "center",
    fontSize: 16,
    marginTop: 80,
    marginLeft: 9,
    zIndex: 10
  },

  tableElement1: {
    width: 150,
    height: 150,
    backgroundColor: "#B25D60",
    borderRadius: 30,
  },

  tableElement2: {
    width: 150,
    height: 150,
    backgroundColor: "#84545C",
    borderRadius: 30,
  }
});

export default AddAppliance;