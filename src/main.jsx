import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Home,
  AboutUs,
  Blog,
  Classes,
  Contact,
  Gallery,
  Pricing,
  Schedule,
  PageNotFound,
} from "../src/Pages/AllPages.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Router/Root.jsx";
import { Schedules } from "./components/AllExport.js";
// import {Monday,Friday,Thursday,Tuesday,Saturday,Wednesday} from './components/Schedule/Days/Days.jsx'
import Monday from "./Pages/Schedule/Day/Monday.jsx";
import Friday from "./Pages/Schedule/Day/Friday.jsx";
import Saturday from "./Pages/Schedule/Day/Saturday.jsx";
import Thursday from "./Pages/Schedule/Day/Thursday.jsx";
import Tuesday from "./Pages/Schedule/Day/Tuesday.jsx";
import Wednesday from "./Pages/Schedule/Day/Wednesday.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },

    
      // Day
      {
        path: "schedule",
        element: <Schedule />,
        children: [
          // Days
          {
            path: "monday",
            element: <Monday />,
          },
          {
            path: "tuesday",
            element: <Tuesday />,
          },
          {
            path: "wednesday",
            element: <Wednesday />,
          },
          {
            path: "thursday",
            element: <Thursday />,
          },
          {
            path: "friday",
            element: <Friday />,
          },
          {
            path: "saturday",
            element: <Saturday />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
