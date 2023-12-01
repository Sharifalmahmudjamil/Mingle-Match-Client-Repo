import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { BiSolidContact } from "react-icons/bi";
import Swal from "sweetalert2";


const ApprovedContact = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payments = [], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })

    const handleContact=pre=>{
        axiosSecure.patch(`/payments/approved/${pre._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Contact request has been approved`,
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
                            <th>BioData Id</th>
                            <th>Self Id</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((pre, index) => <tr key={pre._id}>
                                <th>{index + 1}</th>
                                <td>{pre.UserData.Id}</td>
                                <td>{pre.UserData.selfId}</td>
                                <td>{pre.UserData.selfEmail}</td>
                                <td>
                                    {pre.role === 'Approved' ? 'Approved ' : <button
                                        onClick={() => handleContact(pre)}
                                        className="btn btn-outline ">
                                         <BiSolidContact></BiSolidContact>
                                        Approved Req</button>}
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedContact;