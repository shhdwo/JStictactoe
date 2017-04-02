var endConditionCheckerModule = (function(player, square) {
    
    var checkForDraw = function() {
        for(var i = 1; i<=document.numberOfRows; i++) {
            for(var j = 1; j<=document.numberOfRows; j++) {
                square = document.getElementById("r" + i + "_c" + j);
                if (square.className == "column") {
                    return false;
                }
            }   
        }
        return true;
    };
    
    var checkForWin = function(player, square) {
        var squareOccupiedByPlayer = "column occupiedBy_" + player;
        if(checkRowCondition(squareOccupiedByPlayer, square)) {
            return true;
        }
        else if(checkColumnCondition(squareOccupiedByPlayer, square)){
            return true;
        }
        else if(checkDiagonalCondition(squareOccupiedByPlayer, square)) {
            return true;
        }
            return false;
    };
    
    var checkRowCondition = function(squareOccupiedByPlayer, lastMove) {
        for(var i = 1; i<=document.numberOfRows; i++) {
            var squareInRow = document.getElementById("r" + lastMove.getAttribute("row") + "_c" + i);
            if(squareInRow.className != squareOccupiedByPlayer) {
                return false;
            }
        }
        return true;
    };
    
    var checkColumnCondition = function(squareOccupiedByPlayer, lastMove) {
        for(var i = 1; i<=document.numberOfRows; i++) {
            var squareInColumn = document.getElementById("r" + i + "_c" + lastMove.getAttribute("column"));
            if(squareInColumn.className != squareOccupiedByPlayer) {
                return false;
            }
        }
        return true;
    };
    
    var checkDiagonalCondition = function(squareOccupiedByPlayer, lastMove) {
        var row = lastMove.getAttribute("row");
        var column = lastMove.getAttribute("column");
        var rowAndColumnSum = parseInt(row) + parseInt(column);
        if (rowAndColumnSum == document.numberOfRows + 1) {
            for(var i = 0; i<document.numberOfRows; i++) {
                var colNum = i + 1;
                var rowNum = document.numberOfRows - i;
                var squareInDiagonal = document.getElementById("r" + rowNum + "_c" + colNum);
                if(squareInDiagonal.className != squareOccupiedByPlayer) {
                    return false;
                }
            }
            return true;
        }
        else if(row == column) {
            for(var i = 1; i<=document.numberOfRows; i++) {
                var squareInDiagonal = document.getElementById("r" + i + "_c" + i);
                if(squareInDiagonal.className != squareOccupiedByPlayer) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    
    var updateDraws = function() {
        historyModule.wasDraw();
        document.getElementById("draws").innerText = historyModule.getTimesWasDraw();
    };
    
    var updateWin = function(player) {
        if(player == "O"){
            historyModule.oWon();
            document.getElementById("oWins").innerText = historyModule.getTimesOWon();
        }
        else if(player == "X") {
            historyModule.xWon();
            document.getElementById("xWins").innerText = historyModule.getTimesXWon();
        }
    };
    
    
    return {
        checkResult: function(player, square) {
            if(checkForWin(player, square)) {
                gameModule.setMessage("Player " + player + " wins!");
                document.finished = true;
                updateWin(player);
                return player;
            }
            else if(checkForDraw()) {
                gameModule.setMessage("Nobody wins.");
                document.finished = true;
                updateDraws();
                return "draw";
            }
            return "not finished";
        }
    }
})();