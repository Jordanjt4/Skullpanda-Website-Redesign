import { useState } from 'react'
import {Navigation,  Header} from '../components/Navigation'
import {Description} from '../components/Description'
import ImageContainer from '../components/ImageSlider'
import { ParallaxProvider } from 'react-scroll-parallax';
import Biography from '../components/Biography'
import FooterComponent from '../components/Footer'
import './App.css'

function App() {
  const impressionImages = [
    "impression1.jpg",
    "impression2.jpg",
    "impression3.jpg",
    "impression4.jpg",
    "impression5.jpg",
    "impression6.jpg",
    "impression7.jpg",
    "impression8.jpg",
    "impression9.jpg"
  ]

  const warmthImages = [
    "warmth1.jpg",
    "warmth2.jpg",
    "warmth3.jpg",
    "warmth4.jpg",
    "warmth5.jpg",
    "warmth6.jpg",
    "warmth7.jpg",
    "warmth8.jpg",
    "warmth9.jpg",
    "warmth10.jpg",
    "warmth11.jpg",
  ]
  return (
    <>
      <Navigation />
      <Header />
      <ParallaxProvider>
        <Description />
      </ParallaxProvider>
      <ImageContainer 
        impressionImages={impressionImages} impressionTitle="L'impressionate Series Plush Doll"
        warmthImages={warmthImages} warmthTitle="Warmth Series"
      />
      <Biography />
      <FooterComponent />
    </>
  )
}

export default App
