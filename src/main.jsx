import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { fetchWeather } from './api'
import Layout from './pages/layout'
import HomePage from './pages/home'
import DetailedPage from './pages/detailed-weather'
import './index.css'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout />,
    children: [
      {
        path:'/',
        element:<HomePage />,
        loader: () => fetchWeather()
      },
      {
        path:'search',
        element:<DetailedPage />,
        
        
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />

    </ChakraProvider>
  </React.StrictMode>,
)
