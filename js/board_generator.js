var generateBoardModule = (function(rows) {
    var clearDivs = function(board) {
        while (board.hasChildNodes()) {
            board.removeChild(board.firstChild);
        }
    }
   
    return {
        generateBoard: function(rows) {
            var board = document.getElementById("board");
            if (board != null) {
                clearDivs(board);
                if(document.numberOfRows == null) {
                   document.numberOfRows = rows;
                }
                for(var i = 1; i<=document.numberOfRows; i++) {
                    var row = document.createElement("div");
                    row.className = "row invisible";
                    row.id = "r" + i;
                    board.appendChild(row);
                    for(var j = 1; j<=document.numberOfRows; j++) {
                        var column = document.createElement("div");
                        column.className = "column invisible";
                        column.setAttribute("row", i);
                        column.setAttribute("column", j);
                        column.id = "r" + i + "_c" + j;
                        column.onclick = function() {gameModule.move(this)};
                        document.getElementById("r" + i).appendChild(column);
                    }
                }
            }
        }
    }
})();

generateBoardModule.generateBoard(3);