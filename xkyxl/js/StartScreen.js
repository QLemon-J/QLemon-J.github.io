var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen(link) {
        _super.call(this);
        this.leave = false;

        this.preLogo = new createjs.Bitmap("images/Fracture_logo_LG.png");
        this.preLogo.regX = 300;
        this.preLogo.regY = 184;
        this.progress = new createjs.Shape();
        this.play = new Button("Play", 0, 0, 100, 30);
        this.play.visible = false;

        this.addChild(this.progress, this.preLogo, this.play);
    }
    StartScreen.prototype.update = function (e, stage) {
        this.preLogo.x = this.progress.x = stage.canvas.width / 2;
        this.progress.y = stage.canvas.height / 2 * PageManager.PHI;
        this.preLogo.y = stage.canvas.height / 2 / PageManager.PHI;

        var logoWidth = 714;
        var logoHeight = 367;

        if (Math.abs(logoWidth - stage.canvas.width) < Math.abs(logoHeight - stage.canvas.height)) {
            var scale = stage.canvas.width / logoWidth / 2;
            this.preLogo.scaleX = this.preLogo.scaleY = scale;
        } else {
            var scale = stage.canvas.height / logoHeight / 2;
            this.preLogo.scaleX = this.preLogo.scaleY = scale;
        }

        this.progress.graphics.clear().beginFill("rgba(195, 97, 70, 1)").drawRect(0, 0, canvas.width / 2 * PageManager.PHI, 8);
        var pWidth = canvas.width / 2 * PageManager.PHI * e.progress;
        this.progress.graphics.beginFill("rgba(240, 232, 151, 1)").beginStroke("").drawRect(0, 0, pWidth, 8);
        this.progress.regX = canvas.width / 4 * PageManager.PHI;
        if (e.progress == 1) {
            this.removeChild(this.play);
            this.play = new Button("play", 0, 0, 100, 30);
            this.play.updateState("rgba(240, 232, 151, 1)");
            this.play.text.y -= 3;
            this.addChild(this.play);
            this.progress.visible = false;
        }
    };

    StartScreen.prototype.scale = function (width, height) {
        this.preLogo.x = this.progress.x = width / 2;
        this.progress.y = height / 2 * PageManager.PHI;
        this.preLogo.y = height / 2 / PageManager.PHI;

        var logoWidth = 714;
        var logoHeight = 367;

        if (Math.abs(logoWidth - width) < Math.abs(logoHeight - height)) {
            var scale = width / logoWidth / 2;
            this.preLogo.scaleX = this.preLogo.scaleY = scale;
        } else {
            var scale = stage.canvas.height / logoHeight / 2;
            this.preLogo.scaleX = this.preLogo.scaleY = scale;
        }

        var pScale = (width / 11) / this.play.width;
        if (pScale > 1.5)
            pScale = 1.5;
        this.play.scaleX = this.play.scaleY = pScale * 2;

        this.play.x = this.progress.x - this.play.width / 2 * this.play.scaleX;
        this.play.y = this.progress.y - this.play.height / 2 * this.play.scaleX;
    };

    StartScreen.prototype.mouseDown = function (x, y) {
        if (this.play.mouseDown(x, y))
            return true;
    };
    StartScreen.prototype.mouseMove = function (x, y) {
        if (this.play.mouseMove(x, y))
            return true;
    };
    return StartScreen;
})(createjs.Container);
