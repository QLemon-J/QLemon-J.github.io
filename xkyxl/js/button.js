var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(text, x, y, width, height) {
        _super.call(this);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        var g = new createjs.Graphics();
        g.beginFill("#b2b2b2").drawRect(0, 0, width, height);
        this.rectangle = new createjs.Shape(g);
        this.addChild(this.rectangle);

        this.text = new createjs.Text(text, "20px futurist", "#fff");
        this.text.textAlign = "center";
        this.text.regY = this.text.getMeasuredHeight() / 2;
        this.text.x = width / 2;
        this.text.y = height / 2;
        this.addChild(this.text);
        this.disabled = false;
        this.updateState();
    }
    Button.prototype.mouseDown = function (mx, my, clickFunction) {
        if (this.disabled)
            return false;

        var scaledW = this.width * this.scaleX;
        var scaledH = this.height * this.scaleY;

        if (mx > (this.x) && mx < (this.x + scaledW) && my > (this.y) && my < (this.y + scaledH)) {
            if (clickFunction)
                clickFunction();
            createjs.Sound.play("button");
            return true;
        }
        return false;
    };
    Button.prototype.mouseMove = function (mx, my) {
        if (this.disabled)
            return false;

        var scaledW = this.width * this.scaleX;
        var scaledH = this.height * this.scaleY;

        if (mx > (this.x) && mx < (this.x + scaledW) && my > (this.y) && my < (this.y + scaledH)) {
            return true;
        }
        return false;
    };

    Button.prototype.updateState = function (setColor) {
        if (setColor && !this.disabled) {
            this.rectangle.graphics.clear().beginFill(setColor).drawRect(0, 0, this.width, this.height);
            this.text.color = "#fff";
            this.alpha = .9;
        } else if (setColor == undefined && this.disabled) {
            this.rectangle.graphics.clear().beginFill("#666").drawRect(0, 0, this.width, this.height);
            this.text.color = "#fff";
            if (this.image)
                this.image.alpha = 1;
            this.alpha = .5;
        } else {
            this.rectangle.graphics.clear().beginFill("#fff").drawRect(0, 0, this.width, this.height);
            this.text.color = "#000";
            if (this.image)
                this.image.alpha = 1; else
                this.alpha = .7;
        }
    };
    return Button;
})(createjs.Container);
