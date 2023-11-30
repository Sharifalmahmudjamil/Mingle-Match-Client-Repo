// import useAuth from "../../Hooks/useAuth";


import { useEffect, useState } from "react";
import useBioData from "../../Hooks/useBioData";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";

import './Biodatas.css'
import Footer from "../Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";







const Biodatas = () => {
  const [itemsPerPage,setItemsPerPage]=useState(6);
  const [currentPage,setCurrentPage]= useState(0);
  const [search,setSearch] = useState('');
  const {count}=useLoaderData();
  console.log(count);
  
  const numberOfPages=Math.ceil(count/itemsPerPage);
  const pages=[];
  for(let i=0; i<numberOfPages;i++){
    pages.push(i)
  }
  console.log(pages);

  const handleItemsPerPage = e=>{
    const value= parseInt(e.target.value)
    console.log(value);
    setItemsPerPage(value);
    setCurrentPage(0);
    
}

const handlePrevPage = () =>{
  if(currentPage>0){
      setCurrentPage(currentPage-1)
  }
}
const handleNextPage =() =>{
  if(currentPage < pages.length -1){
      setCurrentPage(currentPage+1);
  }
}


    const [data]=useBioData();
    
   
    
    // eslint-disable-next-line no-unused-vars
    const [bioDatas, setBioDatas] = useState(data);
    const [selectedGender, setSelectedGender] = useState('');

    useEffect(() => {
      fetch(`http://localhost:5000/data?page=${currentPage}&size=${itemsPerPage}`)
          .then(res => res.json())
          .then(data => setBioDatas(data))
    }, [currentPage,itemsPerPage]);
    
   
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
      console.log(filteredBioData);
     

      
    return (
        <div>
            <Helmet>
                <title>Mingle Match || BioDatas</title>
            </Helmet>
          <Navbar></Navbar>
          <div className="flex mt-5">
             {/* left side Nav */}
               <div className="w-52 h-72 rounded-xl bg-pink-400 ">
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
                    <div className=" mt-5">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search By Division" className="input input-bordered input-error w-full" />
            </div>
      
               </div>
               {/* right side nav */}
               <div className="flex-1">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
           {
            filteredBioData.filter((BioData)=>{
              return search.toLowerCase() === ''?BioData:BioData.PresentDivision.toLowerCase().includes(search)
            }).map(data=>
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
          
          <div className="pagination">
          <button onClick={handlePrevPage} >prev</button>
            {
              pages.map(page=><button 
                className={currentPage === page ? 'selected': undefined}
                onClick={()=> setCurrentPage(page)}
                 key={page} >{page}</button>)
            }
             <button onClick={handleNextPage} >next</button>
            <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Biodatas;