import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { toast } from "react-hot-toast";

const BlogDetails = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({})
  const id = useParams().id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const getBlogDetails = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`)
      if (data?.success) {
        setBlog(data?.blog)
        setTitle(data?.blog.title);
        setDescription(data?.blog.description)
        setImage(data?.blog.image)

      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlogDetails();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("user", id);
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, formData)
      if (data?.success) {
        toast.success("Blog Updated")
        navigate('/my-blogs')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const setimgfile = (e) => {
    setImage(e.target.files[0])
  }


  return (
    <>
      <div className="blogs bg-blue-200 h-screen">
        <Header />
        <form onSubmit={handleSubmit}>

          <div className="contain flex justify-center h-screen place-items-center p-2 ">
            <div className="box border-4 border-black rounded-lg flex  flex-col h-3/4 w-auto
                        p-2 place-items-center overflow-y-auto mb-auto mt-4">
              <div className="heading mt-4">
                <h1 className='font-mono font-bold text-4xl' >Update Your Blog</h1>
              </div>
              <div className="title w-full mt-4">
                <h2 className='font-mono font-bold text-xl' >Title</h2>
                <input className='outline-none p-2 rounded-xl w-full'
                  type="text"
                  placeholder='Title'
                  value={title}
                  name='title'
                  onChange={(e) => setTitle(e.target.value)}
                  required />
              </div>


              <div className="title w-auto  mt-5">
                <h2 className='font-mono font-bold text-xl' >Description</h2>
                <textarea
                  placeholder="Description"
                  className='outline-none rounded-xl  p-2 overflow-y-visible  '
                  rows="10"
                  cols="30"
                  type="text"
                  value={description}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

              </div>
              <div className="image border-2 border-black rounded-xl flex flex-col p-2 justify-center w-full mt-4 ">
                <h2 className='m-2 font-mono font-bold text-2xl' >Image</h2>

                <input
                  className='w-56'
                  type="file"
                  name="image"
                  onChange={setimgfile}
                />
              </div>
              <div className="button mt-4 bg-slate-600 p-2 rounded-xl font-mono font-bold
                            hover:bg-slate-500">
                <button type='submit' >Update</button>
              </div>
            </div>
          </div>
        </form>

      </div>
      <Footer />

    </>
  )
};

export default BlogDetails;
