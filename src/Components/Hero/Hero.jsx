import React from 'react'

function Hero(HeroObj) {
    let lines = HeroObj.para;
    console.log(lines);
  return (
    <>
    <div className='h-[85vh]   bg-linear-65 from-teal-200 to-blue-400 flex flex-col justify-center items-center'>
        <div id="text-card" className='h-[60vh] w-[80vw] bg-blue-900 rounded-4xl flex flex-col gap-4 justify-center items-center'>
            <div id="typing-text" className="h-[40vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center flex flex-col items-center justify-center gap-3 font-semibold ">
                <div id="line-1">{HeroObj.line1}</div>
                <div id="line-1">{HeroObj.line2}</div>
            </div>
            <div id="typing-area" className="h-[10vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center text-white font-semibold py-3 cursor-pointer">hello</div>
        </div>
    </div>
    </>
  )
}

export default Hero