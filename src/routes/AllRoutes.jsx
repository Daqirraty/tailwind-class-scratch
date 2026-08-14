import Ademola from "../screens/Ademola";
import Bolu from "../screens/Bolu";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Responsiveness from "../screens/responsiveness";
import ErrorPage from "../screens/ErrorPage";
import { AllPaths } from "./allPaths";
import ProductPage from "../screens/paramsClass/productPage";
import ProductDetailsPage from "../screens/paramsClass/productDetailsPage";

const AllRoutes = [
    {
        paths: AllPaths.home,
        element: <Home/>
    },
    {
     paths: AllPaths.login,
        element: <Login/>   
    },
    {
        paths: AllPaths.bolu,
        element: <Bolu/>
    },
    {
        paths: AllPaths.responsiveness,
        element: <Responsiveness/>
    },
    {
        paths: AllPaths.ademola,
        element: <Ademola/>
    },
    {
        paths: AllPaths.product,
        element: <ProductPage/>
    },
    {
        paths: AllPaths.productDetails,
        element: <ProductDetailsPage/>
    },
    {
        paths: AllPaths.error,
        element: <ErrorPage/>
    }
]

export default AllRoutes