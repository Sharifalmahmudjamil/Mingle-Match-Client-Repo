import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useBioData from "../../Hooks/useBioData";
import useAuth from "../../Hooks/useAuth";
import { Elements,  } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";


const CheckOut = () => {
    const {user}=useAuth();
    const AllData=useLoaderData();
    console.log(AllData);

    const [bioData]=useBioData();
    const allData=bioData.filter(data=>data.userEmail== user?.email)
    console.log(allData);

   
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
  
    
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl text-center font-medium mt-5">Checkout</h1>
           
            {/* <form onSubmit={handleSubmit}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">BioData ID <small> (Which biodata contact do you need)</small></span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" defaultValue={AllData._id} name="name" placeholder="Enter  the BioData Id" className="input input-bordered w-full" />
                    </label>
                    </div>
                {
                    allData.map(user=> <div key={user._id} className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text"> Self BioDataId (Who want to contact information)</span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" name="quantity"
                        defaultValue={user._id} 
                        placeholder="Enter the Food Quantity" className="input input-bordered w-full" />
                    </label>
                    </div>)
                }
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Self Email <small> (Who want to contact information)</small></span>
                    </label>
                    <label className="input-group">
                        
                        <input type="text" defaultValue={user?.email} name="name" placeholder="Enter  the BioData Id" className="input input-bordered w-full" />
                    </label>
                    </div>

                    <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
            </form> */}
          <div>
            <Elements stripe={stripePromise}>
            <CheckOutFrom 
            AllData={AllData}
            allData={allData}
            ></CheckOutFrom>
            </Elements>
          </div>
           
          
         
               
            </div>
          
        
    );
};

export default CheckOut;