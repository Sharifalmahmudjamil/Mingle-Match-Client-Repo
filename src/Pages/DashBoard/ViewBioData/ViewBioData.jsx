import useBioData from "../../../Hooks/useBioData";
import useAuth from "../../../Hooks/useAuth";

const ViewBioData = () => {
    const {user}=useAuth();
    const [bioData]=useBioData();
    console.log(bioData);
    const allData=bioData.filter(data=>data.userEmail== user?.email)
    return (
        <div>
           {
            allData.map(data=><div key={data._id} className="card w-96 bg-gray-400 shadow-xl ml-8  border-2 border-pink-400">
              <h1 className="text-2xl text-center font-medium text-pink-500 mt-2"> BioData Information</h1>
            <figure className="px-10 pt-10">
              <img src={data.image} alt="Shoes" className="rounded-3xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold">{data.name}</h2>
              <p className="text-lg font-medium">Father Name: {data.FatherName}</p>
              <p className="text-lg font-medium">Mother Name: {data.motherName}</p>
              <div className="flex">
              <p className="text-lg font-medium">Race: {data.Race}</p>
              <p className="text-lg font-medium">BioData Type: {data.category}</p>
              </div>
              <div className="flex">
              <p className="text-lg font-medium">Weight: {data.Weight}</p>
              <p className="text-lg font-medium">Height: {data.height}</p>
              </div>
              <div className="flex">
              <p className="text-lg font-medium">Age: {data.age}</p>
              <p className="text-lg font-medium">Birth Of Date: {data.date}</p>
              </div>
              <p className="text-lg font-medium">Permanent Division: {data.division}</p>
              <p className="text-lg font-medium">Present Division: {data.PresentDivision}</p>
              <div className="flex">
              <p className="text-lg font-medium">Occupation: {data.occupation}</p>
              <p className="text-lg font-medium">Partner Age: {data.partnerAge}</p>
              </div>
              <p className="text-lg font-medium">Partner Height: {data.partnerHeight}</p>
              <p className="text-lg font-medium">Partner Weight: {data.partnerWeight}</p>
              <p className="text-lg font-medium">Contact Email: {data.email}</p>
              <p className="text-lg font-medium">Number: {data.number}</p>
              <div className="card-actions">
                <button className="btn btn-outline"> Premium</button>
              </div>
            </div>
          </div> )
           }
        </div>
    );
};

export default ViewBioData;