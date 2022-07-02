import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Button, Dimensions, Text, ScrollView } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const fanActions = ["Turn On", "Turn Off"];

function SetAction (props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("YourAppliance")}
            >
                <View style={styles.backView}>
                    <Image
                        source={require("./images/back_arrow.png")}
                        style={styles.backIcon}
                    />
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'center', flex: 1, justifyContent: 'center'}}>
                <View style={{width:'80%', alignItems:'center', marginBottom: 10}}>
                    <Pressable 
                        style={styles.btnMain}
                    >
                        <Text style={styles.text}>Bulb-Bedroom</Text>
                    </Pressable>
                </View>
                <View style={styles.modalView}>
                    { fanActions.map(Item => {
                        return (
                            <View
                                key={Item.key}
                                style = {styles.btnSet}
                            >
                                <Text style={styles.textSet}>{Item}</Text>
                            </View>
                        );
                    }) }
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    backView: {
        width: '10%',
        margin: 30,
    },
    btnMain: {
        width: '70%',
        alignItems: 'center',
        backgroundColor: '#C06067',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    btnSet: {
        width: '60%',
        alignItems: 'center',
        backgroundColor: '#2A596A',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20
    },
    textSet: {
        fontSize: 15,
        color: 'white',
    },
    textInput: {
        backgroundColor: '#2A596A',
        width: '60%',
        borderRadius: 30,
        marginTop: 10,
        textAlign: 'center',
        color: 'white'
    },
    modalView: { 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    modalInnerView: {
        backgroundColor: 'white', 
        padding: 15, 
        shadowColor: 'grey', 
        shadowOffset: { width: 0, height: 0 }, 
        shadowOpacity: 10, 
        borderRadius: 10, 
        elevation: 10,
        alignItems: 'center'
    },
    channel: {
        marginTop: 19,
        fontSize: 25,
        color: '#2E4A60',
    },
    greyBox: {
        backgroundColor: '#B9C1C8',
        alignItems: 'center',
        width: '100%',
        borderRadius: 50,
        height: '43%'
    }
})

export default SetAction;