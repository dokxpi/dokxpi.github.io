/*=========================
            ChessBoard
 =========================*/
var app = app || {};

(function(){
    app.ChessBoard =  function() {
        var that = this;
        this.squares = [];
        this.maxCountElement = app.Const.MAX_COUNT_SQUARES;
        this.addElement = function(_id) {
            var square = new app.Square(_id);

            if (that.squares.length < that.maxCountElement) {
                that.squares[_id] = square;
                setPropertySquare();
            } else {
                console.log('Количество клеток не может превышать ' + that.maxCountElement + '-х');
            }
        }
    };

    //TODO еще раз подумать над алгоритмом
    /**
     *  Определение позиции и цвета шахматной клетки
     * @returns {boolean}
     */
    function setPropertySquare() {
        var maxCountSquares = app.Const.MAX_COUNT_SQUARES;

        if (app.ChessBoard.squares.length !== maxCountSquares) {
            return false;
        }

        var y = 0,
            idSquare = 0,
            countColumns = Math.sqrt(maxCountSquares);

        for (y; y < countColumns; ++y) {
            var x = 0;
            for (x; x < countColumns; ++x) {
                var color = 'WHITE';
                app.ChessBoard.squares[idSquare].position = [x, y];

                if (y % 2 == 0 && x % 2 == 0) {
                    color = 'BLACK';
                } else if(y % 2 !== 0 && x % 2 !== 0) {
                    color = 'BLACK';
                }

                app.ChessBoard.squares[idSquare].color = color;
                idSquare++;
            }
        }

        return true;
    }
}());
