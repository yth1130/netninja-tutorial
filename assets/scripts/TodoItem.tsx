import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface TodoItemProps {
    item: any;
    pressHandler: Function;
}

// export default class TodoItem extends Component<TodoItemProps> {
//     render() {
//         return (
//             <TouchableOpacity onPress={()=>this.props.pressHandler(this.props.item.key)}>
//                 <Text style={styles.item}> {this.props.item.text} </Text>
//             </TouchableOpacity>
//         )
//     }

//     pressHandler(key:any) {

//     }
// }

export default function TodoItem(props: TodoItemProps) {
        return (
            <TouchableOpacity onPress={()=>props.pressHandler(props.item.key)}>
                <Text style={styles.item}> {props.item.text} </Text>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
})
