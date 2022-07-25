import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function AppInput({value, style, onChangeText, placeholder, keyboardType, onFocus, onBlur, borderColor, ...props}) {

    return (
        <TextInput
            value={value}
            style={[styles.input, style, {borderColor: borderColor}]}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 10
    }
})

export default AppInput;