import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Gallery from "../pages/gallery";
import Blog from "../pages/blog";
import Post from "../pages/post";
import NewPost from "../pages/post/new-post";
import App from "../App";
import EditPost from "../pages/post/edit-post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
