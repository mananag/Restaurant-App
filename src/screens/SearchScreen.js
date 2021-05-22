import React, {useState} from 'react'
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        }
        catch (e) {
            setErrorMessage('Something Went Wrong')
        }
    }

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = {() => searchAPI(term)}
            />
            <Text>
                {term}
            </Text>
            <Text>
                {results.length}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({})

export default SearchScreen
