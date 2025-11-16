// App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Story from "./pages/Story.jsx";
import Contact from "./pages/Contact.jsx";

function RootLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-sans">
        <NavBar />
        <div className="flex-grow p-0 m-0">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/about", element: <About /> },
      { path: "/story", element: <Story /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
