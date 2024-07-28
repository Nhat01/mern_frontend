import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <HomePage />,
            },
            {
               path: "/list",
               element: <ListPage />,
               loader: listPageLoader,
            },
            {
               path: "/:id",
               element: <SinglePage />,
               loader: singlePageLoader,
            },

            {
               path: "/login",
               element: <Login />,
            },
            {
               path: "/register",
               element: <Register />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
