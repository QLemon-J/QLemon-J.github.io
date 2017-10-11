var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RotateBlock = (function (_super) {
    __extends(RotateBlock, _super);
    function RotateBlock(width, height) {
        _super.call(this);

        this.background = new createjs.Shape();
        this.background.graphics.clear().beginFill("rgba(240, 232, 151, 1)").drawRect(0, 0, width, height);
        this.text = new createjs.Text("Please Rotate\nDevice", "20px futurist", "#000");
        this.text.textAlign = "center";
        this.text.x = width / 2;
        this.text.y = height / 2;
        this.addChild(this.background, this.text);
        this.visible = height > width;
    }
    RotateBlock.prototype.scale = function (width, height) {
        this.visible = height > width;
        this.background.graphics.clear().beginFill("rgba(240, 232, 151, 1)").drawRect(0, 0, width, height);
        this.text.x = width / 2;
        this.text.y = height / 2;
    };
    return RotateBlock;
})(createjs.Container);
