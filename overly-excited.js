let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

const addExcitement = (theWordArray, char, num) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if (i === 0) {
            buildMeUp += sentence[i] + " "; 
        } else if (i !== 0 && (i + 1) % 3 === 0) {
            buildMeUp += sentence[i] + char.repeat(num) + " ";
        } else {
            buildMeUp += sentence[i] + " ";
        }
        
        console.log(buildMeUp); 
    }
}

addExcitement(sentence, "*", 4)