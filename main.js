let btnLetter = document.getElementById("btnLetter");
let btnWord = document.getElementById("btnWord");
let word = document.getElementById("word");
let letter = document.getElementById("letter");
let inp = document.getElementById("inp");

btnLetter.onclick = () => {
    let valueInp = inp.value
    let sum = valueInp.split("").filter((el) => {
        return el !== " "
    }).length
    letter.innerHTML = sum
}
btnWord.onclick = () => {
    let valueInp = inp.value
    let sum = valueInp.split(" ").length
    word.innerHTML = sum
}
