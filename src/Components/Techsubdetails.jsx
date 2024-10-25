import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Techsubdetails = ({techimg,techname}) => {
  return (
                <VStack my={'10px'}>
            <Image 
              src={techimg}
              w={'30px'} 
              h={'30px'} 
              alt={`${techname} logo`} 
            />
            <Text fontSize={'20px'}>{techname}</Text> 
          </VStack>
  )
}

export default Techsubdetails
