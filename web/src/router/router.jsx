import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Gallery from "../pages/gallery";
import Blog from "../pages/blog";
import Post from "../pages/post";
import NewPost from "../pages/post/new-post";
import Layout from "../layout";
import EditPost from "../pages/post/edit-post";
import Login from "../pages/login";

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
        path: "/auth/login",
        element: <Login />,
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
        path: "/posts/edit/:id",
        element: <EditPost />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
