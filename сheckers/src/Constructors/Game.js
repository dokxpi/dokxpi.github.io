/*=========================
            Game
 =========================*/
var app = app || {};

(function() {
    app.Game = function() {
        this.start = function() {
            // Иницилизация
            app.Checkers = new app.Checkers();
            app.ChessBoard = new app.ChessBoard();
            app.Players = new app.Players();

            initElements('Checkers');
            initElements('ChessBoard');
            balanceCheckers();

            // Отрисовка
            app.View.drawChessBoard(app.ChessBoard);
            app.View.drawCheckers(app.Checkers);

            initElements('Players');
        };

        this.restart = function() {};
        this.end = function(_winner) {};
    };

    /**
     * Иницилизация и добавление в коллекции
     * @param _nameElements
     * @returns {boolean}
     */
    function initElements(_nameElements) {
      var collection = app[_nameElements];

        for (var i = 0; i <= (collection.maxCountElement - 1); i++) {
            collection.addElement(i);
        }

        return true;
    }

    /**
     * Расстановка шашек
     * @returns {boolean}
     */
    function balanceCheckers() {
        var checkers = app.Checkers.checkers,
            squares = app.ChessBoard.squares;

        if (checkers == null || squares == null) {
            console.log('Не все элементы инициализированны!');
            return false;
        }

        var counterElement = 1,
            counterRow = 1;

        for (id in checkers) {
            var idChecker = checkers[id].id,
                idSquare,
                delta = 0;

            if (counterRow % 2 === 0) {
                delta = 1;
            }
            if ((idChecker + 1) > (app.Checkers.maxCountElement/2)) {
                idSquare = (idChecker) * 2 + 16 + delta;
            } else {
                idSquare = idChecker * 2 + delta;
            }

            checkers[idChecker].idSquare = idSquare;
            squares[idSquare].idCheckerInside = idChecker;
            if (counterElement % 4 === 0) {
                counterRow++;
            }
            counterElement++;
        }

        return true;
    }
}());