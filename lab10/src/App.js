import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import RootRoute from "./pages/RootRoute";
import AirplanePage from "./components/airplane_page/AirplanePage";
import {HOME, CATALOG, CART, AIRPLANE} from './constants/routes'
import {Provider} from "react-redux";
import store from "./store/store";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute/>,
        children: [
            {path: HOME, element: <Home/>},
            {path: CART, element: <Cart/>},
            {path: AIRPLANE + '/*', element: <AirplanePage/>}
        ]
    },
    {path: CATALOG, element: <Catalog/>}
]);

function App() {
    document.title = "American Airplanes"
    return (
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    );
}
export default App;