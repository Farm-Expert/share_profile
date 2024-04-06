import axios from "axios";

const API = "https://farm-expert-app-backend-beige.vercel.app/"


export const shareProfile = async (token) => {
    try {
        const headers = {
            "authorization": `Bearer ${token}`
        };
        const data = await axios.get(API + `share/${token}`, { headers });
        if (data.data) {
            return data.data;
        }
        else {
            return null
        }
    } catch (error) {
        console.log(error);
    }
}