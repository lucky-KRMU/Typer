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
  let para2 = {
    1: "Screens glow softly in darkened rooms,",
    2: " Messages travel instantly across invisible networks,",
    3: "Fingers tap rhythms of modern communication,",
    4: "Ideas spread faster than ever imagined,",
    5: "Notifications interrupt thoughts and quiet moments,",
    6: "People balance connection with needed solitude,",
    7: "Data flows constantly shaping daily decisions,",
    8: " Security and privacy spark ongoing debates,",
    9: " Innovation promises convenience but demands responsibility,",
    10: " Technology remains a tool shaped by human choice"
  }

  let para3 = {
    1: "Rain taps gently against waiting rooftops,",
    2: " Clouds drift lazily across open skies,",
    3: "Earth exhales rich scents after storms,",
    4: " Puddles mirror trees and passing birds,",
    5: "Leaves shimmer briefly under softened light,",
    6: "Insects resume buzzing industrious afternoon songs,",
    7: " Streams swell carrying stories from hills,",
    8: "Roots drink deeply from generous soil,",
    9: " Growth continues quietly without witness or praise,",
    10: " Nature resets patience within observing minds"
  }

  let para4 = {
    1: "Classrooms hum softly with curious energy,",
    2: "Questions spark journeys toward deeper understanding,",
    3: " Books open doors to distant perspectives,",
    4: "Mistakes become teachers rather than failures,",
    5: "Discussion sharpens thoughts through shared reasoning,",
    6: " Practice slowly transforms confusion into skill,",
    7: "Mentors guide patiently without stealing discovery,",
    8: "Confidence grows alongside disciplined consistent effort,",
    9: " Learning thrives where curiosity feels safe,",
    10: " Knowledge empowers choices long after lessons end"
  }

  return (
    <>
      <Header />
      <Hero para={para1}/>
    </>
  )
}

export default App;
