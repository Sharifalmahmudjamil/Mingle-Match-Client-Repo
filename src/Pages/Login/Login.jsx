import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge,LoadCanvasTemplate,  validateCaptcha } from "react-simple-captcha";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from 'react-icons/fa';
import Swal from "sweetalert2";


const Login = () => {
    const [disabled,setDisabled]= useState(true);
    const {signIn}= useAuth();

    const navigate=useNavigate();
    const location= useLocation();

    const from= location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=e =>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password= form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user= result.user;
            console.log(user);

            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from,{replace:true})
        })
    }

    const handleValidateCaptcha=(e)=>{
        const user_Captcha_Value= e.target.value;
        console.log(user_Captcha_Value);
        if(validateCaptcha(user_Captcha_Value)){
                setDisabled(false);
        }
}
    return (
        <div>
            <div className="hero min-h-screen bg-white ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className=" text-5xl font-bold mb-3">Login now!</h1>
                        <img className="rounded-xl" src="https://i.ibb.co/q7d260H/6184159-3094352.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input  onBlur={handleValidateCaptcha} type="text"  name="captcha"  placeholder="type the text above" className="input input-bordered" required />
                                {/* <button className="btn btn-outline btn-success btn-xs mt-3">validate</button> */}
                               
                            </div>
                            <div className="form-control mt-6">
                                
                                <input disabled={disabled} className="btn bg-emerald-500" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className=" gap-2 mt-4 ">
                    
                   
                
                    <button  className="btn  btn-accent w-1/2 ml-24">
                    <FaGoogle ></FaGoogle>
                      Log in with Google</button>
                    
                    
                    
                  </div>
                        {/* <p className='px-4'><small>New Here? <Link to="/signUp">Create an account</Link> </small></p> */}
                        <p className="text-center mb-8 p-5">Do not Have An Account ? <Link className="text-emerald-500 font-bold" to="/signUp">Create an Account</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;