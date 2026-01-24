import { Hero, Layout, Signup, LogIn, DashBoard } from "./components/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowPopupContextProvider } from "./context/ShowPopup.jsx";
import { UserContextProvider } from "./context/User.jsx";
import { EditPopupContextProvider } from "./context/EditPopupContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/quicknote",
    element: <Layout />,
    children: [
      { path: "home", element: <Hero /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <LogIn /> },
      { path: "dashboard", element: <DashBoard /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
          <ShowPopupContextProvider>
            <EditPopupContextProvider>
              <RouterProvider router={router} />
            </EditPopupContextProvider>
          </ShowPopupContextProvider>
      </UserContextProvider>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
    </>
  );
}

export default App;
