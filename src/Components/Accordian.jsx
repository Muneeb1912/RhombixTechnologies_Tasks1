import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack } from '@chakra-ui/react'
import React from 'react'
const Accordian = () => {
    let Frqslist= [
    {
title:"Section title",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
title:"Section title",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
title:"Section title",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
title:"Section title",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
title:"Section title",
desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },

]
  return (
    <Box>

{
    Frqslist.map((item,index)=>(
  <AccordionItem key={index}>

      <AccordionButton display={'flex'} justifyContent={'space-between'} _hover={{color:'blue.400'}} transition={'all 0.5s'} p={'1vw'} key={index}>
    <HStack fontWeight={'bold'}>
    <Box as='span' flex='1' textAlign='left' color={'blue.400'} >{index+1}</Box><Box>{item.title}</Box>
        </HStack>
        <AccordionIcon />
    </AccordionButton>  
    <AccordionPanel pb={4}>{item.desc}</AccordionPanel>
  </AccordionItem>
    ))
}
    </Box>
  )
}

export default Accordian
