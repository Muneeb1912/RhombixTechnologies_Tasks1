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
                <Text>Full Stack</Text>
              </HStack>
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Email:</Text>{" "}
                <Text>muneeburrehman1912@gmail.com</Text>
              </HStack>
              <HStack wrap={"wrap"}>
                <Text fontWeight={"bold"}>Phone:</Text> <Text>593606936</Text>
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
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla porttitor accumsan tincidunt.
            </Text>
            <Text my={"10px"}>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              porttitor at sem.
            </Text>
            <Text my={"10px"}>
              Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
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
