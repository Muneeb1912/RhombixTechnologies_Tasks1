import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { LightBoxContext } from './LightBoxContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <LightBoxContext>
    <App />
    </LightBoxContext>
  </ChakraProvider>
)
