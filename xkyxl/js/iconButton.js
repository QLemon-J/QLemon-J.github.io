var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IconButton = (function (_super) {
    __extends(IconButton, _super);
    function IconButton(image, x, y) {
        _super.call(this, "", x, y, image.width, image.height);
        this.toggleOn = true;

        this.width = image.width;
        this.height = image.height;
        this.removeChild(this.text);
        this.removeChild(this.rectangle);

        this.image = new createjs.Bitmap(image);
        this.addChild(this.image);
    }
    return IconButton;
})(Button);
