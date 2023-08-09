import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home.jsx";
import Blogs from "./Pages/Blogs";
import UserBlogs from "./Pages/UserBlogs";
import CreateBlog from "./Pages/CreateBlog";
import BlogDetails from "./Pages/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>{<Home />}</>,
    },
    {
      path: "/login",
      element: <>{<Login />}</>,
    },
    {
      path: "/signup",
      element: <>{<SignUp />}</>,
    },
    {
      path: "/blogs",
      element: <>{<Blogs />}</>,
    },
    {
      path: "/my-blogs",
      element: <>{<UserBlogs />}</>,
    },

    {
      path: "/create-blog",
      element: <>{<CreateBlog />}</>,
    },

    {
      path: "/blog-details/:id",
      element: <>{<BlogDetails />}</>,
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
