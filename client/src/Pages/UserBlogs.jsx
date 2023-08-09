import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { PiSmiley, PiSmileySadBold } from 'react-icons/pi';



const UserBlogs = () => {
    const [userblogs, setUserBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId')
            const { data } = await axios.get(`/api/v1/blog/user-blog/${id}`)
            if (data?.success) {
                setUserBlogs(data?.userBlog.blogs)
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserBlogs();
    }, []);

    return (
        <>

            <Header />
            {
                loading && loading ? <Loader /> : (
                    userblogs && userblogs.length > 0 ? <div className="blogs grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-4"> {(userblogs.map((blog) => (
                        <BlogCard
                            id={blog._id}
                            isUser={true}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            username={blog.user.username}
                            typeOfFile={blog.typeOfFile}


                        />
                    )))} </div> : (

                        <div className="box flex flex-col w-full  place-content-center
                        items-center min-h-[80vh] gap-2 p-4">
                            <h1 className='font-mono text-xl font-extrabold' >You haven't created any Blogs</h1>
                            <Link to="/create-blog">
                                <button className='bg-slate-600 p-4 rounded-2xl hover:bg-slate-400 font-mono text-xl  gap-1 flex justify-center items-center'>Create Blog <span><PiSmiley /></span> </button>
                            </Link>

                        </div>
                    )
                )
            }
            {
                loading && loading ? <></> : <Footer />
            }


        </>
    )
}

export default UserBlogs