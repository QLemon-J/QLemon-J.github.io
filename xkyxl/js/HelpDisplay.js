var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HelpDisplay = (function (_super) {
    __extends(HelpDisplay, _super);
    function HelpDisplay(targetWidth, targetHeight, image) {
        if (typeof targetWidth === "undefined") { targetWidth = 1024; }
        if (typeof targetHeight === "undefined") { targetHeight = 768; }
        if (typeof image === "undefined") { image = "images/Fracture_logo_LG.png"; }
        _super.call(this);
        this.background = new createjs.Shape();
        this.background.graphics.beginFill("rgba(25,25,25,.8)").drawRect(0, 0, targetHeight, targetHeight);
        this.logo = new createjs.Bitmap(image);
        this.logo.regX = this.logo.image.width / 2;
        this.logo.regY = this.logo.image.height / 2;

        this.addChild(this.background, this.logo);
        this.background.visible = false;
    }
    HelpDisplay.prototype.scale = function (targetWidth, targetHeight, vert) {
        this.background.graphics.clear().beginFill("rgba(25,25,25,.8)").drawRect(0, 0, targetWidth, targetHeight);

        var logoScaleW = targetWidth / this.logo.image.width / PageManager.PHI;
        var logoScaleH = targetHeight / this.logo.image.height / PageManager.PHI;
        var scale = 1;
        if (logoScaleH < logoScaleW)
            scale = logoScaleH; else
            scale = logoScaleW;

        this.logo.x = targetWidth / 2;
        this.logo.y = targetHeight / 2;
        this.logo.scaleX = this.logo.scaleY = scale;
        this.logo.regX = this.logo.image.width / 2;
        this.logo.regY = this.logo.image.height / 2;
    };
    return HelpDisplay;
})(createjs.Container);
