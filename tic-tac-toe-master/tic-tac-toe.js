document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    

    //Adds the square class to all the div items inside the div with id board
    //This allows the css that is already written for .squares to take effect
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square');
    }
});