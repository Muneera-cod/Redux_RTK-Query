import React from 'react'
import Cart from './Cart'
import Sample from './Sample'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
function App() {
  return (
   
       <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App