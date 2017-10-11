var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(width, height, preloader) {
        _super.call(this);
        this.gameDisplay = new createjs.Container();
        this.score = 0;
        this.state = 0;
        this.starValue = 50;
        this.numberOfStars = 0;
        this.sleep = 0;
        this.requestNext = false;
        this.requestPrev = false;
        this.currentLevel = 0;
        this.enemies = [];
        this.powerups = [];
        this.scaledShapes = 0;
        this.paused = false;
        this.addChild(this.gameDisplay);
        this.winLose = new WinLose(width, height, preloader.getResult("restart"), preloader.getResult("next"), preloader.getResult("home"));
        this.level = null;
        this.playerStats = new PlayerStats(width, height, preloader.getResult("home"), preloader.getResult("next"), preloader.getResult("mute"), preloader.getResult("restart"), preloader.getResult("back"));
        this.nodes = [];
        this.lines = [];
        this.glasses = [];
        this.enemies = [];
        this.gameDisplay.x = 100;
        this.gameDisplay.y = 100;
        this.player = null;
        this.addChild(this.winLose, this.playerStats);

        this.currentWidth = width;
        this.currentHeight = height;
    }
    Game.prototype.Update = function () {
        if (this.paused)
            return;
        this.sleep++;
        if (this.sleep >= 300)
            this.player.currentNode.neighbors[0].active = true;
        if (this.sleep >= 10800)
            this.state = -1;
        this.winLose.update();
        if (this.state != 0) {
            this.end();

            return;
        }
        if (this.player == null)
            return;
        this.player.update();
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].update();
        }

        if (this.enemies.length > 0)
            for (var i = 0; i < this.enemies.length; i++)
                this.enemies[i].Update(this.player);

        var glassesToScore = [];
        for (var i = 0; i < this.glasses.length; i++) {
            var glass = this.glasses[i];

            if (glass.needScoring)
                glassesToScore.push(glass);
        }

        if (glassesToScore.length > 0) {
            this.score = this.player.score;
            this.state = 1;
            for (var i = 0; i < glassesToScore.length; i++) {
                this.score += glassesToScore[i].score;

                if (glassesToScore[i].value == 0)
                    this.state = 0;
            }
            this.playerStats.Update(this.score);
            if (this.state == 1) {
                this.winLose.score = this.score;
            }
        } else {
            this.state = 2;
        }
        if (this.player.currentNode.lines.length == 0) {
            this.state = 2;
        }
        if (this.player.invincible <= 0) {
            for (var n = 0; n < this.enemies.length; n++) {
                var enemy = this.enemies[n];
                var difX = this.player.x - enemy.x;
                var difY = this.player.y - enemy.y;
                var radSqr = difX * difX + difY * difY;
                if (radSqr < 400) {
                    if (this.player.currentLine == null)
                        this.state = 2; else {
                        if (this.player.currentLine == enemy.currentLine)
                            this.state = 2;
                    }
                }
            }
        }
        if (this.state == 2) {
            createjs.Sound.play("fail", createjs.Sound.INTERRUPT_ANY, 300);
            createjs.Sound.play("death");
        }

        if (this.powerups.length > 0) {
            for (var p = 0; p < this.powerups.length; p++) {
                var powerup = this.powerups[p];
                var difX = this.player.x - powerup.x;
                var difY = this.player.y - powerup.y;
                var radSqr = difX * difX + difY * difY;
                if (radSqr < 400) {
                    powerup.pickUp(this.player);

                    this.powerups.sort(function (a, b) {
                        if (a.x == powerup.x && a.y == powerup.y)
                            return -1;
                        if (b.x == powerup.x && b.y == powerup.y)
                            return 1;
                        return 0;
                    });
                    this.gameDisplay.removeChild(this.powerups[0]);
                    this.powerups[0] = null;
                    this.powerups.shift();
                }
            }
        }
    };

    Game.prototype.clearLevel = function () {
        this.gameDisplay.removeAllChildren();
        this.player = null;
        this.lines = [];
        this.glasses = [];
        this.nodes = [];
        this.enemies = [];
        this.powerups = [];
        this.playerStats.moves = 0;
        this.state = 0;
        this.gameDisplay.scaleX = this.gameDisplay.scaleY = 1;
        this.gameDisplay.alpha = 1;
        this.scaledShapes = 0;
        this.winLose.state = 0;
        this.getAd = true;
    };

    Game.prototype.mouseDown = function (x, y) {
        if (this.paused)
            return;
        var winLoseState = this.winLose.mouseClick(x, y);
        if (winLoseState >= 0) {
            this.clearLevel();
        }

        if (winLoseState == 2) {
            this.LoadLevel(this.level, this.currentLevel, true);
        } else if (winLoseState == 1) {
            this.requestNext = true;
        } else if (winLoseState == 3)
            this.state = -1;

        var menuClick = this.playerStats.mouseClick(x, y);
        if (menuClick == 0)
            this.state = -1; else if (menuClick == 1)
            this.LoadLevel(this.level, this.currentLevel, false); else if (menuClick == 2)
            this.requestNext = true; else if (menuClick == 3)
            this.requestPrev = true; else if (this.state != 0)
            return;

        var mouseX = x - this.gameDisplay.x;
        var mouseY = y - this.gameDisplay.y;

        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            var offX = mouseX - node.x * this.gameDisplay.scaleX;
            var offY = mouseY - node.y * this.gameDisplay.scaleY;

            var distSq = offX * offX + offY * offY;
            if (distSq <= 1600 * this.gameDisplay.scaleX) {
                if (this.player.targetNode == null) {
                    this.player.targetNode = node;
                    this.player.setPath();
                }
            }
        }
    };

    Game.prototype.mouseMove = function (x, y) {
        if (this.paused)
            return;
        if (this.winLose.mouseMove(x, y))
            return true;

        if (this.playerStats.mouseMove(x, y))
            return true;

        var mouseX = x - this.gameDisplay.x;
        var mouseY = y - this.gameDisplay.y;

        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            var offX = mouseX - node.x * this.gameDisplay.scaleX;
            var offY = mouseY - node.y * this.gameDisplay.scaleY;

            var distSq = offX * offX + offY * offY;
            if (distSq <= 1600 * this.gameDisplay.scaleX) {
                if (this.player.targetNode == null) {
                    return true;
                }
            }
        }
        return false;
    };

    Game.prototype.end = function () {
        if (this.state == 2) {
            this.player.scaleX *= .3;
            this.player.scaleY *= .3;
            this.gameDisplay.scaleX *= .95;
            this.gameDisplay.scaleY *= .95;
            this.gameDisplay.alpha *= .95;
        } else if (this.state == 1) {
            this.player.scaleX *= 1.5;
            this.player.scaleY = this.player.scaleX;
            this.player.lineBehind.visible = false;
            if (this.player.alpha > 0) {
                this.player.alpha -= 0.05;
                return;
            }

            if (this.scaledShapes < this.glasses.length) {
                if (!this.glasses[this.scaledShapes].visible) {
                    this.scaledShapes++;
                    return;
                }
                if (this.glasses[this.scaledShapes].alpha == 1) {
                    var number = Math.floor(this.scaledShapes / this.glasses.length * 13) + 1;
                    var src = "score" + number;
                    createjs.Sound.play(src);
                }

                this.glasses[this.scaledShapes].scaleX *= 1.5;
                this.glasses[this.scaledShapes].scaleY *= 1.5;
                this.glasses[this.scaledShapes].alpha -= .1;
                if (this.glasses[this.scaledShapes].alpha <= 0) {
                    this.scaledShapes++;
                }
            } else {
                if (this.gameDisplay.alpha == 1)
                    createjs.Sound.play("success");
                this.gameDisplay.scaleX *= 1.05;
                this.gameDisplay.scaleY *= 1.05;
                this.gameDisplay.alpha *= .95;
            }
        }
        if (this.gameDisplay.alpha < 0.2) {
            this.winLose.state = this.state;
            if (this.state == 1 && this.currentLevel == 23)
                this.winLose.state = 3;
        }
    };

    Game.prototype.LoadLevel = function (level, levelNumber, showAd) {
        if (showAd) {
            requestGameBreak(this);
        }

        this.playerStats.changeLevelNumber(levelNumber);
        this.currentLevel = levelNumber;

        if (level == undefined)
            return;
        this.winLose.maxScore = level.maxScore;
        this.clearLevel();
        this.level = level;
        for (var n = 0; n < level.nodes.length; n++) {
            var node = level.nodes[n];
            var gamePoint = new GamePoint(node.x, node.y);
            this.nodes.push(gamePoint);
        }

        for (var g = 0; g < level.glasses.length; g++) {
            var glass = level.glasses[g];
            var array = [];
            for (var p = 0; p < glass.length; p++) {
                var point = glass[p];
                array.push(this.nodes[point]);
            }
            var makeGlass = new Glass(array, this.lines);
            this.glasses.push(makeGlass);
            this.gameDisplay.addChild(makeGlass);
        }

        for (var i = 0; i < this.lines.length; i++) {
            this.gameDisplay.addChild(this.lines[i]);
        }

        for (var n = 0; n < this.nodes.length; n++) {
            this.gameDisplay.addChild(this.nodes[n]);
        }

        if (level.enemies.length > 0) {
            for (var en = 0; en < level.enemies.length; en++) {
                var enemy = level.enemies[en];
                var e = Enemy.MakeEnemy(enemy.type, this.nodes[enemy.start]);
                this.gameDisplay.addChild(e);
                this.enemies.push(e);
            }
        }

        if (level.lines) {
            for (var l = 0; l < level.lines.length; l++) {
                var line = level.lines[l];
                this.lines[l].value = line.value;
                this.lines[l].updateColor();
                this.lines[l].setGlassColors();
            }
        }

        if (level.powerups) {
            if (level.powerups.length > 0) {
                for (var p = 0; p < level.powerups.length; p++) {
                    var puRef = level.powerups[p];
                    var powerup = new Powerup(puRef.type, this.lines[puRef.line]);
                    this.powerups.push(powerup);
                    this.gameDisplay.addChild(powerup);
                }
            }
        }

        if (level.playerStart != null && level.playerStart != -1)
            this.player = new Player(this.nodes[level.playerStart]); else
            this.player = new Player(this.nodes[0]);
        this.gameDisplay.addChild(this.player);

        this.initGameSize();
        if (!this.paused)
            createjs.Sound.play("start");
    };

    Game.prototype.initGameSize = function () {
        var targetHeight = (this.currentHeight - 40 * this.playerStats.scale) / PageManager.PHI;
        var targetWidth = this.currentWidth / PageManager.PHI;

        var gameAspecs = this.getWidthHeight();

        var scaleH = targetHeight / gameAspecs.height * PageManager.PHI;
        var scaleW = targetWidth / gameAspecs.width * PageManager.PHI;

        scaleH -= scaleH / 4 / PageManager.PHI;
        scaleW -= scaleH / 4 / PageManager.PHI;

        var sizeMulti = 1;
        if (scaleH < scaleW) {
            sizeMulti = scaleH;
        } else
            sizeMulti = scaleW;

        this.scale(sizeMulti);
        this.gameDisplay.x = this.currentWidth / 2;
        this.gameDisplay.y = this.currentHeight - targetHeight * PageManager.PHI / 2;
    };

    Game.prototype.centerGame = function (width, height) {
        this.currentWidth = width;
        this.currentHeight = height;
        this.playerStats.updateDisplay(width, height);
        if (this.player != null)
            this.initGameSize();
        this.winLose.move(width, height);
    };

    Game.prototype.scale = function (multi) {
        this.gameDisplay.scaleX = multi;
        this.gameDisplay.scaleY = multi;
    };

    Game.prototype.getWidthHeight = function () {
        var minX = this.nodes[0].x;
        var maxX = this.nodes[0].x;
        var minY = this.nodes[0].y;
        var maxY = this.nodes[0].y;

        for (var i = 1; i < this.nodes.length; i++) {
            if (this.nodes[i].x < minX)
                minX = this.nodes[i].x;
            if (this.nodes[i].x > maxX)
                maxX = this.nodes[i].x;
            if (this.nodes[i].y < minY)
                minY = this.nodes[i].y;
            if (this.nodes[i].y > maxY)
                maxY = this.nodes[i].y;
        }

        return { width: (maxX - minX), height: (maxY - minY) };
    };

    Game.prototype.pause = function () {
        this.paused = true;
        createjs.Sound.muted = true;
    };
    Game.prototype.resume = function () {
        createjs.Sound.muted = false;
        if (this.paused)
            this.LoadLevel(this.level, this.currentLevel, false);
        this.paused = false;
    };

    Game.colors = ['rgba(255,255,255,.30)', 'rgba(240, 232, 151, 1)', 'rgba(195, 97, 70, 1)', 'rgba(0,0,0,0.83)'];
    Game.glassColors = ['rgba(255, 255, 0, 0.30)', 'rgba(240, 232, 151, 0.30)', 'rgba(195, 97, 70, 0.30)', 'rgba(0,0,0,0.50)'];
    Game.ValueToScore = [0, 100, 50, 0];
    return Game;
})(createjs.Container);
