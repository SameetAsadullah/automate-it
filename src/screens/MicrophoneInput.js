import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Ellipse } from "react-native-svg";
import SoundRecorder from 'react-native-sound-recorder';

function MicrophoneInput(props) {

  const [timerState, setTimerState] = useState(true);

  const changeTimer = () => {
    if (timerState == true) {
        SoundRecorder.stop()
            .then(function(result) {
                console.log('stopped recording, audio file saved at: ' + result.path);
            });

        setTimerState(false);
    }
    else {
        SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4')
            .then(function() {
                console.log('started recording');
            });

        setTimerState(true);
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
    top: 101,
    width: 121,
    height: 139,
    position: "absolute",
    alignSelf: "center",
    zIndex: 10
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