import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imgSrc from '../assets/itpec_Logo.png';
import {questions} from '../data/QuestionList'


const Home = ({navigation}) => {
    
    const onFEPress =()=>{
        navigation.navigate('Question', {examType: 'FE',questions})
    }

    const onIPPress =()=>{
        navigation.navigate('Question', {examType: 'IP',questions})
    }

    return (
        <View>
            <View style={styles.imgContainer}>
                <Image  source={imgSrc} style={styles.img}/>
            </View>
            <View style={styles.examContainer}>
                <TouchableOpacity
                    style={styles.examType}
                    onPress={onIPPress}
                    >
                    <Text style={{color: '#5e594a', fontSize: 18, fontWeight: 'bold'}}>IP Examination</Text>
                    <Text style={{color: '#2e2d2a', fontSize: 14, alignSelf: 'flex-end'}}>20 Questions</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.examType}
                    onPress={onFEPress}
                    >
                    <Text style={{color: '#5e594a', fontSize: 18, fontWeight: 'bold'}}>FE Examination</Text>
                    <Text style={{color: '#2e2d2a', fontSize: 14, alignSelf: 'flex-end'}}>20 Questions</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    imgContainer:{
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    examType:{
        backgroundColor:'#f0eada',
        padding:  25,
        borderWidth: 1,
        margin: 20,
        borderRadius: 10
    },
    examContainer:{
        marginTop: 25
    }
})
