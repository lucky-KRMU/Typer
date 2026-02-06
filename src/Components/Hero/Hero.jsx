import { React, useState, useEffect } from 'react';
import Report from "../Report/Report";
import useAccuracy from '../../Hooks/useAccuracy';


// Component for typing area (input field) for taking the input from the user.
function TypingArea(typingtext) {
    return (
        <input id="typing-area" className="h-[10vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center text-white font-semibold py-3 cursor-pointer focus:outline-none" placeholder="Type Here to Start..." value={typingtext.inputVal} onChange={typingtext.onHandleType} onKeyDown={typingtext.onHandleKey} />
    );
}

function Hero(HeroObj) {
    let lines = HeroObj.para; // taking the paragraph from HeroObj as a prop

    let [lineOne, setLineOne] = useState(lines[1]); // Active first displaying line
    let [lineTwo, setLineTwo] = useState(lines[2]); // Active second displaying line

    let [linesCount, setLinesCount] = useState(3);  // State variable to update the actively displaying line
    let [sentencesArray, setSentencesArray] = useState([]); // state variable to store the input from the use to check it's accuracy later on

    let [wpmText, setWpmText] = useState(15); // the initial typing time set 

    let [typeArea, setTypeArea] = useState(''); // the state variable store the typing area text

    let [firstKey, setFirstKey] = useState(true); // checking for the first key 
    let [timeOut, setTimeOut] = useState(false); // state variable to check the time out

    let [report, setReport] = useState([1,2,3]);


    
    
    
    
    
    
    
    
    // useEffect Hook
    useEffect(() => {
        
        if (!firstKey && !timeOut){ // if the first key is pressed and it is still not time out, run the updater function
            
            const timer = setTimeout(()=>{  // start the setTimeout function
                setTimeOut(true); // setting the timeout to be true
                setWpmText(0);  
                setReport(useAccuracy(lines, sentencesArray, 15));
            }, 15000);
            
            const timeUpdater = setInterval(()=>{   // starting the interval function to update the time left
                setWpmText( prev => prev - 1);
            }, 1000);
            
            return () => {
                clearInterval(timeUpdater); // clearing the interval function
                clearTimeout(timer); // clearing the timeout function
            };
            
        }

    }, [ firstKey, timeOut ]); // dependencies on the firstkey and timeout state.


    // function to handle the typing in typing area
    const handleType = (e) => {
        if (firstKey){
            setFirstKey(false);
            // startTimer(); // start the timer function if first key is preseed
        }
        if (!timeOut){
            let typeStr = e.target.value;
            setTypeArea(typeStr); // if time is still not out, allow user to type.
        }

    }

    // function to implement whenever the value is changed/updated in the typing area 
    const handleKey = (e) => {
        let tempSentence = '';
        let tempSentencesArray = sentencesArray;
        if (!timeOut && e.key == "Enter" && linesCount < 20) {
            tempSentence += typeArea;
            let prev = [tempSentence];
            tempSentencesArray.push(prev);
            setSentencesArray(tempSentencesArray);
            setTypeArea('');
            setLineOne(lines[linesCount - 1]);
            setLineTwo(lines[linesCount]);
            setLinesCount(val => val + 1);
            console.log(sentencesArray);
        }
    }

    return (
        <>
            <div className='h-[85vh]   bg-linear-65 from-teal-200 to-blue-400 flex flex-col justify-center items-center'>
                <Report accuracy={report[0]} errors={report[2]} wpm={report[1]} />
                <p className="text-center p-3 text-white font-bold text-4xl">Your Time: {wpmText}s</p>
                <div id="text-card" className='h-[60vh] w-[80vw] bg-blue-900 rounded-4xl flex flex-col gap-4 justify-center items-center'>
                    <div id="typing-text" className="h-[40vh] w-[60vw] bg-teal-400 rounded-4xl text-4xl text-center flex flex-col items-center justify-center gap-3 font-semibold ">
                        <div id="line-1">{lineOne}</div>
                        <div id="line-1">{lineTwo}</div>
                    </div>
                    <TypingArea inputVal={typeArea} onHandleType={handleType} onHandleKey={handleKey} />
                </div>
            </div>
        </>
    )
}

export default Hero