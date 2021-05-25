import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import RestaurantItem from "./RestaurantItem";
import NavigationContext from "../context/navigation-context";

const RestaurantsList = ({title, restaurants}) => {
    const navigation = useContext(NavigationContext)
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem = {({item}) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('RestaurantShow')} style={styles.container}>
                        <RestaurantItem restaurant={item} />
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20
    },
    title: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    container:{
        marginLeft: 15
    }
})

export default RestaurantsList
