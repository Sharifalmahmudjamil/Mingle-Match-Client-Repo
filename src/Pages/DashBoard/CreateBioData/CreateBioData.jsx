import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateBioData = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useAuth();
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) =>{ 
        console.log(data);
          // image upload to imgbb and then get an url
          const imageFile = { image: data.image[0] }
          const res= await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type': 'multipart/form-data'
            }
          });
          if(res.data.success){
            // now send the bio data in server side with image hosting
            const bioData={
                name:data.name,
                FatherName:data.FatherName,
                motherName:data.motherName,
                Race:data.Race,
                Weight:data.Weight,
                age:data.age,
                category:data.category,
                date:data.date,
                division:data.division,
                PresentDivision:data.PresentDivision,
                email:data.email,
                height:data.height,
                image:res.data.display_url,
                number:data.number,
                occupation:data.occupation,
                partnerAge:data.partnerAge,
                partnerHeight:data.partnerHeight,
                partnerWeight:data.partnerWeight,
                userEmail:user.email

            }
            
            const bioRes= await axiosPublic.post('/bio',bioData);
            console.log(bioRes);
            if(bioRes.data.insertedId){
                // show the pop up
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "BioData Created SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
          }
          console.log(res.data);

    }
    return (
        <div>
           <div className="ml-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text"> Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Height</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Height"
                            {...register('height', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Weight</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Weight"
                            {...register('Weight', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    </div>
                   
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">BioData Type*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a BioData Type</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                
                            </select>
                        </div>

                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Age"
                            {...register('age', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text"> Occupation</span>
                        </label>
                        <input
                            type="text"
                            placeholder="occupation"
                            {...register('occupation', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                        {/* date */}
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Date Of Birth</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Date Of Birth"
                                {...register('date', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    {/* 3rd row */}
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text"> Race*</span>
                            </label>
                            <select defaultValue="default" {...register('Race', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Race</option>
                                <option value="muslim">Muslim</option>
                                <option value="hindu">Hindu</option>
                                <option value="boddho">Boddho</option>
                                <option value="khristan">Khristan</option>
                                <option value="others">others</option>
                                
                            </select>
                        </div>

                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Father name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Father name"
                            {...register('FatherName', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Mother Name </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Mother Name"
                            {...register('motherName', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                        {/* date */}
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Permanent Division*</span>
                            </label>
                            <select defaultValue="default" {...register('division', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Permanent Division</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="rangpur">RangPur</option>
                                <option value="barishal">Barishal</option>
                                <option value="khulna">Khulna</option>
                                <option value="maymansing">Maymansign</option>
                                <option value="sylhet">Sylhet</option>
                                
                                
                            </select>
                        </div>

                    </div>
                    {/* 4th row */}
                    <div className="flex gap-6">
                      
                       

                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Expected Partner Age</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Expected Partner Age"
                            {...register('partnerAge', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text"> Expected Partner Height </span>
                        </label>
                        <input
                            type="text"
                            placeholder=" Expected Partner Height"
                            {...register('partnerHeight', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                        {/*  */}
                        <div className="form-control w-1/2 my-6">
                            <label className="label">
                                <span className="label-text">Present Division*</span>
                            </label>
                            <select defaultValue="default" {...register('PresentDivision', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Present Division</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="rangpur">RangPur</option>
                                <option value="barishal">Barishal</option>
                                <option value="khulna">Khulna</option>
                                <option value="maymansing">Maymansign</option>
                                <option value="sylhet">Sylhet</option>
                                
                                
                            </select>
                        </div>

                    </div>

                    {/* 4th row */}
                    <div className="flex gap-6">
                      
                       

                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Expected Partner weight</span>
                        </label>
                        <input
                            type="number"
                            
                            placeholder="Expected Partner weight"
                            {...register('partnerWeight', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Contact Email </span>
                        </label>
                        <input
                            type="email"
                            placeholder=" Contact Email"
                            {...register('email', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text"> Mobile Number </span>
                        </label>
                        <input
                            type="number"
                            placeholder=" Mobile Number"
                            {...register('number', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>

                        

                    </div>


                  

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline">
                       Create BioData
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateBioData;