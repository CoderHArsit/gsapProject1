import React from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

//this is needed to make the gsap be refistered globally in the system
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero/>
       <Cocktails/>
       <About/>
    </main>
  );
};

export default App;
