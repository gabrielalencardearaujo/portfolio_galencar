/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";
import About from "./About/About";
import SectionProject from "./SectionProjects/SectionProject";
import Technologies from "./Technologies/Technologies";

const observerEntry = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show')
      } 
    })
  }
);

function Home() {
  React.useEffect(() => {
    const teste = document.querySelectorAll('.hidden')
    teste.forEach((element) => observerEntry.observe(element))
  })

  return (
    <>
      <About />
      <SectionProject />
      <Technologies />
    </>
  );
}

export default Home;
