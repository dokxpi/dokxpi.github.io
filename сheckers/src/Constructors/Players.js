/*=========================
            Players
 =========================*/
var app = app || {};

app.Players = function() {
    var that = this;
    this.players = [];
    this.maxCountElement = app.Const.MAX_COUNT_PLAYERS;

    this.addElement = function(_id) {
        var playerName = prompt('Введите ник?', '');

        if (that.players.length < that.maxCountElement) {
            var player = new app.Player(_id, playerName);

            if (that.players.length == 0) {
                player.side = 'BLACK';
            } else if (that.players.length == 1) {
                player.side = 'WHITE';
            }

            that.players[_id] = player;
        } else {
            console.log('Количество игроков не может превышать ' + that.maxCountElement + '-х');
        }
    }
};
