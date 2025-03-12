function convertToAdjList(matrix) {

    var list = [];

    // Empty Matrix
    if (matrix.length == 0) {
        return list;
    }

    // Loop through all elements
    for (var i = 0; i < matrix.length; i++) {
        list[i] = [];
        for (var j = 0; j < matrix[i].length; j++) {
            // Add elements to list
            if (matrix[i][j]) {
                list[i].push(j);
            }
        }
    }

    return list;
}



function convertToAdjMatrix(adjList) {

    var matrix = [];

    // Empty List
    if (adjList.length == 0) {
        return matrix;
    }

    // Matrix of 0's
    for (var i = 0; i < adjList.length; i++) {
        matrix[i] = [];
        for (var j = 0; j < adjList.length; j++) {
            matrix[i][j] = 0;
        }
    }

    // Populate the matrix
    for (var i = 0; i < adjList.length; i++) {
        for (var j = 0; j < adjList[i].length; j++) {
            var edge = adjList[i][j];
            matrix[i][edge] = 1;
        }
    }

    return matrix;
}


