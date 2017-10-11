var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Bumper = (function (_super) {
    __extends(Bumper, _super);
    function Bumper(width, height, image) {
        if (typeof width === "undefined") { width = 1024; }
        if (typeof height === "undefined") { height = 768; }
        if (typeof image === "undefined") { image = "images/bumperimage.png"; }
        _super.call(this);
        this.life = 180;
        var g = new createjs.Graphics();
        g.beginFill('221F1F').drawRect(0, 0, 10000, 1000000);
        var shape = new createjs.Shape(g);

        this.image = new createjs.Bitmap(image);
        this.addChild(this.image);
        this.image.alpha = 0;

        this.width = width;
        this.height = height;
        this.scaleBumper(width, height);
    }
    Bumper.prototype.update = function () {
        if (this.image.alpha > 1)
            this.alpha = 1;
        if (this.life > 130)
            this.image.alpha += .02;
        if (this.life < 50)
            this.image.alpha -= .02;
        this.life--;
        if (this.life <= 0)
            return false;
        return true;
    };

    Bumper.prototype.scaleBumper = function (width, height) {
        this.width = width;
        this.height = height;
        var scaleH = height / this.image.image.height / PageManager.PHI;
        var scaleW = width / this.image.image.width / PageManager.PHI;
        if (scaleH < scaleW) {
            this.image.scaleY = scaleH;
            this.image.scaleX = scaleH;

            this.image.x = width / 2;
            this.image.y = height / 2;
        } else {
            this.image.scaleY = scaleW;
            this.image.scaleX = scaleW;

            this.image.x = width / 2;
            this.image.y = height / 2;
        }

        this.image.regX = this.image.image.width / 2;
        this.image.regY = this.image.image.height / 2;
    };
    return Bumper;
})(createjs.Container);
