import {  FaEdit, FaHome, FaStreetView } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { MdFolderSpecial } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";



const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen  bg-pink-500">
            <ul className="menu p-4 my-10">
                <li>
                    <NavLink to='/dashboard/editBioData'>
                    <FaEdit></FaEdit>
                        Create BioData</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/viewData'>
                    <FaStreetView></FaStreetView>
                        View BioData</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/contact'>
                    <BiSolidContact></BiSolidContact>
                    My Contact Request</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/contact'>
                    <MdFolderSpecial></MdFolderSpecial>
                    Favourites BioData</NavLink>
                   
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
            </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;