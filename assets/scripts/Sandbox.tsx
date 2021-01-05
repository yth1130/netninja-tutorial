import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1, //크기를 비율로 설정. 부모 뷰(여기선 화면 전체) 전체의 1을(100%) 차지.
        flexDirection: 'row', //방향. column이 기본.
        justifyContent: 'space-between', //자식들 정렬 방식. 기본은 flex-start
        alignItems: 'center', //각 자식들의 정렬 방식. 기본은 flex-start
        paddingTop:40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo: {
        flex:2,
        backgroundColor:'gold',
        padding:20,
    },
    boxThree: {
        flex:1,
        backgroundColor:'coral',
        padding:30,
    },
    boxFour: {
        flex:3,
        backgroundColor:'skyblue',
        padding:40,
    },
})
