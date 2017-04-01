function start() {
    if(document.startingPlayer == null) {
        document.startingPlayer = "X";
    }
    document.turn = document.startingPlayer;
    clearBoard();
    document.finished = false;
    setMessage("Current player: " + document.turn);
    turnBoardVisible();
}

function clearBoard() {
    for(var i = 1; i<=document.numberOfRows; i++) {
        for(var j = 1; j<=document.numberOfRows; j++) {
        square = document.getElementById("r" + i + "_c" + j);
        square.innerHTML = "";
        square.className = "column";
        }
    }
}

function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
}

function move(square) {
    if(document.finished == false) {
        if(square.innerHTML == "") {
            square.innerHTML = document.turn;
            square.className = "column occupiedBy_" + document.turn;
            endConditionCheckerModule.checkEndConditions(document.turn, square);
            //checkEndConditions(document.turn, square);
            changeTurn();
        }
        else {
            setMessage("This square is already occupied!");
        }
    }
}

function changeTurn() {
    if(document.finished == false) {
        if(document.turn == "X") {
            document.turn = "O";
        }
        else {
            document.turn = "X";
        }
        setMessage("Current player: " + document.turn);
    }
}

function changeStartingPlayer() {
    if(document.startingPlayer == "X") {
        document.startingPlayer = "O";
    }
    else {
        document.startingPlayer = "X";
    }
}

function turnBoardVisible() {
    var board = document.getElementById("board");
    board.className = "visible";
    
    Array.from(document.getElementsByClassName("row")).forEach(function(e){
        e.className = "row";
    });
    
    Array.from(document.getElementsByClassName("column")).forEach(function(e){
        e.className = "column";
    });

}