const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')
const elArr = [uppercaseEl, lowercaseEl, numbersEl, symbolsEl]

let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','t','u','v','w','x','y','z'];
let numbers = [1,2,3,4,5,6,7,8,9,0];
let symbols = ['!','@','$','%','^','&','*'];
let pwdSource = [];
let passwordArr = [];
let regex = (('A'||'B'||'C'||'D'||'E'||'F'||'G'||'H'||'I'||'J'||'K'||'L'||'M'||'N'||'O'||'P'||'Q'||'R'||'S'||'T'||'U'||'V'||'W'||'X'||'Y'||'Z')&&('a'||'b'||'c'||'d'||'e'||'f'||'g'||'h'||'i'||'j'||'k'||'l'||'m'||'n'||'o'||'p'||'q'||'r'||'s'||'t'||'t'||'u'||'v'||'w'||'x'||'y'||'z')&&(1||2||3||4||5||6||7||8||9||0)&&('!'||'@'||'$'||'%'||'^'||'&'||'*'))
let final_pwd = '';
clipboardEl.addEventListener('click', () => {
    resultEl.select();
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

function generatePassword(pwdlength, ...elements) {
    pwdSource = [];
    passwordArr = [];
    if(elements.length<2||pwdlength>20||pwdlength<4){
        alert(`1.Maximum allowed characters are 20!! 
     2.Please chose atleast two combinations!!
     3.Minumum password chracters are 4`);
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
            let k = i<pwdSource.length?i:i%pwdSource.length;
            temp_var2 = Math.floor(Math.random()*pwdSource[k].length)
            passwordArr.push(pwdSource[k][temp_var2]);
        }
        final_pwd = passwordArr.join("");
        resultEl.innerText = passwordArr.join("");
        
    }
}

clipboardEl.addEventListener('click', (e)=> {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Copied the text: " + resultEl.innerText);
});
