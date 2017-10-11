var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PageManager = (function (_super) {
    __extends(PageManager, _super);
    function PageManager(width, height, preloader, startScreen) {
        if (typeof width === "undefined") { width = 1024; }
        if (typeof height === "undefined") { height = 768; }
        _super.call(this);
        this.sentScores = false;
        this.currentPage = 'startScreen';
        this.time = 0;
        this.version = new createjs.Text("Version: 1.0.2", "11px futurist", "white");
        this.version.alpha = .3;

        this.moreGames = new Button("More Games", 0, height - 30, 225, 40);
        this.moreGames.scaleX = this.moreGames.scaleY = .5;
        this.moreGames.updateState("#666");
        this.moreGames.alpha = .5;

        this.game = new Game(width, height, preloader);
        this.stageSelect = new StageSelect(width, height, preloader, false);
        this.start = startScreen;
        this.bumper = new Bumper(width, height, preloader.getResult("bumper"));
        this.credits = new Credits(width, height, preloader.getResult("bumper"));

        this.background = new createjs.Bitmap(preloader.getResult("starfield"));
        this.backgroundMask = new createjs.Shape();
        this.backgroundMask.graphics.beginFill("rgba(29, 28, 45, 0.8)").drawRect(0, 0, width, height);
        this.scaleBackground(width, height);

        this.addChild(this.background, this.backgroundMask, this.bumper, this.game, this.stageSelect, this.start, this.credits, this.version, this.moreGames);
        this.version.y = height - 15;
        this.updatePageDisplays(width, height);
    }
    PageManager.prototype.Update = function () {
        this.time += .002;
        this.game.visible = this.currentPage == 'game';
        this.stageSelect.visible = this.currentPage == 'stageSelect';
        this.credits.visible = this.currentPage == 'credits';
        this.start.visible = this.currentPage == 'startScreen';
        this.moreGames.visible = this.stageSelect.visible || this.start.visible;
        this.moreGames.disabled = !this.moreGames.visible;

        if (this.currentPage == 'game') {
            if (this.game.state == -1) {
                this.game.state = 0;
                this.currentPage = 'stageSelect';
            }
            if (this.game.state == 1) {
                if (this.sentScores != true)
                    this.sendScores(this.game.level);
            } else {
                this.sentScores = false;
            }

            this.game.playerStats.next.disabled = this.stageSelect.selectedLevel + 1 >= this.stageSelect.levels.length || this.stageSelect.levels[this.stageSelect.selectedLevel].score == 0;
            this.game.playerStats.back.disabled = this.stageSelect.selectedLevel < 1;

            this.game.playerStats.next.alpha = this.game.playerStats.next.disabled ? .5 : .7;
            this.game.playerStats.back.alpha = this.game.playerStats.back.disabled ? .5 : .7;

            this.game.Update();
        } else if (this.currentPage == 'bumper') {
            if (!this.bumper.update()) {
                this.currentPage = 'stageSelect';
                this.removeChild(this.bumper);
            }
        } else if (this.currentPage == 'stageSelect') {
            if (this.stageSelect.alpha < 1)
                this.stageSelect.alpha += 0.05;
        }
        if (this.currentPage != "startScreen")
            this.moveBackground();
    };

    PageManager.prototype.moveBackground = function () {
        this.background.x = Math.sin(this.time) * 100 - 100;
        this.background.y = Math.cos(this.time) * 100 - 100;
    };

    PageManager.prototype.scaleBackground = function (width, height) {
        if (width > height) {
            var scale = width / 1024;
        } else {
            var scale = height / 1024;
        }

        this.background.scaleX = this.background.scaleY = 3;
        this.backgroundMask.graphics.clear().beginFill("rgba(29, 28, 45, 0.8)").drawRect(0, 0, width, height);
        this.version.y = height - 15;
        this.moreGames.y = height - 40;
    };

    PageManager.prototype.sendScores = function (level) {
        var currentLevel = this.stageSelect.levels[this.stageSelect.selectedLevel];
        if (this.game.score > currentLevel.score) {
            this.stageSelect.levels[this.stageSelect.selectedLevel].score = this.game.score;
            this.stageSelect.currentProgress[this.stageSelect.selectedLevel] = this.game.score;
        }

        this.sentScores = true;
        if (!this.stageSelect.kiosk) {
            localStorage["fracture"] = JSON.stringify(this.stageSelect.currentProgress);
            this.stageSelect.updateColorsByPercent();
        } else
            this.stageSelect.updateColors();
    };

    PageManager.prototype.GetNext = function (level) {
        this.stageSelect.selectedLevel++;
        this.game.LoadLevel(this.stageSelect.levels[this.stageSelect.selectedLevel], this.stageSelect.selectedLevel, true);
    };
    PageManager.prototype.GetPrev = function (level) {
        this.stageSelect.selectedLevel--;
        this.game.LoadLevel(this.stageSelect.levels[this.stageSelect.selectedLevel], this.stageSelect.selectedLevel, true);
    };

    PageManager.prototype.mouseMove = function (x, y) {
        if (this.moreGames.mouseMove(x, y))
            return true;
        if (this.currentPage == "game" && this.game.mouseMove(x, y))
            return true;
        if (this.currentPage == "stageSelect" && this.stageSelect.mouseMove(x, y))
            return true;
        if (this.currentPage == "credits" && this.credits.mouseMove(x, y))
            return true;
        if (this.currentPage == "startScreen" && this.start.mouseMove(x, y))
            return true;
        return false;
    };

    PageManager.prototype.mouseDown = function (x, y) {
        this.game.sleep = 0;
        if (this.moreGames.mouseDown(x, y, function () {
        })) {
            console.log("run moreGames.action()");
            moreGames.action();
        }
        ;
        if (this.currentPage == 'game') {
            this.game.mouseDown(x, y);
            if (this.game.requestNext) {
                this.game.requestNext = false;
                this.GetNext(this.game.level);
            } else if (this.game.requestPrev) {
                this.game.requestPrev = false;
                this.GetPrev(this.game.level);
            }
        } else if (this.currentPage == 'stageSelect') {
            var menuClick = this.stageSelect.mouseClick(x, y);
            if (menuClick >= 0) {
                this.game.clearLevel();
                this.game.LoadLevel(this.stageSelect.levels[menuClick], this.stageSelect.selectedLevel, false);
                this.currentPage = 'game';
            } else if (menuClick == -2) {
                this.currentPage = 'credits';
                this.credits.scale(this.credits.width, this.credits.height);
            }
        } else if (this.currentPage == 'credits') {
            if (this.credits.mouseDown(x, y))
                this.currentPage = 'stageSelect';
        } else if (this.currentPage == 'startScreen') {
            if (this.start.mouseDown(x, y))
                this.currentPage = 'stageSelect';
        }
    };

    PageManager.prototype.mouseUp = function (x, y) {
    };

    PageManager.prototype.updatePageDisplays = function (width, height) {
        this.game.centerGame(width, height);
        this.stageSelect.updateDisplay(width, height);
        this.start.scale(width, height);
        this.scaleBackground(width, height);
        this.bumper.scaleBumper(width, height);
        this.credits.scale(width, height);
        var mgScale = (width / 6) / this.moreGames.width;
        if (mgScale > .5)
            mgScale = .5;
        this.moreGames.scaleX = this.moreGames.scaleY = mgScale;
        this.moreGames.y = height - 25 - this.moreGames.scaleX * this.moreGames.height;
    };
    PageManager.PHI = 1.61803398875;
    return PageManager;
})(createjs.Container);
