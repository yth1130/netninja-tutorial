import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from '../GlobalStyles';
import Card from '../shared/Card';

import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }: any) {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { key: '1', title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum' },
        { key: '2', title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum' },
        { key: '3', title: 'Not So "Final" Fantasy', rating: 2, body: 'lorem ipsum' },
    ])
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons name='close' size={24} onPress={() => {setModalOpen(false)}}
                        // style={[styles.modalToggle, styles.modalClose]}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <Text>Hello from the modal :)</Text>
                </View>
            </Modal>

            <MaterialIcons name='add' size={24} onPress={() => {setModalOpen(true)}} style={styles.modalToggle}/>
            
            <FlatList
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={() => { navigation.navigate('ReviewDetails', item) }}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom:10,
        borderWidth:1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'black',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        // backgroundColor: 'black',
    },
})
