import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AddCoffee from "./Pages/AddCoffee";
import UpdateCofee from "./Pages/UpdateCofee";
import ShowCoffee from "./components/ShowCoffee";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5001/coffee'),
            children:[
                {
                    path: "/showCoffee",
                    element:<ShowCoffee></ShowCoffee>,
                    loader:()=>fetch('http://localhost:5001/coffee'),
                }
            ]
        },
        {
            path:"addCoffee",
            element:<AddCoffee></AddCoffee>,
        },
        {
            path:"updateCoffee/:id",
            element: <UpdateCofee></UpdateCofee>,
            loader:({params}) => fetch(`http://localhost:5001/coffee/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/users',
          element:<Users></Users>,
          loader:()=>fetch('http://localhost:5001/users')
        }
      ]
    },
  ]);



  export {router}