import axios from "axios"



const getData = async (bracket) => {

    return await axios.get(`http://localhost:3000/leaderboard/${bracket}`)
        .then(res => console.log(res) || res)

}

const getClassIcons = async () => {

    return await axios.get(`http://localhost:3000/media/classes`)
        .then(res => console.log("class icons", res.data) || res.data)
}

const getSpecIcons = async () => {
    return await axios.get(`http://localhost:3000/media/specs`)
        .then(res => console.log("spec icons: ", res.data) || res.data)
}


export {
    getData,
    getClassIcons,
    getSpecIcons
}