import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Home from "./Components/Home/Home.jsx"
import About from "./Components/About/About.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Github, { GetGithubInfo } from "./Components/Github/Github.jsx"
import User from './Components/User/User.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route loader={GetGithubInfo} path='github' element={<Github/>}/>
      <Route path='user/:id' element={<User/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
