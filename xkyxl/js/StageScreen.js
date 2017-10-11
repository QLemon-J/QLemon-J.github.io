var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StageSelect = (function (_super) {
    __extends(StageSelect, _super);
    function StageSelect(width, height, preloader, kiosk) {
        if (typeof width === "undefined") { width = 1024; }
        if (typeof height === "undefined") { height = 768; }
        _super.call(this);
        this.buttonColors = [
            "rgb(195,97,70)",
            "rgb(200,112,79)",
            "rgb(205,127,88)",
            "rgb(210,142,97)",
            "rgb(215,157,106)",
            "rgb(220,172,115)",
            "rgb(225,187,124)",
            "rgb(230,202,133)",
            "rgb(235,217,142)",
            "rgb(240,232,151)"
        ];
        this.levelRefs = [
            "level1",
            "level2",
            "level3",
            "level4",
            "level5",
            "level6",
            "level7",
            "level8",
            "level9",
            "level10",
            "level11",
            "level12",
            "level13",
            "level14",
            "level15",
            "level16",
            "level17",
            "level18",
            "level19",
            "level20",
            "level21",
            "level22",
            "level23",
            "level24"
        ];
        this.kiosk = kiosk;
        this.BTNwidth = 30;
        this.BTNheight = 30;
        this.levels = new Array(24);
        if (kiosk)
            this.currentProgress = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]; else {
            this.currentProgress = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            if (localStorage["fracture"]) {
                this.currentProgress = JSON.parse(localStorage["fracture"]);
            }
        }
        this.displays = new Array(24);

        this.credits = new Button("Credits", width / 2 - 80, height - 30, 160, 30);
        this.credits.updateState("#666");
        this.credits.alpha = .5;

        this.selectionDisplay = new createjs.Container();
        this.selectionDisplay.x = 500;

        this.helpDisplay = new HelpDisplay(width, height, preloader.getResult("gamelogo"));
        this.addChild(this.selectionDisplay, this.helpDisplay, this.credits);
        this.selectedLevel = -1;

        this.width = width;
        this.height = height;

        this.getLevelData(width, height, preloader);

        this.alpha = 0;
    }
    StageSelect.prototype.getLevelData = function (width, height, preloader) {
        for (var i = 0; i < 24; i++) {
            this.levels[i] = preloader.getResult(this.levelRefs[i]);
            this.levels[i].score = this.currentProgress[i];
            this.levels[i].maxScore = this.levels[i].glasses.length * 100;
            if (this.levels[i].playerStart == -1)
                this.levels[i].playerStart = 0;
        }
        this.updateDisplay(this.width, this.height);
    };

    StageSelect.prototype.mouseClick = function (x, y) {
        if (this.credits.mouseDown(x, y))
            return -2;
        var menuX = x -= this.selectionDisplay.x;
        var menuY = y -= this.selectionDisplay.y;
        for (var i = 0; i < this.displays.length; i++) {
            if (this.displays[i].mouseDown(menuX, menuY)) {
                this.selectedLevel = i;
                return this.selectedLevel;
            }
        }

        return -1;
    };
    StageSelect.prototype.mouseMove = function (x, y) {
        if (this.credits.mouseMove(x, y))
            return true;
        var menuX = x -= this.selectionDisplay.x;
        var menuY = y -= this.selectionDisplay.y;
        for (var i = 0; i < this.displays.length; i++) {
            if (this.displays[i].mouseMove(menuX, menuY)) {
                return true;
            }
        }
        return false;
    };

    StageSelect.prototype.updateColors = function () {
        for (var i = 0; i < this.levels.length; i++) {
            var level = this.levels[i];
            var display = this.displays[i];

            if (i > 0) {
                if (this.levels[i - 1].score == 0) {
                    display.disabled = true;
                    display.updateState();
                    continue;
                } else
                    display.disabled = false;
            }
            if (level.score == 0) {
                display.updateState();
                continue;
            }

            var color = Math.floor((23 - i) / 8) * 4;
            display.updateState(this.buttonColors[color]);
        }
    };

    StageSelect.prototype.updateColorsByPercent = function () {
        for (var i = 0; i < this.levels.length; i++) {
            var level = this.levels[i];
            var display = this.displays[i];

            if (i > 0) {
                if (this.levels[i - 1].score == 0) {
                    display.disabled = true;
                    display.updateState();
                    continue;
                } else
                    display.disabled = false;
            }
            if (level.score == 0) {
                display.updateState();
                continue;
            }

            var scorePercent = level.score / level.maxScore;
            var color = 9;
            if (scorePercent < 1 && scorePercent >= .75)
                color = 5; else if (scorePercent < .75 && scorePercent >= .5)
                color = 1; else if (scorePercent < .5)
                color = 0;
            display.updateState(this.buttonColors[color]);
        }
    };

    StageSelect.prototype.resetButtons = function (boarderWidth, boarderHeight, buttonDistanceW, buttonDistanceH) {
        var fontSize = this.BTNwidth / PageManager.PHI / 2;
        for (var i = 0; i < this.levels.length; i++) {
            this.selectionDisplay.removeChild(this.displays[i]);
            var buttonName = i >= 9 ? (i + 1).toString() : "0" + (i + 1).toString();
            this.displays[i] = new Button(buttonName, boarderWidth, boarderHeight, this.BTNwidth, this.BTNheight);

            var horizontal = Math.floor(i / 4);
            this.displays[i].y += horizontal * (buttonDistanceH + this.BTNheight);
            var vertical = i - horizontal * 4;
            this.displays[i].x += vertical * (buttonDistanceW + this.BTNwidth);

            this.displays[i].text.font = fontSize.toString() + "px futurist";
            this.displays[i].text.regY = this.displays[i].text.getMeasuredHeight() / 2;
            this.selectionDisplay.addChild(this.displays[i]);
        }
        if (!this.kiosk)
            this.updateColorsByPercent(); else
            this.updateColors();
    };

    StageSelect.prototype.updateDisplay = function (width, height) {
        this.width = width;
        this.height = height;
        var CButtonWidth = (this.width / 6) / this.credits.width;
        if (CButtonWidth > 1)
            CButtonWidth = 1;
        this.credits.scaleX = this.credits.scaleY = CButtonWidth;

        this.credits.x = 0;
        this.credits.y = 0;

        if (this.levels[23] == undefined)
            return;

        var landOp = {
            boarderWidth: 0,
            boarderHeight: 0,
            buttonDist: 0,
            selectionW: width - (width / PageManager.PHI),
            selectionH: height,
            targetTotalBTNWidth: 0,
            targetTotalBTNHeight: 0
        };
        var portOp = {
            boarderWidth: 0,
            boarderHeight: 0,
            buttonDist: 0,
            selectionW: width,
            selectionH: height / PageManager.PHI,
            targetTotalBTNWidth: 0,
            targetTotalBTNHeight: 0
        };

        landOp.boarderWidth = landOp.selectionW / 4 / PageManager.PHI;
        landOp.boarderHeight = landOp.selectionH / 4 / PageManager.PHI;
        landOp.targetTotalBTNWidth = (landOp.selectionW - landOp.boarderWidth * 2) / 4;
        landOp.targetTotalBTNHeight = (landOp.selectionH - landOp.boarderHeight * 2) / 6;

        portOp.boarderWidth = portOp.selectionW / 4 / PageManager.PHI;
        portOp.boarderHeight = portOp.selectionH / 4 / PageManager.PHI;
        portOp.targetTotalBTNWidth = (portOp.selectionW - portOp.boarderWidth * 2) / 4;
        portOp.targetTotalBTNHeight = (portOp.selectionH - portOp.boarderHeight * 2) / 6;

        if (width >= height) {
            if (landOp.targetTotalBTNWidth < landOp.targetTotalBTNHeight) {
                landOp.boarderHeight = (height - landOp.targetTotalBTNWidth * 6) / 2;

                this.BTNwidth = landOp.targetTotalBTNWidth;
                this.BTNwidth -= this.BTNwidth / PageManager.PHI / 2;
                this.BTNheight = this.BTNwidth;
                landOp.buttonDist = this.BTNwidth / PageManager.PHI;
            } else {
                landOp.boarderWidth = (landOp.selectionW - landOp.targetTotalBTNHeight * 4) / 2;

                this.BTNwidth = landOp.targetTotalBTNHeight;
                this.BTNwidth -= this.BTNwidth / PageManager.PHI / 2;
                this.BTNheight = this.BTNwidth;
                landOp.buttonDist = this.BTNwidth / PageManager.PHI;
            }

            this.helpDisplay.scale(width - landOp.selectionW, height, false);
            this.helpDisplay.y = 0;
            this.selectionDisplay.x = width - landOp.selectionW;

            this.resetButtons(landOp.boarderWidth, landOp.boarderHeight, landOp.buttonDist, landOp.buttonDist);
        } else {
            if (portOp.targetTotalBTNWidth < portOp.targetTotalBTNHeight) {
                portOp.boarderHeight = (portOp.selectionH - portOp.targetTotalBTNWidth * 6) / 2;

                this.BTNwidth = portOp.targetTotalBTNWidth;
                this.BTNwidth -= this.BTNwidth / PageManager.PHI / 2;
                this.BTNheight = this.BTNwidth;
                portOp.buttonDist = this.BTNwidth / PageManager.PHI;
            } else {
                portOp.boarderWidth = (portOp.selectionW - portOp.targetTotalBTNHeight * 4) / 2;

                this.BTNwidth = portOp.targetTotalBTNHeight;
                this.BTNwidth -= this.BTNwidth / PageManager.PHI / 2;
                this.BTNheight = this.BTNwidth;
                portOp.buttonDist = this.BTNwidth / PageManager.PHI;
            }

            this.helpDisplay.scale(width, height - portOp.selectionH, true);
            this.helpDisplay.y = portOp.selectionH;
            this.selectionDisplay.x = 0;

            this.resetButtons(portOp.boarderWidth, portOp.boarderHeight, portOp.buttonDist, portOp.buttonDist);
        }
    };
    return StageSelect;
})(createjs.Container);
