import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";

const RestaurantItem = ({restaurant}) => {
    return<View>
        <Image style={styles.image} source={{uri: restaurant.image_url}} />
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    conta: {
        marginLeft: 10,
        fontSize: 100
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 150,
        marginBottom:10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default RestaurantItem
