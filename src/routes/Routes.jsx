import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Products></Products>
        },
        {
            path:'/add-product',
            element: <AddProduct></AddProduct>
        }
      ]
    },
  ]);

  export default router;