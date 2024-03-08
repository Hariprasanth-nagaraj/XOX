const container = document.querySelector('#container');
let n = 100;
for(let i=0;i<n;i++){
    const column = document.createElement('div');
    column.classList.add('columns');
    container.appendChild(column);
    for(let j=0;j<n;j++){
        const row = document.createElement('div');
        row.classList.add('rows');
        column.appendChild(row);
        row.addEventListener('mouseover',()=>{
            row.style.backgroundColor="black";
        })
    }
}

const reset = document.createElement('button');
reset.textContent="RESET";
reset.addEventListener("click",()=>{resetFun();});
container.parentNode.insertBefore(reset,container.nextSibling);
//container.appendChild(reset);
function resetFun(){
    var li = document.querySelectorAll('.rows');
    li.forEach(l => l.style.backgroundColor="white");
}

