import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navLinks =
        <>
            <li className="lg:text-black "><NavLink to="/"
                className={({ isActive }) => isActive ? 'btn bg-pink-500 btn-sm' : ' btn  btn-sm '}
            >Home</NavLink></li>
            <li className="lg:text-black "><NavLink to="/"
                className={({ isActive }) => isActive ? 'btn bg-pink-500 btn-sm' : ' btn btn-ghost btn-sm'}
            > BioData</NavLink></li>
            <li className="lg:text-black "><NavLink to="/"
                className={({ isActive }) => isActive ? 'btn bg-pink-500 btn-sm' : ' btn btn-ghost btn-sm'}
            >About US</NavLink></li>
            <li className="lg:text-black "><NavLink to="/dashboard/editBioData"
                className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn bg-pink-500 btn-sm'}
            >DashBoard</NavLink></li>


            {
                user ? <>

                    <button onClick={handleLogOut} className="btn btn-sm btn-outline bg-pink-500">LogOut</button>
                </> :
                    <>
                        <li className="lg:text-black "><NavLink to="/login"
                            className={({ isActive }) => isActive ? 'btn btn-outline btn-sm' : ' btn bg-pink-500 btn-sm'}
                        >Login</NavLink></li>
                    </>
            }
        </>
    return (
        <div>
            <div className="navbar  z-10 bg-opacity-30 bg-slate-200 shadow-2xl  max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className=" text-black normal-case text-2xl font-medium">Match <span className="text-pink-500">Mingle</span></a>
                    <img className=" lg:w-[60px] lg:h-[65px] w-16 h-20" src="https://i.ibb.co/3h0hL7Z/801476-18373-NSCH4-D-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-xs bg-pink-500 m-1">profile</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><span>{user?.email}</span></li>

                            <li><img className="w-20 h-20 rounded-full" src={user?.photoURL} alt="" /></li>
                            <li><span className="text-rose-500">{user?.displayName}</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;