import axios from "axios"

export const getToken = () => {
    return axios.get(`https://eu.battle.net/oauth/token`, {
        auth: {
            username: process.env.REACT_APP_CLIENT_ID,
            password: process.env.REACT_APP_CLIENT_SECRET,
        },
        params: {
            grant_type: 'client_credentials',
        }
    }).then(response => response)
}