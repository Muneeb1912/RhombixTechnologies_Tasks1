import React from 'react'
import {
    Heading,
    VStack,
    Text,
    HStack,
    Box,
    Image,
    Icon,
    Flex,
  } from "@chakra-ui/react";
import { CiZoomIn } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { LightBoxProvider } from '../LightBoxContext';
import { Link } from 'react-router-dom';
const PortfolioCard = ({img,name,desc,index}) => {
  const {openLightBox} =LightBoxProvider()
  const Card = {
    w: { base: "100%", md: "40%", lg: "32%" },
    h:{base:'200px',sm:'auto',md:'250px'},
    position: "relative",
    overflow: "hidden",
    shadow:'2xl',
    ":hover": {
        "& .content": {
            top: "50%",
            opacity: "1",
          },
      },

  };
  
  const CardImage = {
      w: "100%",
      h: "100%",
      objectfit:'cover'
  };
  
  const HoverCarddiv = {
      w: "80%",
      position: "absolute",
      opacity: "0",
      top: "100%",
      p:'2',
      justifyContent:'space-around',
      bgColor: "white",
      left: "10%",
      transition: "0.5s ease-in-out",
  };

  return (
            <Box sx={Card}>
              <Image sx={CardImage} src={img} />
              <HStack sx={HoverCarddiv} className="content">
                <VStack align={"start"}>
                  <Text fontSize={"18px"}>{name}</Text>
                  <Text fontSize={{base:"10px",md:'16px'}}>{desc}</Text>
                </VStack>
                <Flex fontSize={{base:"20px",md:'26px'}} gap={1}>
                  <Icon onClick={()=>openLightBox(name?.split(" ")[0],index)} fontSize={{base:"26px",md:'30px'}} cursor={"pointer"}>
                    <CiZoomIn />
                  </Icon>
                  <Link to={`/${name?.split(" ")[0] +","+ index}`} fontSize={{base:"26px",md:'26px'}} cursor={"pointer"}>
                  <CgDetailsMore />
                  </Link>
                </Flex>
              </HStack>
            </Box>
  )
}

export default PortfolioCard
