document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    var current_player = "X";
    let state = ['', '', '', '', '', '', '', '', ''];
    

    //Adds the square class to all the div items inside the div with id board
    //This allows the css that is already written for .squares to take effect
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
    }


    squares.forEach((square,i) => {
        square.addEventListener('click', function(){
            //check if the click is on an empty square
            if (state[i]==''){
                //Update the state
                state[i]= current_player;

                //Update the visual dispaly
                square.textContent=current_player;
                square.classList.add(current_player);

               
                 // Switch player for next turn
                if (current_player=='X'){
                    current_player="O";
                }
                else{
                    current_player="X";
                }
                console.log(current_player);

            }

        
        });
        //Highlights squares when mouse hovers 
        square.addEventListener("mouseenter",() =>{
            square.classList.add("hover");

        });
        //Square returns to normal when mouse leaves
        square.addEventListener("mouseleave",() =>{
            square.classList.remove("hover");

        });
        
    });





});