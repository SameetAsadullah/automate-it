import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

function LoadScreen(props) {
    setTimeout(() => {
        props.navigation.navigate("LogIn"); 
    }, 1000);
    
    return (
        <View style={styles.container}>
        <Image
            source={require("./images/logo.png")}
            resizeMode="contain"
            style={styles.image}
        ></Image>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    width: 357,
    height: 371,
    marginTop: 183,
    alignSelf: "center"
  }
});

export default LoadScreen;