import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [footer, setFooter] = useState(false)

    const getAllBlogs = async () => {

        try {
            const { data } = await axios.get("/api/v1/blog/all-blogs")

            if (data?.success) {
                setAllBlogs(data?.blogs)
                setLoading(false)
                setFooter(false)
                console.log(data?.blogs[0].username)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, [])


    return (
        <>
            <Header />
            {
                loading && loading ? <Loader /> :
                    allBlogs && allBlogs.length > 0 ? <div className="blogs mt-4 relative grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center "> {allBlogs.map((blog) => (
                        <BlogCard
                            id={blog?._id}
                            isUser={localStorage.getItem('userId') === blog?.user?._id}
                            title={blog?.title}
                            description={blog?.description}
                            image={blog?.image}
                            username={blog?.user?.username}
                            typeOfFile={blog?.typeOfFile}
                            show={true}

                        />

                    ))} </div> : (<div className="box flex flex-col w-full  place-content-center
                    items-center min-h-[80vh] gap-2 p-4">
                        <h1 className='font-mono text-xl font-extrabold min-h-[80%]' >There are No Blogs To Display!!</h1>
                        <Link to="/create-blog">
                            <button className='bg-slate-600 p-4 rounded-2xl hover:bg-slate-400 font-mono text-xl  gap-1 flex justify-center items-center'>Wanna Create your Blog?</button>
                        </Link>

                    </div>)

            }
            {
                loading && loading ? <></> : <Footer />
            }


        </>
    )
}

export default Blogs