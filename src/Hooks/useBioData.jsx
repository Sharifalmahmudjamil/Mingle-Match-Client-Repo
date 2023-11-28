import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useBioData = () => {
    const axiosPublic=useAxiosPublic();
    // const { user} = useAuth();
    const {  data: data = [] } = useQuery({
        queryKey: ['data', ],
        queryFn: async() => {
            const res = await axiosPublic.get(`/data`);
            return res.data;
        }
    })

    return [data]
};

export default useBioData;