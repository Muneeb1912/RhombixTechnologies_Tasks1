import { Circle, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
    return (
        <VStack color={'white'} bgColor={'blue.500'} gap={4} px={'10px'} py={'40px'}>
    <HStack fontSize={{base:'14px',md:'16px'}}>
    <Text>© CopyrightAll </Text>
    <Text fontWeight={'bold'}>MuneebDev</Text>
    <Text>Rights Reserved</Text>
    </HStack>
    <HStack>
    {
      [
        <FaXTwitter/>,
        <BiLogoFacebookCircle/>,
        <FaSquareInstagram/>,
        <FaLinkedin/>,
      ].map((item,index)=>(
        <Circle p={{base:'2',md:'4'}} border={'1px solid white'} key={index} fontSize={{base:'18px',md:'22px'}}>
        {item}
        </Circle>
      ))
    }
    </HStack>
    <HStack fontSize={{base:'16px',md:'22px'}}>
    <Text>Designed By</Text>
    <Text>Chakra UI Made</Text>
    </HStack>
        </VStack>
      )
}

export default Footer
