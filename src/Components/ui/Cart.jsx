import React from 'react'
import {Card, SimpleGrid,Group,Text,Button,Badge,Image,Flex, Title,Loader, Divider} from '@mantine/core'
import '@mantine/core/styles.css';
import { useAddCartMutation, useGetCartsQuery } from '../../redux/Slice/cartsApiSlice';
// import { useSelector,useDispatch } from 'react-redux';
// import axios from 'axios';

function Cart() {

  const { data , error , isLoading } = useGetCartsQuery();
  const [addCart]=useAddCartMutation();
  const handleAddCart=()=>{
      addCart( {
        userId:5,
        date:'2020-02-03',
        products:[{productId:5,quantity:1},{productId:1,quantity:5}]
    })
  }

  if(error){
    <div>Error</div>
  }
  return (
    <Flex direction={'column'} gap={30} p={20}>
    <Flex align={'center'} justify={'center'}><Title>CART</Title></Flex>
    {isLoading && (
                    <Flex justify={'center'}>
                        <Loader color='blue' type='dots' />
                    </Flex>
                )}
  {data &&
    <div className='w-screen p-10 h-screen '>
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full	 gap-6' >
  {data.map((items)=>{ 
      return(
        <div className='border-2 p-10  bg-zinc-50'  key={items.id}>

          <Text >User Id:{items.userId}</Text>
          <Text fw={1000} my={10}>Products</Text>
         
            {items.products.map((p)=>{
              return(
                <ul className='flex gap-4 flex-wrap flex-col border-2 border-blue-100 p-8 my-2'  key={p.productId}>
               
            <li>Product Id :{p.productId}</li><hr></hr>
            <li>Product quantity:{p.quantity}</li>  </ul>  
            )})}
                   
          </div>
          
         
        
   
   )})} 
  <div className='bg-blue-50 flex items-center justify-center '>
    <button className='font-bold  text-white p-4 bg-blue-500 rounded-md' onClick={()=>{handleAddCart}}>Add product to cart</button></div>
 </div>

 </div>
 
}</Flex>
  )
}

export default Cart