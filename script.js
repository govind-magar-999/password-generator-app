const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const elArr = [uppercaseEl, lowercaseEl, numbersEl, symbolsEl]

const randomFunc = {
    lower: getRandomLower(),
    upper: getRandomUpper(),
    number: getRandomNumber(),
    symbol: getRandomSymbol()
}

clipboardEl.addEventListener('click', () => {
    
})

let checkArr = [];

generateEl.addEventListener('click', () => {
    checkArr = [];
    elArr.forEach((item)=>{
        if(item.checked==true){
            checkArr.push(item);
        }
    });
    let pwdlength = lengthEl.value;
    generatePassword(pwdlength, ...checkArr)
})

let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','t','u','v','w','x','y','z'];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let symbols = ['!','@','$','%','^','&','*'];
let pwdSource = [];
let passwordArr = [];
let regex = (('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z')&&('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||'p'||'q'||'r'||'s'||'t'||'t'||'u'||'v'||'w'||'x'||'y'||'z')&&(1||2||3||4||5||6||7||8||9||0)&&('!'||'@'||'$'||'%'||'^'||'&'||'*'))
function generatePassword(pwdlength, ...elements) {
    pwdSource = [];
    passwordArr = [];
    if(elements.length<2){
        alert("Please chose atleast two combinations!!");
        return;
    }else{
        let pwd_length  = pwdlength;
        elements.forEach((item)=>{
            if(item.id=='uppercase'){
                pwdSource.push(uppercase);
            }else if(item.id=='lowercase'){
                pwdSource.push(lowercase);
            }else if(item.id=='numbers'){
                pwdSource.push(numbers);
            }else if(item.id=='symbols'){
                pwdSource.push(symbols);
            }
        })

            for(let i=1; i<=pwd_length; i++){
                temp_var1 = Math.floor(Math.random()*pwdSource.length)
                temp_var2 = Math.floor(Math.random()*pwdSource[temp_var1].length)
                passwordArr.push(pwdSource[temp_var1][temp_var2]);
            }

            resultEl.innerText = passwordArr.join("");
    }
}
function getRandomLower() {
    var isChecked = lowercaseEl.checked;
    return isChecked;
}

function getRandomUpper() {
    var isChecked = uppercaseEl.checked;
    return isChecked;
}

function getRandomNumber() {
    var isChecked = numbersEl.checked;
    return isChecked;
}

function getRandomSymbol() {
    var isChecked = symbolsEl.checked;
    return isChecked;
}