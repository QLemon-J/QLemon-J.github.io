var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WinLose = (function (_super) {
    __extends(WinLose, _super);
    function WinLose(width, height, restart, next, home) {
        _super.call(this);
        this.state = 0;
        this.score = 0;
        this.maxScore = 0;

        this.background = new createjs.Shape();
        this.background.graphics.beginFill('rgba(0,0,0, 0.2)').drawRect(0, 0, 300, 180);
        this.addChild(this.background);

        this.winLoseText = new createjs.Text('COMPLETE', '20px futurist', 'white');
        this.winLoseText.textAlign = "center";
        this.winLoseText.x = 150;
        this.winLoseText.y = 20;
        this.addChild(this.winLoseText);

        this.restart = new IconButton(restart, 110, 80);
        this.addChild(this.restart);

        this.next = new IconButton(next, 110, 80);
        this.addChild(this.next);

        this.home = new IconButton(home, 110, 80);
        this.addChild(this.home);

        this.restart.visible = false;
        this.next.visible = false;
        this.home.visible = false;

        this.alpha = 0;
        this.move(width, height);
    }
    WinLose.prototype.update = function () {
        if (this.state == 0)
            this.alpha -= .05; else
            this.alpha += .05;
        if (this.alpha < 0)
            this.alpha = 0;
        if (this.alpha > 1)
            this.alpha = 1;

        this.restart.visible = this.state == 2;
        this.next.visible = this.state == 1;
        this.home.visible = this.state == 3;

        if (this.state == 1 || this.state == 3) {
            var percent = Math.floor(this.score / this.maxScore * 100);
            this.winLoseText.text = percent.toString() + "%\nCOMPLETE";
        } else if (this.state == 2)
            this.winLoseText.text = 'TRY\nAGAIN';
    };

    WinLose.prototype.mouseClick = function (x, y) {
        if (this.state > 0)
            createjs.Sound.play("button");
        if (this.alpha < 1)
            return -1; else if (y > 100)
            return this.state; else
            return -1;
    };
    WinLose.prototype.mouseMove = function (x, y) {
        if (this.alpha < 1)
            return false; else if (y > 100)
            return true; else
            return false;
    };

    WinLose.prototype.move = function (width, height) {
        this.x = width / 2 - 150;
        this.y = -50 + (height - 40) / 2;
    };
    return WinLose;
})(createjs.Container);
