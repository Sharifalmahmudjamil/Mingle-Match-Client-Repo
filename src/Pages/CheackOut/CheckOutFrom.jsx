/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../Hooks/useAuth";
import {  useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// import { data } from "autoprefixer";



const CheckOutFrom = ({allData,AllData}) => {
    const [error,setError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const [transactionId, setTransactionId]= useState('');
   
    const {user}=useAuth();
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    // const axiosPublic=useAxiosPublic();
    const totalPrice=500;

   
 useEffect(()=>{
       axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const form=event.target;
        const Id=form.id.value;
        const selfId=form.selfId.value;
        const selfEmail=form.selfEmail.value
  
        
        const data={Id,selfId,selfEmail}
        console.log(data);
        
        if(!stripe || !elements){
            return
        }

        const card=elements.getElement(CardElement)

        if (card == null) {
            return;
          }
           // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      if (error) {
        console.log('payment error', error);
        setError(error.message)
      } else {
        console.log('PaymentMethod', paymentMethod);
        setError('')
      }

      // confirm payment 
      const {paymentIntent,error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:card,
          billing_details:{
            email:user?.email || "anonymous",
            name:user?.displayName || "anonymous"
          }

        }
      })
      if(confirmError){
        console.log('confirm error');
      }
      else{
        console.log('payment intent',paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id',paymentIntent.id);
            setTransactionId(paymentIntent.id);
            // now save the database
            const payment= {
                email:user.email,
                price:totalPrice,
                transactionId:paymentIntent.id,
                date:new Date(),
                status:'false',
                UserData:data
            }
           const res= await axiosSecure.post('/payments',payment)
           console.log ('payment save', res.data);
           if(res.data?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank You Payment SuccessFully",
                showConfirmButton: false,
                timer: 1500
              });
           }
        }
      }

    }
  

   


    return (
        <form onSubmit={handleSubmit}>
        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">BioData ID <small> (Which biodata contact do you need)</small></span>
                </label>
                <label className="input-group">
                    
                    <input type="text" defaultValue={AllData._id} name="id" placeholder="Enter  the BioData Id" className="input input-bordered w-full" />
                </label>
                </div>
            {
                allData.map(user=> <div key={user._id} className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text"> Self BioDataId (Who want to contact information)</span>
                </label>
                <label className="input-group">
                    
                    <input type="text" name="selfId"
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
                    
                    <input type="text" defaultValue={user?.email} name="selfEmail" placeholder="Enter  the BioData Id" className="input input-bordered w-full" />
                </label>
                </div>
                <h2 className="text-xl font-medium mt-3 text-rose-600">Submission Fee : 500 Taka</h2>
            

                <CardElement className="my-5"
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
  <button className="btn btn-outline bg-rose-400 my-5" type="submit" disabled={!stripe || !clientSecret}>
    Submit
  </button>
  
  <p className="text-red-600">{error}</p>
  {transactionId && <p className="text-green-700">Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;