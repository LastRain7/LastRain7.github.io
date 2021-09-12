let titleElement = document.getElementById("title");
// list of text that will be displayed
const TEXT_LIST = [
    "Save our future generations!",
    "Always wear mask, wherever you go!",
    "How to survive Covid-19 Pandemic"
];

let i = 0;
function changeText() {
    titleElement.innerText = TEXT_LIST[i];
    i = i + 1;
    if (i >= TEXT_LIST.length) {
        i = 0;
    }
}
// text change every 3 sec
let myInterval = setInterval(changeText, 3000);