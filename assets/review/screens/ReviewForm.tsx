import { Formik } from 'formik'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../GlobalStyles'

export default function ReviewForm() {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values) => { //채워진 내용이 values에 들어있음.
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')} //values에 있는 'title'이 갱신된다.
                            value={props.values.title}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')} //values에 있는 'title'이 갱신된다.
                            value={props.values.body}
                            multiline
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review (1-5)'
                            onChangeText={props.handleChange('rating')} //values에 있는 'title'이 갱신된다.
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Button title='submit' color='maroon' onPress={()=>{props.handleSubmit()}}/>
                    </View>

                )}
            </Formik>
        </View>
    )
}

// const styles = StyleSheet.create({
//     style
// })
