import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, FlatList, SafeAreaView, Modal, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function SetAction (props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [roomSelected, setRoomSelected] = useState("No room selected.");

    const title = props.route.params.appliance;
    const actions = ["On", "Off"];
    const rooms = [];

    if (title == "Music") {
        actions.push("Next");
        actions.push("Previous");
    }
    else if (title == "TV") {
        actions.push("Mute");
        actions.push("Unmute");
        actions.push("Slow");
        actions.push("Fast");
        actions.push("Next");
        actions.push("Previous");
        actions.push("Cartoon Network");
        actions.push("Discovery");
        actions.push("Geo News");
        actions.push("Saama News");
        actions.push("HBO");
    }
    else if (title == "AC") {
        actions.push("Slow");
        actions.push("Fast");
    }
    else if (title == "Bulb") {
        rooms.push("Bethaq");
        rooms.push("Garage");
        rooms.push("Bathroom");
        rooms.push("Bedroom");
        rooms.push("Kitchen");
    }

    const Item = ({ titleTemp }) => (
        <TouchableOpacity onPress={() => sendData(titleTemp)}>
            <LinearGradient
                style = {styles.btnSet}
                colors = {['#BF585F', '#574B58']}
            >
                <Text style={styles.textSet}>{titleTemp}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
      
    const renderItem = ({ item }) => (
        <Item titleTemp={item} />
    );

    const textClick = ({ item }) => {
        console.log(item);
        setRoomSelected(item);
        setModalVisible(false);
    }

    async function sendData (action) {
        var appliance = title;
        var room = roomSelected;

        var Channel_info;

        if (appliance === "Bulb") {
            Channel_info = {
                appliance,
                room,
                action
            };
        }
        else if (appliance === "TV") {
            if (action === "Cartoon Network" || action === "Geo News" || action === "Saama News" || action === "Discovery" || action === "HBO") {
                var channel = action;
                action = "Channel"

                Channel_info = {
                    appliance,
                    action,
                    channel
                };
            }

            else {
                Channel_info = {
                    appliance,
                    action
                };
            }
        }
        else {
            Channel_info = {
                appliance,
                action
            };
        }
    
        const response = await fetch('http://192.168.100.152:5000/ui_input',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(Channel_info)
        }).then(response=>response.json().then(data=>{        
            console.log(data['Channel_info']);
        }))
    };

    return (
        <SafeAreaView style={styles.container}>
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

            <View style={{alignItems:'center', justifyContent: 'center'}}>
                <View>
                    <Text style={styles.mainHeading}>{title}</Text>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        
                        {
                            rooms.map(Item => {
                    
                                return (
                                <TouchableOpacity 
                                    onPress={() => textClick({item: Item})}
                                    style={styles.roomOption}
                                >
                                    <Text style={styles.textSet}>{Item}</Text>
                                </TouchableOpacity>
                                );
                            })
                        }

                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Select a Room</Text>
                </Pressable>

                <Text style={styles.text}>{roomSelected}</Text>

                <View style={styles.modalView1}>
                    <Text style={styles.otherHeading}>Actions</Text>
                    <FlatList
                        data={actions}
                        renderItem={renderItem}
                        keyExtractor={item => item}
                        contentContainerStyle={styles.greyBox}
                    />
                </View>
            </View>
        </SafeAreaView>
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
        height: 60,
        fontSize: 40,
        alignSelf: "center",
        marginTop: 80
    },
    otherHeading: {
        fontFamily: "roboto-700",
        color: "#35485D",
        textAlign: "center",
        width: 230,
        fontSize: 20,
        alignSelf: "center",
        marginBottom: 20
    },
    backIcon: {
        height: 30,
        width: 30,
    },
    backView: {
        width: '10%',
        margin: 30,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        marginTop: 20
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
    notModalView: { 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    roomOption: {
        backgroundColor: '#8C505D',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15,
        height: 40,
        width: 150
    },
    greyBox: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 80,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 30,
      },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 150,
        backgroundColor: '#30495F'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalView1: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 30,
        marginBottom: 200
    },
})

export default SetAction;