import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";






const FavouritesBioData = () => {

    
    
    const axiosPublic = useAxiosPublic();
    const {user}=useAuth();
   
   
    const { data: favourites = [],refetch } = useQuery({
        queryKey: ['favourites',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/favourites?email=${user?.email}`);
            console.log(res.data);
            return res.data;
            
        }
        
    })
    
  
   

    const handleDeleteUser = favourite => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/favourites/${favourite._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th> Name</th>
                            <th>BioData Id</th>
                            <th>Permanent Address</th>
                            <th>Occupation</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                        {
                           
                            
                           favourites.map((favourite, index) =>
                                <tr key={favourite._id}>
                                    <th>{index + 1}</th>
                                    <td>{favourite.Name}</td>
                                    <td>{favourite._id}</td>
                                    <td>{favourite.division}</td>
                                    <td>{favourite.occupation}</td>
                                    <td> <button
                                        onClick={() => handleDeleteUser(favourite)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button></td>

                                </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavouritesBioData;