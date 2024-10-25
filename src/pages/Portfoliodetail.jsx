import { AspectRatio, Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { LightBoxProvider } from '../LightBoxContext';
import Techsubdetails from '../Components/Techsubdetails';

const Portfoliodetail = () => {
  const { nameid } = useParams();
  const { products } = LightBoxProvider();
  const [pro, setPro] = useState(null);
  const [error, setError] = useState(null);
  const id = nameid?.split(",")[1];
  const name = nameid?.split(",")[0];
  useEffect(() => {
    if(nameid) {
      if (products) {
        const foundProduct = products?.find(item => item.nam == name);
        if (foundProduct) {
          setPro(foundProduct);
        } else {
          setError("Product not found.");
        }
      } 
      else {
        setError("Products data is not available.");
      }

    }
  }, [nameid]);

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  if (!pro) {
    return <Text>Loading...</Text>;
  }
 
  

  return (
    <Box p={5}>
      <Text fontSize={'40px'}>{pro?.nam} Project</Text>
      <AspectRatio maxW='756px' my={'20px'} ratio={4/3}>
        <iframe
          src={pro?.data[id].video}
          allowFullScreen
          title={`${pro?.nam} video`} // Adding title for accessibility
        />
      </AspectRatio>
      <Text fontSize={'30px'}>Technologies</Text>
      <HStack gap={'30px'} flexWrap={'wrap'}>
        {pro?.data[id].tech?.map((tech, idx) => (
          <Techsubdetails {...tech} key={idx}/>
        ))}
      </HStack>
    </Box>
  );
};

export default Portfoliodetail;
