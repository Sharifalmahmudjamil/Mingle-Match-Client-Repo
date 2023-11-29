
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SuccessCounter from "../../SuccessCounter/SuccessCounter";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";


const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <SuccessCounter></SuccessCounter>
            <Success></Success>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;