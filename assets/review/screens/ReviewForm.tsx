import { Formik } from 'formik'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../GlobalStyles'
import * as Yup from 'yup'
import FlatButton from '../shared/FlatButton'

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
            return parseInt(val!) < 6 && parseInt(val!) > 0; //https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string/54496418
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
                            onBlur={props.handleBlur('title')} //realtime validation ??
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')} //values에 있는 'title'이 갱신된다.
                            value={props.values.body}
                            multiline
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review (1-5)'
                            onChangeText={props.handleChange('rating')} //values에 있는 'title'이 갱신된다.
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        {/* <Button title='submit' color='maroon' onPress={()=>{props.handleSubmit()}}/> */}
                        <FlatButton text='submit' onPress={()=>{props.handleSubmit()}}/>
                    </View>

                )}
            </Formik>
        </View>
    )
}

// const styles = StyleSheet.create({
//     style
// })
