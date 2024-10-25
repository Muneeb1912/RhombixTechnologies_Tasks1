import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { LightBoxProvider } from "../LightBoxContext";
import { useLockBodyScroll } from "react-use";
import { GrNext, GrPrevious } from "react-icons/gr";

const Lightbox = () => {
  const {
    selectedObj,
    selectedIndex,
    closeLightBox,
    NextSlide,
    PreviousSlide,
  } = LightBoxProvider();

  useLockBodyScroll(selectedIndex !== null);

  const Lightboxcontainer = {
    h: "100vh",
    bg: "black",
    color: "white",
    position: "fixed",
    w: "100%",
    top: "0",
    left: "0",
    opacity: selectedObj !== null ? 1 : 0,
    zIndex: selectedObj !== null ? 10 : -10,
    transition: ".5s",
  };
  const appName =
    selectedObj && selectedIndex !== null
      ? `${selectedObj?.nam} ${selectedIndex + 1}`
      : "";
  const selectedApp = selectedObj?.data[selectedIndex];
  const HandleSlides = ({ key }) => {
    if (selectedObj !== null) {
      switch (key) {
        case "ArrowLeft":
          PreviousSlide();
          break;
        case "ArrowRight":
          NextSlide();
          break;
        case "Escape":
          closeLightBox();
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keyup", HandleSlides);
    return () => {
      window.removeEventListener("keyup", HandleSlides);
    };
  }, [selectedIndex]);

  return (
    <Box sx={Lightboxcontainer}>
      {selectedIndex > 0 && (
        <Button
          pos={"absolute"}
          top={"50%"}
          left={"20px"}
          fontSize={{base:"12px",lg:'22px'}}
          onClick={PreviousSlide}
        >
          <GrPrevious />
        </Button>
      )}
      {selectedObj && (
        <Container maxW="3xl">
          <Box w={"100%"} h={"100vh"}>
            <Image
              src={selectedApp.img}
              w={"full"}
              objectFit={"contain"}
              h={"100%"}
            />
            <Box mt={3} display={{base:'none',lg:'block'}}>
              <Text textTransform={"capitalize"} fontSize={'30px'}>{appName} </Text>
              <Text mt={2}>{selectedApp.desc}</Text>
            </Box>
          </Box>
        </Container>
      )}

      <Button
        onClick={closeLightBox}
        position={"absolute"}
        top={"10px"}
        right={"10px"}
        colorScheme="black"
        fontSize={"3xl"}
      >
        <RxCross1 />
      </Button>
      {selectedIndex !== null &&
        selectedIndex < selectedObj?.data?.length - 1 && (
          <Button
            pos={"absolute"}
            top={"50%"}
            right={"20px"}
            fontSize={{base:"12px",lg:'22px'}}
            onClick={NextSlide}
          >
            <GrNext />
          </Button>
        )}
    </Box>
  );
};

export default Lightbox;
