document.addEventListener("DOMContentLoaded" ,()=>{
    const game = document.querySelectorAll("div")
    const start = document.querySelector(".start")
    const player = [3, 2, 1]
    let currentPosition = 1;


    function StartGame(){
        player.forEach((index) => game[index + currentPosition].classList.add("character"));
    }

    function Create(){
        player.forEach(index=> game[index].classList.add("character"))
    }
    Create();

    function Delete() { }
    

    function MoveUp() { }
    
    function moveDown() { }
    
    function moveRight() { }
    
    function moveLeft() { }
    
    
    function Joystick()
    {   
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
    
    function StartContext() { }
   
    start.addEventListener("click", StartContext)
    document.addEventListener("keyup" ,Joystick)
})