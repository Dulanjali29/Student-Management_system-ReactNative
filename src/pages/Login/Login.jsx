import { View,  StyleSheet, Image } from 'react-native'
import { useState } from 'react';
import {  Text } from 'react-native-paper';
import React from 'react'
import InputText from '../../common/InputText/InputText'
import MyButton from '../../common/MyButton/MyButton';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = () => {

    }
    return (
        <View style={styles.mainView}>

            <View style={styles.text} >
                <Text variant="headlineMedium" style={{ color: '#281C65' }} >WELCOME !!!</Text>
            </View>

            <View style={styles.View}>

                <Image style={styles.img} source={require('../../assets/user.png')} />
            </View>
            <View style={styles.inputText}>

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
            <View>
                <MyButton
                    style={styles.btn_in}
                    text={"SIGN IN"}
                    textColor={"white"}
                    buttonColor={"#281C65"}
                    onPress={login}

                />
            </View>
            <View style={styles.text} >
                <Text variant="bodyLarge" style={{ color: '#5A8385', marginBottom: 10 }} >Already have an account ? </Text>
                <Text variant="titleLarge" style={{ color: '#281C65', marginBottom: 10 }} > Sign Up Now</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        padding: 40,
        marginTop: 200,
        paddingBottom: 10

    },
    inputText: {
        paddingBottom: 30,
    },
    txt: {
        marginTop: 10,
    },
    text: {
        alignItems: 'center',


    }
    ,
    btn: {
        paddingTop: 20,
        marginTop: 30,
     
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
})