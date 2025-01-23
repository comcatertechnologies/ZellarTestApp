import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './HomePageScreen.style'
import Card from '../../utils/Card/CustomCardComponent';
import { DASHBOARD, QUICK_QUIZ } from '../../constants/strings';
import RoundCard from '../../utils/RoundCard/RoundCard';



const DashBoard = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.titleContainer}>{DASHBOARD}</Text>
                <Card />
                <Text style={styles.titleContainer}>{QUICK_QUIZ}</Text>
                <RoundCard/>
            </View>
        </SafeAreaView>

    )
}

export default DashBoard;