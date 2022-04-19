import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ScrollView, Text } from "react-native";

function SetChannels(props) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("HomePage")}
            >
                <View style={styles.backView}>
                    <Image
                        source={require("./images/back_arrow.png")}
                        style={styles.backIcon}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backIcon: {
        height: 40,
        width: 40,
    },
    backView: {
        width: '10%',
        margin: 30,
    }
})

export default SetChannels;