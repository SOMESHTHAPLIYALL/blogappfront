import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaBlogger } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../reux/Store'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import { toast } from "react-hot-toast";

const Header = () => {


    const navigate = useNavigate();

    let isLogin = useSelector(state => state.isLogin)
    isLogin = isLogin || localStorage.getItem('userId')
    const dispatch = useDispatch();
    const handleLogout = () => {
        try {
            dispatch(authActions.logOut());
            toast.success("Logout Succesfully");
            navigate('/')
            localStorage.clear();

        } catch (error) {
            console.log(error)
        }
    }
    const [toggle, setToggle] = useState(false)
    return (
        <>

            <div className="header bg-[#8FAEE0] h-28 p-2 flex place-items-center z-20 sticky top-0" >
                <div className="box  h-full w-full flex justify-between place-items-center ">

                    <div className="heading flex  text-4xl font-extrabold p-2 gap-2" >
                        <span className='flex place-items-center'><FaBlogger size={"40px"} color='#3B71CA' /></span>
                        BLOGER
                    </div>
                    {
                        toggle ?
                            <AiOutlineClose

                                onClick={() => setToggle(!toggle)} className='text-4xl md:hidden block hover:cursor-pointer ' />
                            :

                            <AiOutlineMenu

                                onClick={() => setToggle(!toggle)} className='text-4xl md:hidden block hover:cursor-pointer' />
                    }

                    {
                        isLogin && (<>
                            <ul className=' hidden md:flex flex-row gap-7 p-2'>

                                <li>

                                    <Link to="/blogs" >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Blogs</button>
                                    </Link>

                                </li>

                                <li>
                                    <Link to="/my-blogs">
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>My Blogs</button>
                                    </Link>

                                </li>


                                <li>
                                    <Link to="/create-blog">
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Create Blog</button>
                                    </Link>

                                </li>

                                <li>

                                    <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'
                                        onClick={handleLogout}
                                    >LogOut</button>

                                </li>
                            </ul>

                            <ul className={`md:hidden flex-row gap-7 p-5 fixed bg-[#659cf4] top-[110px] w-full h-screen ${toggle ? 'left-0' : 'left-[-100%]'} `}>

                                <li className='p-3 hover:bg-slate-200 rounded-md' >
                                    <Link to="/blogs" >
                                        <button className=' flex justify-start w-full p-2 font-mono text-xl font-extrabold'>Blogs</button>
                                    </Link>
                                </li>



                                <li className='p-3 hover:bg-slate-200 rounded-md w-auto'>
                                    <Link to="/my-blogs">
                                        <button className=' flex justify-start w-full p-2 font-mono text-xl font-extrabold'>My Blogs</button>
                                    </Link>
                                </li>

                                <li className='p-3 hover:bg-slate-200 rounded-md w-auto'>
                                    <Link to="/create-blog">
                                        <button className=' flex justify-start w-full p-2 font-mono text-xl font-extrabold'>Create Blog</button>
                                    </Link>
                                </li>

                                <li className='p-3 hover:bg-slate-200 rounded-md w-auto'>
                                    <button className='flex justify-start w-full p-2 font-mono text-xl font-extrabold'
                                        onClick={handleLogout}
                                    >Logout</button>
                                </li>

                            </ul>
                        </>

                        )
                    }

                    {
                        !isLogin && (<>
                            <ul className=' hidden md:flex flex-row gap-7 p-2'>

                                <li>
                                    <Link to='/login' >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Login</button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/signup" >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Register</button>
                                    </Link>

                                </li>

                            </ul>

                            <ul className={`md:hidden  flex-row gap-7 p-5 fixed bg-[#659cf4] top-[110px] w-full h-screen ${toggle ? 'left-0' : 'left-[-100%]'}`}>

                                <li className='p-3 hover:bg-slate-200 rounded-md' >
                                    <Link to="/login" >
                                        <button className=' flex justify-start w-full p-2 font-mono text-xl font-extrabold'>Login</button>
                                    </Link>
                                </li>



                                <li className='p-3 hover:bg-slate-200 rounded-md w-auto'>
                                    <Link to="/signup">
                                        <button className=' flex justify-start w-full p-2 font-mono text-xl font-extrabold'>Register</button>
                                    </Link>
                                </li>

                            </ul>
                        </>)
                    }

                </div>

            </div>

            {/* <div className="header w-full bg-[#8FAEE0]    ">
                <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
                    <div className='bloger flex cursor-pointer items-center gap-2'>
                        <FaBlogger size={"40px"} color='#3B71CA' />
                        <h1 className='font-mono  font-bold text-4xl'>BLOGER</h1>
                    </div>

                    <div onClick={() => setToggle(!toggle)} className="menu md:hidden absolute right-8 top-6 cursor-pointer w-7 h-7">
                        {
                            toggle ? <AiOutlineClose className='text-4xl' /> : <AiOutlineMenu className='text-4xl' />
                        }


                    </div>

                    {
                        isLogin && (<>
                            <ul className={`md:flex pl-9 md:pl-0 gap-6 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 bg-[#8FAEE0] w-full transition-all duration-500 ease-in ${toggle ? ' top-17 mt-2' : 'top-[-490px]'}`}>
                                <li>

                                    <Link to="/blogs" >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Blogs</button>
                                    </Link>

                                </li>

                                <li>
                                    <Link to="/my-blogs">
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>My Blogs</button>
                                    </Link>

                                </li>


                                <li>
                                    <Link to="/create-blog">
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Create Blog</button>
                                    </Link>

                                </li>

                                <li>

                                    <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'
                                        onClick={handleLogout}
                                    >LogOut</button>

                                </li>
                            </ul>


                        </>

                        )
                    }

                    {
                        !isLogin && (<>
                            <ul className={`md:flex pl-9 md:pl-0 gap-6 md:items-center md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 bg-[#8FAEE0] w-full transition-all duration-500 ease-in ${toggle ? ' top-17 mt-2' : 'top-[-490px]'}`}>

                                <li>
                                    <Link to='/login' >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Login</button>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/signup" >
                                        <button className='hover:bg-slate-100 rounded-md font-mono text-xl font-extrabold p-2'>Register</button>
                                    </Link>

                                </li>

                            </ul>
                        </>
                        )}


                </div>
            </div>
 */}

        </>
    )
}

export default Header