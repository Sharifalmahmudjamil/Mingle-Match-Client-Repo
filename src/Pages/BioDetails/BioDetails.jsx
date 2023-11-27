import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";




const BioDetails = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useAuth();

  const allData=useLoaderData();

  
    const Name = allData?.name
    const fatherName = allData?.FatherName
    const MotherName=allData?.motherName
    const race=allData?.Race
    const Category=allData?.category
    const weight=allData?.Weight
    const height=allData?.height
    const age=allData?.age
    const division=allData?.division
    const PresentDivision=allData?.PresentDivision
    const occupation=allData?.occupation
    const partnerAge=allData?.partnerAge
    const partnerHeight=allData?.partnerHeight
    const partnerWeight=allData?.partnerWeight
    const contactEmail=allData?.email
    const number=allData?.number
    const image=allData?.image
    const date=allData?.data
    const userEmail=user?.email
    
    

    const info={Name,fatherName,MotherName,race,Category,weight,height,age,division,PresentDivision,occupation,partnerAge,partnerHeight,partnerWeight,contactEmail,number,image,date,userEmail}


  const handleSubmit =()=>{
      console.log(allData);
    axiosPublic.post('/favourite',info)
    .then(res=>{
       console.log(res.data);
       if(res.data.insertedId){
        // show the pop up
        Swal.fire({
            position: "top-end",
            icon: "success",
            title:  `${allData.name} Your Favourite BioData Added SuccessFully`,
            showConfirmButton: false,
            timer: 1500
          });
          
    }
    })
    
   
  }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-medium text-center mt-5">BioData Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
          
            
            <div key={allData._id} className="card w-96 bg-gray-400 shadow-xl ml-8  border-2 border-pink-400">
              <h1 className="text-2xl text-center font-medium text-pink-500 mt-2"> BioData Information</h1>
            <figure className="px-10 pt-10">
              <img src={allData.image} alt="Shoes" className="rounded-3xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold">{allData.name}</h2>
              <p className="text-lg font-medium">Father Name: {allData.FatherName}</p>
              <p className="text-lg font-medium">Mother Name: {allData.motherName}</p>
              <div className="flex">
              <p className="text-lg font-medium">Race: {allData.Race}</p>
              <p className="text-lg font-medium">BioData Type: {allData.category}</p>
              </div>
              <div className="flex">
              <p className="text-lg font-medium">Weight: {allData.Weight}</p>
              <p className="text-lg font-medium">Height: {allData.height}</p>
              </div>
              <div className="flex">
              <p className="text-lg font-medium">Age: {allData.age}</p>
              <p className="text-lg font-medium">Birth Of Date: {allData.date}</p>
              </div>
              <p className="text-lg font-medium">Permanent Division: {allData.division}</p>
              <p className="text-lg font-medium">Present Division: {allData.PresentDivision}</p>
              <div className="flex">
              <p className="text-lg font-medium">Occupation: {allData.occupation}</p>
              <p className="text-lg font-medium">Partner Age: {allData.partnerAge}</p>
              </div>
              <p className="text-lg font-medium">Partner Height: {allData.partnerHeight}</p>
              <p className="text-lg font-medium">Partner Weight: {allData.partnerWeight}</p>
              <p className="text-lg font-medium">Contact Email: {allData.email}</p>
              <p className="text-lg font-medium">Number: {allData.number}</p>
              <div className="card-actions">
                <button onClick={handleSubmit}  className="btn btn-outline">Add To Favourites</button>
              </div>
            </div>
          </div> 
         
        </div>
        </div>
    );
};

export default BioDetails;