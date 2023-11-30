import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";


const PremiumCard = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allPremium = [], } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premium');
            return res.data
        }
    })
    // eslint-disable-next-line no-unused-vars
    const [data,setData]=useState(allPremium.slice(0,6))
    return (
        <div>
            <h1 className="text-4xl text-center font-medium">Featured Profiles</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">

          
            {
                data.map(premium=>
                    <div key={premium._id} className="card w-96 bg-gray-400 shadow-xl border-2 border-pink-400">
                        <figure><img src={premium.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="badge badge-secondary">Premium</div>
                            </h2>
                            <p className="text-base font-medium">BioData ID: {premium._id}</p>
                            <p className="text-lg font-medium">BioData Type: {premium.category}</p>
                            <p className="text-lg font-medium">Permanent Division: {premium.division}</p>
                            <p className="text-lg font-medium">Age: {premium.age}</p>
                            <p className="text-lg font-medium">Occupation: {premium.occupation}</p>
                           
                        </div>
                        
                    </div>
                )
            }
              </div>
        </div>
    );
};

export default PremiumCard;