import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export default function AddTodo({ submitHandler }: any) {
    const [text, setText] = useState('');
    
    const changeHandler = (val:string) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo...'
                // onChangeText={(val)=>changeHandler(val)}
                onChangeText={changeHandler}
            />
            <Button onPress={()=>{submitHandler(text)}} title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})
