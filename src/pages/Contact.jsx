
import { Heading, VStack, Text, HStack, Circle, Flex, Input, Textarea, Button } from '@chakra-ui/react'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    let perinfo =[
        {
        con:<CiLocationOn />,
        Head:'Address',
        text:'123 Street, New York, USA'
        },
        {
        con:<BsTelephone />,
        Head:'Call Us',
        text:'+1 5589 55488 55'
        },
        {
        con:<CiMail />,
        Head:'Email Us',
        text:'info@example.com'
        }
        
          ]
          return (
            <Flex id='Contact' justify={"center"} w={'90vw'} mx={'auto'}>
            <VStack gap={10} p={{base:'0px',sm:'10px',md:'20px'}}>
            <VStack gap={4}>
            <Text fontSize={'30px'}>Contacts</Text>
            <hr width='20%' className='hr'/>
            <Text textAlign={'center'}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</Text>
            </VStack>
        
        
            <Flex w={'full'} gap={8} flexDirection={{base:'column',md:'row'}} justify={'center'} align={'center'}>
            {
              perinfo.map((item,index)=>(
                <HStack w={{base:'90%',md:'auto'}} shadow={'2xl'} p={'20px'} key={index}>
          <Circle border={'1px solid blue'} color={'blue.500'} size={'55px'} fontSize={28} _hover={{background:"#0d6efd",color:"white",transition:"1s ease",border:"none"}}>{item.con}</Circle>
          <VStack align={'start'}>
          <Text fontSize={'22px'}>{item.Head}</Text>
          <Text>{item.text}</Text>
          </VStack>
          </HStack>
          ))
          }
          </Flex>
        
          <VStack p={{base:'1',sm:'6'}} shadow={'lg'} w={'90vw'} gap={5} my={5}>
          <Flex gap={4} w={'full'} flexDirection={{base:'column',md:'row'}}>
              <Input type='text' placeholder='Your Name' border={'1px solid gray'}/>
              <Input type='email' placeholder='Your Email' border={'1px solid gray'}/>
          </Flex>
          <Input type='email' placeholder='Your Subject' border={'1px solid gray'}/>
          <Textarea placeholder='Message' border={'1px solid gray'} rows={6}/>
          <Button colorScheme={'blue'} rounded={'30px'} px={8} py={6} _hover={{
              background:"blue.400",
          }}>Send Message</Button>
        </VStack>
          </VStack>
          </Flex>
        )
}

export default Contact
