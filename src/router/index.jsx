import { createBrowserRouter, Navigate } from 'react-router-dom'

import Layout from '@/components/Layout'
import Home from '@/pages/home'
import Login from '@/pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> }
    ]
  },
  { path: '/login', element: <Login /> }
])

export default router
