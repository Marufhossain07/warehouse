import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Products from "../pages/Products";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Products></Products>
        }
      ]
    },
  ]);

  export default router;