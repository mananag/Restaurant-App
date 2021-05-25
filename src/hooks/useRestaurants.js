import {useEffect, useState} from 'react'
import yelp from "../api/yelp";

const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'NYC'
                }
            })
            setRestaurants(response.data.businesses)
        }
        catch (e) {
            setErrorMessage('Something Went Wrong')
        }
    }

    useEffect(() => {
        searchAPI('pasta')
    }, [])

    return [searchAPI, restaurants, errorMessage]
}

export default useRestaurants
