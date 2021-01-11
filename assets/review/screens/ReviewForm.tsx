import { Formik } from 'formik'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../GlobalStyles'
import * as Yup from 'yup'

const reviewSchema = Yup.object({
    title: Yup.string()
        .required()
        .min(4),
    body: Yup.string()
        .required()
        .min(8),
    rating: Yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val!) < 6 && parseInt(val!) > 0;
        }),
});

export default function ReviewForm({ addReview }: any) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => { //채워진 내용이 values에 들어있음.
                    // console.log(values);
                    actions.resetForm(); //만약 해당 폼을 닫지 않고 켜놓은 상태에서 뭔가를 실행하는데 폼은 초기화하고싶을 경우.
                    addReview(values);
                }}
                validationSchema={reviewSchema}
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
