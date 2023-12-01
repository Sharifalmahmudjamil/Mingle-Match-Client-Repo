import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-[800px] h-[800px] mx-auto ">
            <Link to="/">
           <button className="btn lg:btn-outline mt-5">Back To Home</button>
           </Link>
             <img  src="https://i.ibb.co/zPCXNcz/11435044-4705517.jpg" alt="" />
        </div>
       
    );
};

export default ErrorPage;