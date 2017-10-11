var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GamePoint = (function (_super) {
    __extends(GamePoint, _super);
    function GamePoint(x, y) {
        _super.call(this);
        this.graphics = new createjs.Graphics().beginFill('rgba(255, 255, 255, 1)').drawCircle(0, 0, 12);
        this.shape = new createjs.Shape(this.graphics);

        this.ring = new createjs.Shape();
        this.ring.graphics.beginStroke("white").setStrokeStyle(2, true).drawCircle(0, 0, 11);

        this.addChild(this.ring, this.shape);
        this.ring.visible = false;
        this.active = false;
        this.x = x;
        this.y = y;

        this.neighbors = [];
        this.lines = [];
        this.length = 0;
        this.ringTime = 0;
    }
    GamePoint.prototype.addNeighbor = function (node) {
        this.neighbors.push(node);
        node.neighbors.push(this);

        var line = new Line(this, node);
        this.lines.push(line);
        node.lines.push(line);
        return line;
    };

    GamePoint.prototype.removeLine = function (line) {
        this.lines.sort(function (a, b) {
            if (a == line)
                return -1;
            if (b == line)
                return 1;
            return 0;
        });
        this.lines.shift();
    };

    GamePoint.prototype.removeNeighbor = function (neighbor) {
        this.neighbors.splice(this.neighbors.indexOf(neighbor), 1);
        neighbor.neighbors.splice(this, 1);
    };

    GamePoint.prototype.toggleNeighbors = function () {
        for (var i = 0; i < this.neighbors.length; i++) {
            if (this.neighborConnected(this.neighbors[i])) {
                this.neighbors[i].active = !this.neighbors[i].active;
            }
        }
    };

    GamePoint.prototype.pathTo = function (target, dist) {
        var paths = [];
        var checkedNodes = [];
        for (var i = 0; i < this.neighbors.length; i++) {
            var neighbor = this.neighbors[i];
            if (this.neighborConnected(neighbor)) {
                if (neighbor.x == target.x && neighbor.y == target.y) {
                    return neighbor;
                }
                var path = [neighbor];
                checkedNodes.push(neighbor);
                paths.push(path);
            }
        }
        dist--;
        if (dist <= 0)
            return null;
        return null;
    };

    GamePoint.prototype.neighborConnected = function (neighbor) {
        for (var i = 0; i < this.lines.length; i++) {
            for (var j = 0; j < neighbor.lines.length; j++) {
                if (this.lines[i] == neighbor.lines[j]) {
                    return true;
                }
            }
        }
        return false;
    };

    GamePoint.prototype.update = function () {
        this.ringTime += .05;

        this.scaleY = this.scaleX;

        if (this.active)
            this.scaleX = this.scaleY = Math.sin(this.ringTime) * .5 + 1; else {
            this.scaleX = this.scaleY = 1;
            this.ringTime = 0;
        }
    };

    GamePoint.prototype.updateColor = function () {
        return;
        var aveValue = 0;
        for (var i = 0; i < this.lines.length; i++) {
            aveValue += this.lines[i].value;
        }
        aveValue /= this.lines.length;
        var green = aveValue <= 1 ? 255 : Math.abs(Math.floor(aveValue / 2 * 255) - 255);
        var blue = aveValue >= 1 ? 0 : Math.floor(aveValue * 255);
        var newColor = 'rgba(255,' + green.toString() + ',' + blue.toString() + ',1)';
        this.graphics.clear().beginFill(newColor).drawCircle(0, 0, 12);
    };
    return GamePoint;
})(createjs.Container);
