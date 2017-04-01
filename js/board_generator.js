function generateBoard() {
    document.getElementById("board").innerHTML = "";
    if(document.numberOfRows == null) {
       document.numberOfRows = 3;
    }
    for(var i = 1; i<=document.numberOfRows; i++) {
        var row = document.createElement("div");
        row.className = "row invisible";
        row.id = "r" + i;
        document.getElementById("board").appendChild(row);
        for(var j = 1; j<=document.numberOfRows; j++) {
            var column = document.createElement("div");
            column.className = "column invisible";
            column.setAttribute("row", i);
            column.setAttribute("column", j);
            column.id = "r" + i + "_c" + j;
            column.onclick = function() {move(this)};
            document.getElementById("r" + i).appendChild(column);
        }
    }
}

generateBoard();