import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({content, style, checkPress, deletePress, ischeck=false}) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.content_container}>
                <Text style={styles.content}>{content}</Text>
                {
                    ischeck ? <Icon name='check-circle-outline' color={"black"} size={30} onPress={checkPress}/>
                    : <Icon name='radio-button-unchecked' color={"black"} size={30} onPress={checkPress}/>
                }
                
            </View>
            <Icon name='clear' size={30} color={"black"} style={styles.icon} onPress={deletePress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        justifyContent: 'space-around',
        marginBottom: 20
    },
    content_container: {
        flexDirection: 'row',
        backgroundColor: "#E5E6EB",
        height: 60,
        alignItems: 'center',
        width: "90%",
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 15,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#afafaf'
    },
    content: {
        color: 'black',
        fontSize: 20
    },
    icon: {}
})

export default TodoItem;