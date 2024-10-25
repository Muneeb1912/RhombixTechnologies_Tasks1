import {
  VStack,
  Text,
  HStack,
  Button,
  Container,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LightBoxProvider } from "../LightBoxContext";
import PortfolioCard from "../Components/PortfolioCard";
const Portfolio = () => {
  let portfolioBtn = ["all", "html-css", "bootstrap", "tailwind", "chakraui"];
  const [products2, setProducts2] = useState([]);
  const { products } = LightBoxProvider();

  const newPro = (i) => {
    setProducts2(
      products.flatMap((pro) =>
        pro.nam == i
          ? pro.data.map((p, i) => ({
              ...p,
              name: `${pro.nam} ${i + 1}`,
              index: i,
            }))
          : "all" == i 
          ? pro.data.map((p, i) => ({
              ...p,
              name: `${pro.nam} ${i + 1}`,
              index: i,
            }))
          : []
      )
    );
  };

  useEffect(() => {
    newPro('all'); // Show all products on initial load
  },[products]);

  return (
    <Container id="Portfolio" maxW={"8xl"}>
      <VStack gap={{ base: 2, md: 8 }}>
        <Text fontSize={'30px'}>Portfolio</Text>
        <hr width="10%" className="hr" />
        <Text textAlign={"center"} fontSize={{ base: "12px", md: "20px" }}>
          His needs result from something he wants to escape from
        </Text>
        <HStack>
          {portfolioBtn.map((item, index) => (
            <Button
              fontSize={{ base: "12px", md: "16px" }}
              bg={"none"}
              color="black"
              p={0}
              key={index}
              textTransform={"uppercase"}
              _hover={{ color: "blue", transition: "1s" }}
              onClick={(e) => newPro(e.target.innerHTML)}
            >
              {item}
            </Button>
          ))}
        </HStack>
        <HStack
          flexWrap={"wrap"}
          w={"full"}
          justify={"center"}
          gap={{ base: "4", md: "8", lg: "4" }}
        >
          {products2.map((item, idx) => (
            <PortfolioCard {...item} key={idx} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default Portfolio;
