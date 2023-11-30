
import { Helmet } from "react-helmet-async";
import PremiumCard from "../../PremiumCard/PremiumCard";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SuccessCounter from "../../SuccessCounter/SuccessCounter";
import Banner from "../Banner/Banner";
import Success from "../Success/Success";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Mingle Match || Home</title>
            </Helmet>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <PremiumCard></PremiumCard>
            <SuccessCounter></SuccessCounter>
            <Success></Success>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;