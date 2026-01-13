import { Hero, Layout, Signup, LogIn, DashBoard } from "./components/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowPopupContextProvider } from "./context/showPopup.jsx";

const router = createBrowserRouter([
  {
    path: "/quicknote",
    element: <Layout />,
    children: [
      { path: "home", element: <Hero />,},
      { path: "signup", element: <Signup />,},
      { path: "login", element: <LogIn />,},
      { path: "dashboard", element: <DashBoard />,},
    ],
  },
]);

function App() {
  return (
    <>
      <ShowPopupContextProvider>
        <RouterProvider router={router} />
      </ShowPopupContextProvider>
    </>
  );
}

export default App;
