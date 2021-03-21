const inputText = document.querySelector("#morse-in");
const outputText = document.querySelector("#morse-out");
const btn = document.querySelector(".ok");
const highlight=document.querySelector(".highlight");
inputText.addEventListener("input", selection);
const morseList = {
    'A': '.-', 'B': '-...',
    'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-',
    'L': '.-..', 'M': '--', 'N': '-.',
    'O': '---', 'P': '.--.', 'Q': '--.-',
    'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--',
    'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.',
    '0': '-----', ',': '--..--', '.': '.-.-.-',
    '?': '..--..', '/': '-..-.', '-': '-....-',
    '(': '-.--.', ')': '-.--.-',';':'-.-.-.',
    ':':'---...','"':'.-..-.',"'":".----.",
    '=':'-...-','+':'.-.-.','*':'-..-','@':'.--.-.'
}
const normalList={};
var isTrue=0;
for(var key in morseList)
{
    normalList[morseList[key]]=key;
}
function selection()
{
    for(var i in inputText.value)
    {
        if(inputText.value[i]!=='.' && inputText.value[i]!=='-' && inputText.value[i]!==' ')
        {
            isTrue=1;
            break;
        }
        else{
             isTrue=0;
        }
    }
    if(Boolean(isTrue))
    {
        normalToMorse();
    }
    else{
        morseToNormal();
    }
    if(inputText.value.length==0)
    {
        outputText.innerText='';
    }
}
function normalToMorse() {
    let str = inputText.value.toUpperCase();
    let outputString = "";
    highlight.innerText="";
    let list='Can not convert ';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            outputString = outputString + "  ";
        }
        else {
            if (typeof (morseList[str[i]]) !== "undefined") {
                outputString = outputString + morseList[str[i]]+" ";
            }
            else{
                list=list+str[i];
                highlight.innerText=list;
            }
        }
    }
    if(str.length===0)
    {
       highlight.innerText='';
    }
    outputText.innerText = outputString;
}
function morseToNormal()
{
    let str = inputText.value;
    let outputString = "";
    let tempString = "";
    highlight.innerText="";
    let list='Can not convert ';
    let current='';
    let spaceCount=0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            current='';
            spaceCount++;
            if(spaceCount>=2)
            {
                outputString=outputString+" ";
            }
            else{
                outputString=outputString+tempString;
                outputText.innerText = outputString;
            }
        }
        else {
           current=current+str[i];
           if (typeof(normalList[current]) !== "undefined") {
                tempString=normalList[current];
                outputText.innerText = outputString+tempString;
                spaceCount=0;
            }
            else{
                list=list+current;
                highlight.innerText=list;
            }
           
        }
    }
    if(str.length===0)
    {
       highlight.innerText='';
    }
}