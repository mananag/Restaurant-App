import axios from "axios";

const API_KEY = '6GToRN5KSalLzXCubCvvzfugIfoqm9y1fJd_WcKGcOjpc9H7du76gBC51DiksmC9hTeV6awiV4XwZxCkkBqN796FhJ5c8exc2WbfMDXbTiIGuWcM6e9HeEjBXvijYHYx'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer '+API_KEY
    }
})
