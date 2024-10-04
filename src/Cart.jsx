import React from 'react'
import {Card, SimpleGrid,Group,Text,Button,Badge,Image,Flex, Title} from '@mantine/core'
import '@mantine/core/styles.css';
import { useGetCartsQuery } from './redux/Slice/cartsApiSlice';
// import { useSelector,useDispatch } from 'react-redux';
// import axios from 'axios';

function Cart() {

  const { data , error , isLoading } = useGetCartsQuery();

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
  {data && <SimpleGrid cols={{base:1,sm:1,md:2,lg:3,xl:4}}>
    {/* {data.map((items)=>{ */}
      {/* return( */}
     <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        height={160}
        alt="Norway"
      />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>Norway Fjord Adventures</Text>
      <Badge color="pink">On Sale</Badge>
    </Group>

    <Text size="sm" c="dimmed">
      With Fjord Tours you can explore more of the magical fjord landscapes with tours and
      activities on and around the fjords of Norway
    </Text>

    <Button color="blue" fullWidth mt="md" radius="md">
      Book classic tour now
    </Button>
  </Card>
  {/* )})} */}
 

 
</SimpleGrid>}</Flex>
  )
}

export default Cart