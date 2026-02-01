import { React, useState, useEffect } from 'react'

function TypingArea(typingtext) {
    return (
        <input id="typing-area" className="h-[10vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center text-white font-semibold py-3 cursor-pointer" value={typingtext.text} onChange={typingtext.onType} />
    );
}

function Hero(HeroObj) {
    let lines = HeroObj.para;

    let [lineOne, setLineOne] = useState(lines[1]);
    let [lineTwo, setLineTwo] = useState(lines[2]);

    let [linesCount, setLinesCount] = useState(3);

    let [typeArea, setTypeArea] = useState('');

    let firstKey = true;
    let timeOut = false;

    
    const handleType = (e) => {
        // if (firstKey && !timeOut){
        firstKey = !firstKey;
        let typeStr = e.target.value;
        setTypeArea(typeStr);
        //}
    }

    const handleKey = (e) => {
        // if (!timeOut){
        if (!timeOut && e.key == "Enter" && linesCount < 11) {
            setTypeArea('');
            setLineOne(lines[linesCount - 1]);
            setLineTwo(lines[linesCount]);
            setLinesCount(val => val + 1)
        }
        // }
    }
    //   window.addEventListener('keypress', handleType)

    return (
        <>
            <div className='h-[85vh]   bg-linear-65 from-teal-200 to-blue-400 flex flex-col justify-center items-center'>
                <div id="text-card" className='h-[60vh] w-[80vw] bg-blue-900 rounded-4xl flex flex-col gap-4 justify-center items-center'>
                    <div id="typing-text" className="h-[40vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center flex flex-col items-center justify-center gap-3 font-semibold ">
                        <div id="line-1">{lineOne}</div>
                        <div id="line-1">{lineTwo}</div>
                    </div>
                    {/* <TypingArea text={typeArea} onType={handleType} /> */}
                    <input id="typing-area" className="h-[10vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center text-white font-semibold py-3 cursor-pointer focus:outline-none" placeholder="Type Here to Start..." value={typeArea} onChange={handleType} onKeyDown={handleKey} />

                </div>
            </div>
        </>
    )
}

export default Hero