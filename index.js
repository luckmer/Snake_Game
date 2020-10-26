document.addEventListener("DOMContentLoaded" ,()=>{
    const game = document.querySelectorAll("div")
    const start = document.querySelector(".start")
    const player = [1,1,1]
    let currentPosition = 1;
    let randomBlockNumber = 0;
    let snakeStart = false


    function PlaySnake(){
        if (snakeStart === false) {
            snakeStart = true
            RandomBlock()
            Create()
            game[randomBlockNumber].classList.add("block");
            document.addEventListener("keyup" ,Joystick)
            start.innerHTML = "pause"
        } else {
            start.innerHTML = "start"
            snakeStart = false
            player.forEach(index => game[index].classList.remove("character"))
            game[randomBlockNumber].classList.remove("block");
            document.removeEventListener("keyup", Joystick)
        }
    }

    
    function Create(){
        player.forEach((index) => game[index].classList.add("character"));
    }
    
    function Delete(){ 
        const test = player.pop();
        player.unshift(currentPosition + player[0] )
        game[test].classList.remove("character");
    }
    
    function AppleCollision(){
        let collision = player.some(index => game[index].classList.contains("block"));
        if (collision) {
            game[randomBlockNumber].classList.remove("block");
            const tail = player.pop();
            player.unshift(player[0] + currentPosition)
            player.push(tail)
            RandomBlock(); 
        }
    }

    function MoveUp(){ 
        if (snakeStart === true) {
            Delete();  
            currentPosition = -10
            Create();
            AppleCollision();
            if (player[0] - 10 < 0 && currentPosition === -10) {
                GameOver();
            }
        }
    }
    
    function moveDown(){
        if (snakeStart === true) {
            Delete();  
            currentPosition = 10
            Create();
            AppleCollision();
            if (game[player[0]].classList.contains("end")) {
                GameOver();
            }
        }
    }
    
    function moveRight(){
        if (snakeStart === true) {
            Delete();  
            currentPosition = 1
            Create();
            AppleCollision();
            if (player[0] % 10 + 1 === 1 && currentPosition === 1) {
                GameOver();
            }
        }
        
    }
    
    function moveLeft(){ 
        if (snakeStart === true) {
            Delete();  
            currentPosition = -1
            Create();
            AppleCollision();
            if (player[0] % 10 + 1 === 2 && currentPosition === -1) {
                GameOver();
            }
        }
    }
    
    function GameOver(){
        alert("game over");
        window.location.reload(true);
    }

    function Joystick(e){   
        if (e.keyCode === 87) {
            MoveUp();
        } else if (e.keyCode === 83) {
            moveDown();
        } else if (e.keyCode === 68) {
            moveRight();
        } else if (e.keyCode === 65) {
            moveLeft();
        }
    }
    function RandomBlock(){
        if (snakeStart === true) {
            randomBlockNumber = Math.floor(Math.random() * game.length -10)
            game[randomBlockNumber].classList.add("block")
        }
    }
    start.addEventListener("click" , PlaySnake)
})

