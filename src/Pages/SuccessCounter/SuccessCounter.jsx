import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useBioData from "../../Hooks/useBioData";
import {  FaUsers } from "react-icons/fa";
import { BiFemale, BiMale, BiMaleFemale } from "react-icons/bi";


const SuccessCounter = () => {

    const axiosPublic = useAxiosPublic();
    const [data] = useBioData();
    const male = data.filter(item => item.category === 'male');
    const female = data.filter(item => item.category === 'female');
    // console.log(male,female);

    const { data: count } = useQuery({
        queryKey: ['successCounter'],
        queryFn: async () => {
            const res = await axiosPublic.get('/successCounter');
            return res.data
        }
    })
    // console.log(count);


    return (
        <div>
            <h1 className="text-5xl text-center font-medium">Our Success Counter</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-center mt-5">
                <div className="stats shadow">

                    <div className="stat bg-rose-400">
                        <div className="stat-title text-2xl font-medium">Total BioData</div>
                        <div className="stat-value">{count?.BioData}</div>
                        <FaUsers className="ml-72 text-4xl" ></FaUsers>
                    </div>

                </div>
                <div className="stats shadow ml-2 ">

                    <div className="stat bg-pink-400">
                        <div className="stat-title text-2xl font-medium">Total Female BioData</div>
                        <div className="stat-value">{female?.length}</div>
                        <BiFemale className="ml-64 text-5xl"></BiFemale>
                    </div>

                </div>
                <div className="stats shadow">

                    <div className="stat bg-slate-400 mt-5">
                        <div className="stat-title text-2xl font-medium">Total Male BioData</div>
                        <div className="stat-value">{male?.length}</div>
                        <BiMale className="ml-64 text-5xl"></BiMale>
                        
                    </div>

                </div>
                <div className="stats shadow ml-2">

                    <div className="stat bg-slate-400 mt-5">
                        <div className="stat-title text-2xl font-medium">Total Success Marriage</div>
                        <div className="stat-value">{count?.SuccessData}</div>
                        <p className="font-normal">marriages have been completed</p>
                        <BiMaleFemale className="ml-64 text-5xl"></BiMaleFemale>
                        
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SuccessCounter;