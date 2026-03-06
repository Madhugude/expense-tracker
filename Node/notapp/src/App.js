import logo from './logo.svg';
import './App.css';
import Fetch from "./fetch";

import Aiml from "./Aiml";
import Route from "./router/Route";
import About from "./router/About";
import Home from "./router/Home";

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const aiml= createBrowserRouter([
  {
    path: "/",
    element: <Route />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  { 
    path: "/about",
    element: <About />,
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={aiml} />
    </>
  );
}


export default App;
