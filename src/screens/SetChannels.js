import React, {useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Image, TextInput, Button, Modal, Dimensions, Text } from "react-native";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
import apiip from "../serverConfig";
import { useSelector } from 'react-redux';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

function SetChannels (props) {

    const [myNumber, setMyNumber] = useState('')
    const [message, setMessage] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [channelArr, setChannelArr] = useState([])
    const [channelArrInactive, setChannelArrInactive] = useState([])
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userProfile, setUserProfile] = useState('')
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
                alert("Please enter numbers only");
            }
        }
        setMyNumber(newText);
    }

    function turnModalOn () {

        setShowSuccess(true)
        console.log(channelArr)
    }

    useEffect(() => {
        
        axios.post(`${apiip}/getuserinfo`, { "Email": emailState })
            .then(res => {
                setUserName(res.data.Name)
                setUserEmail(res.data.Email)
                setUserPassword(res.data.Password)
                setUserProfile(res.data.ProfilePicture)
                setChannelArr(res.data.Channels)

                if (channelArrInactive.length === 0)
                    for (var i = 0; i < channelArr.length; i++) {
                        if (channelArr[i].Number === "-1") {
                            setChannelArrInactive(channelArrInactive => [...channelArrInactive, channelArr[i]])
                        }
                    }
            })
            .catch(err => {
                console.log(err)
            })
        return () => {
        }
    }, [])

    //Send function
    async function sendData (Name,num) {
        
        var  channel_name = Name;
        var  channel_no   = num;
        const Channel_info = {
          channel_name,
          channel_no
        };
    
        const response = await fetch('http://192.168.28.135:5000/set_channels',{
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(Channel_info)
        }).then(response=>response.json().then(data=>{
          console.log(data['Channel_info']);
        }))
    };
    function clickChannel (Name) {
        setShowSuccess(false)
        setMessage(Name)
    }

    function setChannel (Name, Number) {
        let newArr = [...channelArr]
        let num = Number.toString()

        for (var i = 0; i < channelArr.length; i++) {
            if (channelArr[i].Name === Name) {
                newArr[i].Number = num
                sendData(Name,num);
            }
        }

        setChannelArr(newArr)
        console.log(channelArr)

        axios.post(`${apiip}/updateuser`,
        {
          "Name": userName,
          "Email": userEmail,
          "Password": userPassword,
          "ProfileImage": userProfile,
          "Channels": channelArr
        }
      )
        .then(res => {
          console.log('Successfully Updated User')
        })
  
        .catch(err => {
          console.log('Axios Error:', err);
        })
    }

    return (
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
            <View style={{alignItems:'center', flex: 1, justifyContent: 'center', marginBottom: '20%'}}>
                <View style={{width:'80%', alignItems:'center'}}>
                    <Pressable 
                        style={styles.btnMain}
                        onPress={() => turnModalOn()}
                    >
                        <Text style={styles.text}>Search Channels</Text>
                    </Pressable>
                    <View style={styles.greyBox}>
                        <Text style={styles.channel}>
                            {message}
                        </Text>
                        <TextInput 
                            style={styles.textInput}
                            keyboardType='numeric'
                            onChangeText={(text)=> onChanged(text)}
                            value={myNumber}
                            maxLength={10}  //setting limit of input
                            placeholder='Enter channel number'
                        />
                        <Pressable
                            style={styles.btnSet}
                            onPress={() => setChannel(message, myNumber)}
                        >
                            <Text style={styles.textSet}>Set</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Modal
                animationType='slide'
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
                                    onPress={() => clickChannel(Item.Name)}
                                >
                                    <Text>{Item.Name}</Text>
                                </TouchableOpacity>
                            );
                        }) }
                        <View>
                            <Text style={{color:'red'}} onPress={() => setShowSuccess(false)}>Close</Text>
                        </View>
                    </View>
                </View>
            </Modal>
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
        width: '60%',
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
        width: '30%',
        backgroundColor: '#C06067',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        marginTop: 25
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

export default SetChannels;