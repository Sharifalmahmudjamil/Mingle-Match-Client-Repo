import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";


const PremiumData = () => {
    const axiosSecure = useAxiosSecure();
    const { data: premium = [],refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premium');
            return res.data
        }
    })

    const handleMakePremium=pre=>{
        axiosSecure.patch(`/premium/approved/${pre._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${pre.name} has been approved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>BioData Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            premium.map((pre,index)=>  <tr key={pre._id}>
                                <th>{index+1}</th>
                                <td>{pre.name}</td>
                                <td>{pre.email}</td>
                                <td>{pre._id}</td>
                                <td>
                                   { pre.role === 'Approved'? 'Approved ':<button
                                    onClick={()=>handleMakePremium(pre)}
                                    className="btn btn-outline btn-sm">
                                        <MdWorkspacePremium></MdWorkspacePremium>
                                        Make Premium</button>}
                                </td>
                            </tr>)
                        }
                      
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PremiumData;