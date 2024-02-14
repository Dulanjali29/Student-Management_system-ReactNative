import { View, StyleSheet, Image } from 'react-native'
import { IconButton, Text,TextInput } from 'react-native-paper';
import { useState } from 'react';
import React from 'react'
import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/MyButton/MyButton';
import IconBtn from '../../common/IconButton/IconButton';
import Icon from 'react-native-vector-icons/'


const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {

    }
    const close = () => {

    }
    return (

        <View style={styles.mainView}>
            <View style={styles.buttonicon}>
                <IconButton
                    style={styles.iconbtn}
                    
                    size={20}
                    onPress={close}
                />
            </View>
            <View style={styles.secondView}>
                <View style={styles.text} >
                    <Text variant="headlineMedium" style={{ color: '#281C65' }} >SIGN UP</Text>
                </View>
                <View style={styles.View}>

                    <Image style={styles.img} source={require('../../assets/add_user.png')} />
                </View>
                <View style={styles.inputText}>
                    <InputText
                        style={styles.txt}
                        value={name}
                        lable={"User name"}
                        onChangeText={(val) => setName(val)}
                       
                    />
                    <InputText
                        style={styles.txt}
                        value={email}
                        lable={"Email"}
                        onChangeText={(val) => setEmail(val)}

                    />
                    <InputText
                        style={styles.txt}
                        value={password}
                        lable={"Password"}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry
                        
                    />

                </View>

                <View style={styles.btn}>

                    <MyButton
                    mode={"contained"}
                        style={styles.btn_in}
                        text={"SIGN UP"}
                        textColor={"white"}
                        buttonColor={"#281C65"}
                        onPress={signUp}

                    />
                    {/* <MyButton
                    style={styles.btn_in}
                    text={"CLOSE"}
                    textColor={"white"}
                    buttonColor={"#5A8385"}
                    onPress={close}

                /> */}
                </View>
                <View style={styles.text} >
                    <Text variant="bodyLarge" style={{ color: '#5A8385', marginBottom: 10 }} >Already have an account ? </Text>
                    <View>
                    <MyButton
                      
                        style={styles.btn_in}
                        text={"Sign In"}
                        textColor={"#281C65"}
                        onPress={signUp}
                        mode={"text"}
                        
                    />
                    </View>
                  
                  
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        padding: 10,
        marginTop: 0,
        paddingBottom: 10
    },
    secondView: {
        padding: 40,
        marginTop: 120,
        paddingBottom: 10

    },
    inputText: {
        paddingBottom: 10,
    },
    txt: {
        marginTop: 10,
    },
    text: {
        alignItems: 'center',


    }
    ,
    btn: {
        paddingTop: 0,
        marginTop: 30,
        marginBottom: 0,
    },
    img: {
        marginTop: 40,
        marginBottom: 40

    },
    View: {
        alignItems: 'center',
        position: 'relative',
        padding: 10

    },

    btn_in: {
        marginBottom: 20,
    },

    iconbtn: {
        width: 20,
        height: 20
    },
    buttonicon:{
        
        justifyContent:'end',
        alignItems:'end',
       
    }

})