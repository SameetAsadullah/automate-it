import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function SetAction (props) {

    const title = props.route.params.appliance;
    const actions = ["Turn On", "Turn Off"];

    if (title == "Music") {
        actions.push("Next Song");
        actions.push("Previous Song");
    }
    else if (title == "TV") {
        actions.push("Mute");
        actions.push("Unmute");
        actions.push("Volume Up");
        actions.push("Volume Down");
        actions.push("Next Channel");
        actions.push("Previous Channel");
        actions.push("Cartoon Network");
        actions.push("Discovery");
        actions.push("Geo News");
        actions.push("Samaa News");
        actions.push("HBO");
    }
    else if (title == "AC") {
        actions.push("Cooler");
        actions.push("Warmer");
    }

    const Item = ({ title }) => (
        <LinearGradient
            style = {styles.btnSet}
            colors = {['#BF585F', '#574B58']}
        >
            <Text style={styles.textSet}>{title}</Text>
        </LinearGradient>
    );
      
    const renderItem = ({ item }) => (
        <Item title={item} />
    );

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
                <View>
                    <Text style={styles.mainHeading}>{title}</Text>
                </View>

                <View style={styles.modalView}>
                <FlatList
                    data={actions}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    contentContainerStyle={styles.greyBox}
                />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainHeading: {
        fontFamily: "roboto-700",
        color: "#35485D",
        textAlign: "center",
        width: 230,
        height: 100,
        fontSize: 40,
        alignSelf: "center",
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
        width: 250,
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
        alignItems: 'center',
    },
    channel: {
        marginTop: 19,
        fontSize: 25,
        color: '#2E4A60',
    },
    greyBox: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 70
    }
})

export default SetAction;