import { Hero, Layout, Signup, LogIn, DashBoard } from "./components/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShowPopupContextProvider } from "./context/ShowPopup.jsx";
import { UserContextProvider } from "./context/User.jsx";
import { EditPopupContextProvider } from "./context/EditPopupContext.jsx";

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
    </>
  );
}

export default App;
