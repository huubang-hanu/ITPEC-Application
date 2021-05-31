import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, CheckBox, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {accountData} from '../data/Account';




const Login = ({navigation}) => {
    const [account, setAccount] = useState({username:'', password:''})
    const [isSelected, setSelection] = useState(false);


    const onPressHandler = () => {
        if(accountData.username == account.username && accountData.password == account.password){
            navigation.navigate('Home');
        }else if(account.username.length === 0 || account.password.length === 0){
            Alert.alert('Warning','Please enter required infomation', [
                {text: 'Ok'}])
        }else{
            Alert.alert('Error','Wrong username or password', [
                {text: 'Ok'}])
        }
        
    }


    
    const onUsernameChange =(val)=>{
        setAccount({...account, username: val});
    };

    const onPasswordChange =(val)=>{
        setAccount({...account, password: val});
    };

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View>
                <Text style={styles.loginText}>Login</Text>

                <View style={styles.inputContainer}>
                     {/**Username input */}
                    <TextInput
                    style={styles.input}
                    onChangeText={onUsernameChange}
                    placeholder="Username"
                    />

                    {/**Password input */}
                    <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={onPasswordChange}
                    placeholder="Password"
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    
                    <Text style={styles.label}>Remember me</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                            style={styles.loginButton}
                            onPress={onPressHandler}
                    >
                        <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
                    </TouchableOpacity>
                </View>
                

                
                
                <View style={styles.iconContainer}>
                    <FontAwesome5 style={styles.icon} name="facebook" size={35} color="#00a8d6" />
                    <FontAwesome5 style={styles.icon} name="github" size={35} color="black" />
                    <FontAwesome5 style={styles.icon} name="google" size={35} color="#e84220" />
                </View>
            
            </View>
        </TouchableWithoutFeedback>

        
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        borderColor: '#119ffa',
        borderRadius: 10,
        paddingStart: 10
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        marginTop: 18
        
    },
    icon:{
        margin: 14
    },
    loginText:{
        color: '#192730',
        fontSize: 36,
        fontWeight: 'bold',
        marginStart: 30,
        marginTop: 40,
    },
    inputContainer:{
        marginStart: 20,
        marginTop: 40

    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    loginButton:{
        alignItems: "center",
        backgroundColor: "#2492ed",
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 5,
        marginEnd: 18
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        marginStart: 30
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },

})
