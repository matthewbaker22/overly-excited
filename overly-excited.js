let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {

        if (i === 0) {
            buildMeUp += sentence[i] + " "; 
        } else if (i !== 0 && (i + 1) % 3 === 0) {
            buildMeUp += sentence[i] + "! ";
        } else {
            buildMeUp += sentence[i] + " ";
        }
        
        console.log(buildMeUp); 
    }
}

addExcitement(sentence)