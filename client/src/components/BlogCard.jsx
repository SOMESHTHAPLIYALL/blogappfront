import axios from 'axios';
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast";

const BlogCard = ({ title, description, image, username, id, isUser, show }) => {

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/blog-details/${id}`);
    }


    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`)
            if (data?.success) {
                toast.success("Blog Deleted")
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="py-4 m-auto p-2">
                <div className="rounded  shadow-lg h-[550px] overflow-y-auto">

                    <img className='h-96 w-full' src={image} alt="" />
                    <div className="px-6 py-4 ">

                        <div className="font-bold flex flex-row justify-between text-xl mb-2">{title}
                            {
                                isUser && (
                                    <>
                                        <div className="icons flex items-end gap-4">
                                            <AiFillDelete
                                                className=" hover:cursor-pointer hover:text-2xl"
                                                onClick={handleDelete}
                                                size={"25px"}
                                                color='red'
                                            />
                                            <AiFillEdit
                                                className="hover:cursor-pointer "
                                                onClick={handleEdit}
                                                size={"25px"}
                                                color='blue'
                                            />
                                        </div>

                                    </>
                                )
                            }
                        </div>
                        <p className='text-gray-600 '>{description}</p>
                    </div>
                    {
                        show && <div className="flex justify-end gap-4 p-2">
                            <div className='mr-auto px-6 '><span className='font-mono font-bold'>Created By-{username}</span></div>
                        </div>
                    }

                </div>
            </div>


        </>
    )
}

export default BlogCard