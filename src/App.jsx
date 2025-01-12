import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  MenuProduct,
  Detail,
  Category,
  Errorpage,
  About,
  Contact,
} from "./pages";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuProduct />,
      },
      {
        path: "menu/detail/:nameurl",
        element: <Detail />,
      },
      {
        path: "menu/category/:category",
        element: <Category />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}
export default App;
