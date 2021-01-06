import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

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
                <View style={styles.item}>
                    <MaterialIcons name='delete' size={18} color='#333'/>
                    <Text style={styles.itemText}> {props.item.text} </Text>
                </View>
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
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    },
})
