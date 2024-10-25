import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Progress,
  Container,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  const technologyLeft = [
    {
      tech: "HTML",
      knowing: 90,
    },
    {
      tech: "CSS",
      knowing: 90,
    },
    {
      tech: "JAVASCRIPT",
      knowing: 80,
    },
    {
      tech: "BOOTSTRAP",
      knowing: 80,
    },
  ];
  const technologyRight = [
    {
      tech: "TAILWIND CSS",
      knowing: 80,
    },
    {
      tech: "CHAKRA UI",
      knowing: 80,
    },
    {
      tech: "React JS",
      knowing: 50,
    },
  ];
  return (
    <>
      <Container
        id="About"
        maxW={{
          base: "container.sm",
          md: "container.md",
          lg: "container.lg",
          xl: "container.xl",
        }}
        boxShadow={"2xl"}
        p={5}
        gap={"0px"}
        display={"flex"}
        flexDirection={"column"}
        mb={"10px"}
        justifyContent={"space-between"}
        wrap={"wrap"}
      >
        <VStack>
        <Text fontSize={'24px'}>About me</Text>
        <hr width="90px" className="hr" />
        <HStack w={"100%"} h={{ base: "full"}} align={"center"} justify={'center'} wrap={"wrap"}>

          <HStack
            h={{ base: "100%", md: "45%" }}
            w={{base:"100%",md:"45%"}}
            spacing={4}
            flexDirection={{ base: "column" }}
          >
            <Image boxSize={"200px"} src="/Images/MuneebImg.jpeg" />

            <VStack
              align={"start"}
              w={{ base: "100%", md: "fit-content" }}
              wrap={"wrap"}
              >
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Name:</Text>{" "}
                <Text>Muneeb-ur-Rehman</Text>
              </HStack>
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Profile:</Text>{" "}
                <Text>Front-end Developer</Text>
              </HStack>
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Email:</Text>{" "}
                <Text>muneeburrehman1912@gmail.com</Text>
              </HStack>
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Phone:</Text> <Text>+92 3052051021</Text>
              </HStack>
            </VStack>
          </HStack>

          <VStack
          w={{ base: "100%", md: "45%" }}
          h={"45%"}
          align={"start"}
          // overflow={'hidden'}
          >
          <VStack gap={"20px"} mt={"20px"} fontSize={"18px"}>
            <Text my={"10px"}>
            I am a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. My journey into the world of front-end development has equipped me with the skills to create visually appealing and user-friendly websites. I thrive on transforming creative ideas into interactive digital experiences.
            </Text>
            <Text my={"10px"}>
            With experience in popular frameworks and libraries like Bootstrap, Tailwind, and Chakra UI, I can efficiently build responsive and aesthetically pleasing interfaces. My approach combines a keen eye for design with a commitment to performance, ensuring that every project I undertake meets high standards of quality.
            </Text>
            <Text my={"10px"}>
            Currently, I'm focused on mastering React to enhance my ability to develop dynamic single-page applications. I believe in continuous learning and staying updated with the latest trends in web development, allowing me to deliver innovative solutions that meet client needs.
            </Text>
          </VStack>
        </VStack>
          
        </HStack>
          </VStack>
        <VStack align={"start"} w={"full"} spacing={4}>
            <Heading>Skills</Heading>
<HStack w={'full'} justify={"space-between"} gap={2} wrap={"wrap"}>

              <VStack w={{base:"full", md:"45%"}} gap={2} align={"start"}>
            {
              technologyLeft.map((item, idx) => (
                <VStack w={"full"} gap={2} align={"start"}  key={idx}>
                <Heading
                  fontSize={'16px'}
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"full"}
                  >
                  <Text>{item.tech}</Text>
                  <Text>{item.knowing} %</Text>
                </Heading>
                <Progress value={item.knowing} border={"1px solid grey"} rounded={"md"} w="full" />
              </VStack>
            ))
          }
              </VStack>
            
              <VStack w={{base:"full", md:"45%"}} align={"start"} spacing={2}>
            {
              technologyRight.map((item, idx) => (
              <VStack w={"full"} align={"start"} spacing={2} key={idx}>
                <Heading
                  fontSize={'16px'}
                  display={"flex"}
                  justifyContent={"space-between"}
                  w={"full"}
                  >
                  <Text>{item.tech}</Text>
                  <Text>{item.knowing} %</Text>
                </Heading>
                <Progress value={item.knowing} border={"1px solid grey"} rounded={"md"} w="full" />
              </VStack>
              ))
            }
            </VStack>

            </HStack>
          </VStack>
      </Container>
    </>
  );
};

export default About;
