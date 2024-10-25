import React from "react";
import { Flex, Link, Button, useBoolean } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const[active , {toggle}] = useBoolean()
  let navitems = [
    { nam: "Home", path:"#Hero" },
    { nam: "About", path:"#About" },
    { nam: "Services", path:"#Services" },
    { nam: "Portfolio", path:"#Portfolio" },
    { nam: "Contact", path:"#Contact" },
  ];

  return (
    <>
      <Flex
        align={"center"}
        justify={"space-between"}
        w={'full'}
        p={"20px"}
        bg={"black"}
        color={"white"}
        flexWrap={"wrap"}
        position={"sticky"}
        left={0}
        top={0}
        zIndex={6}
      >
        <Link as={"a"} fontSize={"30px"} fontWeight={"bold"}>
          MuneebDev
        </Link>
        <Button display={{ md: "none" }} onClick={toggle}>
          <FaBars />
        </Button>
        <Flex
          gap={"20px"}
          w={{ base: "full", md: "fit-content" }}
          flexDirection={{ base: "column", md: "row" }}
          transition={'all 1s'}
          h={{base:active?'fit-content':'0', md:'fit-content'}}
        >
          {navitems.map((item, index) => (
            <HashLink
              as={"a"}
              key={index}
              fontSize={16}
              w={{base:'full',md:'fit-content'}}
              pos={'relative'}
              _after={{content:'" "',w:"0",h:"4px",bg:"white",display:'flex',pos:'absolute',bottom:'0' ,transition:'.3s'}}
              _hover={{
                _after:{w:"100%"}
                }}
            className="navBtn"
            to={item.path}
            >
              {item.nam}

            </HashLink>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
