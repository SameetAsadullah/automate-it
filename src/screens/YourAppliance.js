import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';

const appliances = ["Bulb", "TV", "AC", "Music"];

function YourAppliance(props) {

  function renderImage (appliance) {
  }


  return (
    <View>
      <View style={styles.backArrowView}> 
        <TouchableOpacity
          onPress={() => props.navigation.navigate("HomePage")}
        > 
          <Image
            source={require("./images/back_arrow.png")}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.mainHeading}>Your Appliances</Text>
      </View>
      <View style={styles.grid}>
        {
          appliances.map(Item => {
            return (
                <LinearGradient
                    key={Item.key}
                    style = {styles.appBox}
                    colors = {['#BF585F', '#574B58']}
                >
                  
                    <Text style={styles.appText}>{Item}</Text>
                </LinearGradient>
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backArrowView: {
    width: 35,
    height: 35,
    marginTop: 30,
    marginLeft: 20,
  },
  backArrow: {
    width: 35,
    height: 35
  },
  mainHeading: {
    fontFamily: "roboto-700",
    color: "#35485D",
    textAlign: "center",
    width: 230,
    height: 100,
    fontSize: 40,
    marginTop: 20,
    alignSelf: "center"
  },
  appBox: {
    height: 150,
    width: 150,
    padding: 30,
    borderRadius: 30,
    backgroundColor: '#8C505D',
    alignItems: 'center',
    marginTop: 20
  },
  grid: {
    width: '100%',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  appText: {
    color: '#fff'
  }
});

export default YourAppliance;