/*=========================
            Checkers
 =========================*/
var app = app || {};

(function() {
    app.Checkers = function() {
        var that = this,
            maxCountCheckers = app.Const.MAX_COUNT_CHECKERS;

        this.checkers = [];
        this.maxCountElement = maxCountCheckers;

        this.addElement = function(_id) {
            var checker = new app.Checker(_id);

            if (that.checkers.length < maxCountCheckers) {
                setSide(checker);
                that.checkers[_id] = checker;
            } else {
                console.log('Количество шашек не может превышать ' + maxCountCheckers + '-х');
            }
        };

        this.removeChecker = function(_id) {
            that.checkers[_id] = null;
        };
    };

    /**
     * Определяем сторону шашки BLACK || WHITE
     * @param _checker
     */
    function setSide(_checker) {
        var side = 'WHITE',
            countCheckers = app.Checkers.checkers.length;

        if (countCheckers >= (app.Const.MAX_COUNT_CHECKERS/2)) {
            side = 'BLACK';
        }

        _checker.side = side;
    }
}());
