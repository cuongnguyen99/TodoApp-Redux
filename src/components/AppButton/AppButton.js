import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AppButton({size, style, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,{width: size, height: size}, style]}>
            <Icon name='add' size={size/1.5} color='white'/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#764abc",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default AppButton;