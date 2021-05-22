import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons';
import {TextInput} from "react-native-gesture-handler";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {


    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black"/>
            <TextInput
                style={styles.inputStyle}
                placeholder={'Search'}
                value = {term}
                onChangeText = {newTerm => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    inputStyle: {
        flex: 1,
        height: '100%',
        fontSize: 18,
        paddingLeft: 10
    }
})

export default SearchBar
