var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Glass = (function (_super) {
    __extends(Glass, _super);
    function Glass(nodes, lines) {
        this.needScoring = true;
        this.nodes = nodes;
        this.lines = [];
        this.graphics = new createjs.Graphics();
        this.graphics.beginFill('rgba(255, 255, 255, 0.50)');
        for (var i = 0; i < nodes.length; i++) {
            this.graphics.lineTo(nodes[i].x, nodes[i].y);
        }

        for (var i = 0; i < this.nodes.length; i++) {
            var currentNode = this.nodes[i];
            var nextNode = i < this.nodes.length - 1 ? this.nodes[i + 1] : this.nodes[0];
            var alreadyNeighbors = false;
            if (currentNode.neighbors.length > 0 && nextNode.neighbors.length > 0) {
                for (var j = 0; j < currentNode.neighbors.length; j++) {
                    if (nextNode == currentNode.neighbors[j])
                        alreadyNeighbors = true;
                }
            }

            if (!alreadyNeighbors) {
                var newLine = currentNode.addNeighbor(nextNode);
                lines.push(newLine);
                this.lines.push(newLine);
                newLine.addGlass(this);
            } else {
                for (var n = 0; n < lines.length; n++) {
                    var line = lines[n];
                    if ((line.node1 == currentNode && line.node2 == nextNode) || (line.node1 == nextNode && line.node2 == currentNode)) {
                        line.addGlass(this);
                        this.lines.push(line);
                    }
                }
            }
        }

        _super.call(this, this.graphics);
        this.value = 0;
        this.previousValue = 0;
        this.score = 0;

        this.visible = true;
    }
    Glass.prototype.setColorGrad = function () {
        this.visible = this.value < 3;
        var value = Math.abs(this.score - 100);
        var greenness = Math.round((this.score - 50) / 50 * 255);

        var color = 'rgba(255,' + greenness.toString() + ', 0, 0.50)';
        if (this.value == 0)
            color = 'rgba(255,255,255,0.50)';

        this.graphics.clear().beginFill(color);
        for (var i = 0; i < this.nodes.length; i++) {
            this.graphics.lineTo(this.nodes[i].x, this.nodes[i].y);
        }

        var shapeCenter = this.getCenter();
        this.graphics.beginFill("white").drawCircle(shapeCenter.x, shapeCenter.y, 6);

        color = 'rgba(255,' + greenness.toString() + ', 0, 0.0)';
        if (this.value == 0)
            color = 'rgba(255,255,255,0.0)';
        for (var n = 0; n < this.lines.length; n++) {
            var line = this.lines[n];
            if (line.value == 0 || line.value == 3)
                continue;

            var lineCenter = {
                x: (line.node1.x + line.node2.x) / 2,
                y: (line.node1.y + line.node2.y) / 2
            };
            var startColor = line.value == 1 ? "rgba(255,255,0,0.5)" : "rgba(255,0,0,0.5)";
            this.graphics.beginLinearGradientFill([startColor, color], [0, 1], lineCenter.x, lineCenter.y, shapeCenter.x, shapeCenter.y);
            for (var i = 0; i < this.nodes.length; i++) {
                this.graphics.lineTo(this.nodes[i].x, this.nodes[i].y);
            }
        }
    };

    Glass.prototype.setColor = function () {
        this.visible = this.value < 3 && this.value > 0;

        if ((this.value == 3) && (this.previousValue != this.value))
            createjs.Sound.play("glassBreak");

        var color = Game.glassColors[this.value];
        if (this.value == 1 && this.value != this.previousValue)
            createjs.Sound.play("glassFill1"); else if (this.value == 2 && this.value != this.previousValue)
            createjs.Sound.play("glassWarning2");
        this.graphics.clear().beginFill(color);
        for (var i = 0; i < this.nodes.length; i++) {
            this.graphics.lineTo(this.nodes[i].x, this.nodes[i].y);
        }
        this.previousValue = this.value;
    };

    Glass.prototype.getCenter = function () {
        var totalX = 0;
        var totalY = 0;
        var k = this.nodes.length;

        for (var i = 0; i < this.nodes.length; i++) {
            totalX += this.nodes[i].x;
            totalY += this.nodes[i].y;
        }

        return { x: totalX / k, y: totalY / k };
    };
    return Glass;
})(createjs.Shape);
