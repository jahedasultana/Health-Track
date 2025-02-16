import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://health-track-server-ruddy.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;