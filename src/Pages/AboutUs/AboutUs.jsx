/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const AboutUs = () => {
    return (
        <div>
              <Helmet>
                <title>Mingle Match || About US</title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-5xl font-medium text-center mt-5">About Us</h1>
            <div className="lg:flex mt-5">
                <div className="mt-14">
                    <p> <span className="text-2xl font-medium text-rose-500">Welcome to Mingle Match</span>
, your one-stop destination for finding love and companionship. At Mingle Match, we believe that everyone deserves to find happiness and fulfillment in a loving relationship. That's why we've created a safe, secure, and user-friendly platform where you can connect with compatible singles who share your interests and values. <br /> <br />
<span className="text-xl font-medium"> Our Mission: </span>
Our mission is to empower singles to take control of their love lives and find meaningful connections that lead to lasting relationships. We believe that everyone has the potential to find love, and we're committed to providing the tools and resources you need to make your dreams a reality.
 <br />
 <br />
<span className="text-xl font-medium">Our Promise :</span>
We promise to provide you with a positive and rewarding dating experience. We are committed to helping you find love, and we will always be there to support you on your journey. <br />
<span className="text-xl font-medium">Join Us Today:</span>
Ready to take the first step towards finding love? Sign up for Mingle Match today and start connecting with compatible singles in your area. <br />
<span className="text-xl font-medium text-pink-500">Mingle Match - Where love connects.</span>



                    </p>
                </div>
                <div className="ml-2 mt-5">
                    <img className="rounded" src="https://i.ibb.co/C8cbCvT/7974139-3790718.jpg" alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;