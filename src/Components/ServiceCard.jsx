import { HStack, Heading, Text, VStack,Image } from '@chakra-ui/react'
import React from 'react'
// import { FiActivity } from "react-icons/fi";
const ServiceCard = ({cons,head,text}) => {
  return (
    
    <VStack align={'start'} w={{base:'95%',md:'40%',lg:'30%'}} p={'30px'} shadow={'lg'} borderRadius={'2xl'}>
    <HStack fontSize={'30px'} w={'100px'} h={'100px'} p={'10px'} justify={'center'} >
    <Image src={cons} objectFit={'cover'}/>
    </HStack >
    <Text fontSize={'22px'}>{head}</Text>
    <Text fontSize={'14px'}>
        {text}
    </Text>
  </VStack>
  )
}

export default ServiceCard
