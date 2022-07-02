import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Ellipse } from "react-native-svg";
import { PermissionsAndroid } from 'react-native';
import AudioRecord from 'react-native-audio-record';
import {readFile}  from "react-native-fs";


function MicrophoneInput(props) {

  const [checkOn, setCheckOn] = useState(false);

  async function onStartRecord () {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]);
    } catch (err) {
      console.warn(err);
    }

    const options = {
      sampleRate: 44100,  // default 44100
      channels: 1,        // 1 or 2, default 1
      bitsPerSample: 16,  // 8 or 16, default 16
      audioSource: 6,     // android only (see below)
      wavFile: 'test.wav' // default 'audio.wav'
    };
    AudioRecord.init(options);
    AudioRecord.start();
  };

  async function onStopRecord () {
    audioFile = await AudioRecord.stop();
    var RNFS = require('react-native-fs');
    var path = RNFS.ExternalStorageDirectoryPath + '/Download/voice-input.wav';
    RNFS.copyFile(audioFile, path);
    console.log(path);
    sendData();
  };

  async function sendData () {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ]);
    } catch (err) {
      console.warn(err);
    }
    var RNFS = require('react-native-fs');

    const base64String = await readFile(RNFS.ExternalStorageDirectoryPath + '/Download/voice-input.wav',"base64");
    
    var temp_uri = base64String;
    const message = {
      temp_uri
    };

    const response = await fetch('http://192.168.28.135:5000/audio',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(message)
    }).then(response=>response.json().then(data=>{
      console.log(data['message']);
    }))
  };

  function btnFunc () {
    if (checkOn) {
      setCheckOn(false);
      onStopRecord();
    }
    else {
      setCheckOn(true);
      onStartRecord();
    }
  }


  return (
    <View style={styles.container}>
        <View style={styles.ellipse3Stack}>
            <Svg viewBox="0 0 339.86 339.86" style={styles.ellipse3}>
                <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={0}
                    fill="rgba(178,94,97,1)"
                    cx={170}
                    cy={170}
                    rx={170}
                    ry={170}
                ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 309.86 309.86" style={styles.ellipse2}>
            <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(132,84,92,1)"
                cx={155}
                cy={155}
                rx={155}
                ry={155}
            ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 279.86 279.86" style={styles.ellipse1}>
            <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(86,75,87,1)"
                cx={140}
                cy={140}
                rx={140}
                ry={140}
            ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 250.37 249.87" style={styles.ellipse}>
            <Ellipse
                onPress={() => btnFunc()}
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(48,68,84,1)"
                cx={125}
                cy={125}
                rx={125}
                ry={125}
            ></Ellipse>
            </Svg>
            <Image
              source={require("./images/mic_icon.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
      </View>
      <View style={styles.image2Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomePage")}
          > 
            <Image
            source={require("./images/back_arrow.png")}
            resizeMode="contain"
            style={styles.image2}
            onPress={() => btnFunc()}
            ></Image>
          </TouchableOpacity>
      </View>
      <Text style={styles.speakInto}>
        Speak into the microphone when you hear the beep.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse3: {
    width: 340,
    height: 340,
    alignSelf: "center"
  },
  ellipse2: {
    top: 15,
    width: 310,
    height: 310,
    position: "absolute",
    alignSelf: "center"
  },
  ellipse1: {
    top: 30,
    width: 280,
    height: 280,
    position: "absolute",
    alignSelf: "center"
  },
  ellipse: {
    top: 46,
    width: 250,
    height: 250,
    position: "absolute",
    alignSelf: "center"
  },
  image: {
    top: 110,
    width: 100,
    height: 130,
    position: "absolute",
    alignSelf: "center",
    zIndex: 10,
    tintColor: '#E0E0E0'
  },
  ellipse3Stack: {
    width: "100%",
    height: 340,
    marginTop: 126,
    alignSelf: "center"
  },
  image2: {
    width: 35,
    height: 35
  },
  home: {
    fontFamily: "roboto-700",
    color: "#304454",
    fontSize: 25,
    width: 92,
    height: 37,
    marginTop: 1
  },
  image2Row: {
    height: 38,
    flexDirection: "row",
    marginTop: -420,
    marginLeft: 15,
    marginRight: 218
  },
  speakInto: {
    fontFamily: "roboto-700",
    color: "#304454",
    fontSize: 30,
    width: 300,
    height: 130,
    textAlign: "center",
    marginTop: 460,
    alignSelf: "center"
  }
});

export default MicrophoneInput;