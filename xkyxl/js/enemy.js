var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(startNode, destructive, speed, sight, moveType, seekType, name) {
        if (typeof destructive === "undefined") { destructive = false; }
        if (typeof speed === "undefined") { speed = 2; }
        if (typeof sight === "undefined") { sight = 1; }
        if (typeof moveType === "undefined") { moveType = "linear"; }
        if (typeof seekType === "undefined") { seekType = "seeker"; }
        if (typeof name === "undefined") { name = "seeker"; }
        _super.call(this, startNode);
        this.destructive = destructive;
        this.speed = speed;
        this.time = 0;
        this.sight = sight;
        this.graphics.clear().beginFill('#a02626').drawCircle(0, 0, 8);
        this.speedX = 0;
        this.speedY = 0;
        this.moveType = moveType;
        this.seekType = seekType;
        this.name = name;

        this.squish = true;
        this.overGraphics = new createjs.Shape();
        this.addChild(this.overGraphics);
        this.powerUp.visible = false;
    }
    Enemy.prototype.Update = function (player) {
        if (this.moveType == "linear") {
            this.moveLinearToTarget();
            if (this.targetNode == null)
                this.getTarget(player);
        } else if (this.moveType == "exponential") {
            if (this.targetNode == null)
                this.time++;
            if (this.time >= this.speed * 60) {
                this.getTarget(player);
                this.time = 0;
            }
            this.moveExpToTarget();
        }
        this.animate(player);
    };

    Enemy.prototype.animate = function (player) {
        if (this.name == "seeker") {
            this.rotation += 2;
        }
        if (this.name == "speedy") {
            var difX = player.x - this.x;
            var difY = player.y - this.y;
            var angle = Math.atan2(difY, difX);
            angle = angle * 180 / Math.PI;
            this.rotation = angle;
        }
        if (this.name == "dubious") {
            var timeLeft = this.speed * 60 - this.time;
            this.overGraphics.graphics.clear();
            if (timeLeft <= 0)
                return;
            var percentLeft = timeLeft / (this.speed * 60);
            var angle = 2 * Math.PI - 2 * Math.PI * percentLeft;
            this.overGraphics.graphics.beginFill("rgba(255,255,255,.5)").arc(0, 0, 6, 0, angle, true).lineTo(0, 0);
        }
        if (this.name == "destroyer") {
            if (this.squish) {
                this.shape.scaleX -= .02;
                if (this.shape.scaleX <= .5)
                    this.squish = false;
            } else {
                this.shape.scaleX += .02;
                if (this.shape.scaleX >= 1.2)
                    this.squish = true;
                if (this.currentLine != null) {
                    var difX = this.currentLine.node1.x - this.currentLine.node2.x;
                    var difY = this.currentLine.node1.y - this.currentLine.node2.y;
                    var angle = Math.atan2(difY, difX);
                    this.shape.rotation = angle * 180 / Math.PI;
                }
            }
            this.layLine();
        }
    };

    Enemy.prototype.moveLinearToTarget = function () {
        if (this.currentLine == null || this.targetNode == null)
            return;
        this.x += this.speedX;
        this.y += this.speedY;
        var difX = this.targetNode.x - this.x;
        var difY = this.targetNode.y - this.y;

        if (Math.abs(difX) < 5 && Math.abs(difY) < 5) {
            this.x = this.targetNode.x;
            this.y = this.targetNode.y;
            this.speedX = 0;
            this.speedY = 0;
            if (this.destructive)
                this.destroy();
            this.currentLine = null;
            this.currentNode = this.targetNode;
            this.targetNode = null;
        }
    };

    Enemy.prototype.moveExpToTarget = function () {
        if (this.currentLine == null || this.targetNode == null)
            return;
        var difX = this.targetNode.x - this.x;
        var difY = this.targetNode.y - this.y;
        this.x += difX * .15;
        this.y += difY * .15;

        if (Math.abs(difX) < 1 && Math.abs(difY) < 1) {
            if (this.destructive)
                this.destroy();
            this.currentLine = null;
            this.currentNode = this.targetNode;
            this.targetNode = null;
        }
    };

    Enemy.prototype.getTarget = function (player) {
        if (this.seekType == "seeker") {
            this.targetPlayer(player);
        } else if (this.seekType == "random") {
            this.pickRandom();
        } else if (this.seekType == "distance") {
            this.pickDist(player);
        }
    };

    Enemy.prototype.targetPlayer = function (player) {
        var lookAt = player.currentNode;
        if (player.targetNode != null && player.currentLine != null && player.currentLine.value != 2)
            lookAt = player.targetNode;
        var path = this.currentNode.pathTo(lookAt, this.sight);
        if (path != null) {
            this.targetNode = path;
            this.setPath();
        } else {
            var rand = Math.floor(Math.random() * this.currentNode.lines.length);
            this.currentLine = this.currentNode.lines[rand];
            this.targetNode = this.currentNode == this.currentLine.node1 ? this.currentLine.node2 : this.currentLine.node1;
        }
        this.getSpeeds();
    };

    Enemy.prototype.pickRandom = function () {
        if (this.currentNode.lines.length == 0)
            return;
        var rand = Math.floor(Math.random() * this.currentNode.lines.length);
        this.currentLine = this.currentNode.lines[rand];
        this.targetNode = this.currentNode == this.currentLine.node1 ? this.currentLine.node2 : this.currentLine.node1;
        this.getSpeeds();
    };

    Enemy.prototype.pickDist = function (player) {
        var target = player.targetNode == null ? this.currentNode.pathTo(player.currentNode, this.sight) : this.currentNode.pathTo(player.targetNode, this.sight);
        if (target == null) {
            var currentDist = Number.MAX_VALUE;

            for (var i = 0; i < this.currentNode.neighbors.length; i++) {
                var neighbor = this.currentNode.neighbors[i];
                var distX = player.x - neighbor.x;
                var distY = player.y - neighbor.y;
                var distSqr = distX * distX + distY * distY;
                if (distSqr < currentDist) {
                    if (this.currentNode.neighborConnected(neighbor)) {
                        target = neighbor;
                        currentDist = distSqr;
                    }
                }
            }
        }
        this.targetNode = target;
        this.setPath();
        this.getSpeeds();
    };

    Enemy.MakeEnemy = function (type, node) {
        if (type == null)
            type = "seeker";
        var enemy = null;
        switch (type) {
            case "seeker":
                enemy = new Enemy(node, false, 3, 1, "linear", "seeker", type);
                enemy.graphics.clear().beginFill("red").drawRect(-6, -6, 12, 12);
                break;
            case "speedy":
                enemy = new Enemy(node, false, 1, 1, "linear", "distance", type);
                enemy.graphics.clear().beginFill("red").moveTo(6, 0).lineTo(-6, -6).lineTo(-6, 6).lineTo(6, 0).beginFill("").beginStroke("white").setStrokeStyle(2).moveTo(-3, -3).lineTo(6, 0).lineTo(-3, 3);
                break;
            case "dubious":
                enemy = new Enemy(node, false, 2.75, 1, "exponential", "random", type);
                enemy.graphics.clear().beginFill("red").drawCircle(0, 0, 6);
                break;
            case "destroyer":
                enemy = new Enemy(node, true, 0.5, 1, "linear", "random", type);
                enemy.graphics.clear().beginFill("red").drawRoundRect(-6, -6, 12, 12, 3);
                break;
            default:
                enemy = new Enemy(node, false, 2, 1, "linear", "seeker", "seeker");
                enemy.graphics.clear().beginFill("red").drawRect(-6, -6, 12, 12);
                break;
        }
        return enemy;
    };

    Enemy.prototype.destroy = function () {
        this.currentLine.value++;

        if (this.currentLine.value == 1)
            this.crossFirstSound.play(); else if (this.currentLine.value == 2)
            this.crossSecondSound.play(); else if (this.currentLine.value == 3) {
            this.crossBreakSound.play();
            this.currentNode.removeLine(this.currentLine);
            this.targetNode.removeLine(this.currentLine);
        }

        this.currentNode.updateColor();
        this.targetNode.updateColor();
        this.currentLine.updateColor();
        this.currentLine.setGlassColors();
    };
    return Enemy;
})(Player);
