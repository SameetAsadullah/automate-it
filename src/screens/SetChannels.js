import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions, ScrollView, Text, Button } from "react-native";

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
            <View>
                <Button title="Search Channels" style={styles.btn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    backView: {
        width: '10%',
        margin: 30,
    },
    btn: {
        width: 60,
        backgroundColor: '#574'
    }
})

export default SetChannels;