import { HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { FiActivity } from "react-icons/fi";
const Services = () => {
  let serviceArr=[
{
  cons:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
  head:'Html',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
  head:'Css',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmwnXjBAyrhtRycecwwavi93z8A_lBL_V8ZZTkz5gt08ryEpTkNWyhdIEUG0sawjvS8U&usqp=CAU',
  head:'BootStrap',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21TGxoBCsmYTnKa9vUr2pf1lvRUmipgA58A&s',
  head:'Tailwind Css',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg',
  head:'Chakra Ui',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png',
  head:'JavaScript',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
  head:'React Js',
  text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat deleniti error non molestias quidem. Dicta molestias dolores reiciendis eos tempora? Id dignissimos exercitationem incidunt facere rem alias quis recusandae ut!',
},

  ]
  return (
    <VStack id='Services' my={'20px'}>
      <Text fontSize={'30px'} m={'10px'}>Services</Text>
      <hr width='58px' className='hr'/>

<HStack minW={'300px'} flexWrap={'wrap'} justify={'center'} gap={'20px'}>
{
serviceArr.map((item,index)=>(
<ServiceCard key={index} {...item}/>
  ))
}
      </HStack>
    </VStack>
  )
}

export default Services
