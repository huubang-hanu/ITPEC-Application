import React, {useEffect, useState} from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity,Alert } from 'react-native';
import { RadioButton, Text} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 




let user_ans = {};



const Question = ({route, navigation}) => {

    const {examType, questions} = route.params;
    const [userAnswer, setUserAnswer] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeUp, setTimeUp] = useState(false);
    const [timeInSecond, setTimeInSecond] = useState(1200);

    let initalQuizs =  [];
    if(examType == "IP" ){
        initalQuizs  =questions.itpassport;
    }else{
        initalQuizs = questions.fe;
    };
    const [quizs, setQuizs] = useState(initalQuizs);

    const onSubmit = () =>{
        
        Alert.alert(
            'Submission', 'Do you want to finish your test ?',
            [
                {text: "Cancel", onPress: () => null, style: "cancel"},
                {text: "Ok", onPress: () => navigation.navigate('Result', {userAnswer, quizs})}

            ]
        )
    }


    const prevPress = () =>{
        if(currentIndex > 0){
            setCurrentIndex(currentIndex -1)}
        };

    const nextPress = () =>{
        if(currentIndex < 19){
            setCurrentIndex(currentIndex +1)}
        }

    useEffect(() => {
        
        //If user has choosen answer for quiz in currentIndex
        if(userAnswer.hasOwnProperty(quizs[currentIndex]._id)){
            setValue(userAnswer[quizs[currentIndex]._id]); //set value for it
        }else{
            setValue('');
        }
        
    }, [currentIndex])

    const [value, setValue] = React.useState();



    const onRadioButtonChange = (valueChange) =>{
        setValue(valueChange);
        user_ans[`${quizs[currentIndex]._id}`] = valueChange;
        setUserAnswer(user_ans);
    }
    

    return (
        <View>
            <View style={styles.navBar}>
                <Text>20':00''</Text>
                <TouchableOpacity onPress={onSubmit}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.quiz}>Question {currentIndex +1}: {quizs[currentIndex].text}</Text>
                <RadioButton.Group  onValueChange={newValue => onRadioButtonChange(newValue)} value={value}>
                    <View style={styles.button}>
                        <RadioButton.Item style={styles.radioButton} label={quizs[currentIndex].answers[0]} value="0" />
                    </View>
                    <View style={styles.button}>
                        <RadioButton.Item style={styles.radioButton} label={quizs[currentIndex].answers[1]} value="1" />
                    </View>
                    <View style={styles.button}>
                        <RadioButton.Item style={styles.radioButton} label={quizs[currentIndex].answers[2]} value="2" />
                    </View>
                    <View style={styles.button}>
                        <RadioButton.Item style={styles.radioButton} label={quizs[currentIndex].answers[3]} value="3" />
                    </View>
                </RadioButton.Group>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity onPress={prevPress}>
                    <AntDesign name="left" size={35} color="black" />
                </TouchableOpacity>
                
                <Text>Question {currentIndex +1}/20</Text>
                
                <TouchableOpacity onPress={nextPress} >
                <AntDesign name="right" size={35} color="black" />
                </TouchableOpacity>
            </View>
            

        </View>
    )
}

export default Question

const styles = StyleSheet.create({
    radioButton: {
        display: 'flex',
        flexDirection: 'row-reverse',
    }
    ,
    navBar: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    
    },

    button: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4d5961',
        display: 'flex',
        width: "100%",
        marginTop: 20,
    },
    quiz:{
        color: "black",
        fontSize: 15,
        fontWeight: 'bold'
    }, 
    scrollView:{
        height:'80%',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:5,
    }, 
    footer:{
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }

})
