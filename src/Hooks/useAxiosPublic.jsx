import axios from "axios";

const axiosPublic=axios.create({
    baseURL: "https://mingle-match-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;