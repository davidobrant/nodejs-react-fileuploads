import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Layout from "../layout";
import Gallery from "../pages/gallery";
import Profile from "../pages/profile";
import Blog from "../pages/blog";
import Post from "../pages/post";
import NewPost from "../pages/post/new-post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/posts/new",
        element: <NewPost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
