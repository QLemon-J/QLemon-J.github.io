var GAME_ID = "tictactoe";

var stage;
var fps = 24;
var endOfGame = false;
var xx = true;
var clever = false;
var size = 3;
var winpoints = 3;
var first = true;
var gameArea = [];
var STATE_MENU = 0;
var STATE_SELECT_AREA = 1;
var STATE_GAME = 2;
var STATE_SHOW_WINNER = 3;
var STATE_SHOW_TOTAL_WINNER = 4;
var sound = true;
var LANDSCAPE_MODE = true;
var win_count = 0;
var lose_count = 0;
var SHOW_WINNER;

var GO_CLEVER_ENEMY;
var GO_ENEMY;
var CREATE_SCENA;
var CREATE_AREA;
var DRAW_WINNER_LINE;
var PUT_CROSS_IN_POPUP;
var PUT_BOY_IN_POPUP
var mixer;
var spr_boy;
var spr_girl;
var track1 = 'menu';
window.onload = function()
{
    GET = Utils.parseGet();

    Utils.addMobileListeners(true);
    Utils.mobileCorrectPixelRatio();
    
    Utils.addFitLayoutListeners();
    ExternalAPI.init();
    setTimeout(startLoad, 600);

};

var resolution;
var library;

function startLoad()
{
    resolution = Utils.getMobileScreenResolution(LANDSCAPE_MODE);

    if(GET["debug"] == 1) resolution = Utils.getScaleScreenResolution(1);

    Utils.globalScale = resolution.scale;
    Utils.createLayout(document.getElementById("main_container"), resolution);
    Utils.addEventListener("fitlayout", function()
    {
        if(stage)
        {

            stage.drawScene(document.getElementById("screen"));
            buildBackground();
        }
    });
    Utils.addEventListener("lockscreen", function()	{ if(stage && stage.started) stage.stop(); });
    Utils.addEventListener("unlockscreen", function()	{ if(stage && !stage.started) stage.start(); });

    Utils.mobileHideAddressBar();

    if(GET["debug"] != 1) Utils.checkOrientation(LANDSCAPE_MODE);

    var assets =
        [
            {"name":"background","src":"background.png","width":480,"height":320},
            {"name":"blue","src":"blue.png","width":480,"height":320},
            {"name":"boy_lose","src":"boy_lose.png","width":76,"height":82,"frames":15},
            {"name":"boy_stay","src":"boy_stay.png","width":54,"height":78,"frames":10},
            {"name":"boy_win","src":"boy_win.png","width":66,"height":100,"frames":14},
            {"name":"cloud_02","src":"cloud_02.png","width":401,"height":95},
            {"name":"cross","src":"cross.png","width":131,"height":223,"frames":10},
            {"name":"cross1","src":"cross1.png","width":58,"height":51},
            {"name":"cross_button","src":"cross_button.png","width":53,"height":53,"frames":2},
            {"name":"dont_worry","src":"dont_worry.png","width":186,"height":66,"frames":5},
            {"name":"easy","src":"easy.png","width":84,"height":26,"frames":2},
            {"name":"fin_game_screen","src":"fin_game_screen.png","width":784,"height":555},
            {"name":"girl_lose","src":"girl_lose.png","width":64,"height":88,"frames":15},
            {"name":"girl_stay","src":"girl_stay.png","width":56,"height":79,"frames":10},
            {"name":"girl_win","src":"girl_win.png","width":66,"height":98,"frames":13},
            {"name":"hard","src":"hard.png","width":84,"height":26,"frames":2},
            {"name":"home","src":"home.png","width":32,"height":33},
            {"name":"menu","src":"menu.png","width":126,"height":39},
            {"name":"menu_screen","src":"menu_screen.png","width":626,"height":381},
            {"name":"play","src":"play.png","width":126,"height":39},
            {"name":"play3x3","src":"play3x3.png","width":106,"height":39},
            {"name":"play5x5","src":"play5x5.png","width":106,"height":39},
            {"name":"player_01_ico","src":"player_01_ico.png","width":58,"height":42,"frames":2},
            {"name":"player_02_ico","src":"player_02_ico.png","width":58,"height":42,"frames":2},
            {"name":"popup","src":"popup.png","width":411,"height":204},
            {"name":"return","src":"return.png","width":53,"height":53},
            {"name":"sand3x3","src":"sand3x3.png","width":592,"height":276},
            {"name":"sand5x5","src":"sand5x5.png","width":592,"height":276},
            {"name":"score_bar","src":"score_bar.png","width":93,"height":57},
            {"name":"settings","src":"settings.png","width":71,"height":26},
            {"name":"sound","src":"sound.png","width":53,"height":52,"frames":2},
            {"name":"water_05","src":"water_05.png","width":578,"height":84},
            {"name":"win_salut","src":"win_salut.png","width":274,"height":180,"frames":19},
            {"name":"win_tag_scale","src":"win_tag_scale.png","width":200,"height":69,"frames":7},
            {"name":"wl05","src":"wl05.png","width":54,"height":63,"frames":10},
            {"name":"zero","src":"zero.png","width":131,"height":230,"frames":10},
            {"name":"zero1","src":"zero1.png","width":58,"height":51},
            {"name":"zero_button","src":"zero_button.png","width":53,"height":53,"frames":2},
            {"name":"more_games","src":"more_games.png","width":106,"height":33},
            {"name":"more_games2","src":"more_games2.png","width":34,"height":36},


        ];

    //assets - определено в файле assets.jss
    library = new AssetsLibrary('images', Utils.globalScale, assets);
   // library.load(loadImagesEnd, Utils.showLoadProgress);

    TTLoader.create(loadImagesEnd, true);
    library.load(TTLoader.loadComplete, TTLoader.showLoadProgress);

}

var iosMode = false;

function loadImagesEnd(data)
{
    document.getElementById('progress_container').style.display = 'none';
    document.getElementById('screen_container').style.display = 'block';
    document.getElementById('screen_background_container').style.display = 'block';

    FontsManager.embed("font", "fonts/mama.ttf");
    FontsManager.embed("font2", "fonts/arb.ttf");

    iosMode = navigator.userAgent.toLowerCase().indexOf("mac") != -1;

    mixer = new AudioMixer("music", (iosMode ? 1 : 3));

    if(GET["debug"] != 1)
    {
        showMenu();
    }
}

function showMenu()
{
    Utils.setCookie("popup", 0);
    if(parseInt(Utils.getCookie("sound")) == 2 || parseInt(Utils.getCookie("sound")) == 1){}
    else
    {
        Utils.setCookie("sound", 1);
    }

    if(parseInt(Utils.getCookie("sound")) ==1)
    {
        mixer.play(track1, true, false, 0);
        sound = true;

    }
    else if (parseInt(Utils.getCookie("sound")) == 2)
    {
        sound = false;
    }

    gameState = STATE_MENU;
    createScene();
}

function createStage()
{
    if(stage)
    {
        stage.destroy();
        stage.stop();
    }
    stage = new Stage('screen', 480, 320, false);
    stage.delay = 1000/fps;
    stage.onpretick = preTick;
    stage.onposttick = postTick;
    stage.ceilSizes = true;
    stage.showFPS = false;

}

function showMoreGames()
{
	window.open(ExternalAPI.getMoreGamesURL(), "_blank");
}

function createScene(type)
{
    clearTimeout(CREATE_SCENA);

    block_popup = false;
    createStage();

    if(gameState == STATE_MENU)
    {
        createMenu();
    }
    else if(gameState == STATE_SELECT_AREA)
    {
        makeSettings();
    }
    else if(gameState == STATE_GAME)
    {
        createArea();
    }
    else if(gameState == STATE_SHOW_WINNER)
    {
        stateShowWinner();
    }
    else if(gameState == STATE_SHOW_TOTAL_WINNER)
    {
        showTotalWinner(type);
    }
    buildBackground();
    stage.start();
}

function clearStage()
{
    for(var i=0; i< stage.objects.length; i++)
    {
        stage.objects[i].destroy = true;
    }
}

function createMenu()
{
    win_count = 0;
    lose_count = 0;

    var spr00 = library.getSprite("background");
    spr00.x = 240;
    spr00.y = 160;
    spr00.static = true;
    spr00.zIndex = 10;
    stage.addChild(spr00);

    var spr01 = library.getSprite("menu_screen");
    spr01.x = 240;
    spr01.y = 180;
    spr01.static = true;
    spr01.zIndex = 15;
    stage.addChild(spr01);

    var spr1 = library.getSprite("play3x3");
    spr1.x = 240;
    spr1.y = 140;
    spr1.static = true;
    spr1.zIndex = 20;
    spr1.onclick = function()
    {
        size = 3;
        winpoints = 3;

        gameState = STATE_SELECT_AREA;
        createScene();
        return false;
    }
    stage.addChild(spr1);

    var spr2 = library.getSprite("play5x5");
    spr2.x = 240;
    spr2.y = 190;
    spr2.static = true;
    spr2.zIndex = 20;
    spr2.onclick = function()
    {

        size = 5;
        winpoints = 4;
        gameState = STATE_SELECT_AREA;
        createScene();
        return false;
    }
    stage.addChild(spr2);

	var spr3 = library.getSprite("more_games");
    spr3.x = 240;
    spr3.y = 240;
    spr3.static = true;
    spr3.zIndex = 20;
    spr3.gotoAndStop(0);
    spr3.onclick = showMoreGames;
    stage.addChild(spr3);


    putSound(track1);
    buildBackground();
}

function makeSettings()
{
    var spr00 = library.getSprite("background");
    spr00.x = 240;
    spr00.y = 160;
    spr00.static = true;
    spr00.zIndex = 10;
    stage.addChild(spr00);

    var spr01 = library.getSprite("menu_screen");
    spr01.x = 240;
    spr01.y = 180;
    spr01.static = true;
    spr01.zIndex = 15;
    stage.addChild(spr01);

    var spr1 = library.getSprite("cross_button");
    spr1.x = 200;
    spr1.y = 130;

    stage.addChild(spr1);

    var spr2 = library.getSprite("zero_button");
    spr2.x = 280;
    spr2.y = 130;

    stage.addChild(spr2);

    if (xx)
    {
        spr1.gotoAndStop(0);
        spr2.gotoAndStop(1);
    }
    else
    {
        spr1.gotoAndStop(1);
        spr2.gotoAndStop(0);
    }

    spr1.onclick = function()
    {
        spr1.gotoAndStop(0);
        spr2.gotoAndStop(1);
        xx = 1;
        first = true;
    }
    spr2.onclick = function()
    {
        spr1.gotoAndStop(1);
        spr2.gotoAndStop(0);
        xx = 0;
        first = false;
    }

    var spr3 = library.getSprite("easy");
    spr3.x = 190;
    spr3.y = 175;

    stage.addChild(spr3);

    var spr4 = library.getSprite("hard");
    spr4.x = 290;
    spr4.y = 175;

    stage.addChild(spr4);

    if (clever)
    {
        spr3.gotoAndStop(1);
        spr4.gotoAndStop(0);
    }
    else
    {
        spr3.gotoAndStop(0);
        spr4.gotoAndStop(1);
    }
    spr3.onclick = function()
    {
        spr3.gotoAndStop(0);
        spr4.gotoAndStop(1);
        clever = false;
    }
    spr4.onclick = function()
    {
        spr3.gotoAndStop(1);
        spr4.gotoAndStop(0);
        clever = true;
    }

    var spr5 = library.getSprite("play");
    spr5.x = 240;
    spr5.y = 220;
    spr5.gotoAndStop(0);
    spr5.static = true;
    spr5.zIndex = 20;
    spr5.onclick = function()
    {
        if (size == 3)
        {
            gameState = STATE_GAME;
            createScene();
            return false;
        }
        else
        {

            if (parseInt(Utils.getCookie("popup")))
            {
                gameState = STATE_GAME;
                createScene();
                return false;
            }
            else
            {
                createPopup();
                return false;
            }
        }
    }
    stage.addChild(spr5);

    var spr6 = library.getSprite("return");
    spr6.x = 60;
    spr6.y = 260;
    spr6.gotoAndStop(0);
    spr6.static = true;
    spr6.zIndex = 20;
    spr6.onclick = function()
    {
        gameState = STATE_MENU;
        createScene();
        return false;
    }
    stage.addChild(spr6);

    putSound(track1);
    buildBackground();
}

var cnt = 0;
var popup_boy;

function createPopup()
{
    var spr1 = library.getSprite("blue");
    spr1.x = 240;
    spr1.y = 160;
    spr1.onclick = function()
    {
        return false;
    }
    stage.addChild(spr1);

    var spr2 = library.getSprite("popup");
    spr2.x = 240;
    spr2.y = 160;
    stage.addChild(spr2);

    putBoyInPopup(0);
    putCrossInPopup();
    setTimeout(putEffectInPopup,2400);
    gameState = STATE_GAME;

    PUT_BOY_IN_POPUP = setTimeout('putBoyInPopup('+1+')',2400);
    CREATE_AREA = setTimeout(createScene,3000);
    Utils.setCookie("popup", 1);
    return false;
}

function putBoyInPopup(state)
{
    clearTimeout(PUT_BOY_IN_POPUP);
    if(popup_boy) popup_boy.destroy = true;

    popup_boy = library.getSprite("boy_win");
    popup_boy.scaleX = popup_boy.scaleY = 1.1;
    popup_boy.x = 80;
    popup_boy.y = 140;

    if (state == 0)
    {
        popup_boy.gotoAndStop(0);
    }
    else if (state == 1)
    {
        popup_boy.animDelay = 2;
        popup_boy.onenterframe = function(e)
        {
            e.target.onenterframe = function(ev)
            {
                if(ev.target.currentFrame == 6)
                {
                    ev.target.stop();
                }
            }
        }
    }
    stage.addChild(popup_boy);
}

function putCrossInPopup()
{
clearTimeout(PUT_CROSS_IN_POPUP);
    if (cnt < 4)
    {
        var spr = library.getSprite("cross");
        spr.scaleX = spr.scaleY = 0.6;
        spr.x = 200 + cnt*43;
        spr.y = 113;
        spr.onenterframe = function(ev)
        {
            if(ev.target.currentFrame == 9)
            {
                ev.target.stop();
            }
        }

        cnt++;
        stage.addChild(spr);
        PUT_CROSS_IN_POPUP = setTimeout(putCrossInPopup,500);
    }
    else
    {
        cnt = 0;
        return false;
    }

}

function putEffectInPopup()
{
    for (var i = 0; i<4; i++)
    {
        var spr = library.getSprite("wl05");
        spr.scaleX = spr.scaleY = 0.7;
        spr.x = 200 + i*45;
        spr.y = 165;
        spr.onenterframe = function(ev)
        {
            if(ev.target.currentFrame == 9)
            {
                ev.target.stop();
            }
        }
        stage.addChild(spr);
    }
}

function platCloudAnim(obj, flag)
{
    var tween = obj.addTween("x", ((flag) ? obj.x-200: obj.x+200), ((flag)? 150:150), Easing.linear.out);
    tween.onfinish = function(e)
    {
        platCloudAnim(e.target.obj, (flag) ? false:true);
    }
    tween.play();
}

function createArea()
{

    endOfGame = false;
    clearTimeout(CREATE_AREA);

    var spr00 = library.getSprite("background");
    spr00.x = 240;
    spr00.y = 160;
    spr00.static = true;
    spr00.zIndex = 10;
    stage.addChild(spr00);

    var spr02 = library.getSprite("cloud_02");
    spr02.x = 240;
    spr02.y = 30;
    spr02.static = true;
    spr02.zIndex = 12;
    stage.addChild(spr02);

    var spr05 = library.getSprite("water_05");
    spr05.x = 240;
    spr05.y = 100;
    spr05.static = true;
    spr05.zIndex = 15;
    stage.addChild(spr05);

    var spr9 = library.getSprite("score_bar");
    spr9.scaleX = spr9.scaleY = 1.1;
    spr9.x = 240;
    spr9.y = 27;
    spr9.zIndex = 25;
    spr9.static = true;

    stage.addChild(spr9);

    if (size == 3)
    {
        var spr03 = library.getSprite("sand3x3");
        spr03.x = 240;
        spr03.y = 250;
        spr03.static = true;
        spr03.zIndex = 20;
        stage.addChild(spr03);
    }
    else
    {
        var spr04 = library.getSprite("sand5x5");
        spr04.x = 240;
        spr04.y = 250;
        spr04.static = true;
        spr04.zIndex = 20;
        stage.addChild(spr04);
    }

    var spr12 = library.getSprite("return");
    spr12.x = 60;
    spr12.y = 260;
    spr12.gotoAndStop(0);
    spr12.static = true;
    spr12.zIndex = 20;
    spr12.onclick = function()
    {
        gameState = STATE_SELECT_AREA;
        createScene();
        return false;
    }
    stage.addChild(spr12);

    var spr13 = library.getSprite("home");
    spr13.x = 25;
    spr13.y = 290;
    spr13.gotoAndStop(0);
    spr13.static = true;
    spr13.zIndex = 20;
    spr13.onclick = function()
    {
        gameState = STATE_MENU;
        createScene();
        return false;
    }
    stage.addChild(spr13);

    var spr15 = new TextSprite(null,100,30);
    spr15.x = 257;
    spr15.y = 50;
    spr15.style.font = "font";
    spr15.style.color = "#FF0000";
    spr15.style.size = 36;
    spr15.style.borderColor = "#ffffff";
    spr15.style.borderWidth = 3;

    var spr14 = new TextSprite(null,100,30);
    spr14.x = 300;
    spr14.y = 50;
    spr14.style.font = "font";
    spr14.style.color = "#1E90FF";
    spr14.style.size = 36;
    spr14.style.borderColor = "#ffffff";
    spr14.style.borderWidth = 3;

    if (xx)
    {
        spr15.text = win_count;
        spr14.text = lose_count;
    }
    else
    {
        spr15.text = lose_count;
        spr14.text = win_count;
    }

    stage.addChild(spr15);
    stage.addChild(spr14);

    if(gameArea.length > 0)
    {
        for(var i=0; i<gameArea.length; i++)gameArea[i].destroy = true;
        gameArea = [];
    }
    putBoyAndGirl(0);

    var spr10 = library.getSprite("player_01_ico");
    spr10.x = 50;
    spr10.y = 50;
    spr10.scaleX = spr10.scaleY = 1.1;
    spr10.static = true;
    spr10.zIndex = 20;
    stage.addChild(spr10);

    var spr11 = library.getSprite("player_02_ico");
    spr11.x = 430;
    spr11.y = 50;
    spr11.scaleX = spr11.scaleY = 1.1;
    spr11.static = true;
    spr11.zIndex = 20;
    stage.addChild(spr11);

    if (xx)
    {
        spr10.gotoAndStop(0);
        spr11.gotoAndStop(1);
    }
    else
    {
        spr10.gotoAndStop(1);
        spr11.gotoAndStop(0);
        GO_ENEMY = setTimeout(goEnemy,700);
    }

    for (var j=0; j<size; j++)
    {
        for (var i=0; i<size; i++)
        {
            var spr = library.getSprite(null);
            if (size == 3)
            {
                spr.width = 50;
                spr.height = 50;
                spr.x = x30 -dx31*(j+1)+dx32*(j*(dx31/dx32)+1)*i;
                spr.y = y30 + j*dy3;
            }
            else
            {
                spr.width = 28;
                spr.height = 28;
                spr.x = x50 -dx51*(j+1)+dx52*(j/2*(dx51/dx52)+1)*i;
                spr.y = y50 + j*dy5;
            }
            spr.type = null;
            spr.onclick = clickSpr;
            stage.addChild(spr);
            gameArea.push(spr);
        }
    }
    
    var spr3 = library.getSprite("more_games2");
    spr3.x = 455;
    spr3.y = 295;
    spr3.static = true;
    spr3.zIndex = 20;
    spr3.gotoAndStop(0);
    spr3.onclick = showMoreGames;
    stage.addChild(spr3);
    
    buildBackground();
    putSound(track1);

}

var dx31 = 5;
var dx32 = 75;
var dy3 = 55;
var x30 = 175;
var y30 = 150;
var dx51 = 5;
var dx52 = 37;
var dy5 = 32;
var x50 = 178;
var y50 = 140;

function putBoyAndGirl(state)
{
    if(spr_boy) spr_boy.destroy = true;
    if(spr_girl) spr_girl.destroy = true;

    switch (state)
    {
        case 1:
        {

            spr_boy = library.getSprite("boy_win");
            spr_boy.scaleX = spr_boy.scaleY = 1.1;
            spr_boy.x = 51;
            spr_boy.y = 157;
            spr_boy.animDelay = 3;
            spr_boy.onenterframe = function(e)
            {
                if (e.target.currentFrame == 13)
                {
                    e.target.stop();
                    return false;
                }
            }
            stage.addChild(spr_boy);

            spr_girl = library.getSprite("girl_lose");
            spr_girl.scaleX = spr_girl.scaleY = 1.1;
            spr_girl.x = 425;
            spr_girl.y = 164;
            spr_girl.animDelay = 3;
            stage.addChild(spr_girl);
            spr_girl.onenterframe = function(e)
            {
                if (e.target.currentFrame == 14)
                {
                    e.target.stop();
                    return false;
                }
            }
            return;
            break;
        }
        case 2:
        {
            spr_boy = library.getSprite("boy_lose");
            spr_boy.scaleX = spr_boy.scaleY = 1.1;
            spr_boy.x = 54;
            spr_boy.y = 168;
            spr_boy.animDelay = 3;
            stage.addChild(spr_boy);
            spr_boy.onenterframe = function(e)
            {
                if (e.target.currentFrame == 14)
                {
                    e.target.stop();
                    return false;
                }
            }

            spr_girl = library.getSprite("girl_win");
            spr_girl.scaleX = spr_girl.scaleY = 1.1;
            spr_girl.x = 424;
            spr_girl.y = 160;
            spr_girl.animDelay = 3;
            stage.addChild(spr_girl);
            spr_girl.onenterframe = function(e)
            {
                if (e.target.currentFrame == 12)
                {
                    e.target.stop();
                    return false;
                }
            }
            return;
            break;
        }
    }

    spr_boy = library.getSprite("boy_stay");
    spr_boy.scaleX = spr_boy.scaleY = 1.1;
    spr_boy.x = 50;
    spr_boy.y = 170;
    stage.addChild(spr_boy);


    spr_girl = library.getSprite("girl_stay");
    spr_girl.scaleX = spr_girl.scaleY = 1.1;
    spr_girl.x = 430;
    spr_girl.y = 170;
    stage.addChild(spr_girl);
}

function putDropSound()
{
    if (parseInt(Utils.getCookie("sound"))==1)
    {
        if(!iosMode) mixer.play('drop', false, false, 1);
    }
    else
    {

        return false;
    }
}

function putWinSound()
{
    if (parseInt(Utils.getCookie("sound"))==1)
    {
        if(!iosMode) mixer.play('win', false, false, 2);
    }
    else
    {

        return false;
    }
}

function putSound(track,start)
{
    var spr14 = library.getSprite("sound");
    spr14.x = 420;
    spr14.y = 260;
    spr14.gotoAndStop(0);
    stage.addChild(spr14);

    if(parseInt(Utils.getCookie("sound")) ==1)
    {
        spr14.gotoAndStop(0);

        if (start)
        {
            mixer.play(track, true, false, 0);
        }

        sound = true;
    }
    else if (parseInt(Utils.getCookie("sound")) == 2)
    {
        spr14.gotoAndStop(1);
        sound = false;
    }

    spr14.onclick = function(e)
    {
        if(sound)
        {
            e.target.gotoAndStop(1);
            mixer.stop(0);
            Utils.setCookie("sound", 2);
            sound = false;
        }
        else
        {
            mixer.stop(0);
            e.target.gotoAndStop(0);
            mixer.play(track, true, false, 0);
            Utils.setCookie("sound", 1);
            sound = true;
        }
    }
}

function getPosByCoord(x, y)
{
    var j;
    var i;
    if (size == 3)
    {
        j = (y - y30)/dy3;
        i = (x-x30+dx31*j+dx31)/(j*dx31+dx32);
    }
    else
    {
        j = (y - y50)/dy5;
        i = (x-x50+dx51*j+dx51)/(0.5*j*dx51+dx52);
    }
    return {x:i, y:j};
}

var block_click = false;

function clickSpr(e)
{
    if(block_click) return false;

    block_click = true;

    if (e.target.type == null)
    {
        putDropSound('drop');
        var obj = {x:e.target.x*1, y:e.target.y*1, type: e.target.type*1};
        e.target.destroy = true;
        e.target = library.getSprite("cross");
        if (xx)
        {
            e.target = library.getSprite("cross");
        }
        else
        {
            e.target = library.getSprite("zero")
        }

        if (size == 5)
        {
            e.target.scaleX = e.target.scaleY = 0.6;
            e.target.x = obj.x-3;
            e.target.y = obj.y-50;
        }
        else
        {
            e.target.x = obj.x;
            e.target.y = obj.y-86;
        }
        e.target.type = obj.type;
        e.target.onenterframe = function(ev)
        {
            if(ev.target.currentFrame == 8)
            {
                ev.target.destroy = true;
                ev.target = null;
                if (xx)
                {
                    ev.target = library.getSprite("cross1");
                }
                else
                {
                    ev.target = library.getSprite("zero1");
                }
                if (size == 5)
                {
                    ev.target.scaleX = ev.target.scaleY = 0.6;
                    ev.target.x = obj.x-3;
                    ev.target.y = obj.y+2;
                }
                else
                {
                    ev.target.x = obj.x;
                    ev.target.y = obj.y;
                }

                ev.target.static = true;
                ev.target.zIndex = 50;
                stage.addChild(ev.target);

                buildBackground();
                return false;
            }
        }
        stage.addChild(e.target);

        var obj1 = getPosByCoord(obj.x, obj.y);
        var pos = size*obj1.y + obj1.x;
        gameArea[pos].type = 1;

        if (checkWinner(pos,1))
        {
            if (xx)
            {
                setTimeout('putBoyAndGirl('+1+')',500);
            }
            else
            {
                setTimeout('putBoyAndGirl('+2+')',500);
            }
            DRAW_WINNER_LINE = setTimeout('drawWinnerLine('+obj1.x+','+obj1.y+','+1+')',500);
            SHOW_WINNER = setTimeout('showWinner('+1+')',3000);
            putWinSound();
            setTimeout('block_click = false', 4000);
            return false;
        }
        else if (isDrawn())
        {
            setTimeout('block_click = false', 1000);
            return false;
        }
        else if (clever)
        {
            GO_CLEVER_ENEMY = setTimeout(goCleverEnemy,500);

            return false;
        }
        else
        {
            GO_ENEMY = setTimeout(goEnemy,500);
            return false;
        }
    }
}

function goEnemy()
{
	
    clearTimeout(GO_ENEMY);
    block_click = true;
    if (endOfGame == false)
    {
        var i = Math.floor((Math.random()*size*size));
        if (gameArea[i].type !== null) return goEnemy();
        else
        {
            drawElement(xx,i);
        }
        if (checkWinner(i,2))
        {

            setTimeout('block_click = false', 4000);
            if (!xx)
            {
                setTimeout('putBoyAndGirl('+1+')',500);
            }
            else
            {
                setTimeout('putBoyAndGirl('+2+')',500);
            }
            putSound('lose');
            SHOW_WINNER = setTimeout('showWinner('+2+')',3000);
            return;
        }
        else if(isDrawn())
        {
            return;
        }
        setTimeout('block_click = false', 500);
    }

    else return false;


}

function goCleverEnemy()
{
    block_click = true;
    clearTimeout(GO_CLEVER_ENEMY);
    if (endOfGame == false)
    {
        if (isInArray(2,winpoints))
        {
            setTimeout(function()
            {
          	  block_click = false;
            }, 4000);
            if (!xx)
            {
                setTimeout('putBoyAndGirl('+1+')',500);
            }
            else
            {
                setTimeout('putBoyAndGirl('+2+')',500);
            }
            putSound('lose');
            SHOW_WINNER = setTimeout('showWinner('+2+')',3000);
            return;
        }
        else if (isInArray(1,winpoints))
        {
            setTimeout('block_click = false', 500);
            if (!isDrawn())
            {
                return;
            }
        }
        else if (size == 5 && isInArray(2,winpoints-1))
        {
            setTimeout('block_click = false', 500);
            if (!isDrawn())
            {
                return;
            }

        }
        else if (size == 5 && isInArray(1,winpoints-1))
        {
            setTimeout('block_click = false', 500);
            if (!isDrawn())
            {
                return;
            }

        }
        else
        {
            goEnemy();
        }
        setTimeout('block_click = false', 500);
    }
}

function drawElement(xx,i)
{
    var y = Math.floor(i/size);
    var x = i % size;
    var spr  = library.getSprite("zero");

    if (xx)
    {
        spr  = library.getSprite("zero");
        if (size !== 3) spr.scaleX = spr.scaleY = 0.6;
    }
    else
    {
        spr = library.getSprite("cross")
        if (size !== 3) spr.scaleX = spr.scaleY = 0.6;
    }
    if (size == 3)
    {
        spr.x = x30 -dx31*(y+1)+dx32*(y*(dx31/dx32)+1)*x;
        spr.y = y30 + y*dy3-86;
    }
    else
    {
        spr.x = x50 -dx51*(y+1)+dx52*(y/2*(dx51/dx52)+1)*x-4;
        spr.y = y50 + y*dy5-50;
    }

    spr.onenterframe = function(ev)
    {
        if(ev.target.currentFrame == 8)
        {
            ev.target.destroy = true;
            ev.target = null;
            if (!xx)
            {
                ev.target = library.getSprite("cross1");
            }
            else
            {
                ev.target = library.getSprite("zero1");
            }
            if (size == 5)
            {
                ev.target.scaleX = ev.target.scaleY = 0.6;
                ev.target.x = spr.x-1;
                ev.target.y = spr.y+52;
            }
            else
            {
                ev.target.x = spr.x;
                ev.target.y = spr.y+86;
            }
            //e.target.scaleX = e.target.scaleY = 1.1;
            stage.addChild(ev.target);
            return false;
        }
    }
    stage.addChild(spr);
    gameArea[i].type = 2;

    if (checkWinner(i,2))
    {
        putWinSound();
        DRAW_WINNER_LINE = setTimeout('drawWinnerLine('+x+','+y+','+2+')',500);
        return false;
    }
}

function checkWinner(num,type)
{
    var y = Math.floor(num/size);
    var x = num % size;

    if(checkAllDirection(x,y,type,winpoints))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function stateShowWinner()
{

    var spr00 = library.getSprite("background");
    spr00.x = 240;
    spr00.y = 160;
    spr00.static = true;
    spr00.zIndex = 10;
    stage.addChild(spr00);

    var spr05 = library.getSprite("blue");
    spr05.x = 240;
    spr05.y = 160;
    spr05.static = true;
    spr05.zIndex = 15;
    spr05.onclick = function()
    {
        return false;
    }
    stage.addChild(spr05);

    var spr06 = library.getSprite("menu_screen");
    spr06.x = 240;
    spr06.y = 180;
    spr06.static = true;
    spr06.zIndex = 20;
    stage.addChild(spr06);

    var spr5 = library.getSprite("play");
    spr5.x = 240;
    spr5.y = 192;
    spr5.gotoAndStop(0);
    spr5.scaleX = spr5.scaleY = 0.7;
    spr5.static = true;
    spr5.zIndex = 30;
    spr5.onclick = function()
    {
        gameState = STATE_GAME;
        createScene();
        return false;
    }
    stage.addChild(spr5);


    var spr6 = library.getSprite("menu");
    spr6.x = 240;
    spr6.y = 222;
    spr6.static = true;
    spr6.zIndex = 30;
    spr6.scaleX = spr6.scaleY = 0.7;
    spr6.onclick = function()
    {
        gameState = STATE_MENU;
        createScene();
        return false;
    }
    stage.addChild(spr6);

	var more_games = library.getSprite("more_games");
	more_games.x = 240;
	more_games.y = 252;
	more_games.scaleTo(0.75);
	more_games.onclick = showMoreGames;
	stage.addChild(more_games);

    var spr10 = library.getSprite("player_01_ico");
    spr10.x = 170;
    spr10.y = 130;
    spr10.static = true;
    spr10.zIndex = 40;
    spr10.gotoAndStop(0);
    stage.addChild(spr10);

    var spr11 = library.getSprite("player_02_ico");
    spr11.x = 310;
    spr11.y = 130;
    spr11.gotoAndStop(0);
    spr11.static = true;
    spr11.zIndex = 40;
    stage.addChild(spr11);

    putSound(track1);

	ExternalAPI.exec('showAds');
}

function showWinner(type)
{
    gameState = STATE_SHOW_WINNER;
    createScene();

    endOfGame = true;
    switch(type)
    {
        case 1:
        {
            win_count++;

            if (size == 3 && win_count == 3)
            {
                gameState = STATE_SHOW_TOTAL_WINNER;
                createScene(1);
                break;
            }
            else if (size == 5 && win_count == 3)
            {
                gameState = STATE_SHOW_TOTAL_WINNER;
                createScene(1);
                break;
            }
            else
            {
                putText(315,145,24);
                putText(280,175,24,'YOU WIN!');
                break;
            }
        }
        case 2:
        {

            lose_count++;
            if (size == 3 && lose_count ==3)
            {
                gameState = STATE_SHOW_TOTAL_WINNER;
                createScene(2);
                break;
            }
            else if (size == 5 && lose_count ==3)
            {
                gameState = STATE_SHOW_TOTAL_WINNER;
                createScene(2);
                break;
            }
            else
            {
                putText(315,145,24);
                putText(268,175,24,'YOU LOSE!');
                break;
            }
        }
        case 3:
        {
            putText(315,145,24);
            putText(290,175,24,'DRAWN!');
            break;
        }
    }
    buildBackground();
    return;
}

function putText(x,y,textsize,text)
{
    var spr14 = new TextSprite(null,200,30);
    spr14.x = x;
    spr14.y = y;
    spr14.style.font = "font2";
    spr14.style.color = "#ffffff";
    spr14.style.size = textsize;
    spr14.style.align = 'center';
    if (!text)
    {
        if (xx)
        {
            spr14.text = win_count+' : '+ lose_count;
        }
        else
        {
            spr14.text = lose_count+' : '+ win_count;
        }
    }
    else
    {
        spr14.text = text;
    }

    stage.addChild(spr14);
}

function isDrawn()
{
    var endOfGame = true;
    for(var j=0; j<gameArea.length; j++)
    {
        if(gameArea[j].type == null)
        {
            endOfGame = false;
            return endOfGame;
        }
    }
    if (endOfGame == true)
    {
        SHOW_WINNER = setTimeout('showWinner('+3+')',1500);
        return endOfGame;
    }
}

function showTotalWinner(type)
{
    iosMode ? putSound(track1) : putSound('theend',true);

    if (track1 == 'menu')
    {
        track1 = 'game';
    }
    else
    {
        track1 = 'menu';
    }

    var spr00 = library.getSprite("background");
    spr00.x = 240;
    spr00.y = 160;
    spr00.static = true;
    stage.addChild(spr00);

    var spr02 = library.getSprite("cloud_02");
    spr02.x = 240;
    spr02.y = 30;
    spr02.static = true;
    spr02.zIndex = 12;
    stage.addChild(spr02);

    var spr06 = library.getSprite("fin_game_screen");
    spr06.x = 220;
    spr06.y = 230;
    spr06.static = true;
    spr06.zIndex = 15;
    stage.addChild(spr06);

    var spr6 = library.getSprite("menu");
    spr6.x = 202;
    spr6.y = 235;
    spr6.scaleX = spr6.scaleY = 0.7;
    spr6.gotoAndStop(0);
    spr6.static = true;
    spr6.zIndex = 20;
    spr6.onclick = function()
    {
        if(parseInt(Utils.getCookie("sound")) ==1)
        {
             mixer.play(track1, true, false, 0);
            sound = true;

        }
        else if (parseInt(Utils.getCookie("sound")) == 2)
        {
            sound = false;
        }
        gameState = STATE_MENU;
        createScene();
        return false;
    }
    stage.addChild(spr6);

    var spr10 = library.getSprite("player_01_ico");
    spr10.x = 135;
    spr10.y = 127;
    spr10.gotoAndStop(0);
    spr10.static = true;
    spr10.zIndex = 20;
    stage.addChild(spr10);

    var spr11 = library.getSprite("player_02_ico");
    spr11.x = 275;
    spr11.y = 127;
    spr11.gotoAndStop(0);
    spr11.static = true;
    spr11.zIndex = 20;
    stage.addChild(spr11);

    putText(278,140,24);

    switch(type)
    {
        case 1:
        {
            var spr1 = library.getSprite("win_tag_scale");
            spr1.x = 205;
            spr1.y = 180;
            stage.addChild(spr1);

            var spr3 = library.getSprite("win_salut");
            spr3.x = 200;
            spr3.y = 145;
            stage.addChild(spr3);
            break;
        }
        case 2:
        {
            var spr2 = library.getSprite("dont_worry");
            spr2.x = 205;
            spr2.y = 180;
            stage.addChild(spr2);
            break;
        }
    }
    buildBackground();
	
	ExternalAPI.exec('showAds');
	ExternalAPI.openWidget(160, 50, "I scored " + win_count + ":" + lose_count + " in TicTacToe game! Try to beat me!");
    
    win_count = 0;
    lose_count = 0;
    return false;
}

function checkHorizontal(x,y,type,winpoint)
{
    var i;
    var check=0;

    for (i = x; i<size; i++)
    {
        if (gameArea[size*y+i].type == type)
        {
            check++;
        }
        else break;
    }

    for (i=x; i>=0; i--)
    {
        if (gameArea[size*y+i].type == type)
        {
            check++;
        }
        else break;
    }

    if (check > winpoint)
    {
        return true;
    }
return false;
}

function checkVertical(x,y,type,winpoint)
{
    var i;
    var check=0;
    for (i = y; i<size; i++)
    {
        if (gameArea[size*i+x].type == type)
        {
            check++;
        }
        else break;

    }
    for (i=y; i>=0; i--)
    {
        if (gameArea[size*i+x].type == type)
        {
            check++;
        }
        else break;
    }
    if (check > winpoint)
    {
        return true;
    }
    return false;
}

function checkDiagonal1(x,y,type,winpoint)
{
    var i;
    var j;
    var check=0;
    for (i=y; i<size; i++)
    {
        var flag = false;
        for (j=x; j<size; j++)
        {
            if ((i - j) == (y - x))
            {
                if (gameArea[size*i+j].type == type)
                {
                    check++;
                }
                else
                {
                    flag = true;
                    break;
                }
            }
        }
        if(flag) break;
    }

    for (i=y; i>=0; i--)
    {
        var flag = false;

        for (j=x; j>=0; j--)
        {
            if ((i - j) == (y - x))
            {
                if (gameArea[size*i+j].type == type)
                {
                    check++;
                }
                else
                {
                    flag = true;
                    break;
                }
            }
        }
        if(flag) break;
    }
    if (check > winpoint)
    {


        return true;
    }
    return false;
}

function checkDiagonal2(x,y,type,winpoint)
{
    var i;
    var j;
    var check=0;
    for (i=y; i<size; i++)
    {
        var flag = false;
        for (j=x; j>=0; j--)
        {
            if ((i + j) == (y + x))
            {
                if (gameArea[size*i+j].type == type)
                {
                    check++;
                }
                else
                {
                    flag = true;
                    break;
                }
            }
        }
        if(flag) break;
    }

    for (i=y; i>=0; i--)
    {
        var flag = false;
        for (j=x; j<size; j++)
        {
            if ((i + j) == (y + x))
            {
                if (gameArea[size*i+j].type == type)
                {
                    check++;
                }
                else
                {
                    flag = true;
                    break;
                }
            }
        }
        if(flag) break;
    }

    if (check > winpoint)
    {


        return true;
    }
    return false;
}

function drawWinnerElement(x,y)
{
    var spr = library.getSprite("wl05");
    if (size == 3)
    {
        spr.x = x30 -dx31*(y+1)+dx32*(y*(dx31/dx32)+1)*x;
        spr.y = y30 + y*dy3;
    }
    else
    {
        spr.scaleX = spr.scaleY = 0.6;
        spr.x = x50 -dx51*(y+1)+dx52*(y/2*(dx51/dx52)+1)*x;
        spr.y = y50 + y*dy5;
    }
    spr.onenterframe = function(e)
    {
        if (e.target.currentFrame == 9)
        {
            e.target.stop();
            e.target.destroy = true;
        }
    }
    stage.addChild(spr);
}

function drawWinnerLine(x,y,type)
{
    clearTimeout(DRAW_WINNER_LINE);
    if (checkHorizontal(x,y,type,winpoints))
    {
        for (i = 0; i<size; i++)
        {
            if (gameArea[size*y+i].type == type)
            {
                drawWinnerElement(i,y);
            }
        }
    }
    else if (checkVertical(x,y,type,winpoints))
    {
        for (i = 0; i<size; i++)
        {
            if (gameArea[size*i+x].type == type)
            {
                drawWinnerElement(x,i);
            }
        }
    }
    else if (checkDiagonal1(x,y,type,winpoints))
    {
        for (i=0; i<size; i++)
        {
            for (j=0; j<size; j++)
            {
                if (((i - j) == (y - x)) && (gameArea[size*i+j].type == type))
                {
                    drawWinnerElement(j,i);
                }
            }

        }
    }
    else if (checkDiagonal2(x,y,type,winpoints))
    {
        for (i=0; i<size; i++)
        {
            for (j=0; j<size; j++)
            {
                if (((i + j) == (y + x)) && (gameArea[size*i+j].type == type))
                {
                    drawWinnerElement(j,i);
                }
            }

        }
    }
    else return false;
}

function checkAllDirection(x,y,type,winpoint)
{
    if (checkHorizontal(x,y,type,winpoint) || checkVertical(x,y,type,winpoint) || checkDiagonal1(x,y,type,winpoint) || checkDiagonal2(x,y,type,winpoint))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function isInArray(type, winpoint)
{
    for (var i=0; i<size; i++)
    {
        for (var j=0; j<size; j++)
        {
            var num = size*i+j;

            if (gameArea[num].type !== null)
            {
                continue;
            }
            else
            {
                gameArea[num].type = type;
                if (checkAllDirection(j,i,type,winpoint))
                {
                   drawElement(xx,num);
                    return true;
                }
                else
                {
                    gameArea[num].type = null;
                }
            }
        }
    }
    return false;
}

function buildBackground()
{
    stage.drawScene(document.getElementById("screen_background"), true);
}

function preTick()
{

}

function postTick()
{

}