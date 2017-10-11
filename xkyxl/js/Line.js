var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(node1, node2, initValue) {
        if (typeof initValue === "undefined") { initValue = 0; }
        this.graphics = new createjs.Graphics().setStrokeStyle(6, 1, 0, 10, true).beginStroke('black').lineTo(node1.x, node1.y).lineTo(node2.x, node2.y);

        _super.call(this, this.graphics);
        this.node1 = node1;
        this.node2 = node2;
        this.value = initValue;
        if (initValue >= 3)
            this.value = 0;
        this.glass1 = null;
        this.glass2 = null;
        this.updateColor();
        this.setGlassColors();
    }
    Line.prototype.addGlass = function (glass) {
        if (this.glass1 == null)
            this.glass1 = glass; else
            this.glass2 = glass;
    };

    Line.prototype.updateColor = function () {
        this.visible = this.value < 3;
        this.graphics.clear().setStrokeStyle(6, 1, 0, 10, true).beginStroke(Game.colors[this.value]).lineTo(this.node1.x, this.node1.y).lineTo(this.node2.x, this.node2.y);
    };

    Line.prototype.setGlassColors = function () {
        if (this.glass1 != null)
            this.setGlassColor(this.glass1);
        if (this.glass2 != null)
            this.setGlassColor(this.glass2);
    };

    Line.prototype.setGlassColor = function (glass) {
        var glassSet = [glass];
        var removedLines = [];
        var totalScore = 0;
        var totalLines = 0;
        var result = 1;

        for (var i = 0; i < glass.lines.length; i++) {
            var line = glass.lines[i];
            var lineRemoved = false;
            for (var j = 0; j < removedLines.length; j++)
                if (line == removedLines[j])
                    lineRemoved = true;
            if (lineRemoved)
                continue;

            if (line.value == 3) {
                removedLines.push(line);
                var lineValue = 0;
                if (glass == line.glass1)
                    lineValue = line.getGlassValue(line.glass2, glassSet, removedLines, totalScore, totalLines); else if (glass == line.glass2)
                    lineValue = line.getGlassValue(line.glass1, glassSet, removedLines, totalScore, totalLines);
                if (result == 0)
                    continue;
                if (lineValue > result)
                    result = lineValue;
                if (lineValue == 0)
                    result = 0;
                continue;
            }

            totalLines++;
            totalScore += Game.ValueToScore[line.value];

            if (result == 0)
                continue;

            if (line.value > result)
                result = line.value;
            if (line.value == 0 && result != 3)
                result = 0;
        }
        var finalScore = Math.floor(totalScore / totalLines);
        if (result == 3 || result == 0)
            finalScore = 0;
        for (var n = 0; n < glassSet.length; n++) {
            glassSet[n].value = result;
            glassSet[n].score = finalScore;
            glassSet[n].setColor();
            glassSet[n].needScoring = false;
        }
        if (result < 3)
            glassSet[0].needScoring = true;
    };

    Line.prototype.getGlassValue = function (glass, glasses, removedLines, totalScore, totalLines) {
        if (glass == null) {
            return 3;
        }
        glasses.push(glass);
        var result = 1;
        for (var i = 0; i < glass.lines.length; i++) {
            var line = glass.lines[i];
            var lineRemoved = false;
            for (var j = 0; j < removedLines.length; j++)
                if (line == removedLines[j])
                    lineRemoved = true;
            if (lineRemoved)
                continue;

            if (line.value == 3) {
                removedLines.push(line);
                var lineValue = 0;
                if (glass == line.glass1)
                    lineValue = line.getGlassValue(line.glass2, glasses, removedLines, totalScore, totalLines);
                if (glass == line.glass2)
                    lineValue = line.getGlassValue(line.glass1, glasses, removedLines, totalScore, totalLines);

                if (result == 0)
                    continue;
                if (lineValue > result)
                    result = lineValue;
                if (lineValue == 0)
                    result = 0;
                continue;
            }

            totalLines++;
            totalScore += Game.ValueToScore[line.value];

            if (result == 0)
                continue;
            if (line.value > result)
                result = lineValue;
            if (line.value == 0 && result != 3)
                result = 0;
        }
        return result;
    };
    return Line;
})(createjs.Shape);
