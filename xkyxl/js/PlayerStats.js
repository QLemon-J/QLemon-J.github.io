var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PlayerStats = (function (_super) {
    __extends(PlayerStats, _super);
    function PlayerStats(width, height, homeIcon, nextIcon, muteIcon, restartIcon, backIcon) {
        _super.call(this);
        this.score = 0;
        this.moves = 0;
        this.scale = 1;
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
        this.width = width;
        this.height = height;
        this.background = new createjs.Shape();
        this.background.graphics.beginFill("rgba(0, 0, 0, 0.20)").drawRect(0, 0, width, 40);

        this.currentLevel = new Button("01", 0, 0, 100, 100);
        this.next = new IconButton(nextIcon, width - 150, 5);
        this.HomeBTN = new IconButton(homeIcon, 120, 5);

        this.restart = new IconButton(restartIcon, width - 230, 5);
        this.back = new IconButton(backIcon, width - 310, 5);

        this.mute = new IconButton(muteIcon, 220, 5);
        this.mute.toggleOn = false;
        this.mute.alpha = 0.9;

        this.currentLevel.text.font = (50 / PageManager.PHI).toString() + "px futurist";
        this.currentLevel.text.regY = this.currentLevel.text.getMeasuredHeight() / 2;

        this.updateDisplay(width, height);

        this.addChild(this.background, this.currentLevel, this.next, this.HomeBTN, this.mute, this.restart, this.back);
        this.HomeBTN.alpha = this.next.alpha = this.restart.alpha = this.back.alpha = .9;

        this.y = 0;
    }
    PlayerStats.prototype.changeLevelNumber = function (number) {
        var level = number + 1;
        this.currentLevel.text.text = level < 10 ? "0" + level.toString() : level.toString();

        this.currentLevel.updateState(this.buttonColors[Math.floor((23 - number) / 8) * 4]);
    };

    PlayerStats.prototype.Update = function (score) {
        this.score = score;
    };

    PlayerStats.prototype.updateDisplay = function (width, height) {
        this.width = width;
        this.height = height;
        this.y = 0;
        var scale = 1;
        var buttonTotalWidth = (this.currentLevel.width + this.next.width + this.HomeBTN.width + this.mute.width + this.restart.width + this.back.width + 120) * .5;
        if (width <= buttonTotalWidth) {
            scale = width / buttonTotalWidth * .4;
            this.mute.scaleX = this.mute.scaleY = scale;
            this.currentLevel.scaleX = this.currentLevel.scaleY = scale;
            this.next.scaleX = this.next.scaleY = scale;
            this.HomeBTN.scaleX = this.HomeBTN.scaleY = scale;
            this.back.scaleX = this.back.scaleY = scale;
            this.restart.scaleX = this.restart.scaleY = scale;
        } else {
            this.currentLevel.scaleX = this.currentLevel.scaleY = .4;
            this.next.scaleX = this.next.scaleY = .4;
            this.HomeBTN.scaleX = this.HomeBTN.scaleY = .4;
            this.mute.scaleX = this.mute.scaleY = .4;
            this.back.scaleX = this.back.scaleY = .4;
            this.restart.scaleX = this.restart.scaleY = .4;
        }

        this.scale = scale;
        this.background.graphics.clear().beginFill("rgba(0, 0, 0, 0.20)").drawRect(0, 0, width, 40 * scale);
        this.currentLevel.x = 0;
        this.HomeBTN.x = 120 * this.HomeBTN.scaleX;
        this.mute.x = 220 * this.mute.scaleX;

        this.next.x = width - 100 * this.next.scaleX;
        this.restart.x = width - 200 * this.restart.scaleX;
        this.back.x = width - 300 * this.back.scaleX;

        var y = 4 * scale;
        this.HomeBTN.y = this.mute.y = this.back.y = this.restart.y = this.next.y = y;
    };

    PlayerStats.prototype.mouseClick = function (x, y) {
        var mx = x - this.x;
        var my = y - this.y;
        if (this.HomeBTN.mouseDown(mx, my, function () {
        })) {
            return 0;
        }
        if (this.restart.mouseDown(mx, my, function () {
        })) {
            return 1;
        }
        if (this.next.mouseDown(mx, my, function () {
        })) {
            return 2;
        }
        if (this.back.mouseDown(mx, my, function () {
        })) {
            return 3;
        }

        if (this.mute.mouseDown(mx, my, function () {
        })) {
            this.mute.toggleOn = !this.mute.toggleOn;
            this.mute.alpha = this.mute.toggleOn ? 0.2 : 0.9;
            createjs.Sound.setMute(this.mute.toggleOn);
            return -1;
        }
        return -1;
    };
    PlayerStats.prototype.mouseMove = function (x, y) {
        var mx = x - this.x;
        var my = y - this.y;
        if (this.HomeBTN.mouseMove(mx, my)) {
            return true;
        }
        if (this.restart.mouseMove(mx, my)) {
            return true;
        }
        if (this.next.mouseMove(mx, my)) {
            return true;
        }
        if (this.back.mouseMove(mx, my)) {
            return true;
        }

        if (this.mute.mouseMove(mx, my)) {
            return true;
        }
        return false;
    };
    return PlayerStats;
})(createjs.Container);
