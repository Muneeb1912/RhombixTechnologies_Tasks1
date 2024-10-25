import { Box, HStack, Heading, Text, VStack, Accordion,} from '@chakra-ui/react'
import React from 'react'
import Accordian from './Accordian'

const Frqs = () => {
  return (

    <Box display={'flex'} justifyContent={'center'} my={'20px'}>
    <HStack w={'90vw'} h={{lg:'100vh'}} justify={'space-between'} flexDirection={{base:'column',lg:'row'}}>
<VStack w={{base:'100%',lg:'40%'}} alignItems={'left'} my={{base:'20px',lg:'0px'}}>
<Heading fontWeight={'14px'} fontSize={'25px'}>Frequently Asked <Text fontSize={'25px'}>Questions</Text></Heading>
<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempora eveniet, praesentium amet quo impedit iste, quia odit saepe nostrum, rem aspernatur dolore asperiores et tempore? Iste vero nobis eligendi?</Text>

        </VStack>
        <VStack w={{base:'100%',lg:'50%'}}>
        <Accordion defaultIndex={[0]} allowMultiple w={'full'} borderRadius={'10px'} shadow={'lg'}>
        <Accordian/>
        </Accordion>
        </VStack>
      </HStack>
    </Box>
  )
}

export default Frqs
