let total = 0;
let displayValue=0;
let firstValue='';
let secondValue='';
let operator='';
let isfirst = true;
const container = document.querySelector('#container');
const display = document.querySelector('#display');
const ac = document.querySelector('#ac');
const c = document.querySelector('#c');
const dot = document.querySelector('#dot');
const equals= document.querySelector('#equals');

const list1 = document.querySelectorAll(".num");
list1.forEach(el => {el.addEventListener("click",()=>{
    if(isfirst){
        firstValue+=el.value;
        display.textContent=firstValue;
    }
    else{
        secondValue+=el.value;
        display.textContent=secondValue;
    }});});
ac.addEventListener('click',()=>{
    total=0;
    displayValue=0;
    display.textContent=displayValue;
    firstValue='';
    secondValue='';
    isfirst='true';
});
c.addEventListener('click',()=>{
    displayValue=0;
    display.textContent=displayValue;
    if(isfirst){
        firstValue=''}
    else{
        secondValue='';
    }
});
dot.addEventListener('click',()=>{
    if(isfirst){
        firstValue+='.';
        display.textContent=firstValue;
    }
    else{
        secondValue+='.';
        display.textContent=secondValue;
    }
});
const list2 = document.querySelectorAll(".operator");
list2.forEach(el => {el.addEventListener("click",()=>{
    operator = el.value;
    //display.textContent="";
    display.textContent=operator;
    isfirst=false;
    });});
equals.addEventListener('click',()=>{
    let a = Number(firstValue);
    let b = Number(secondValue);
    console.log(a+""+ b);
    total=compute(a,b,operator);
    display.textContent=total;
    operator='';
    firstValue=''+total;
    secondValue='';
})
function compute(first,second,operator){
    //console.log(operator);
    let x=0;
    if(operator=='+'){
        x=first+second;
        
    }else if(operator=='-'){
        x=first-second;
       
    }else if(operator=='*'){
        x=first*second;
        
    }else if(operator=='/'){
        x=first/second;
        
    }
    console.log(x);
    return x;
}
//const btn1 = document.querySelector('#one');
// const btn2 = document.querySelector('#2');
// const btn3 = document.querySelector('#3');
// const btn4 = document.querySelector('#4');
// const btn5 = document.querySelector('#5');
// const btn6 = document.querySelector('#6');
// const btn7 = document.querySelector('#7');
// const btn8 = document.querySelector('#8');
// const btn9 = document.querySelector('#9');
// const btn0 = document.querySelector('#0');
// const mutiple = document.querySelector('#multiple');
// const divide = document.querySelector('#divide');
// const sub = document.querySelector('#sub');
// const ad = document.querySelector('#add');




