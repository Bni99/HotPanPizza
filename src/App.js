import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as bestSellerLoader } from "./features/Home";
import Menu, { menuLoader } from "./features/Menu";
import Cart from "./features/Cart/Cart";
import Order, { loader as orderLoader } from "./features/Order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/Order/CreateOrder";
import AppLayout from "./ui/applayout";
import Error from "./ui/error";
import AboutUs from "./features/Pages/AboutUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />, loader: bestSellerLoader },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/our-company", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
