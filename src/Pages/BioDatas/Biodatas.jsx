// import useAuth from "../../Hooks/useAuth";


import { useState } from "react";
import useBioData from "../../Hooks/useBioData";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";







const Biodatas = () => {
    // const {user}=useAuth();
    const [bioData]=useBioData();
    console.log(bioData);
    
    // eslint-disable-next-line no-unused-vars
    const [bioDatas, setBioDatas] = useState(bioData);
    const [selectedGender, setSelectedGender] = useState('');

    
   
        // gender Change Filter
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
      };
    
      const filteredBioData = bioDatas.filter(item => {
        // If no gender is selected, return all items
        if (!selectedGender) {
          return true;
        }
    
        // Filter based on selected gender
        return item.category === selectedGender;
      });
    
    
  
    return (
        <div>
          <Navbar></Navbar>
          <div className="flex mt-5">
             {/* left side Nav */}
               <div className="w-52 h-72 rounded-xl bg-pink-400">
                    <h1 className="text-xl text-center">Filter Option</h1>
                    <div className="mt-8">
                    <label className="ml-3">
        Select Gender:
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
                    </div>
                  
                    {/* <label className="ml-3">
        Select Division:
        <select className="ml-3"  >
          <option value="">All</option>
          <option value="dhaka">Dhaka</option>
          <option value="chittagong">Chittagong</option>
          <option value="rangpur">Rangpur</option>
          <option value="barishal">Barishal</option>
          <option value="khulna">Khulna</option>
          <option value="maymansing">Maymansing</option> 
          <option value="sylhet">Sylhet</option> 
        </select>
      </label> */}
      
               </div>
               {/* right side nav */}
               <div className="flex-1">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
           {
            filteredBioData.map(data=>
            <div key={data._id} className="card w-96 bg-gray-400 shadow-xl ml-8  border-2 border-pink-400">
              <h1 className="text-2xl text-center font-medium text-pink-500 mt-2"> BioData Information</h1>
            <figure className="px-10 pt-10">
              <img src={data.image} alt="Shoes" className="rounded-3xl" />
            </figure>
            <div className="card-body ">
              <p className="text-lg font-medium">BioData Type: {data.category}</p>
              <p className="text-lg font-medium">Permanent Division: {data.division}</p>
              <p className="text-lg font-medium">Occupation: {data.occupation}</p>
              <p className="text-lg font-medium">Age: {data.age}</p>
              <div className="card-actions">
                <Link to={`/bioDetails/${data._id}`}><button className="btn btn-outline">View Profile</button></Link>
              </div>
            </div>
          </div> )
           }
          
        
        </div>

               </div>
          </div>
        </div>
    );
};

export default Biodatas;