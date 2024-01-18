import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home, AboutUs, Blog, Classes, Contact, Gallery, Pricing, Schedule,PageNotFound} from "../src/Pages/AllPages.js"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Router/Root.jsx'

const router  = createBrowserRouter([

  {
path:"/",
element:<Root/>,
children:[
  {
    path:"",
    element:<Home/>
  },
  {
   path:"AboutUs",
   element:<AboutUs/>
  },
  {
   path:"blog",
   element:<Blog/>
  },
  {
    path:"classes",
    element:<Classes/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"pricing",
    element:<Pricing/>
  },
  {
    path:"gallery",
    element:<Gallery/>
  },
  {
    path:"schedule",
    element:<Schedule/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  }
]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
     {/* <App /> */}
  </React.StrictMode>,
)
