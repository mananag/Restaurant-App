import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from "react-native";
import yelp from "../api/yelp";
import Carousel from "react-native-snap-carousel";

const RestaurantShowScreen = ({route}) => {
    const windowWidth = Dimensions.get('window').width
    const id = route.params?.id
    const [restaurant, setRestaurant] = useState(null)

    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`)
        setRestaurant(response.data)
    }

    useEffect(() => {
        getRestaurant(id)
    }, [])

    if(!restaurant){
        return (
            <Text>Loading</Text>
        )
    }

    return (
        <View>
            <Text>{restaurant.name}</Text>
            <Carousel
                layout={"default"}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                horizontal
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 150,
        marginBottom:10
    }
})


export default RestaurantShowScreen
