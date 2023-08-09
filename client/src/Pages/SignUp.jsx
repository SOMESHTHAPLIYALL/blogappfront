import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { BsFillEnvelopeFill, BsFillPenFill } from 'react-icons/bs'
import { FaBlogger } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [show, setShow] = useState("password")
    const [eye, setEye] = useState(<AiFillEye size="25px" />)

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/v1/user/register', { username: inputs.name, email: inputs.email, password: inputs.password });
            if (data.success) {
                toast.success('User Registered Successfully');
                navigate('/login')
            }
        } catch (error) {
            alert("User already exixts")
        }
    }

    const handleShow = () => {
        if (show === "password") {
            setShow("text")
            setEye(<AiFillEyeInvisible size="25px" />)
        }
        else {
            setShow("password")
            setEye(<AiFillEye size="25px" />)
        }
    }

    return (
        <>
            <div className="login bg-[#8fb4ef] h-screen flex flex-col  place-items-center p-2 space-y-4 justify-center">

                <div className="heading flex  text-4xl font-extrabold p-2 gap-2" >
                    <span className='flex place-items-center'><FaBlogger size={"40px"} color='#3B71CA' /></span>
                    BLOGER
                </div>


                <div className="box border-4 rounded-xl border-black h-auto  w-auto flex flex-col p-4 place-items-center justify-evenly">
                    <div className="heading flex justify-center">
                        <h1 className='m-2 font-serif font-bold text-5xl'>SignUp</h1>
                    </div>

                    <div className="inputs flex flex-col h-fit mt-4">
                        <div className="name>
                        mt-4 bg-white rounded-lg flex flex-row justify-center place-items-center p-1">
                            <input className='outline-none w-auto h-auto p-1 font-mono rounded-lg' type="text"
                                name="name"
                                value={inputs.name}
                                onChange={handleChange}
                                placeholder='Name'
                                required />
                            <BsFillPenFill size="20px" />

                        </div>
                        <div className="email mt-4 bg-white rounded-lg flex flex-row justify-center place-items-center p-1">
                            <input className='outline-none w-auto h-auto p-1 font-mono rounded-lg' type="email"
                                name="email"
                                placeholder='Email'
                                value={inputs.email}
                                onChange={handleChange}
                                required />
                            <BsFillEnvelopeFill size="20px" />
                        </div>

                        <div className="password mt-4 bg-white rounded-lg flex flex-row justify-center place-items-center p-1">
                            <input className='outline-none w-auto h-auto p-1 font-mono rounded-lg' type={show}
                                placeholder='Password'
                                name="password"
                                value={inputs.password}
                                onChange={handleChange}
                                required />
                            <button className='hover:cursor' onClick={handleShow} >
                                {eye}
                            </button>

                        </div>

                    </div>
                    <div className="button mt-6">

                        <button onClick={handleSubmit} className='bg-blue-700 p-3 rounded-xl hover:bg-blue-600 font-semibold'
                        >Register</button>


                    </div>
                    <div className='signup mt-6  '>
                        <h2 className='font-mono font-semibold' >Already Registered? <Link className='text-red-600 underline underline-offset: 4 hover:text-red-700 font-bold' to='/login' >Please Login</Link></h2>
                    </div>
                </div>




            </div>
        </>
    )
}

export default SignUp