import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditBioData = () => {
    const allIData = useLoaderData();
    console.log(allIData);
    const {name,FatherName,motherName,Race,Weight,age,category,date,division,PresentDivision,height,number,occupation,partnerAge,partnerHeight,partnerWeight,_id,}=allIData;

    const axiosPublic=useAxiosPublic();
    const {user}=useAuth();
    const { register, handleSubmit} = useForm();
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
                image:res.data.data.display_url,
                number:data.number,
                occupation:data.occupation,
                partnerAge:data.partnerAge,
                partnerHeight:data.partnerHeight,
                partnerWeight:data.partnerWeight,
                userEmail:user?.email

            }
            const bioDataRes = await axiosPublic.patch(`/data/${_id}`, bioData);
            console.log(bioDataRes.data)
            
            if(bioDataRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the BioData.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        }
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-medium mt-3 text-red-200">Edit Your BioData Information</h1>
            <div className="divider divider-error">Match Mingle</div>

            <div className="ml-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-5">
                    <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text"> Name*</span>
                        </label>
                        <input
                        defaultValue={name}
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
                        defaultValue={height}
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
                        defaultValue={Weight}
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
                            <select defaultValue={category} {...register('category', { required: true })}
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
                        defaultValue={age}
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
                        defaultValue={occupation}
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
                            defaultValue={date}
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
                            <select defaultValue={Race} {...register('Race', { required: true })}
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
                        defaultValue={FatherName}
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
                        defaultValue={motherName}
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
                            <select defaultValue={division} {...register('division', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="defaultValue">Select a Permanent Division</option>
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
                        defaultValue={partnerAge}
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
                        defaultValue={partnerHeight}
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
                            <select defaultValue={PresentDivision} {...register('PresentDivision', { required: true })}
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
                        defaultValue={partnerWeight}
                            type="number"
                            
                            placeholder="Expected Partner weight"
                            {...register('partnerWeight', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                        <div className="form-control w-1/2 my-6">
                        <label className="label">
                            <span className="label-text">Contact Email</span>
                        </label>
                        <input
                        readOnly
                          defaultValue={user?.email}
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
                        defaultValue={number}
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
                       Update BioData
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditBioData;