import React, {useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Button, Modal, Dimensions, Text } from "react-native";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import apiip from "../serverConfig";
import { useSelector } from 'react-redux';

function SetChannels () {

    const [myNumber, setMyNumber] = useState('')
    const [message, setMessage] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [channelArr, setChannelArr] = useState([])
    const emailState = useSelector(state => state.appState.email)

    function onChanged(text) {
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("Please enter numbers onlyas");
            }
        }
        setMyNumber(newText);
    }

    function turnModalOn () {

        setMessage("hello")
        setShowSuccess(true)
        console.log(channelArr)
    }

    useEffect(() => {
        
        axios.post(`${apiip}/getuserinfo`, { "Email": emailState })
            .then(res => {
                setChannelArr(res.data.Channels)
            })
            .catch(err => {
                console.log(err)
            })
        return () => {
        }
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomePage")}
            >
                <View style={styles.backView}>
                    <Image
                        source={require("./images/back_arrow.png")}
                        style={styles.backIcon}
                    />
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'center', flex: 1, justifyContent: 'center', marginBottom: '20%'}}>
                <View style={{width:'80%', alignItems:'center'}}>
                    <Button 
                        title="Search Channels" 
                        style={styles.btn}
                        onPress={() => turnModalOn()}
                    />
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={(text)=> onChanged(text)}
                        value={myNumber}
                        maxLength={10}  //setting limit of input
                    />
                </View>
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={showSuccess}
                onDismiss={() => setShowSuccess(false)}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalInnerView}>
                        { channelArr.map(Item => {
                            return (
                                <TouchableOpacity
                                    key={Item.key}
                                    onPress={() => setShowSuccess(false)}
                                >
                                    <Text>{Item.Name}</Text>
                                </TouchableOpacity>
                            );
                        }) }
                    </View>
                </View>
            </Modal>
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
        width: '60%',
        backgroundColor: '#574'
    },
    textInput: {
        backgroundColor: 'grey',
        width: '60%',
        borderRadius: 30,
        marginTop: 10
    },
    modalView: {
        height: Dimensions.get('screen').height, 
        width: '100%', 
        position: 'absolute', 
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
    }
})

export default SetChannels;