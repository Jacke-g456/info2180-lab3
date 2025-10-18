document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const div_status = document.getElementById("status")
    var current_player = "X";
    let state = ['', '', '', '', '', '', '', '', ''];
    let isactive = true;
    

    //Adds the square class to all the div items inside the div with id board
    //This allows the css that is already written for .squares to take effect
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
    }

    // Winning combinations
    const win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    //Checks if winning conditions have been met
    //will return either an X or O
    function game_winner(){
        for (let combination of win_combinations){
            const [x,y,z] = combination;
            if (state[x]==state[y] && state[x]==state[z] && 
                state[x]!==""){
                    return state[x];
                }
        }
        return null; //no winner
    }
    function result_handler(victor){
        if (victor){
            isactive=false;
            div_status.textContent = 'Congratulations! '+ victor + ' is the Winner!';
            div_status.classList.add("you-won");
        }
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

                //Check for winner
                const victor = game_winner();
                if (victor){
                    result_handler(victor);
                }
            

                 // Switch player for next turn
                if (current_player=='X'){
                    current_player="O";
                }
                else{
                    current_player="X";
                }

                //Error checking to see if the X and O was alternating
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