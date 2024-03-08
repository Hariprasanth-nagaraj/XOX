        let ucount=0;
        let ccount=0;
        let count=0;

        function getComp(){
            let c = Math.floor(Math.random() * 3);
            switch(c){
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 2:
                    return "scissor";
            }
        }
        function game(choice){
            let u = choice.toLowerCase();
            let c = getComp();
            if(c==u){alert("its a tie");}
            else if(u=="rock" && c=="paper"){alert("computer wins");ccount++;}
            else if(u=="rock" && c=="scissor"){alert("YOU win");ucount++;}
            else if(u=="paper" && c=="rock"){alert("YOU win");ucount++;}
            else if(u=="paper" && c=="scissor"){alert("computer wins");ccount++;}
            else if(u=="scissor" && c=="rock"){alert("computer wins");ccount++;}
            else if(u=="scissor" && c=="paper"){alert("YOU win");ucount++;}
            if(count==5){
                if(ucount>ccount){alert("you won MF");}
                else{
                    alert("you are A FCUKING WASTE!!");    
                }
                ucount=0;ccount=0;count=0;
            }else{
                count++;
            }
        }
        
        const con = document.querySelector('#btns');
        const btn1 =document.createElement('button');
        btn1.textContent='ROCK';
        const btn2 =document.createElement('button');
        btn2.textContent='paper';
        const btn3 =document.createElement('button');
        btn3.textContent='scissor';
        con.appendChild(btn1);
        con.appendChild(btn2);
        con.appendChild(btn3);
        btn1.addEventListener('click',()=>{game("rock")});
        btn2.addEventListener('click',()=>{game("paper")});
        btn3.addEventListener('click',()=>{game("scissor")});
        
        
        
        
        
        
        
        