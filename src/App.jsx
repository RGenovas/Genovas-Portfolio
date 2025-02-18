
// Components

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// Node modules

import {ReactLenis} from 'lenis/react'
import { gsap } from "gsap";0
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



// GSAP plugins

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
  useGSAP(()=>{
    const elements = gsap.utils.toArray(' .reveal-up')

    elements.forEach((element)=> {
      gsap.to(element, {
        scrollTrigger : {
          trigger: element,
          start:'-200 bottom',
          end: 'bottom 80%',
          scrub: true,
          markerts: true
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'
      })
    })
  })

return (
  <ReactLenis root>
  <Header/>
  <main>
    <Hero/>
    <About/>
    <Skill/>
    <Work/>
    <Contact/>
  </main>
  <Footer/>
  </ReactLenis>
)

}

export default App;