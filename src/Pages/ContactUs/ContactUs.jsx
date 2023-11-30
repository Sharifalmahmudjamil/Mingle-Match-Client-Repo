import Navbar from "../Shared/Navbar/Navbar";
import { BsGlobe } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div style={{backgroundImage: 'url(https://i.ibb.co/nRJXft0/3148701-452097-PFEJ72-226.jpg)'}} className="card lg:card-side shadow-xl ">
                
                <div className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-3 ">

                        <div>
                            <BsGlobe className="text-3xl text-pink-400 mx-40"></BsGlobe>
                        <h1 className="text-2xl font-medium text-center">WWW.MingleMatch.com</h1>
                        </div>
                        
                        <div>
                            <FaPhoneAlt className="text-3xl text-pink-400 lg:mx-44 mx-40"></FaPhoneAlt>
                        <h1 className="text-2xl font-medium text-center">+8801685158940</h1>
                        </div>
                       <div>
                        <MdEmail className="text-3xl text-pink-400 mx-40"></MdEmail>
                       <h1 className="text-2xl font-medium text-center">minglematch@gmail.com</h1>
                       </div>
                    </div>
                    <div className="divider divider-secondary">Match Mingle</div>
                    <form >
                    <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-xl font-medium">Subject :</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="id" placeholder="" className="input input-bordered w-full" />
                </label>
                </div>
                    <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text text-xl font-medium">Your Email / Mobile:</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="id" placeholder="" className="input input-bordered w-full" />
                </label>
                </div>
                <h1 className="text-xl font-medium mt-3">Message:</h1>
                <textarea placeholder="" className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3" ></textarea>
               
                    </form>
                    <button className="btn btn-outline bg-pink-500 w-24">Submit</button>
                   
                </div>
            </div>
        </div>
    );
};

export default ContactUs;