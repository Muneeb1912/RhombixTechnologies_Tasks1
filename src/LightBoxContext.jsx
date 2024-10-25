import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();
const LightBoxContext = ({ children }) => {
  const [selectedObj, setSelectedObj] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  let products = [
    {
      nam:"html-css",
      data: [
        {
          img: "/Images/parallaxweb.jpg",
          desc: "My first complete project using react and tailwind css.",
          video:"/videos/parallaxweb.mp4",
          tech:[
            {
              techname:'html',
              techimg:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg'
            },
            {
              techname:'Css',
              techimg:'https://logowik.com/content/uploads/images/css-icon5555.logowik.com.webp'
            },

          ]
        },
      ],
    },
    {
      nam: "bootstrap",
      data: [
        {
          img: "/Images/agecalculator.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur.",
          video:"/videos/agecalculator.mp4",
          tech:[
            {
              techname:'Html',
              techimg:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg'
            },
            {
              techname:'Bootstrap',
              techimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmwnXjBAyrhtRycecwwavi93z8A_lBL_V8ZZTkz5gt08ryEpTkNWyhdIEUG0sawjvS8U&usqp=CAU'
            },
            {
              techname:'Javascript',
              techimg:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
            },

          ]
        },
        {
          img: "/Images/digitalclock.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur.",
          video:"/videos/digitalclock.mp4",
          tech:[
            {
              techname:'Html',
              techimg:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg'
            },
            {
              techname:'Bootstrap',
              techimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmwnXjBAyrhtRycecwwavi93z8A_lBL_V8ZZTkz5gt08ryEpTkNWyhdIEUG0sawjvS8U&usqp=CAU'
            },
            {
              techname:'Javascript',
              techimg:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
            },
          ]
        },
        {
          img: "/Images/markschecker.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur.",
          video:"/videos/markschecker.mp4",
          tech:[
            {
              techname:'Html',
              techimg:'https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg'
            },
            {
              techname:'Bootstrap',
              techimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmwnXjBAyrhtRycecwwavi93z8A_lBL_V8ZZTkz5gt08ryEpTkNWyhdIEUG0sawjvS8U&usqp=CAU'
            },
            {
              techname:'Javascript',
              techimg:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
            },

          ]
        },
      ],
    },
    {
      nam: "tailwind",
      data: [
        {
          img: "/Images/foodwebsite.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur.",
          video:"/videos/foodweb.mp4",
          tech:[
            {
              techname:'Tailwindcss',
              techimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21TGxoBCsmYTnKa9vUr2pf1lvRUmipgA58A&s'
            },
            {
              techname:'Javascript',
              techimg:'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png'
            },

          ]
        },
      ],
    },
    {
      nam: "chakraui",
      data: [
        {
          img: "/Images/myportfolio.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur.",
          video:"/videos/myportfolio.mp4",
          tech:[
            {
              techname:'Reactjs',
              techimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s'
            },
            {
              techname:'Chakra ui',
              techimg:'https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg'
            },

          ]
        },
      ],
    },
  ];

  const openLightBox = (cat, idx) => {
    setSelectedIndex(idx);
    setSelectedObj(products?.find((item) => item?.nam == cat));
  };

  const closeLightBox = () => {
    setSelectedIndex(null);
    setSelectedObj(null);
  };
  const NextSlide = () => {
    if (selectedIndex < selectedObj?.data?.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  const PreviousSlide = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const LightBoxSettings = {
    products,
    selectedIndex,
    selectedObj,
    openLightBox,
    closeLightBox,
    NextSlide,
    PreviousSlide,
  };


  
  return (
    <AppContext.Provider value={LightBoxSettings && LightBoxSettings}>
      {children}
    </AppContext.Provider>
  );
};

const LightBoxProvider = () => useContext(AppContext);

export { LightBoxContext, LightBoxProvider };
