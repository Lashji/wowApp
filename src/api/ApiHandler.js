import axios from "axios"



export const getData = async (bracket) => {

    return await axios.get(`http://localhost:3000/leaderboard/${bracket}`)
        .then(res => res.json())
        .then(res => console.log(res))

}


// export const getToken = () => {
//     console.log("getting token")
//     return axios.get(`https://eu.battle.net/oauth/token`, {
//         auth: {
//             username: process.env.REACT_APP_CLIENT_ID,
//             password: process.env.REACT_APP_CLIENT_SECRET,
//         },
//         params: {
//             grant_type: 'client_credentials',
//         }
//     }).then(response => response || console.log("res", response))
// }


// export async function doCharRequest(
//     region,
//     realm,
//     characterName,
//     token
// ) {
//     let href =
//         "https://" +
//         region +
//         ".api.blizzard.com/wow/character/" +
//         realm +
//         "/" +
//         characterName

//     return axios
//         .get(href, {
//             headers: {
//                 Authorization: "Bearer " + token.access_token
//             }
//         })
//         .then(response => response.data)
//         .catch(error => error);
// }


// export async function getPVPLeaderBoard(token) {
//     let href = "https://eu.api.blizzard.com/data/wow/pvp-season/27/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US"
//     console.log("token: ", token.access_token)
//     return await axios.get(href, {
//             headers: {
//                 Authorization: 'Bearer ' + token.access_token
//             }
//         })
//         .then(res => {
//             return res;
//         })
// }