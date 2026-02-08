import levenshtein from "fast-levenshtein";


// This is a hook to check the accuracy of the input given by user.
// it takes three parameters, firstly the paragraph array,
// secondly the user created(typed) paragraph array,
// and thirdly it takes the time in seconds(strictly).

function useAccuracy( paraArray, userArray, time){
    let paraLen = paraArray.length; // paragraph array length
    let userLen = userArray.length; // user array length


    let timeInMin = time/60; // converting time to minutes

    let paraCounter = 0;
    let userCounter = 0;

    let userWPM = [];
    let accuracyArray = [];
    let mistakeArray = [];

    while (userCounter < userLen) {

        let para = paraArray[paraCounter];  // taking the paragraph[nth] string
        let user = userArray[userCounter];  // taking the user's input's [nth] string


        let userWpmSplitArr = user.trim().split(' ').length; // calculating the total number of words
        userWPM.push(userWpmSplitArr); // appending it into the userWPM array


        const distance = levenshtein.get(para, user); // levenshtein initiation
        const accuracy = ((paraLen - distance)/paraLen)*100; // finding out the accuracy
    

        accuracyArray.push(accuracy); // appending the accuracy in the accuracy array
        mistakeArray.push(distance); // appending the number of mistakes in to mistake array

        userCounter++; // increasing the user counter by 1
        paraCounter++; // increasing the paragraph counter by 1
    }


    let finalAccuracy = Math.max(0, accuracyArray.reduce((acc, curr)=> acc + curr, 0)/userLen); // finding out the final accurac
    let finalWPM = userWPM.reduce((acc, curr) => acc + curr, 0 )/timeInMin; // finding out the final typing speed
    let finalMistakes = Math.ceil(mistakeArray.reduce((acc, curr)=> acc+curr, 0)/userLen); // finding out the final Mistakes

    return [finalAccuracy, finalWPM, finalMistakes];


};


export default useAccuracy;
