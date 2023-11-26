import {  FaEdit, FaHome, FaStreetView, FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { MdFolderSpecial, MdOutlineWorkspacePremium,  } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";



const DashBoard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen  bg-pink-500">
            <ul className="menu p-4 my-10">
              {
                isAdmin? <>
                  <li>
                    <NavLink to='/dashboard/admin'>
                    <FaHome></FaHome>
                       Admin DashBoard</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/users'>
                    <FaUser></FaUser>
                     Manage Users</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/premium'>
                    <MdOutlineWorkspacePremium></MdOutlineWorkspacePremium>
                    Approved Premium</NavLink>
                    </li>
                <li>
                    <NavLink to='/dashboard/contact'>
                    <BiSolidContact></BiSolidContact>
                    Approved Contact Request</NavLink>
                    
                    </li>
                    <Link to='/login'>
                    <button className="btn btn-outline w-full btn-sm mt-5">Logout</button></Link>
                </>
                :
                <>
                  <li>
                    <NavLink to='/dashboard/editBioData'>
                    <FaEdit></FaEdit>
                        Create BioData</NavLink>
                   
                    </li>
                <li>
                    <NavLink to='/dashboard/viewBioData'>
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
                    <Link to='/login'>
                    <button className="btn btn-outline w-full btn-sm mt-5">Logout</button></Link>
                </>
              }
                    {/* shared nav link */}
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