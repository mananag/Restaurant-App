import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "../components/RestaurantsList";
import NavigationContext from "../context/navigation-context";

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchAPI, restaurants, errorMessage] = useRestaurants()

    const filterRestaurantsByPrice = (price) => {
        return restaurants.filter(restaurant => {
            return restaurant.price === price
        })
    }

    return(
        <>
            <SearchBar
                term={term}
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = {() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <NavigationContext.Provider value={navigation}>
                <ScrollView>
                    <RestaurantsList restaurants={filterRestaurantsByPrice('$')} title={'Cost Effective'} />
                    <RestaurantsList restaurants={filterRestaurantsByPrice('$$')} title={'Big Pricier'} />
                    <RestaurantsList restaurants={filterRestaurantsByPrice('$$$')} title={'Big Spender'} />
                </ScrollView>
            </NavigationContext.Provider>
        </>
    )
};

const styles = StyleSheet.create({})

export default SearchScreen
