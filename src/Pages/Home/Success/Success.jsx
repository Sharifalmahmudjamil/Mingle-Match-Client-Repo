import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";




const Success = () => {
    const axiosPublic=useAxiosPublic();
   

    const { data: success = []} = useQuery({
        queryKey: ['success'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/success`)
            return res.data;
        }
    })
    
    return (
        <div>
            <h1 className="text-5xl text-center">Success Story</h1>
            <div className="divider divider-neutral">Match Mingle</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {
            success.map(story=>
                <div key={story._id} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={story.image} alt="Shoes" /></figure>
  <div className="card-body">
  <div className="badge badge-secondary">Success</div>
    <h2 className="card-title">
      Marriage Date: {story.date}
    </h2>
   
    <p><span className="text-xl font-medium">Success Story :</span>{story.story}</p>
    
   
  </div>
</div>
                )
          }
        </div>
        </div>   
    );
};

export default Success;