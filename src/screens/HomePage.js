import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ScrollView, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

const d_height = Dimensions.get('window').height;
const d_width = Dimensions.get('window').width;

function HomePage(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../screens/images/bg.png")} style={styles.bg} />
      <View style={styles.profilePic}>
        <Image source={require('../screens/images/profile_icon.png')} style={styles.profileIcon} />
      </View>
      <View style={{flex: 1, height: '100%', width: '100%', position: "absolute", alignItems: 'center'}}>
        <View style={styles.options}>
          <TouchableOpacity 
            style={styles.displayComponents}
            onPress={() => props.navigation.navigate("YourAppliance")}
          >
            <Image source={require('../screens/images/home.png')} style={styles.img} />
            <Text style={styles.text}>Your Home</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.displayComponents}
            onPress={() => props.navigation.navigate("MicrophoneInput")}
          >
            <Image source={require('../screens/images/mic_icon.png')} style={styles.img} />
            <Text style={styles.text}>Mic Input</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.displayComponents}
            onPress={() => props.navigation.navigate("SetChannels")}
          >   
            <Image source={require('../screens/images/TV_icon.png')} style={styles.img} />   
            <Text style={styles.text}>Set Channels</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bg: {
    height: d_height,
    width: d_width,
    opacity: 0.9
  },
  profileIcon: {
    height: 100,
    width: 100

  },
  profilePic: {
    height: 130,
    width: 130,
    position: 'absolute',
    marginTop: 15 * d_height / 100,
    backgroundColor: '#DADADA',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  options: {
    backgroundColor: '#DADADA',
    height: '45%',
    width: '80%',
    borderRadius: 30,
    marginTop: 45 * d_height / 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: 50,
    width: 50,
    tintColor: '#fff'
  },
  displayComponents: {
    alignItems: 'center',
    backgroundColor: '#B46569',
    height: '40%',
    width: '70%',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 10
  },
  text: {
    marginTop: 10,
    color: '#fff'
  }
});

export default HomePage;