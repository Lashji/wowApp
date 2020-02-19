import axios from "axios"



export const getData = async (bracket) => {

    return await axios.get(`http://localhost:3000/leaderboard/${bracket}`)
        .then(res => console.log(res) || res)

}