// Ask for input
const prompt = require("prompt-sync")();
const input = prompt("What is the maximum number? ");

// Ask for rules
const shouldUseFizzRule = ["Y", "y", "", " "].includes(prompt("Fizz Rule (3) on? (y/n) "))
const shouldUseBuzzRule = ["Y", "y", "", " "].includes(prompt("Buzz Rule (5) on? (y/n) "))
const shouldUseBangRule = ["Y", "y", "", " "].includes(prompt("Bang Rule (7) on? (y/n) "))
const shouldUseBongRule = ["Y", "y", "", " "].includes(prompt("Bong Rule (11) on? (y/n) "))
const shouldUseFezzRule = ["Y", "y", "", " "].includes(prompt("Fezz Rule (13) on? (y/n) "))
const shouldUseReverseRule = ["Y", "y", "", " "].includes(prompt("Reverse Rule (17) on? (y/n) "))

function startWithB(word) {
    return word[0]==="B"
}

function checkRules(i) {
    let words = []

    if (i % 3 === 0 && shouldUseFizzRule){
        words.push("Fizz")
    }
    if (i % 5 === 0 && shouldUseBuzzRule){
        words.push("Buzz")
    }
    if (i % 7 === 0 && shouldUseBangRule){
        words.push("Bang")
    }
    if (i % 11 === 0 && shouldUseBongRule){
        words = ["Bong"]
    }
    if (i % 13 === 0 && shouldUseFezzRule){
        const index = words.findIndex(startWithB);
        index === -1 ? words.push("Fezz") : words.splice(index,0,"Fezz")
    }
    if (i % 17 === 0 && shouldUseReverseRule){
        words = words.reverse()
    }
    return words
}

// function printResults(i, words) {
//     console.log(words.length > 0 ? words.join("") : i )
// }
//
// for (let num = 1; num <= input; num++){
//     const words = checkRules(num)
//     printResults(num, words)
// }

//Using a generator to check rules and yield results
function* fizzBuzzGenerator(input = 100) {
    for (let num = 1; num <= input; num ++) {
        const words = checkRules(num)
        yield words.length > 0 ? words.join("") : num;
    }
}

//Using a for...of to print results
for (let value of fizzBuzzGenerator(input)){
    console.log(value);
}