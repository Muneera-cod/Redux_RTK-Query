import React from 'react'
import Cart from '../ui/Cart'
import Products from '../ui/Products'
import { Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate()
  return (
    <div className='flex items-center justify-center w-full h-screen gap-10 p-72'>
        <Button className='w-full h-full' onClick={()=>navigate('/carts')}>Carts</Button>
        <Button className='w-full h-full' onClick={()=>navigate('/products')}>Products</Button>
    </div>
  )
}

export default HomePage