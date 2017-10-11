var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Powerup = (function (_super) {
    __extends(Powerup, _super);
    function Powerup(type, line) {
        _super.call(this);
        this.type = type;
        var node1 = line.node1;
        var node2 = line.node2;

        this.x = (node1.x + node2.x) / 2;
        this.y = (node1.y + node2.y) / 2;
        this.shape = this.makePowerup(type);
        this.addChild(this.shape);
    }
    Powerup.prototype.makePowerup = function (type) {
        var g = new createjs.Graphics();
        switch (type) {
            case "score":
                g.beginFill("green").drawPolyStar(0, 0, 10, 5, 3, 0);
                break;
            case "shield":
                g.beginFill("purple").drawPolyStar(0, 0, 10, 4, 2, 0).drawCircle(-2, 0, 5);
                break;
            case "lightweight":
                g.beginFill("white").drawCircle(0, 0, 10).beginFill("gray").drawCircle(0, 0, 5).beginFill("black").drawCircle(0, 0, 2);
                break;
        }
        return new createjs.Shape(g);
    };

    Powerup.prototype.pickUp = function (player) {
        switch (this.type) {
            case "score":
                player.score += 25;
                player.scoreSound.play();
                break;
            case "shield":
                player.invincible = 300;
                player.shieldSound.play();
                break;
            case "lightweight":
                player.lightweight = true;
                player.lightWeightSound.play();
                break;
        }
    };
    return Powerup;
})(createjs.Container);
