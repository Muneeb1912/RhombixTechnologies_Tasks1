import React from "react"
import { Box, Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <>
      <Flex
      id="Hero"
        h={{base:"400px",md:"88vh"}}
        pos={"relative"}
        flexDirection={"column"}
        bg={
          "linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,1)),url(https://emeritus.org/in/wp-content/uploads/sites/3/2023/02/pexels-myburgh-roux-1102797-1024x683.jpg.optimal.jpg) no-repeat"
        }
        bgSize={"cover"}
        justify={"Center"}
        align={"center"}
        color={"white"}
        textAlign={"center"}
      >
        <Box
          fontSize={{ base: "30px", md: "60px" }}
          pos={"relative"}
          zIndex={5}
        >
          I am Muneeb ur Rehman
        </Box>
        <Box
          fontSize={{ base: "20px", md: "40px" }}
          pos={"relative"}
          zIndex={5}
          fontWeight={"bold"}
        >
          <Typewriter
            options={{
              strings: ["Developer", "Freelancer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
