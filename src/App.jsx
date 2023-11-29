import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
    }
  ])

  return <RouterProvider router={routes} />
}

export default App