import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About, {fetchApi} from './components/About/About.jsx'
import Login from './components/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path = '/' element={<Layout />}>
      <Route path = '' element={<Home />} />
      <Route loader={fetchApi} path='/about' element={<About />} >
        <Route path=':id' element = {<About />} />
      </Route>
      <Route path ='login' element={<Login />}/>
      <Route path='profile' element={<Profile />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
  </React.StrictMode>,
)
