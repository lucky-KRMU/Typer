import levenshtein from "fast-levenshtein";

function useAccuracy( paraArray, userArray, time){
    let paraLen = paraArray.length;
    let userLen = userArray.length;


    let timeInMin = time/60;

    let paraCounter = 0;
    let userCounter = 0;

    let userWPM = [];
    let accuracyArray = [];
    let mistakeArray = [];

    while (userCounter < userLen) {

        let para = paraArray[paraCounter];  // taking the paragraph[nth] string
        let user = userArray[userCounter];  // taking the user's input's [nth] string

        let userWpmSplitArr = userArray[userCounter].trim().split(' ').length; // calculating the total number of words
        userWPM.push(userWpmSplitArr); // appending it into the userWPM array


        const distance = levenshtein.get(para, user); // levenshtein initiation
        const accuracy = ((paraLen - distance)/paraLen)*100; // finding out the accuracy

        accuracyArray.push(accuracy); // appending the accuracy in the accuracy array
        mistakeArray.push(distance); // appending the number of mistakes in to mistake array

        userCounter++; // increasing the user counter by 1
    }


    let finalAccuracy = Math.max(0, accuracyArray.reduce((acc, curr)=> acc + curr, 0)/userLen); // finding out the final accuracy
    let finalWPM = userWPM.reduce((acc, curr) => acc + curr, 0 )/timeInMin;
    let finalMistakes = mistakeArray.reduce((acc, curr)=> acc+curr, 0)/userLen;

    return [finalAccuracy, finalWPM, finalMistakes]


};

let original = ["Morning light spills across quiet streets,"];

let toCheck = ["Morning light spills a;lkdsfcross quiet ts,"];

let toLog = useAccuracy(original, toCheck, 5);
let [a,b,c] = toLog;
console.log(a,b,c)

// export default useAccuracy;
