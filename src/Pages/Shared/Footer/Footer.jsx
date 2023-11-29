import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-500 text-base-content mt-5">
                <aside>
                <img className=" lg:w-[60px] lg:h-[65px] w-16 h-20" src="https://i.ibb.co/3h0hL7Z/801476-18373-NSCH4-D-removebg-preview.png" alt="" />
                    <p>Match Mingle.<br />Connecting Hearts, Creating Lifelong Bonds: Your Journey to Forever Starts Here</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to='/bioDatas'><a className="link link-hover hover:text-pink-500">BioDatas</a></Link>
                    <Link to='/dashboard/admin'><a className="link link-hover hover:text-pink-500">DashBoard</a></Link>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;