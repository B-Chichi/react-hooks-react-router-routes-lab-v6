import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";

// You might want to handle a catch-all route for invalid paths here
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  // A fallback route for any invalid paths to render the error page
  {
    path: "*", // catch-all for invalid routes
    element: <div>Oops! Looks like something went wrong.</div>, // Replace this with your custom error page if needed
  },
];

export default routes;
