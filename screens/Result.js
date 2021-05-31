import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const Result = ({route, navigation}) =>{
    const {userAnswer, quizs} = route.params
    let mark = 0;

    //Caculate mark
    for(let i = 0; i < quizs.length; i++){
        if(userAnswer[quizs[i]._id] == quizs[i].correctAnswer){
            mark = mark +1;
        }

    }
    

    const onBackHomePress = () =>{
        navigation.navigate('Home');
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.result}>Result: {mark}/20</Text>

            <Button
                    onPress={onBackHomePress}
                    title="Go to Home"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
        </View>
    )
}


export default Result

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    result: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})