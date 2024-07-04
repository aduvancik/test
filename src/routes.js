//variable
import { HOME_ROUTE, PRODUCT_ROUTE} from "./utils/consts";
//components
import ProductPages from "./pages/ProductPages.jsx";
import HomePages from "./pages/HomePages.jsx";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: HomePages
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPages
    }
];