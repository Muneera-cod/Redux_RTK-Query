import React from 'react'
import {Card, SimpleGrid,Group,Text,Button,Badge,Image,Flex, Title,Loader,Center} from '@mantine/core'
import '@mantine/core/styles.css';
import { useGetProductsQuery } from '../../redux/Slice/cartsApiSlice';
function Products() {
    const {data,error,isLoading}=useGetProductsQuery()
    if(error){
        return <div>Error</div>
    }
  return (
    <Flex direction={'column'} gap={30} p={20}>
    <Flex align={'center'} justify={'center'}><Title>PRODUCTS</Title></Flex>
    {isLoading && (
                    <Flex justify={'center'}>
                        <Loader color='blue' type='dots' />
                    </Flex>
                )}
  {data && <SimpleGrid cols={{base:1,sm:1,md:2,lg:3,xl:4}}>
    {data.map((items)=>{ 
      return(
     <Card shadow="sm" padding="lg" radius="md" withBorder  key={items.id}  >
    <Card.Section >
      <Center><Image
        src={items.image}
        radius="md"
      h={200}
      w="auto"
      fit="contain"
        alt="Norway" className='size-50'
      /></Center>
    </Card.Section>
    <Group justify="space-between" mt="md" >
      <Text fw={500}>{items.title}</Text>
      <Badge color="pink">On Sale</Badge>
    </Group>
    <Flex direction={'column'}  h={'100%'} justify={'space-between'}>
   

    <Text size="sm" c="dimmed" >
     {items.description}
    </Text>

    <Button color="blue" fullWidth mt="md" radius="md">
      Book classic tour now
    </Button></Flex>
  </Card>
   )})} 
 

 
</SimpleGrid>}</Flex>
  )
}

export default Products