import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from '../Components/ServiceCard'
const Services = () => {
  let serviceArr=[
{
  cons:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg',
  head:'Html',
  text:'HTML (Hypertext Markup Language) is the standard language used to create and structure content on the web. It uses tags to define elements like headings, paragraphs, links, and images, forming the backbone of web pages.',
},
{
  cons:'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp',
  head:'Css',
  text:'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a web page written in HTML. It allows developers to control layout, colors, fonts, and overall aesthetics, enhancing the visual appeal of websites.',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmwnXjBAyrhtRycecwwavi93z8A_lBL_V8ZZTkz5gt08ryEpTkNWyhdIEUG0sawjvS8U&usqp=CAU',
  head:'BootStrap',
  text:'Bootstrap is a popular front-end framework that simplifies web development by providing pre-designed components and responsive grid layouts. It enables developers to create mobile-first, visually appealing websites quickly and efficiently with minimal custom coding.',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21TGxoBCsmYTnKa9vUr2pf1lvRUmipgA58A&s',
  head:'Tailwind Css',
  text:'Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs directly in their markup. It promotes a more efficient workflow by providing a wide range of utility classes for styling, enabling rapid prototyping and flexibility in design.',
},
{
  cons:'https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg',
  head:'Chakra Ui',
  text:'Chakra UI is a modular component library for React that provides accessible and customizable UI components. It streamlines the development process by offering a design system with built-in theming, enabling developers to create responsive and visually consistent applications quickly.',
},
{
  cons:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png',
  head:'JavaScript',
  text:'JavaScript (JS) is a versatile, high-level programming language primarily used for creating dynamic and interactive content on websites. It enables developers to implement complex features such as animations, form validation, and real-time updates, enhancing user experience.',
},
{
  cons:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
  head:'React Js',
  text:'React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable components that manage their own state, facilitating efficient and interactive web applications.',
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
