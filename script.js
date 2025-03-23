let player='O'
let gameStatus = true;
let count=0;


function RestartGame(){
    window.location.reload()
}

function Box(id){

    if(gameStatus==true){
        
        if(document.getElementById(id).innerHTML==''){
            if(player=='X'){
                document.getElementById(id).innerHTML='X'
                count++;
                CheckWinner()
                CheckDraw()
                player='O'
                
            }else{
                 document.getElementById(id).innerHTML='O'
                 count++
                 CheckWinner()
                 CheckDraw()
                 
                player='X'
                
            }
        
        }
        else{
            alert('Double click on a cell is not allowed')
        }
    
    }
    else{
        alert('Game is already over, Please Restart the Game')
    }

   if(gameStatus==true){
    document.getElementById('player').innerHTML=player+ "'s turn"
   }
   else{
    document.getElementById('player').innerHTML=''
   }
   
    
}
function CheckWinner(){
    let b1 = document.getElementById('box1').innerHTML
    let b2 = document.getElementById('box2').innerHTML
    let b3 = document.getElementById('box3').innerHTML
    let b4 = document.getElementById('box4').innerHTML
    let b5 = document.getElementById('box5').innerHTML
    let b6 = document.getElementById('box6').innerHTML
    let b7 = document.getElementById('box7').innerHTML
    let b8 = document.getElementById('box8').innerHTML
    let b9 = document.getElementById('box9').innerHTML


    if(b1==player && b2==player&& b3==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b4==player && b5==player&& b6==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b7==player && b8==player&& b9==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b1==player && b4==player&& b7==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b2==player && b5==player&& b8==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b3==player && b6==player&& b9==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b1==player && b5==player&& b9==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }
    else if(b3==player && b5==player&& b7==player){
        document.getElementById('result').innerHTML=player +" is the winner"
        gameStatus=false
    }  
}

function CheckDraw(){
    console.log("Function is working"+ count)
    if(count==9 && gameStatus==true){
        document.getElementById('result').innerHTML="Game Drawn"
        gameStatus=false
        console.log("Game drawn")
    }
}