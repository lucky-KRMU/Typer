import React from 'react'
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero';

const choosePara = (n) => {
  return Math.ceil((Math.random()*n)) - 1;
}

function App() {
  
  let para1 = {
  1: "Evening light settles softly over busy streets,",
  2: "Shadows stretch patiently along familiar sidewalks,",
  3: "Windows glow warmly behind closing curtains,",
  4: "Footsteps slow as daily urgency releases,",
  5: "Conversations drift quieter with fading daylight,",
  6: "Dinner aromas gather families toward tables,",
  7: "Screens dim slightly to rest tired eyes,",
  8: "Muscles loosen after hours of motion,",
  9: "Schedules loosen their grip on attention,",
  10: "Time feels slower without pressing demands,",
  11: "Reflections surface during gentle pauses,",
  12: "Memories replay without judgment or rush,",
  13: "Plans adjust quietly for tomorrow ahead,",
  14: "Fatigue blends softly with content relief,",
  15: "Lights flicker signaling gradual rest,",
  16: "Sounds fade into distant background hums,",
  17: "Breathing deepens with evening calm,",
  18: "Thoughts untangle from scattered concerns,",
  19: "Stillness feels earned rather than empty,",
  20: "Night arrives promising restoration and balance,"
}
let para2 = {
  1: "Cities pulse steadily beneath layered histories,",
  2: "Buildings rise carrying echoes of intention,",
  3: "Crowds weave patterns of shared purpose,",
  4: "Transit routes trace habits and routines,",
  5: "Markets exchange value stories and trust,",
  6: "Voices blend into collective urban rhythm,",
  7: "Cultures overlap without clear borders,",
  8: "Languages mix shaping evolving identities,",
  9: "Innovation competes with preservation daily,",
  10: "Growth challenges space resources and patience,",
  11: "Communities adapt through cooperation and tension,",
  12: "Infrastructure quietly supports unseen needs,",
  13: "Art emerges from concrete corners unexpectedly,",
  14: "Protests remind power of shared voices,",
  15: "Celebrations reclaim streets with joy,",
  16: "Loneliness exists beside constant proximity,",
  17: "Opportunity attracts hope and ambition,",
  18: "Inequality demands awareness and response,",
  19: "Cities reflect collective human priorities,",
  20: "Urban life evolves shaped by choice,"
}
let para3 = {
  1: "Oceans stretch endlessly beyond visible horizons,",
  2: "Waves repeat ancient motions without pause,",
  3: "Currents carry heat life and memory,",
  4: "Salt air sharpens senses and focus,",
  5: "Tides negotiate balance with lunar pull,",
  6: "Creatures migrate guided by instinct,",
  7: "Coral builds quietly over generations,",
  8: "Storms rearrange coastlines without apology,",
  9: "Depths conceal worlds rarely witnessed,",
  10: "Surface calm hides constant movement below,",
  11: "Fishermen read patterns older than maps,",
  12: "Ships trace trade routes across waters,",
  13: "Pollution threatens fragile interconnected systems,",
  14: "Conservation depends on collective restraint,",
  15: "Science reveals complexity beneath simplicity,",
  16: "Silence dominates far from shorelines,",
  17: "Bioluminescence sparks brief underwater stars,",
  18: "Temperature shifts alter delicate balances,",
  19: "Oceans regulate climate and survival,",
  20: "Water reminds humanity of dependence,"
}
let para4 = {
  1: "Creativity begins with quiet observation,",
  2: "Ideas form loosely before solid shape,",
  3: "Inspiration borrows fragments from experience,",
  4: "Failure redirects effort rather than ends it,",
  5: "Practice refines raw uncertain attempts,",
  6: "Patience outlasts momentary motivation bursts,",
  7: "Constraints unexpectedly sharpen imagination,",
  8: "Tools extend hands and perception,",
  9: "Collaboration multiplies individual strengths,",
  10: "Critique improves clarity and intent,",
  11: "Doubt accompanies meaningful original work,",
  12: "Momentum builds through consistent repetition,",
  13: "Breaks restore perspective and energy,",
  14: "Curiosity fuels sustained exploration,",
  15: "Discipline transforms ideas into outcomes,",
  16: "Expression seeks connection beyond creator,",
  17: "Audiences complete creative communication,",
  18: "Value emerges through shared interpretation,",
  19: "Creation reflects both process and growth,",
  20: "Art endures beyond initial intention,"
}
let para5 = {
  1: "Algorithms learn patterns from accumulated data,",
  2: "Models improve through repeated exposure and feedback,",
  3: "Training balances accuracy with generalization goals,",
  4: "Bias emerges from historical uneven inputs,",
  5: "Predictions reflect probabilities rather than certainty,",
  6: "Computation accelerates tasks once requiring intuition,",
  7: "Automation reshapes labor expectations gradually,",
  8: "Human oversight remains essential for accountability,",
  9: "Ethical design guides responsible system behavior,",
  10: "Transparency builds trust between users and tools,",
  11: "Neural networks abstract meaning from numbers,",
  12: "Data quality defines outcome reliability,",
  13: "Interpretability challenges opaque decision processes,",
  14: "Collaboration blends human judgment with speed,",
  15: "Regulation struggles to match technical velocity,",
  16: "Creativity emerges through unexpected combinations,",
  17: "Limitations reveal boundaries of current methods,",
  18: "Advancement depends on cautious experimentation,",
  19: "AI reflects intentions of its creators,",
  20: "Technology evolves guided by collective values,"
}
let para6 = {
  1: "Hospitals coordinate care through layered systems,",
  2: "Diagnosis begins with careful attentive listening,",
  3: "Symptoms guide hypotheses toward possible causes,",
  4: "Tests refine uncertainty into clearer direction,",
  5: "Treatment balances benefit risk and tolerance,",
  6: "Medicine blends science with human empathy,",
  7: "Recovery follows nonlinear personal timelines,",
  8: "Prevention reduces burden before illness emerges,",
  9: "Public health relies on shared responsibility,",
  10: "Research expands options for complex conditions,",
  11: "Clinical trials demand rigor patience and ethics,",
  12: "Technology enhances monitoring and precision,",
  13: "Access disparities affect outcomes significantly,",
  14: "Trust shapes patient adherence and openness,",
  15: "Education empowers informed health decisions,",
  16: "Chronic care emphasizes long term support,",
  17: "Mental and physical health intertwine deeply,",
  18: "Policy influences availability and affordability,",
  19: "Healing extends beyond measurable indicators,",
  20: "Medicine seeks balance between cure and care,"
}
let para7 = {
  1: "Stars scatter light across immense distances,",
  2: "Gravity organizes matter into rotating systems,",
  3: "Planets trace stable paths through silence,",
  4: "Nebulae condense ingredients for future suns,",
  5: "Time stretches differently across cosmic scales,",
  6: "Vacuum carries energy despite apparent emptiness,",
  7: "Exploration expands perspective beyond Earth,",
  8: "Telescopes translate faint signals into insight,",
  9: "Orbits demand precise mathematical harmony,",
  10: "Radiation challenges fragile biological life,",
  11: "Satellites extend communication and observation,",
  12: "Missions test engineering against extremes,",
  13: "Discovery reshapes understanding of origins,",
  14: "Unknown phenomena invite careful skepticism,",
  15: "Spaceflight unites global scientific efforts,",
  16: "Distance amplifies both risk and wonder,",
  17: "Resources beyond Earth raise ethical questions,",
  18: "Curiosity drives continued outward reach,",
  19: "The universe dwarfs human timeframes,",
  20: "Exploration affirms humanitys search for meaning,"
}
let para8 = {
  1: "Thoughts arise from layered neural activity,",
  2: "Perception filters reality through prior experience,",
  3: "Emotions signal needs threats and values,",
  4: "Memory reconstructs events rather than records them,",
  5: "Attention selects focus from constant stimuli,",
  6: "Behavior reflects interaction of mind and context,",
  7: "Development shapes patterns early and continuously,",
  8: "Learning rewires connections through repetition,",
  9: "Stress alters cognition and decision making,",
  10: "Motivation fluctuates with meaning and reward,",
  11: "Personality balances stability with adaptation,",
  12: "Social bonds influence mental resilience,",
  13: "Language structures internal narrative flow,",
  14: "Bias simplifies judgment at hidden cost,",
  15: "Therapy offers tools for reflection and change,",
  16: "Self awareness grows through honest examination,",
  17: "Wellbeing depends on balance not perfection,",
  18: "Mindfulness interrupts automatic response cycles,",
  19: "Psychology bridges biology and experience,",
  20: "Understanding mind supports intentional living,"
}
let para9 = {
    1: "Morning light spills across quiet streets,",
    2: "Birds announce daylight with cheerful persistence,",
    3: "Coffee brews patiently filling kitchens with warmth,",
    4: "Windows open slowly welcoming fresh hopeful air,",
    5: "People stretch yawn and gather scattered thoughts,",
    6: "Plans form gently without urgency or noise,",
    7: "Time feels generous before obligations start knocking,",
    8: "Small rituals anchor minds for demanding hours,",
    9: "Hope sneaks in alongside ordinary simple moments,",
    10: "The day begins quietly promising movement and change",
    11: "Screens glow softly in darkened rooms,",
    12: " Messages travel instantly across invisible networks,",
    13: "Fingers tap rhythms of modern communication,",
    14: "Ideas spread faster than ever imagined,",
    15: "Notifications interrupt thoughts and quiet moments,",
    16: "People balance connection with needed solitude,",
    17: "Data flows constantly shaping daily decisions,",
    18: " Security and privacy spark ongoing debates,",
    19: " Innovation promises convenience but demands responsibility,",
    20: " Technology remains a tool shaped by human choice"
  }
let para10 = {
    1: "Rain taps gently against waiting rooftops,",
    2: " Clouds drift lazily across open skies,",
    3: "Earth exhales rich scents after storms,",
    4: " Puddles mirror trees and passing birds,",
    5: "Leaves shimmer briefly under softened light,",
    6: "Insects resume buzzing industrious afternoon songs,",
    7: " Streams swell carrying stories from hills,",
    8: "Roots drink deeply from generous soil,",
    9: " Growth continues quietly without witness or praise,",
    10: " Nature resets patience within observing minds",
    11: "Classrooms hum softly with curious energy,",
    12: "Questions spark journeys toward deeper understanding,",
    13: " Books open doors to distant perspectives,",
    14: "Mistakes become teachers rather than failures,",
    15: "Discussion sharpens thoughts through shared reasoning,",
    16: " Practice slowly transforms confusion into skill,",
    17: "Mentors guide patiently without stealing discovery,",
    18: "Confidence grows alongside disciplined consistent effort,",
    19: " Learning thrives where curiosity feels safe,",
    20: " Knowledge empowers choices long after lessons end"
  }

let paraArray = [para1, para2, para3, para4, para5, para6, para7, para8, para9, para10];

let chooseParaNumber = choosePara(10);
console.log(chooseParaNumber);
let finalPara = paraArray[chooseParaNumber];

return (
  <>
    <Header />
    <Hero para={finalPara} />
  </>
)
}

export default App;
