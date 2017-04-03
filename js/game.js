var gameModule = (function() {
    
    var clearBoard = function() {
        for(var i = 1; i<=document.numberOfRows; i++) {
            for(var j = 1; j<=document.numberOfRows; j++) {
            square = document.getElementById("r" + i + "_c" + j);
            square.innerHTML = "";
            square.className = "column";
            }
        }
    };
    
    var setMessage = function(msg) {
            document.getElementById("message").innerHTML = msg;
    };
    
    var changeTurn = function() {
        if(document.finished == false) {
            if(document.turn == "X") {
                document.turn = "O";
            }
            else {
                document.turn = "X";
            }
            setMessage("Current player: " + document.turn);
        }
    };

    var turnBoardVisible = function() {
        var board = document.getElementById("board");
        board.className = "visible";

        Array.from(document.getElementsByClassName("row")).forEach(function(e){
            e.className = "row";
        });

        Array.from(document.getElementsByClassName("column")).forEach(function(e){
            e.className = "column";
        });

    };
    
    return {
        start: function() {
            if(document.startingPlayer == null) {
                document.startingPlayer = "X";
            }
            document.turn = document.startingPlayer;
            clearBoard();
            document.finished = false;
            setMessage("Current player: " + document.turn);
            turnBoardVisible();
        },
        move: function(square) {
            if(document.finished == false) {
                if(square.innerHTML == "") {
                    square.innerHTML = document.turn;
                    square.className = "column occupiedBy_" + document.turn;
                    var result = endConditionCheckerModule.checkResult(document.turn, square);
                    changeTurn();
                    return result;
                }
                else {
                    setMessage("This square is already occupied!");
                    return "occupied";
                }
            }
        },
        setMessage: function(msg) {
            setMessage(msg);
        },
        changeStartingPlayer: function() {
            if(document.startingPlayer == "X") {
                document.startingPlayer = "O";
            }
            else {
                document.startingPlayer = "X";
            }
        }
    }
    
})();