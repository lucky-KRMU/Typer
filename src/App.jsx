import React from 'react'
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero';

function App() {
    let para1 = {
        1: "Morning light spills across quiet streets,",
        2: " Birds announce daylight with cheerful persistence,",
        3: "Coffee brews patiently filling kitchens with warmth,",
        4: "Windows open slowly welcoming fresh hopeful air,",
        5: "People stretch yawn and gather scattered thoughts,",
        6: "Plans form gently without urgency or noise,",
        7: "Time feels generous before obligations start knocking,",
        8: " Small rituals anchor minds for demanding hours,",
        9: " Hope sneaks in alongside ordinary simple moments,",
        10: " The day begins quietly promising movement and change"
    }
  return (
    <>
      <Header />
      <Hero line1="hello1" line2="hello2" para={para1}/>
    </>
  )
}

export default App;
