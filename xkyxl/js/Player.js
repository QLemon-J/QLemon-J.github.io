var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(startNode) {
        this.graphics = new createjs.Graphics().beginFill('rgba(153, 204, 255, 0.8)').drawCircle(0, 0, 18);
        this.lineValue = 0;

        _super.call(this);
        this.shape = new createjs.Shape(this.graphics);
        this.currentNode = startNode;
        this.startNode = startNode;
        this.targetNode = null;
        this.currentLine = null;
        this.x = startNode.x;
        this.y = startNode.y;
        this.score = 0;
        this.invincible = 0;
        this.lightweight = false;

        this.speed = 16;
        this.speedX = 0;
        this.speedY = 0;
        this.lineBehind = new createjs.Shape();
        this.powerUp = new createjs.Shape();
        this.powerUp.graphics.beginFill("white").drawCircle(0, 0, 10);
        this.addChild(this.lineBehind, this.powerUp, this.shape);
        this.currentScale = 0;

        this.powerUp.visible = false;
    }
    Player.prototype.setPath = function () {
        if (this.targetNode == null)
            return;
        if (this.targetNode == this.currentNode) {
            this.targetNode = null;
            return;
        }

        for (var i = 0; i < this.currentNode.neighbors.length; i++) {
            if (this.targetNode == this.currentNode.neighbors[i]) {
                this.currentLine = this.getLineFromNodes();
                this.currentNode.neighbors[0].active = false;
            }
        }
        if (this.currentLine == null)
            this.targetNode = null; else {
            this.lineValue = this.currentLine.value;
            this.getSpeeds();
        }
    };

    Player.prototype.getSpeeds = function () {
        var difX = this.targetNode.x - this.currentNode.x;
        var difY = this.targetNode.y - this.currentNode.y;
        if (difX == 0) {
            this.speedX = 0;
            this.speedY = this.speed * difY / Math.abs(difY);
        } else if (difY == 0) {
            this.speedX = this.speed * difX / Math.abs(difX);
            this.speedY = 0;
        } else {
            var angle = Math.atan2(difY, difX);
            this.speedX = this.speed * Math.cos(angle);
            this.speedY = this.speed * Math.sin(angle);
        }
    };

    Player.prototype.update = function () {
        this.currentScale += .03;
        var scale = 1.25 + Math.sin(this.currentScale) * .25;
        this.shape.scaleX = this.shape.scaleY = this.powerUp.scaleX = this.powerUp.scaleY = scale;

        this.moveToTarget();
        this.drawPowerup();
    };

    Player.prototype.drawPowerup = function () {
        this.powerUp.rotation++;
        if (this.invincible > 0) {
            this.invincible--;

            var rad = 12;
            var xDist = 2 * rad;
            var yDist = Math.sqrt(rad * rad + xDist * xDist);

            this.powerUp.graphics.clear().beginFill("white").moveTo(0, -yDist).lineTo(-xDist, rad).lineTo(xDist, rad);
        } else {
            this.powerUp.graphics.clear().beginFill("white").drawCircle(0, 0, 12);
        }
    };

    Player.prototype.moveToTarget = function () {
        this.lineBehind.visible = this.currentLine != null;
        if (this.currentLine == null || this.targetNode == null)
            return;

        this.x += this.speedX;
        this.y += this.speedY;
        var difX = this.targetNode.x - this.x;
        var difY = this.targetNode.y - this.y;

        this.layLine();

        if (Math.abs(difX) < 10 && Math.abs(difY) < 10) {
            this.lineBehind.visible = false;
            this.x = this.targetNode.x;
            this.y = this.targetNode.y;
            this.speedX = 0;
            this.speedY = 0;

            if (!this.lightweight || (this.lightweight && this.currentLine.value == 0)) {
                this.currentLine.value++;
                if (this.currentLine.value == 1)
                    createjs.Sound.play("crossFirst"); else if (this.currentLine.value == 2)
                    createjs.Sound.play("crossSecond"); else if (this.currentLine.value == 3) {
                    createjs.Sound.play("break1");
                    this.currentNode.removeLine(this.currentLine);
                    this.targetNode.removeLine(this.currentLine);
                }

                this.currentLine.updateColor();
                this.currentLine.setGlassColors();
            } else if (this.lightweight) {
                this.lightweight = false;
            }

            this.currentLine = null;
            this.currentNode = this.targetNode;

            this.targetNode = null;
        }
    };

    Player.prototype.layLine = function () {
        var difX = this.currentNode.x - this.x;
        var difY = this.currentNode.y - this.y;

        this.lineBehind.graphics.clear().beginStroke(Game.colors[this.currentLine.value + 1]).setStrokeStyle(10).moveTo(0, 0).lineTo(difX, difY).beginStroke().beginFill("rgba(255,255,255, .8)").drawCircle(difX, difY, 12);
        this.lineBehind.alpha = 0.8;
    };

    Player.prototype.getLineFromNodes = function () {
        var result = null;
        for (var i = 0; i < this.currentNode.lines.length; i++) {
            for (var j = 0; j < this.targetNode.lines.length; j++) {
                if (this.targetNode.lines[j] == this.currentNode.lines[i]) {
                    result = this.targetNode.lines[j];
                    if (result.value == 3)
                        return null;
                }
            }
        }
        return result;
    };
    return Player;
})(createjs.Container);
