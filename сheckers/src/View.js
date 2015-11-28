/*=========================
        View
 =========================*/
var app = app || {};

app.View = {
    drawChessBoard: function(_chessBoard) {
        var squares = _chessBoard.squares;

        if (squares.length !== _chessBoard.maxCountElement) {
            console.log('Не хватает клеток для отображения!');
            return false;
        }
        var chessBoardHtmlObject = document.getElementById('chess-board');

        for (squareId in squares) {
            var square = squares[squareId],
                squareHtmlObject = document.createElement('div'),
                className = 'square ';

            className += (square.color === 'WHITE') ? 'square-white' : 'square-black';
            squareHtmlObject.setAttribute('data-id', square.id);
            squareHtmlObject.className = className;
            chessBoardHtmlObject.appendChild(squareHtmlObject);
        }
    },

    drawCheckers: function(_checkers) {
        var checkers = _checkers.checkers;

        if (checkers.length !== _checkers.maxCountElement) {
            console.log('Не хватает шашек для отображения!');
            return false;
        }

        var chessBoardHtmlObject = document.getElementById('chess-board');

        for (checkerId in checkers) {
            var checker = checkers[checkerId],
                checkerHtmlObject = document.createElement('div'),
                posX = app.ChessBoard.squares[checker.idSquare].position[0]*100 + 10,
                posY = app.ChessBoard.squares[checker.idSquare].position[1]*100 + 10,
                className = 'checker ';

            checkerHtmlObject.style.left = posX + 'px';
            checkerHtmlObject.style.top = posY + 'px';
            className += (checker.side === 'WHITE') ? 'checker-white' : 'checker-black';

            checkerHtmlObject.setAttribute('data-id', checker.id);
            checkerHtmlObject.className = className;
            chessBoardHtmlObject.appendChild(checkerHtmlObject);
        }
    }
};