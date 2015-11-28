/*=========================
            Checker
 =========================*/
var app = app || {};

(function() {
    app.Checker = function(_id) {
        this.id = _id;
        this.side = null;
        this.isQueen = false;
        this.idSquare = null;
        this.move = function(_squareId) {
            if (isValidMove(this, _squareId)) {
                // Чистим старую клетку
                app.ChessBoard.squares[this.idSquare].idCheckerInside = null;

                // Заполняем новую
                this.idSquare = _squareId;
                app.ChessBoard.squares[_squareId].idCheckerInside = this.id;

                return true;
            } else {
                return false;
            }
        }
    };

    function isValidMove(_checker, _squareId) {
        if (app.ChessBoard.squares[_squareId] == null) {
            console.log('Клетка отсутсвует');
            return false;
        }

        var newPosition = app.ChessBoard.squares[_squareId].position,
            oldPosition = app.ChessBoard.squares[_checker.idSquare].position;

        if (newPosition == null) {
            console.log('У клетке не заданы координаты!');
            return false;
        }

        if (newPosition.length !== 2) {
            console.log('У клетке не верно заданы координаты');
            return false;
        }

        var newX = newPosition[0],
            newY = newPosition[1],
            oldX = oldPosition[0],
            oldY = oldPosition[1],
            sideChecker = app.Const[_checker.side],
            deltaX = oldX - newX,
            deltaY = oldY - newY;

        // Пешки могут ходить только вперед и только по диаганали и только на пустую клетку
        if (!_checker.isQueen && ((deltaY * sideChecker) !== 1 || deltaX > 1 || deltaX < -1 || deltaX === 0)) {
            console.log('Пешки могут ходить только вперед и только по диаганали и только на пустую клетку');
            return false;
        }

        return true;
    }
}());
