var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Credits = (function (_super) {
    __extends(Credits, _super);
    function Credits(width, height, image) {
        if (typeof width === "undefined") { width = 1024; }
        if (typeof height === "undefined") { height = 768; }
        if (typeof image === "undefined") { image = "images/bumperimage.png"; }
        _super.call(this);
        this.width = width;
        this.height = height;

        this.image = new createjs.Bitmap(image);
        this.addChild(this.image);

        this.text = [
            new createjs.Text("Design Lead: Ward Makielski", "20px futurist", "#fff"),
            new createjs.Text("Tech Lead: Josh Freeney", "20px futurist", "#fff"),
            new createjs.Text("Project Lead: Chris Allers", "20px futurist", "#fff"),
            new createjs.Text("Lead Developer: Jason Carroll", "20px futurist", "#fff"),
            new createjs.Text("Developer: Jacob Nelson", "20px futurist", "#fff"),
            new createjs.Text("Artist: Cari Mayle", "20px futurist", "#fff"),
            new createjs.Text("Audio: Sound Rangers (www.soundrangers.com)", "20px futurist", "#fff")
        ];
        for (var i = 0; i < this.text.length; i++) {
            var text = this.text[i];
            this.addChild(text);
            text.x = width / PageManager.PHI / 2;
            text.y = i * 50 + 100;
        }

        this.back = new Button("Back", 0, 0, 100, 30);
        this.back.updateState("#666");
        this.back.alpha = .5;
        this.addChild(this.back);
        this.scale(width, height);
    }
    Credits.prototype.mouseDown = function (x, y) {
        if (this.back.mouseDown(x, y))
            return true;
        return false;
    };
    Credits.prototype.mouseMove = function (x, y) {
        if (this.back.mouseMove(x, y))
            return true;
        return false;
    };

    Credits.prototype.scale = function (width, height) {
        this.width = width;
        this.height = height;
        var targetWidth = width - width / PageManager.PHI;
        var scaleH = height / this.image.image.height / PageManager.PHI;
        var scaleW = targetWidth / this.image.image.width / PageManager.PHI;
        if (scaleH < scaleW) {
            this.image.scaleY = scaleH;
            this.image.scaleX = scaleH;

            this.image.x = 10 + this.image.image.width / 2 * scaleH;
            this.image.y = height / 2;
        } else {
            this.image.scaleY = scaleW;
            this.image.scaleX = scaleW;

            this.image.x = 10 + this.image.image.width / 2 * scaleW;
            this.image.y = height / 2;
        }

        this.image.regX = this.image.image.width / 2;
        this.image.regY = this.image.image.height / 2;

        targetWidth = targetWidth - this.image.image.width / 2 * this.image.scaleX;

        var creditWidth = width - targetWidth;
        var creditHeight = height / PageManager.PHI;
        var longestText = this.text[this.getLongestText()];

        var creditLeft = targetWidth;
        var creditTop = (height - creditHeight) / 2;

        var font = "";
        var textHeight = 0;
        var spacing = 0;

        for (var i = 1; i < 30; i++) {
            font = (i).toString() + "px futurist";
            longestText.font = font;
            textHeight = longestText.getMeasuredHeight();
            spacing = creditHeight - (longestText.getMeasuredHeight() * this.text.length);
            if (longestText.getMeasuredWidth() > creditWidth || (longestText.getMeasuredHeight() * this.text.length) > creditHeight) {
                font = (i - 1).toString() + "px futurist";
                longestText.font = font;
                textHeight = longestText.getMeasuredHeight();
                spacing = creditHeight - (longestText.getMeasuredHeight() * this.text.length);
                break;
            }
        }
        spacing /= this.text.length;
        if (spacing < 0)
            spacing = 0;

        for (var i = 0; i < this.text.length; i++) {
            var string = this.text[i].text;
            this.removeChild(this.text[i]);
            this.text[i] = new createjs.Text(string, font, "white");
            this.addChild(this.text[i]);
            this.text[i].x = creditLeft;
            this.text[i].y = creditTop + i * (textHeight + spacing);
        }
        var bScale = (width / 11) / this.back.width;
        if (bScale > 1)
            bScale = 1;
        this.back.scaleX = this.back.scaleY = bScale;
    };

    Credits.prototype.getLongestText = function () {
        var length = 0;
        var index = 0;
        for (var i = 0; i < this.text.length; i++) {
            if (this.text[i].length > length)
                length = this.text[i].length;
            index = i;
        }
        return index;
    };
    return Credits;
})(createjs.Container);
