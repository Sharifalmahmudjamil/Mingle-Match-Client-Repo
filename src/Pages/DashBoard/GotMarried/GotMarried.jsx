import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const GotMarried = () => {
        const axiosPublic=useAxiosPublic();
    const handleSubmit=e=>{
            e.preventDefault();
            const form=e.target;
            const selfId=form.id.value
            const partnerId=form.partnerId.value
            const image=form.image.value
            const date=form.date.value
            const story=form.story.value
            
            const info ={selfId,partnerId,image,date,story}
            console.log(info);

            axiosPublic.post('/success',info)
    .then(res=>{
       console.log(res.data);
       if(res.data.insertedId){
        // show the pop up
        Swal.fire({
            position: "top-end",
            icon: "success",
            title:  ` You post Your Success Story`,
            showConfirmButton: false,
            timer: 1500
          });
          
    }
    })
    }

    return (
        <div>
            <h1 className="text-4xl text-center font-medium mt-5 text-rose-600">GOT MARRIED</h1>
            <div className="divider divider-error ml-3">Match Mingle</div>
            <h2 className="text-2xl text-center font-normal mt-5 text-rose-300">Please Fill Up Your Form And <br /> Share Your Married Success Story</h2>

            {/* MARRIED input field */}
            <form onSubmit={handleSubmit} >
            <div className="mt-5">
            <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Self BioData ID</span>
                </label>
                <label className="input-group">
                    
                    <input type="text"  name="id" placeholder="Enter  the self BioData Id" className="input input-bordered w-full" />
                </label>
                </div>
            <div  className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Partner BioData Id</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="partnerId"
                   
                    placeholder="Enter the Partner BioData ID" className="input input-bordered w-full" />
                </label>
                </div>
            
            </div>

            <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Couple Image Link</span>
                </label>
                <label className="input-group">
                    
                    <input type="text"  name="image" placeholder="Enter  the Couple image link" className="input input-bordered w-full" />
                </label>
                </div>
            <div  className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Marriage Date</span>
                </label>
                <label className="input-group">
                    
                    <input type="date" name="date"
                   
                    placeholder="Enter the Marriage" className="input input-bordered w-full" />
                </label>
                </div>
            
            </div>
            <h1 className="ml-5 text-base"> Success Story Review</h1>
            <textarea className="textarea textarea-bordered md:w-full md:h-32  ml-4 mt-3"name="story" placeholder="Share her/his feelings"></textarea>

            <button className="btn btn-outline ml-5 mt-4">Submit</button>
            
            </div>
            </form>
            
        </div>
    );
};

export default GotMarried;