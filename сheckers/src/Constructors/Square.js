/*=========================
            Square
 =========================*/
var app = app || {};

app.Square = function(_id ,_color, _position) {
    this.id = _id;
    this.idCheckerInside = null;
    this.color = _color;
    this.position = _position;
};
