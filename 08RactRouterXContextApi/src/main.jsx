import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Components/Home.jsx"
import Contact from "./Components/Contact.jsx"
import About from "./Components/About.jsx"
import PageNoyFound from './Components/PageNoyFound.jsx'
import CreateContextProvider from './ContextApi/CreateContextProvider.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<PageNoyFound/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <CreateContextProvider>
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  </CreateContextProvider>
)
