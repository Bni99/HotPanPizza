import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as bestSellerLoader } from "./features/Home/Home";
import Menu, { menuLoader } from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import Order, { loader as orderLoader } from "./features/Order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import CreateOrder, {
  action as createOrderAction,
} from "./features/Order/CreateOrder";

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
