import {Hero, Layout, Signup, LogIn } from "./components/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
  path: "/quicknote",
  element: <Layout/>,
  children: [
    {
      path: "home",
      element: <Hero/>
    },
    {
      path: "signup",
      element: <Signup/>
    },
    {
      path: "login",
      element: <LogIn/>
    }
  ]
}]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
