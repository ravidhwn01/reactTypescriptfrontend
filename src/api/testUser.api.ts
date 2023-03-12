import { axiosInstance } from "../utils/axios.utils";

export async function getTest(){
    const res = await axiosInstance.get('/test')
    return res.data;
}