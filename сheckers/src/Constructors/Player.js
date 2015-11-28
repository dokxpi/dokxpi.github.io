/*=========================
            Player
 =========================*/
var app = app || {};

app.Player = function(_id, _login) {
    this.id = _id;
    this.login = _login;
    this.side = null;
    this.makeMove = function(_idChecker, _idSquare) {
        var checker = app.Checkers.checkers[_idChecker];

        if (checker) {
            checker.move(_idSquare);
        }
    };
};
