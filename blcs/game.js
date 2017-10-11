/*
	Road Rage
	(C) Mark Wilcox 
	More games at www.spacemonsters.co.uk
*/

var GAMETITLE = "ROADRAGE";
var DATAEXPORT = true;

var racecars = [
	{
		"colour" : "green"
	},
	{
		"colour" : "blue"
	},
	{
		"colour" : "purple"
	},
	{
		"colour" : "pink"
	},
	{
		"colour" : "cyan"
	},
	{
		"colour" : "magenta"
	},
	{
		"colour" : "yellow"
	},
	{
		"colour" : "orange"
	},
	{
		"colour" : "red"
	}
];

var cast = [
	{
		"name" : "Nitro Car", 
		"value" : 100,
		"bonus" : "Turbo",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "enemy",
		"hp" : 60,
		"nextbombthink" : 20,
		"nextattackthink" : 30
	},
	{
		"name" : "Spikes", 
		"value" : 500,
		"bonus" : "Spikes",
		"speed" : 8,
		"damage" : 20,
		"destructable" : true,
		"bombs" : false,
		"type" : "enemy",
		"hp" : 60,
		"nextbombthink" : 0,
		"nextattackthink" : 20
	},
	{
		"name" : "Police", 
		"value" : 750,
		"bonus" : "Police",
		"speed" : 16,
		"damage" : 4,
		"destructable" : true,
		"bombs" : true,
		"type" : "enemy",
		"hp" : 350,
		"nextbombthink" : 48,
		"nextattackthink" : 20
	},
	{
		"name" : "Truck", 
		"value" : 200,
		"bonus" : "Truck",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "civilian",
		"hp" : 150,
		"nextbombthink" : 20,
		"nextattackthink" : 24
	},
	{
		"name" : "Ambulance", 
		"value" : 300,
		"bonus" : "Repairs",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "civilian",
		"hp" : 130,
		"nextbombthink" : 0,
		"nextattackthink" : 24
	},
	{
		"name" : "Sports Car", 
		"value" : 200,
		"bonus" : "Super Turbo",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "civilian",
		"hp" : 80,
		"nextbombthink" : 20,
		"nextattackthink" : 20
	},
	{
		"name" : "Tank", 
		"value" : 400,
		"bonus" : "Lasers",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : true,
		"type" : "enemy",
		"hp" : 170,
		"nextbombthink" : 30,
		"nextattackthink" : 20
	},
	{
		"name" : "Super Tank", 
		"value" : 500,
		"bonus" : "Missiles",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : true,
		"type" : "enemy",
		"hp" : 190,
		"nextbombthink" : 30,
		"nextattackthink" : 20
	},
	{
		"name" : "Race Car", 
		"value" : 300,
		"bonus" : "Racer",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "civilian",
		"hp" : 60,
		"nextbombthink" : 0,
		"nextattackthink" : 20
	},
	{
		"name" : "Copter", 
		"value" : 300,
		"bonus" : "Power-up",
		"speed" : 3,
		"damage" : 2,
		"destructable" : true,
		"bombs" : true,
		"type" : "civilian",
		"hp" : 40,
		"nextbombthink" : 16,
		"nextattackthink" : 20
	},
	{
		"name" : "Rocket", 
		"value" : 1000,
		"bonus" : "Rocket",
		"speed" : 8,
		"damage" : 2,
		"destructable" : true,
		"bombs" : false,
		"type" : "civilian",
		"hp" : 800,
		"nextbombthink" : 16,
		"nextattackthink" : 20
	},
	{
		"name" : "Chopper", 
		"value" : 1000,
		"bonus" : "Chopper",
		"speed" : 1,
		"damage" : 0,
		"destructable" : true,
		"bombs" : true,
		"type" : "enemy",
		"hp" : 500,
		"nextbombthink" : 0
	}
];

function setAnimation()
{
	for (var x = 0; x < VENDORS.length && !window.requestAnimationFrame; ++x) {
		requestAnimationFrame = window[VENDORS[x]+'RequestAnimationFrame'];
		cancelAnimationFrame = window[VENDORS[x]+'CancelAnimationFrame'] || window[VENDORS[x]+'CancelRequestAnimationFrame'];
	}
	return  requestAnimationFrame;
};

function init()
{
	try
	{
		ANIM = setAnimation();
		USERAF = USERAF ? (ANIM == null ? false : true) : USERAF;
		/*******************************************************************
			-- SET UP AUDIO HANDLING --
		********************************************************************/

		g.globalranking = null;

		setAudio();
		g.checkSum = gamedata.imageFiles.length + (AUDIO ? gamedata.audioFiles.length : 0); 

		g.canvas = document.querySelector('canvas');
		g.ctx = g.canvas.getContext('2d');
		g.canvas.setAttribute('class', 'canvas');

		g.orientation = document.getElementById("orientate");
		g.ori = 0;

		g.banad = document.getElementById("banad");

		g.console = document.getElementById('console');
		g.console.style.display = 'none';
		g.console.style.textAlign = 'left';
		write("Console ready.");
		BrowserDetect.init();
		write("Browser: " + BrowserDetect.browser + " " + BrowserDetect.version);
		write("Animation: " + (ANIM == null ? "setTimeout()" : ANIM));
		write("OS: " + BrowserDetect.OS);

		setAdverts(false,true);

		window.scrollTo(0,0);

		g.pausemode = 0;
		g.audiomode = AUDIO ? 1 : 0;
		g.musicmode = 1;
		write("AudioMode: " + g.audiomode);

		g.pausemode = 0;
		getData();

	}
	catch (e)
	{
		write(e.message);
	}
};

var ISPORTRAIT = true;

var GAMEWIDTH = 320;
var GAMEHEIGHT = 480;
var GAMEMODE = "PORTRAIT";
var DEFAULTFONTSIZE = 18;
var SCOREFONTSCALE = 1.1;
var CREDITSSCALE = 0.8;
var SCREENROTATIONBANNER = false;

var GREEN = "#a3f633";
var ORANGE = "#ff8800";
var RED = "#f51d00";
var YELLOW = "#ffee00";
var PURPLE = "#7f0a93";

var LOCALISED = false;
var SHADOWTEXT = true;
var GAMEFONT = "'KomikaAxisRegular', sans-serif";
var SCOREFONT = "'KomikaAxisRegular', sans-serif";

/* ===================================== */
/*				ADVERTISING				 */
/* ===================================== */
var ADVERTS		= true;
var PARTNERSPLIT = 0;
var PARTNERURL = "";

var ANIM		= "";
var MINDELAY	= Math.round(1000 / 42);
var DELTA		= 0;
var USERAF		= true;		// Use requestAnimationFrame where supported
var DELTALIMIT	= 1.5;		// DELTA times over this will revert the loop back to setTimeout()
var DELTAMAX	= 10;		// At this value we stop requestAnimFrame
var VENDORS		= ['ms', 'moz', 'webkit', 'o']; // requestAnimationFrame vendor prefix
var requestAnimationFrame = null;
var cancelAnimationFrame = null;

var AUDIO		= true;
var AUDIOFORMAT = null;
var SOUNDTRACK	= true;

function setAdverts(show,pick)
{
	if (!ADVERTS) return;
	if (show)
	{
		g.banad.style.display = "block";
	} else {
		g.banad.style.display = "none";
	}
	if (pick)
	{
		pickAdURL();
	}
};

/*
	-- AJAX ----------------------------------------------------------------------------
*/

var AJAX = {
	"user" : "mark",
	"pass" : "2a4e5174107a8c2c88d3da2fc8e08d1cc65aeb6735758cd9bf6186fccc9d4c60",
	"gameId" : "",
	"playerId" : "",
	"ts" : "",
	"score" : "",
	"url" : "senddata.php",
	"geturl" : "getdata.php",
	"gamename" : ""
};

function getData()
{
	scale();
	preCache();
	g.highscore = 0;
/*	AJAX.gameId = "";
	AJAX.playerId = "";
	g.displayBanner = 0;
	$.ajax({
		url: AJAX.geturl,
		type: "get",
		data: "",
		success: function(msg){
			var a = [];
			a = msg.split("|")
			AJAX.playerId = Math.round(a[0]);
			AJAX.gamename = a[1];
			AJAX.gameId = Math.round(a[2]);
			g.highscore = Math.round(a[3]);
			scale();
			preCache();
		},
		error: function(jqXHR, textStatus, errorThrown) {
			write("Send error: " + jqXHR);
			write("Send error (" + textStatus + "): " + errorThrown);
		}
	});
*/
};

function postData(gameover)
{
	/*
	AJAX.ts = g.time;
	AJAX.score = m.player.targetscore;

	$.ajax({
		url: AJAX.url,
		type: "get",
		data: "user=" + AJAX.user + "&pass=" + AJAX.pass + "&gameId=" + AJAX.gameId + "&playerId=" + AJAX.playerId + "&ts=" + AJAX.ts + "&score=" + AJAX.score + "&go=" + (gameover ? "1" : "0"),
		success: function(msg){
			g.globalranking = msg;
		},
		error: function(jqXHR, textStatus, errorThrown) {
			write("Send error: " + jqXHR);
			write("Send error (" + textStatus + "): " + errorThrown);
		}
	});

	write("SENT user = " + AJAX.user);
	write("SENT pass = " + AJAX.pass);
	write("SENT gameId = " + AJAX.gameId);
	write("SENT playerId = " + AJAX.playerId);
	write("SENT ts = " + AJAX.ts);
	write("SENT score = " + AJAX.score);
	*/
};

/*
	------------------------------------------------------------------------------------
*/


var g = {}; 
g.characterset = new Image(); g.characterset.src = "library/characterset.gif";
g.roadheight = 48;
g.go = 0;
g.audiofail = 0;

var m = { 
	alienbombs : [],
	spritesheets : [],
	player : null,
	spycar : null,
	chopper : null,
	car : null,
	cars : [],
	playershadow : null,
	monster : [],
	numbers : null,
	explosion : [],
	playermissile : [],
	spark : [],
	entity : [],
	tile : [],
	road : [],
	alerter : null,
	audio : [],
	ground : [],
	fringe : [],
	textsprites : [],
	shards : [],
	racers : []
};

var stages = [
	{ 
		colour	: "#000000", 
		road	: "#2c5f9c",
		type	: "night",
		terrain	: "road",
		linecolour : "#ffffff"
	},
	{ 
		colour	: "#13af28", 
		road	: "#666",
		type	: "day",
		terrain	: "road",
		linecolour : "#ffff00"
	},
	{ 
		colour	: "#efefef", 
		road	: "#ccc",
		type	: "day",
		terrain	: "ice",
		linecolour : "#ffffff"
	},
	{ 
		colour	: "#dfb113", 
		road	: "#e5c75f",
		type	: "day",
		terrain	: "sand",
		linecolour : "#f7e6b1"
	},
	{ 
		colour	: "#013860", 
		road	: "#777777",
		type	: "night",
		terrain	: "road",
		linecolour : "#d2cd40"
	},
	{ 
		colour	: "#bf0000", 
		road	: "#ca612e",
		type	: "day",
		terrain	: "hot",
		linecolour : "#fadf5f"
	}
];

var gameaudio = []; 

g.checkCount = 0;
g.imageData = [];
g.audioData = [];
g.audioSupport = [ { "MP3" : false, "WAV" : false, "OGG" : false, "AAC" : false } ];
g.audioContext = null;
g.audiofail = 0;
g.loadingbarbase = new Image(); g.loadingbarbase.src = "library/loadingbarbase.png";
g.loadingbarstrip = new Image(); g.loadingbarstrip.src = "library/loadingbarstrip.png";


function createSprites()
{
	try
	{
		write("Creating sprites");
		// Load game media
		for (var a=0;a<imglib.length;a++)
		{
			m.spritesheets[imglib[a].sheetname] = new spritesheet(imglib[a]);
		}
		g.titlescreen = new Image(); g.titlescreen.src = g.imageData[0].src; // Always the first one.
		g.gamebackdrops = [];
		g.gamebackdrops[0] = new Image(); g.gamebackdrops[0].src = "library/gamebackdrop.png";
		g.gamebackdrops[1] = new Image(); g.gamebackdrops[1].src = "library/blank.gif";
		g.playpause = new Image(); g.playpause.src = "library/playpause.png";
		g.volumecontrol = new Image(); g.volumecontrol.src = "library/volumecontrols.png";
		g.splash = new Image(); g.splash.src = "library/splash.png";

		g.bar = new Image(); g.bar.src = "library/bar.png";
		g.fringe = new Image(); g.fringe.src = "library/fringesheet.png";
		g.choppershadow = new Image(); g.choppershadow.src = "library/choppershadow.png";

		m.player = new sprite("player", "player", m.spritesheets["playersheet"], 0, 0, 6, 4, 1);
		m.chopper = new sprite("chopper", "chopper", m.spritesheets["choppersheet"], 0, 0, 8, 4, 0);
		m.car = new sprite("car", "car", m.spritesheets["carsheet"], 0, 0, 8, 4, 0);
		m.playershadow = new sprite("playershadow", "playershadow", m.spritesheets["playershadow"], 0, 0, 8, 4, 1);
		m.numbers = new sprite("numbers", "numbers", m.spritesheets["numberssheet"], 0, 0, 0, 0, 1);
		for (var a=0;a<9;a++) m.racers[a] = new sprite("racer"+a, "racer", m.spritesheets["racersheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<64;a++) m.cars[a] = new sprite("cars"+a, "cars", m.spritesheets["carsheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<64;a++) m.shards[a] = new sprite("shards"+a, "shards", m.spritesheets["shardssheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<128;a++) m.explosion[a] = new sprite("explosion"+a, "explosion", m.spritesheets["explosionsheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<32;a++) m.entity[a] = new sprite("entity"+a, "entity", m.spritesheets["entitysheet"], 0, 0, 0, 0, 0);
		for (var a=0;a<8;a++) m.tile[a] = new sprite("tile"+a, "tile", m.spritesheets["tilesheet"], 0, 0, 0, 0, 0);
		for (var a=0;a<64;a++) m.playermissile[a] = new sprite("playermissile"+a, "playermissile", m.spritesheets["playermissilesheet"], 0, 0, 8, 0, 0);
		for (var a=0;a<((g.canvasheight / 48)+1);a++) m.road[a] = new road("road" + a, 0, g.roadheight, 24, g.roadheight * -1, "#eee", 4);
		for (var a=0;a<((g.canvasheight / 48)+1);a++) m.ground[a] = new sprite("ground"+a, "ground", m.spritesheets["groundsheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<((g.canvasheight / 48)+1);a++) m.ground[a] = new sprite("ground"+a, "ground", m.spritesheets["groundsheet"], 0, 0, 2, 0, 0);
		for (var a=0;a<32;a++) m.alienbombs[a] = new sprite("alienbomb"+a, "alienbomb", m.spritesheets["alienbomb"], 0, 0, 2, 0, 0);
		for (var a=0;a<32;a++) m.textsprites[a] = new textsprite("textsprite"+a,-32,-32,"",0.1);

		m.player.extralife = [];

		initTouch();
		initHiScore();
		
		// TICKER
		if (USERAF)
		{
			window.requestAnimationFrame(loop, null);
		} else {
			g.ticker = setTimeout("loop()", MINDELAY);
		}
		setSplash();
	}
	catch (e)
	{
		write("CreateSprites:" + e.message);
	}
};

function loadSound(o)
{
	try
	{
		var request = new XMLHttpRequest();
		var url = "sfx/" + o.soundname + "." + AUDIOFORMAT;
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';

		// Decode asynchronously
		request.onload = function ()
		{
			try
			{
				g.audioContext.decodeAudioData(request.response, 
					function(buffer) 
					{ 
						o.buffer = buffer;
						o.volume = o.soundname == "titlemusic" ? 0.4 : (o.soundname == "explode1" || o.soundname == "explode2" ? 0.4 : 0.65);
					}, 
					function()
					{
						write("Decode error: " + url + ", " + arguments[0]);
					}
				);
				check();
			}
			catch (e)
			{
				write("loadSound(onLoad): " + e.message);
			}
		}
		request.send();
	}
	catch (e)
	{
		write("LoadSound: " + e.message);
		check("AUDIO"); // Force the check count despite error.
	}
};

function preCache() {

	if (AUDIO)
	{
		// Effects
		for (var a=0;a<(gamedata.audioFiles.length);a++)
		{
			m.audio[gamedata.audioFiles[a]] = { source : null, count : 0, gainNode: null, soundname : gamedata.audioFiles[a] };
			write(gamedata.audioFiles[a]);
			loadSound(m.audio[gamedata.audioFiles[a]]);
		}
	}
	for (var a=0;a<gamedata.imageFiles.length;a++)
	{
		g.imageData[a] = new Image();
		g.imageData[a].src = gamedata.imageFiles[a];
		write(gamedata.imageFiles[a]);
		g.imageData[a].onload = check;
	}
	
};

function check(checktype) {
	try
	{
		if (checktype && checktype === "AUDIO")
		{
			// Audio load / decode failure
			g.audiofail ++;
			if (g.audiofail >= (gamedata.audioFiles.length - 1)) 
			{ 
				AUDIO = false; 
				write("Audio switch off. No audio files loaded.");
			}
		}
		g.checkCount ++;
		var w = 252;
		var h = 28;
		var pc = Math.round((g.checkCount / g.checkSum) * 100);
		var bar = Math.round(w * (pc / 100));
		var x = 34 + bar;
		var y = 214;
		g.ctx.drawImage(g.loadingbarstrip,0,180);
		g.ctx.fillStyle = "#191919";
		g.ctx.fillRect(x,y,286-x,h);
		g.ctx.drawImage(g.loadingbarbase,0,180);
		if (g.checkCount >= g.checkSum)
		{
			createSprites();
		}
	}
	catch (e)
	{
		write("Check: " + e.message);
	}
};


function rnd(threshold)
{
	return Math.floor(Math.random()*threshold) + 1;
};


function scale()
{
	sizeHandler();
};

function sizeHandler () {

	if (!document.getElementById('game'))
	{
		return;
	}

	g.gamecanvas = document.getElementById('game');

	window.setTimeout(function() {
		window.scrollTo(0, 1);

		var rw = GAMEWIDTH;
		var rh = GAMEHEIGHT;
		var w = window.innerWidth;
		var h = window.innerHeight;

		g.factorx = w / rw;
		g.factory = h / rh;

		var multiplier = Math.min((h / rh), (w / rw));
		var actualCanvasWidth = rw * multiplier;
		var actualCanvasHeight = rh * multiplier;

		g.canvaswidth = rw;
		g.canvasheight = rh;
		g.canvas.width = g.canvaswidth;
		g.canvas.height = g.canvasheight;

		g.canvaspadding = 0;
		g.displaypadding = 0;

		g.textcentre = g.canvaswidth / 2;
		g.canvascentre = g.canvasheight / 2;
		g.horizon = g.canvasheight / 2;

		g.widthratio = w / g.canvaswidth;
		g.heightratio = h / g.canvasheight;

		if (w > h)
		{
			document.getElementById('orientate').style.display = "none";
			g.gamecanvas.style.display = "block";
			g.gamecanvas.style.width = actualCanvasWidth + "px";
			g.gamecanvas.style.height = actualCanvasHeight + "px";
			g.gamecanvas.style.position = "relative";
			g.gamecanvas.style.margin = "0px auto 0px auto";
		}
		else
		{
			if (w == 320)
			{
				multiplier = 1;
				document.getElementById('orientate').style.display = "none";
				g.gamecanvas.style.display = "block";
				g.gamecanvas.style.width = "320px";
				g.gamecanvas.style.height = "480px";
				g.gamecanvas.style.position = "absolute";
				g.gamecanvas.style.left = "0px";
				g.gamecanvas.style.top = "0px";
			}
			else if (w > 320)
			{
				document.getElementById('orientate').style.display = "none";
				g.gamecanvas.style.display = "block";
				g.gamecanvas.style.width = actualCanvasWidth + "px";
				g.gamecanvas.style.height = actualCanvasHeight + "px";
				g.gamecanvas.style.position = "relative";
				g.gamecanvas.style.margin = "0px auto 0px auto";
			}
		}
		preCache();

	}, 1000);

};

window.addEventListener('resize', function(evt) { sizeHandler(); }, false);
window.addEventListener('orientationchange', function(evt) { sizeHandler(); }, false);


function initTouch()
{
	try
	{
		if(checkForTouch()) {
			if (document.body.addEventListener)
			{
				document.body.addEventListener('touchmove', touchMove, false);
				document.body.addEventListener('touchstart', touchStart, false);
			} else {
				window.addEventListener('touchmove', touchMove, false);
				window.addEventListener('touchstart', touchStart, false);
			}
		} else {
			window.addEventListener('mousemove', mouseMove, false);
			window.addEventListener('mouseup', mouseUp, false);
			write("No touch capability.");
		}
		
	}
	catch (e)
	{
		write("InitTouch: " + e.message);
	}
};

function initHiScore()
{
	try
	{
		m.player.hiscore = 0;
		if (g.highscore < 1)
		{
			if (typeof localStorage.key == "function")
			{
				if (localStorage.getItem(GAMETITLE + "-hiscore") != null)
				{
					m.player.hiscore = localStorage.getItem(GAMETITLE + "-hiscore");
				} else {
					m.player.hiscore = 0;
				}
			}
		} else {
			m.player.hiscore = g.highscore;
		}
		
	}
	catch (e)
	{
		write("InitHiScore: " + e.message);
	}
};

function checkForTouch() {		
	var d = document.createElement("div");
	d.setAttribute("ontouchmove", "return;");
	return typeof d.ontouchmove == "function" ? true : false;
};

function touch(event) {
	if (g.mode == "title") { sfx("bonuscollect"); setGame(); }
	if (g.mode == "attract") { sfx("bonuscollect"); setTitle(); }
	if (g.mode == "pregame" && g.resetting < 50) 
	{ 
		g.mode = "game";
	}
	var o = m.player;
	var tx = (event.pageX) / g.factorx;
	var ty = (event.pageY) / g.factory;

	if (tx < 64 && ty < 64) g.pausemode ++; if (g.pausemode > 1) g.pausemode = 0;

	if (g.pausemode < 1 && m.player.spinning < 1 && !m.player.dying)
	{
		o.targetx = tx;
	}

	g.speedup = false; g.slowdown = false;
};

function touchStart(event) {
	touch(event.touches[0]);
	window.scrollTo(0, 1);
};

function touchMove(event) {
	touch(event.touches[0]);
	event.preventDefault();
};

function mouseMove(event) {
	if (g.mode != "title" && g.mode != "attract") touch(event);
};

function mouseUp(event) {
	touch(event);
};

function setSplash()
{
	g.mode = "splash";
	g.resetting = 100;
	setAdverts(false,false);
	write("Setting splash");
	write("m.ground.length = " + m.ground.length);
	write("m.road.length = " + m.road.length);
};

function setTitle()
{
	g.mode = "title";
	g.pausemode = 0;
	g.stage = 0; setStage();
	setGround();
	g.roadspeedmax = 4;
	g.roadspeed = g.roadspeedmax;
	g.roadwidth = 280; 
	g.roadx = (g.canvaswidth / 2) - (g.roadwidth / 2);
	g.blink = 40;
	g.attractmode = { ticker: 200, max: 200 };
	setRoad();
	setAdverts(true,false);
	$("#promotion").hide();
};

function setGame()
{
	setAdverts(false,false);
	setGround();
	m.player.score = 0;
	m.player.targetscore = 0;
	m.player.lives = 3;
	m.player.extralife[0] = false;
	m.player.extralife[1] = false;
	m.player.checkpoints = 0;
	m.player.wantedlevel = 0;

	m.player.medals = 0;

	g.level = 1;
	g.displaylevel = 1;

	g.resetting = 120;
	g.roadwidth = 180;
	g.roadx = (g.canvaswidth / 2) - (g.roadwidth / 2);
	g.stage = 0;
	g.miles = 0;
	g.spymiles = 0;
	g.spiescaught = 0;
	g.scoremiles = 0;
	g.carsdestroyed = 0;
	g.stagecarsdestroyed = 0;
	g.bonuspoints = 0;
	g.roadcolourtoggle = 0;

	setLevel(); 
	
	preGame();
	setRoad(null);
	g.carnextthink = 0;
	g.carnextthinkmax = 12;
	g.spawnside = 0;
	g.choppernextthink = 0;
	g.choppernextthinkmax = 60;
	g.checkpointresetting = 0;
	
	g.stagetimer = 30;

	g.policecar = false;
	g.copterattack = false;

	/* Racers */
	g.racetarget = 100; // Total race goal
	g.target = 85; // Increment for goal
	for (var a=0;a < m.cars.length;a++)
	{
		m.cars[a].visible = false;
	}
	for (var a=0;a < m.racers.length;a++)
	{
		m.racers[a].visible = false;
		m.racers[a].position = m.racers.length - a;
	}
	setRacers();
	m.player.position = m.racers.length + 1;
	/* End Racers */

	g.time = new Date();
	g.musicmode = 1;
	g.checkpointx = g.canvaswidth;
	g.checkpointx2 = g.canvaswidth + 16;

	g.laststagetimer = g.stagetimer;

	musicMode();
};

function setAttractMode()
{
	wipe(true);
	g.attractmode.ticker = 10;
	g.attractmode.max = 20;
	g.attractmode.x = g.textcentre - 128;
	g.attractmode.y = -32;
	g.mode = "attract";
	setAdverts(false,false);
	g.attractmode.count = 0;
	g.attractmode.countmax = parseInt(m.spritesheets["carsheet"].height) / parseInt(m.spritesheets["carsheet"].frameheight);
};

function setRacers()
{
	try
	{
		for (var a=0;a< m.racers.length;a++)
		{
			spawnRacer(g.textcentre - 24, -96, ((a+1)*1.25),0,1,a);
		}
		g.racers = m.racers.length + 1;
	}
	catch (e)
	{
		write("SetRacers: " + e.message);
	}
};

function preGame()
{
	g.mode = "pregame";
	g.nextthink = 0;
	g.nextthinkmax = 80;
	g.resetting = 150;
	g.roadspeedmax = 4;
	g.targetroadspeed = g.roadspeedmax;
	g.highestpossibleroadspeed = 18;
	g.copterattack = false;
	g.policecar = false;
	playerStart();
	if (g.level > 1 && g.stagetimer < 10) g.stagetimer += 5;
	g.howtoplay = rnd(howtoplay.length) - 1;
	if (g.howtoplay == 0) spawnEntity(g.textcentre - 8, 200, 0,0,0);
	if (g.howtoplay == 1) spawnEntity(g.textcentre - 8, 200, 7,0,0);
};

function setGround()
{
	var y = 0;
	var x = 0;
	for (var a=0;a < m.ground.length;a++)
	{
		var o = m.ground[a];
		o.visible = true;
		o.x = 0;
		o.y = y;
		o.direction = 4;
		y += 48;
	}
};

function setLevel()
{
	wipe(true);
	g.resetting = 120;
	g.roadnextthinkmax = 20;
	g.roadnextthink = g.roadnextthinkmax;
	g.roaddir = rnd(10) < 5 ? 0 : 1;
	setStage();
};

function setRoad(o)
{
	try
	{
		if (o != null && typeof(o) == "object")
		{
			// set road credentials here
			if (g.mode == "pregame" || g.mode == "title" || g.mode == "attract")
			{
				o.x = g.roadx;
				spawnTileChance(o);
				o.colour = stages[g.stage].road;
			} else {
				g.roadnextthink -= DELTA;
				if (g.roadnextthink < 0)
				{
					g.roadnextthink = g.roadnextthinkmax;
					g.roadnextthinkmax = rnd(30); 
					g.roaddir = rnd(10) < 5 ? 0 : 1;
					g.roadscaling = 4 + rnd(m.player.boosting > 0 ? 0 : 6);
					g.targetwidth = g.canvaswidth * (g.roadscaling*0.1);
				}

				var r = g.targetwidth;
				if (g.roadwidth > r) { g.roadwidth -= 1; if (g.roadwidth < r) g.roadwidth = r; }
				if (g.roadwidth < r) { g.roadwidth += 1; if (g.roadwidth > r) g.roadwidth = r; }

				g.roadx += g.roaddir > 0 ? 2 : -2;
				if (g.roadx > (g.canvaswidth - g.roadwidth)) g.roadx = g.canvaswidth - g.roadwidth;
				if (g.roadx < 0) g.roadx = 0;
				o.boost = false;
				o.x = g.roadx;
				o.w = g.roadwidth;
				g.roadcolourtoggle ++; if (g.roadcolourtoggle > 1) g.roadcolourtoggle = 0;
				o.colour = stages[g.stage].road;
				spawnTileChance(o);

				g.carnextthink -= DELTA;
				if (g.carnextthink < 1)
				{
					g.carnextthink = m.player.boosting > 0 ? g.carnextthinkmax * 4 : g.carnextthinkmax;
					spawnCarChance(o);
				}
				g.choppernextthink -= DELTA;
				if (g.choppernextthink < 1)
				{
					g.choppernextthink = g.choppernextthinkmax;
					spawnChopperChance(o);
				}
			}
		} else {
			for (var a=0;a<m.road.length;a++)
			{
				m.road[a].x = g.roadx;
				m.road[a].y = -g.roadheight + (a * g.roadheight);
				m.road[a].w = g.roadwidth;
				m.road[a].h = g.roadheight;
				m.road[a].colour = stages[g.stage].road;
				m.road[a].direction = 4;
				m.road[a].bump = false;
			}	
		}
		
	}
	catch (e)
	{
		write(e.message);
	}
	
};

function setLandscape()
{
	g.oldmode = g.mode;
	g.mode = "landscape";
};

function playerStart()
{
	m.player.visible = true;
	m.player.x = g.canvaswidth / 2 - (m.player.w / 2);
	m.player.y = g.canvasheight - 148;
	m.player.basey = g.canvasheight - 148;

	m.playershadow.x = m.player.x;
	m.playershadow.y = m.player.y + 6;
	m.playershadow.targetx = m.player.x;
	m.playershadow.targety = m.player.y + 6; 
	m.playershadow.row = 0;
	m.playershadow.startframe = 0;

	m.player.targetx = m.player.x;
	m.player.targety = g.canvasheight - 156; 
	m.player.health = 100;
	m.player.stars = 0;
	m.player.magicpower = 0;
	m.player.row = 0;
	m.player.startframe = 0;
	m.player.damage = 0;
	m.player.boosting = 0;
	m.player.power = 0;
	m.player.jumping = true;
	m.player.offroad = false;
	m.player.spritesheet.framesperdirection = 2;
	m.player.dying = false;
	m.player.exploding = false;
	m.player.missiletype = 0;
	m.player.missilepower = 0;

	m.player.missilecooldownmax = 14;
	m.player.missilecooldown = m.player.missilecooldownmax;
	m.player.missilecount = 1;

	m.player.rank = 0;

	m.player.spindir = null;
	g.clockstart = new Date();

};

function wipe(doentities)
{
	for (var a=0;a<m.cars.length;a++) m.cars[a].visible = false;
	for (var a=0;a<m.shards.length;a++) m.shards[a].visible = false;
	for (var a=0;a<m.alienbombs.length;a++) m.alienbombs[a].visible = false;
	m.chopper.visible = false;
	for (var a=0;a<m.explosion.length;a++) m.explosion[a].visible = false;
	if (doentities) for (var a=0;a<m.entity.length;a++) { m.entity[a].visible = false; m.entity[a].x = -32; m.entity[a].y = -32; }
};

function playerDamage(damage)
{
	if (m.player.dying || m.player.exploding) return;
	m.player.damage += damage;
	if (m.player.damage < 0) m.player.damage = 0;
	if (m.player.damage >= 100) playerDeath();
};

function playerDeath()
{
	if (m.player.dying) return;
	m.player.dying = true;
	g.resetting = 10;
};

function drawPlayer(o)
{
	var s = m.playershadow;
	if (!o.visible) return;
	try
	{
			g.ctx.save();
			if (isNaN(o.frame)) o.frame = o.startframe;
			o.framedelay -= DELTA;

			if (!o.dying) { o.startframe = 0; }

			if (o.framedelay < 0)
			{
				o.framedelay = o.framedelaymax;
				o.frame ++;
				if (o.frame >= (o.startframe + o.spritesheet.framesperdirection))
				{
					o.frame = o.startframe;
				}
			}
			if (o.inpain) { o.frame = o.spritesheet.painframe; o.inpain = false; }

			o.angle = g.mode == "caughtspy" ? o.angle += 0.5 : (o.targetx > (o.x + (o.w*2)) ? 10 : o.targetx < (o.x-o.w) ? 350 : 0);
			if (g.mode == "caughtspy" && o.angle > 20) o.angle = 20;
			g.ctx.translate(o.x + (o.w/2),o.y + (o.h/2));
			g.ctx.rotate(o.angle * (Math.PI / 180));
			s.frame = stages[g.stage].type=="night"?1:0;
			g.pc = isNaN(g.pc) ? 0 : g.pc;
			o.row = (g.pc < 0.25) && (g.mode == "game") ? 1 : 0;
			var render = true;
			if (g.mode == "pregame" && (Math.round(g.resetting) % 2 == 0)) render = false;
			if (render) g.ctx.drawImage(s.spritesheet.image, s.frame * s.spritesheet.framewidth, 0, Math.round(s.w), Math.round(s.h), Math.round(-s.w/2), stages[g.stage].type == "night" ? Math.round((-s.h/2)-40) : Math.round((-s.h/2)+4), Math.round(s.w), Math.round(s.h));
			if (render) g.ctx.drawImage(o.spritesheet.image, o.frame * o.spritesheet.framewidth, getPlayerRow(m.player) * o.spritesheet.frameheight, Math.round(o.w), Math.round(o.h), Math.round(-o.w/2), Math.round(-o.h/2), Math.round(o.w), Math.round(o.h));
			g.ctx.restore();
	}
	catch (e)
	{
		write("DrawPlayer: " + o.frame + " - " + e.message);
	}

};

function getPlayerRow(o)
{
	if (o.damage > 20) return 1; else
	if (o.damage > 50) return 2; else 
	if (o.damage > 80) return 3; else
		return 0;
};

function draw(o)
{
	if (!o.visible) return;
	try
	{
		if (isNaN(o.angle)) o.angle = 0;
		if (isNaN(o.attacking)) o.attacking = 0;
		if (o.attacking > 0)
		{
			o.attacking -= DELTA;
			o.frame = o.spritesheet.attackframe;
		} else {
			if (isNaN(o.frame)) o.frame = o.startframe;
			o.framedelay -= DELTA;
			if (o.framedelay < 0 && g.pausemode < 1)
			{
				o.framedelay = o.framedelaymax;
				if (o.spritesheet.type == "explosion")
				{
					o.frame ++;
					if (o.frame >= (o.startframe + o.spritesheet.framesperdirection))
					{
						remove(o);
					}
				} else {
					o.frame ++;
					if (o.frame >= (o.startframe + o.spritesheet.framesperdirection))
					{
						o.frame = o.startframe;
					}
				}
			}
			if (o.inpain) { o.frame = o.spritesheet.painframe; o.inpain = false; }
		}
		g.ctx.save();
		g.ctx.translate(o.x + (o.w/2),o.y + (o.h/2));
		g.ctx.rotate(o.angle * (Math.PI / 180));
		if ((o.spritesheet.type == "entity" && (o.row == 0 || o.row == 7)) || o.spritesheet.type == "shards")
		{
			o.angle += o.spritesheet.type == "entity" ? (o.row == 0 ? 8 : 4) : o.anglespeed;
			if (o.angle > 360) o.angle = 0;
		}

		var render = true;
		if (o.dying > 0)
		{
			o.dying -= DELTA;
			if (Math.round(o.dying) % 5 == 0) { spawnExplosion(o,rnd(8)-1,rnd(3),false); if (o.dying < 40) { sfx("ping"); } }
			if (Math.round(o.dying) % 10 == 0 && o.spritesheet.type == "chopper") { spawnMedal(o); }
			if (o.dying < 1) { remove(o); spawnMonsterExplosion(o);	}
		}
		if (o.spritesheet.type == "entity")
		{
			if (Math.round(o.decay) < 80 && Math.round(o.decay) % 2 == 0)
			{
				render = false;
			}
		}
		if (o.spritesheet.type == "chopper" && render)
		{
			g.ctx.drawImage(g.choppershadow,0,0,o.w,o.h,Math.round(-o.shadoww/2), Math.round(-o.shadowh/2)+70, o.w, o.h);
		}
		if (o.spritesheet.type == "car" && render)
		{
			if (cast[o.row].name == "Copter") o.oncoming = false;
			g.ctx.scale(1, o.oncoming ? -1 : 1);
		}
		if (render && o.visible)
		{
			g.ctx.drawImage(o.spritesheet.image, o.frame * o.spritesheet.framewidth, o.row * o.spritesheet.frameheight, o.w, o.h, Math.round(-o.w/2), Math.round(-o.h/2), o.w, o.h);
		}
		g.ctx.restore();
	}
	catch (e)
	{
		write(o.row + " - " + o.spritesheet.type + ", " + o.frame + " - " + e.message);
	}

};

function drawRacer(o)
{
	if (!o.visible) return;
	try
	{
		var s = m.playershadow;
		if (isNaN(o.angle)) o.angle = 0;
		if (isNaN(o.frame)) o.frame = o.startframe;
		o.framedelay -= DELTA;
		if (o.framedelay < 0 && g.pausemode < 1)
		{
			o.framedelay = o.framedelaymax;
			o.frame ++;
			if (o.frame >= (o.startframe + o.spritesheet.framesperdirection))
			{
				o.frame = o.startframe;
			}
		}
		g.ctx.save();
		g.ctx.translate(o.x + (o.w/2),o.y + (o.h/2));
		g.ctx.rotate(o.angle * (Math.PI / 180));
		g.ctx.drawImage(s.spritesheet.image, s.frame * s.spritesheet.framewidth, 0, Math.round(s.w), Math.round(s.h), Math.round(-s.w/2), stages[g.stage].type == "night" ? Math.round((-s.h/2)-40) : Math.round((-s.h/2)+4), Math.round(s.w), Math.round(s.h));
		g.ctx.drawImage(o.spritesheet.image, o.frame * o.spritesheet.framewidth, o.row * o.spritesheet.frameheight, o.w, o.h, Math.round(-o.w/2), Math.round(-o.h/2), o.w, o.h);
		g.ctx.restore();
		writeText(Math.round(o.miles),o.x+(o.w/2),o.y,32,"Arial","#ffffff","center",null,"#000000");
	}
	catch (e)
	{
		write("DrawRacer: " + e.message);
	}

};

function moveRoad(o)
{
	if (g.pausemode > 0) return;
	switch (o.direction)
	{
		case 4:
			o.y += g.roadspeed * DELTA;
			break;
		case 0:
			o.y -= g.roadspeed * DELTA;
			break;
	}
	if (o.y > g.canvasheight)
	{
		o.y = (g.roadheight * -1) + (o.y - g.canvasheight) + 1;
		setRoad(o);
	}
	g.middleroad = Math.round(o.x + (o.w / 2));
};

function drawRoad(o)
{
	g.ctx.fillStyle = o.colour;
	g.ctx.fillRect(o.x,Math.round(o.y),o.w,o.h); // Road
	var x1 = o.x + (o.w / 2) - 6;
	var x2 = o.x + (o.w / 2) + 2;
	g.ctx.fillStyle = stages[g.stage].linecolour;
	g.ctx.fillRect(x1,Math.round(o.y),4,o.h);
	g.ctx.fillRect(x2,Math.round(o.y),4,o.h);
	/* Fringes */
	g.ctx.drawImage(g.fringe,0,Math.floor(g.stage*48),24,48,o.x,Math.round(o.y),24,48);
	g.ctx.save();
	g.ctx.drawImage(g.fringe,24,Math.floor(g.stage*48),24,48,o.x+(o.w-24),Math.round(o.y),24,48);
	g.ctx.restore();
};

function moveGround(o)
{
	if (g.pausemode > 0) return;
	switch (o.direction)
	{
		case 4:
			o.y += g.roadspeed * DELTA;
			break;
		case 0:
			o.y -= g.roadspeed * DELTA;
			break;
	}
	if (o.y > g.canvasheight)
	{
		o.y = (g.roadheight * -1) + (o.y - g.canvasheight) + 1;
	}
};

function drawGround(o)
{
	try
	{
		g.ctx.drawImage(o.spritesheet.image, 
						0, 
						g.stage * o.spritesheet.frameheight, 
						o.spritesheet.framewidth, 
						o.spritesheet.frameheight, 
						Math.round(o.x), Math.round(o.y), o.w, o.h);
	}
	catch (e)
	{
		write("DrawGround: " + e.message);
	}
};

function moveToTarget(o)
{
	if (!o.visible || o.dead || g.pausemode > 0) return;

	o.oldx = o.x;
	o.oldy = o.y;

	if (o.spritesheet.type == "player" && g.mode == "pregame")
	{
		if (Math.round(o.y) > Math.round(o.targety))
		{
			o.y -= (o.speed / 2) * DELTA;
		}
	} 

		if (o.targetx < 0 && o.targety < 0)
		{
			switch (o.direction)
			{
			case 0:
				o.y -= o.speed * DELTA;
				break;			
			case 1:
				o.y -= (o.speed / 1.5) * DELTA;
				o.x += (o.speed / 1.5) * DELTA;
				break;			
			case 2:
				o.x += o.speed * DELTA;
				break;			
			case 3:
				o.y += (o.speed / 1.5) * DELTA;
				o.x += (o.speed / 1.5) * DELTA;
				break;			
			case 4:
				o.y += o.speed * DELTA;
				break;			
			case 5:
				o.y += (o.speed / 1.5) * DELTA;
				o.x -= (o.speed / 1.5) * DELTA;
				break;			
			case 6:
				o.x -= o.speed * DELTA;
				break;			
			case 7:
				o.y -= (o.speed / 1.5) * DELTA;
				o.x -= (o.speed / 1.5) * DELTA;
				break;			
			}
		} else {
			if (o.jumping)
			{
				if (o.y >= o.targety)
				{
					if (!o.bounced)
					{
						o.bounced = true;
						o.y = o.y - 8 * DELTA;
						o.speed = -8;
					} else {
						o.speed = o.basespeed;
						o.jumping = false;
					}
				}
				if (o.dying > 0)
				{
					if (o.targetx > o.x) { o.x += o.speed * DELTA; }
					if (o.targetx < o.x) { o.x -= o.speed * DELTA; }
					if (o.targety < o.y) { o.y -= o.speed * DELTA; }
					if (o.targety > o.y) { o.y += o.speed * DELTA; }
					if (o.y < 0)
					{
						remove(o);
					}
				}
				if (o.bounced) o.speed += 2;
				if (o.y < o.targety) { o.y += o.speed; }
			} else {
				// Target co-ords set by screen touch.
				if (o.targetx > (o.x + (o.w/2))) { o.x += o.spinning > 0 ? (o.speed / 2) * DELTA : o.speed * DELTA; }
				if (o.targetx < (o.x + (o.w/2))) { o.x -= o.spinning > 0 ? (o.speed / 2) * DELTA : o.speed * DELTA; }
				if (o.targety < o.y) { o.y -= o.speed * DELTA; }
				if (o.targety > o.y) { o.y += o.speed * DELTA; }
				if (o.offroad && g.mode != "caughtspy" && !o.dying)
				{
					o.x += rnd(10)<5?rnd(4) * DELTA:(rnd(4)*DELTA)*-1;
				}
				if (o.spritesheet.type == "player")
				{
					m.playershadow.x = o.x;
					m.playershadow.targetx = o.x;
					m.playershadow.y = o.y + 6;
				}
			}
		}
		if (o.dying < 1)
		{
			if (o.x < g.canvaspadding) o.x = g.canvaspadding;
			if ((o.x + o.w) > (g.canvaswidth - g.canvaspadding)) o.x = g.canvaswidth - g.canvaspadding - o.w;
			if (o.y < g.canvaspadding) o.y = g.canvaspadding;
			if ((o.y + o.h) > (g.canvasheight - g.canvaspadding)) o.y = g.canvasheight - g.canvaspadding - o.h;
		}
};

function bombPlayerCollision(o,m) 
{
	if (!o.visible || !m.visible || m.dying || g.pausemode > 0) return;

	var t1 = 4; 
	var t2 = 8;

	var mx = o.x;
	var my = o.y;
	var mw = o.w;
	var mh = o.h;

	var ox = m.x;
	var oy = m.y;
	var ow = m.w;
	var oh = m.h;

	var c1 = false, c2 = false, c3 = false, c4 = false;
	
	if ((mx + t1) > (ox + t2) && (mx + t1) < (ox + ow - t2) && (my + t1) > (oy + t2) && (my + t1) < (oy + oh - t2)) c1 = true;
	if ((mx + mw - t1) > (ox + t2) && (mx + mw - t1) < (ox + ow - t2) && (my + t1) > (oy + t2) && (my + t1) < (oy + oh - t2)) c2 = true;
	if ((mx + mw - t1) > (ox + t2) && (mx + mw - t1) < (ox + ow - t2) && (my + mh - t1) > (oy + t2) && (my + mh - t1) < (oy + oh - t2)) c3 = true;
	if ((mx + t1) > (ox + t2) && (mx + t1) < (ox + ow - t2)  && (my + mh - t1) > (oy + t2) && (my + mh - t1) < (oy + oh - t2)) c4 = true;

	if (c1 == true || c2 == true || c3 == true || c4 == true)
	{
		remove(o);
		spawnExplosion(m,4,1,false);
		playerDamage(100);//o.row == 0 ? 40 : 60);
	}
};

function moveEntity(o)
{
	if (!o.visible || g.pausemode > 0) return;

	o.decay -= DELTA;
	if (o.decay < 0) remove(o);

	switch (o.direction)
	{
	case 0:
		o.y -= o.speed * DELTA;
		break;			
	case 1:
		o.y -= (o.speed / 1.5) * DELTA;
		o.x += (o.speed / 1.5) * DELTA;
		if (o.x + o.w > g.canvaswidth) o.direction = 7;
		if (o.y < 128) o.direction = 3;
		break;			
	case 2:
		o.x += o.speed * DELTA;
		break;			
	case 3:
		o.y += (o.speed / 1.5) * DELTA;
		o.x += (o.speed / 1.5) * DELTA;
		if (o.x + o.w > g.canvaswidth) { o.direction = 5; o.xmod = o.xmod * -1; }
		if (o.y > g.canvasheight) remove(o);
		break;			
	case 4:
		o.y += o.speed * DELTA;
		break;			
	case 5:
		o.y += (o.speed / 1.5) * DELTA;
		o.x -= (o.speed / 1.5) * DELTA;
		if (o.x < 0) { o.direction = 3; o.xmod = o.xmod * -1; }
		if (o.y > g.canvasheight) remove(o);
		break;			
	case 6:
		o.x -= o.speed * DELTA;
		break;			
	case 7:
		o.y -= (o.speed / 1.5) * DELTA;
		o.x -= (o.speed / 1.5) * DELTA;
		if (o.x < 0) o.direction = 1;
		if (o.y < 128) o.direction = 5;
		break;			
	}
	o.y -= o.ymod;
	o.ymod -= DELTA; if (o.ymod < -2) o.ymod = -2;
	o.x -= o.xmod;
};

function move(o)
{
	if (!o.visible || g.pausemode > 0) return;

	switch (o.direction)
	{
	case 0:
		o.y -= o.speed * DELTA;
		break;			
	case 1:
		o.y -= (o.speed / 1.5) * DELTA;
		o.x += (o.speed / 1.5) * DELTA;
		break;			
	case 2:
		o.x += o.speed * DELTA;
		break;			
	case 3:
		o.y += (o.speed / 1.5) * DELTA;
		o.x += (o.speed / 1.5) * DELTA;
		break;			
	case 4:
		o.y += o.speed * DELTA;
		break;			
	case 5:
		o.y += (o.speed / 1.5) * DELTA;
		o.x -= (o.speed / 1.5) * DELTA;
		break;			
	case 6:
		o.x -= o.speed * DELTA;
		break;			
	case 7:
		o.y -= (o.speed / 1.5) * DELTA;
		o.x -= (o.speed / 1.5) * DELTA;
		break;			
	}
	if (o.direction == 0 && (o.y + o.h < 0) && o.spritesheet.type != "playermissile") remove(o);
	if (o.direction == 0 && (o.y < (o.row == 0 ? 64 : 128)) && o.spritesheet.type == "playermissile") remove(o);
	if (o.direction == 4 && o.y  > g.canvasheight) remove(o);
	if (o.spritesheet.type == "shards")
	{
		o.y -= o.ymod;
		o.x -= o.xmod;
		if (o.x < 0) remove(o);
		if (o.x + o.w > g.canvaswidth) remove(o);
		if (o.y < 0) remove(o);
		if (o.y + o.h > g.canvasheight) remove(o);
	}

	if (o.spritesheet.type == "playermissile")
	{
		switch (o.row)
		{
		case 0:
			switch (o.position)
			{
				case "LEFT":
					o.x += 0.2;
					break;
				case "CENTRE":
					break;
				case "RIGHT":
					o.x -= 0.2;
					break;
			}
			break;
		case 1:
			switch (o.position)
			{
				case "LEFT":
					o.x -= 0.5;
					break;
				case "CENTRE":
					break;
				case "RIGHT":
					o.x += 0.5;
					break;
			}
			break;
		}
	}

};

function throwStars(force,o)
{
	for (var a=0;a<m.player.stars;a++)
	{
		spawnEntityChance(force,o);
	}
};

function playerCarCollision(o) // Car passed in
{
	if (!o.visible || o.dying || m.player.dying || m.player.exploding || g.pausemode > 0 || cast[o.row].name == "Copter") return;

	var ox = o.x;
	var oy = o.y;
	var ow = o.w; 
	var oh = o.h; 

	var mx = m.player.x;
	var my = m.player.y;
	var mw = m.player.w;
	var mh = m.player.h;

	var c1 = false, c2 = false, c3 = false, c4 = false;
	
	if (mx <= (ox+ow)  &&  my <= (oy+oh)  &&  mx >= (ox)  && my >= oy) c1 = true;
	if ((mx+mw) >= ox  &&  my >= oy  &&  (mx+mw) <= (ox+ow)  &&  my <= (oy+oh)) c2 = true;
	if (mx <= (ox+ow)  &&  (my+mh) >= oy  &&  mx >= ox  &&  (my+mh) <= (oy+oh)) c3 = true;
	if (((mx + mw) >= ox) && ((mx + mw) <= (ox + ow)) && ((my + mh) >= oy) && ((my + mh) <= (oy + oh))) c4 = true; 

	if (c1 == true || c2 == true || c3 == true || c4 == true)
	{
		bump(o,m.player,c1,c2,c3,c4);
		sfx("explode1");
		o.playerbumped = true;
		playerDamage(cast[o.row].name == "Rocket" ? 100 : ((cast[o.row].name == "Spikes" ? 3 : 1) * (m.player.boosting ? 0 : 1)));
		if (cast[o.row].name == "Rocket") 
		{
			remove(o);
			spawnExplosion(o,4);
		}
	}
};

function carCollision(o) // Car passed in
{
	if (!o.visible || o.dying || g.pausemode > 0 || cast[o.row].name == "Copter") return;

	var ox = o.x;
	var oy = o.y;
	var ow = o.w; 
	var oh = o.h; 

	for (var a=0;a < m.cars.length;a++)
	{
		var c = m.cars[a];
		if (c.visible && o != c)
		{
			var mx = c.x;
			var my = c.y;
			var mw = c.w;
			var mh = c.h;

			var c1 = false, c2 = false, c3 = false, c4 = false;
			
			if (mx <= (ox+ow)  &&  my <= (oy+oh)  &&  mx >= (ox)  && my >= oy) c1 = true;
			if ((mx+mw) >= ox  &&  my >= oy  &&  (mx+mw) <= (ox+ow)  &&  my <= (oy+oh)) c2 = true;
			if (mx <= (ox+ow)  &&  (my+mh) >= oy  &&  mx >= ox  &&  (my+mh) <= (oy+oh)) c3 = true;
			if (((mx + mw) >= ox) && ((mx + mw) <= (ox + ow)) && ((my + mh) >= oy) && ((my + mh) <= (oy + oh))) c4 = true; 

			if (c1 == true || c2 == true || c3 == true || c4 == true)
			{
				if (cast[o.row].name == "Rocket")
				{
					c.damage -= 100;
				} else {
					carBump(o,c,c1,c2,c3,c4);
				}
				break;
			}
		}
	}
};

function carBump(o,m,c1,c2,c3,c4)
{
	if (!m.visible) return;
	if (c1)
	{
		if ((o.y+o.h-DELTA) < m.y + DELTA)
		{
			o.speed += 0.1;
			o.bumped = true;
		} else {
			o.speed += 0.1;
			o.bumped = true;
			o.x -= 8;
		}
	} else if (c2)
	{
		if ((o.y+o.h-DELTA) < m.y + DELTA)
		{
			o.speed += 0.1;
			o.bumped = true;
		} else {
			o.speed += 0.1;
			o.bumped = true;
			o.x += 8;
		}
	} else if (c3)
	{
			o.speed += 0.1;
			o.bumped = true;
			o.x -= 8;
	} else if (c4)
	{
			o.speed += 0.1;
			o.bumped = true;
			o.x += 8;
	}
};

function bump(o,m,c1,c2,c3,c4)
{
	if (!m.visible) return;
	if (c1)
	{
		if ((o.y+o.h-DELTA) < m.y + DELTA)
		{
			o.speed += 16;
			o.bumped = true;
		} else {
			o.speed += 16;
			o.bumped = true;
			o.x -= o.w;
		}
	} else if (c2)
	{
		if ((o.y+o.h-DELTA) < m.y + DELTA)
		{
			o.speed += 16;
			o.bumped = true;
		} else {
			o.speed += 16;
			o.bumped = true;
			o.x += o.w;
		}
	} else if (c3)
	{
			o.speed += 16;
			o.bumped = true;
			o.x -= o.w;
	} else if (c4)
	{
			o.speed += 16;
			o.bumped = true;
			o.x += o.w;
	}
	if (m.boosting > 0) o.damage -= 100;
};


function entityCollision(o,m) 
{
	if (!o.visible || m.dying || o.dying > 0 || m.exploding || g.pausemode > 0) return;

	var ox = o.x;
	var oy = o.y;
	var ow = o.w; 
	var oh = o.h; 

	var mx = m.x;
	var my = m.y;
	var mw = m.w;
	var mh = m.h;

	var c1 = false, c2 = false, c3 = false, c4 = false;
	
	if (ox <= (mx+mw)  &&  oy <= (my+mh)  &&  ox >= (mx)  && oy >= my) c1 = true;
	if ((ox+ow) >= mx  &&  oy >= my  &&  (ox+ow) <= (mx+mw)  &&  oy <= (my+mh)) c2 = true;
	if (ox <= (mx+mw)  &&  (oy+oh) >= my  &&  ox >= mx  &&  (oy+oh) <= (my+mh)) c3 = true;
	if (((ox + ow) >= mx) && ((ox + ow) <= (mx + mw)) && ((oy + oh) >= my) && ((oy + oh) <= (my + mh))) c4 = true; 

	if (c1 == true || c2 == true || c3 == true || c4 == true)
	{
		switch(o.row)
		{
			case 0:
				m.medals += 1;
				if (m.boosting < 1)
				{
					m.power += 3;
					testPower(m);
				} 
				remove(o);
				sfx("bonuscollect");
			break;
			case 1:
				playerDamage(-8);
				remove(o);
				sfx("bonuscollect");
			break;
			case 2:
				playerDamage(-10);
				remove(o);
				sfx("bonuscollect");
			break;
			case 3:
				if (m.spritesheet.type=="player")
				{
					sfx("bonuscollect");
				}
				m.targetscore += 50;
				spawnTextSprite(o,"50");
				m.missilepower += 1;
				if (m.missilepower > 2) m.missilepower = 2;
				remove(o);
			break;
			case 4:
				sfx("bonuscollect");
				m.targetscore += 50;
				spawnTextSprite(o,"50");
				if (m.boosting < 1)
				{
					m.power += 25;
					testPower(m);
				} 
				remove(o);
			break;
			case 5:
				m.missiletype = 0;
				m.missilecooldownmax = 14;
				m.missilecount = 10;
				m.targetscore += 50;
				spawnTextSprite(o,"50");
				remove(o);
				sfx("special");
			break;
			case 6:
				m.missiletype = 1;
				m.missilecooldownmax = 20;
				m.missilecount = 20;
				m.targetscore += 50;
				spawnTextSprite(o,"50");
				remove(o);
				sfx("special2");
			break;
			case 7:
				m.medals += 1;
				remove(o);
				sfx("bonusitem");
			break;
		}
	}
};

function testPower(o)
{
	if (o.boosting > 0) return;
	if (o.power >= 100)
	{
		o.boosting = 300;
		o.boostbonus = 0;
		sfx("boost");
		sfx("special");
		sfx("special2");
	}
};

function playerMissileCollision(s) //s = car/chopper
{
	if (!s.visible || s.dying > 0 || g.pausemode > 0 || (s.spritesheet.type == "chopper" && s.y > 90)) return;

	for (var a=0;a < m.playermissile.length;a++)
	{
		var o = m.playermissile[a];

		if (o.visible)
		{
			var ox = o.x;
			var oy = o.y;
			var ow = o.w; 
			var oh = o.h; 

			var mx = s.x;
			var my = s.y;
			var mw = s.w;
			var mh = s.h;

			var c1 = false, c2 = false, c3 = false, c4 = false;
			
			if (ox <= (mx+mw)  &&  oy <= (my+mh)  &&  ox >= (mx)  && oy >= my) c1 = true;
			if ((ox+ow) >= mx  &&  oy >= my  &&  (ox+ow) <= (mx+mw)  &&  oy <= (my+mh)) c2 = true;
			if (ox <= (mx+mw)  &&  (oy+oh) >= my  &&  ox >= mx  &&  (oy+oh) <= (my+mh)) c3 = true;
			if (((ox + ow) >= mx) && ((ox + ow) <= (mx + mw)) && ((oy + oh) >= my) && ((oy + oh) <= (my + mh))) c4 = true; 

			if (c1 == true || c2 == true || c3 == true || c4 == true)
			{
				var power = cast[s.row].destructable ? (o.row == 0 ? 20 : 30) : 0;
				s.damage -= power;
				s.y -= cast[s.row].name == "Spikes" || cast[s.row].name == "Copter" ? 0 : 4;
				s.playerbumped = true;
				sfx("explode2");
				remove(o);
				if (cast[s.row].name == "Copter") g.copterattack = false; 
			}
		}
	}
};

function triggerSpin(o)
{
	if (o.spinning > 0 || o.dying) return; 
	o.spinning = 20;
};

function triggerJump(o)
{
	if (o.jumping || o.spinning > 0 || o.dying) return;
	o.jumping = true;
	o.y = o.basey - 64;
	o.bounced = false;
	o.targety = o.basey;
};

function triggerBoost(o)
{
	if (o.spinning > 0 || o.dying) return;
	o.boosting = 100;
	//sfx("boost");
};

function roadCollision(c) // c is a car passed in
{
	for (var a=0;a < m.road.length;a++)
	{
		var o = m.road[a];
		var thresh = (o.h);
		if ((o.y + o.h) < (c.y - thresh) || o.y > (c.y+c.h+thresh) || c.dying) return;
		if ((c.x - 16) < o.x || (c.x + (c.w + 16)) > (o.x + o.w))
		{
			c.offroad = true;
			if (c.spritesheet.type == "player") g.offroad = true;
		} else {
			c.offroad = false;
		}
	}
};

/** ---------------------------------------------------------------- **/
/** ---------------------------------------------------------------- **/
/**							MAIN GAME LOOP							 **/
/** ---------------------------------------------------------------- **/
/** ---------------------------------------------------------------- **/

function loop()
{
	try
	{
		if (!USERAF) 
		{ 
			clearTimeout(g.ticker); 
		} else {
			window.cancelAnimationFrame(loop);
		}
		switch (g.mode)
		{
			case "splash":
				g.ctx.drawImage(g.splash,0,0);
				g.resetting -= DELTA;
				if (g.resetting < 0)
				{
					setTitle();
				}
			break;
			case "title":
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}
				for (var a=0;a<m.tile.length;a++)
				{
					m.tile[a].speed = g.roadspeed;
					move(m.tile[a]);
					draw(m.tile[a]);
				}
				hiScore();
				g.ctx.drawImage(g.titlescreen,(g.canvaswidth/2)-160,0);
				g.blink -= DELTA; if (g.blink < 0) g.blink = 40;
				if (g.blink < 30)
					writeText(textdata[11],g.textcentre,236,22,GAMEFONT,"white","center",null,"#000000");
				writeText(textdata[16],g.canvaswidth / 4,330,18,"sans-serif","white","center",null,null);
				if (AUDIO)
					writeText(textdata[17],g.canvaswidth - (g.canvaswidth / 4),330,18,"sans-serif","white","center",null,null);
				g.attractmode.ticker -= DELTA; if (g.attractmode.ticker < 1) setAttractMode();
			break;
			case "attract":
				// Background
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}
				for (var a=0;a<m.tile.length;a++)
				{
					m.tile[a].speed = g.roadspeed;
					move(m.tile[a]);
					draw(m.tile[a]);
				}
				// Sprites
				g.attractmode.ticker -= DELTA; 
				if (g.attractmode.ticker < 1) {
					g.attractmode.ticker = g.attractmode.max; // Ticker

					if (g.attractmode.count % 4 == 0) { g.attractmode.x = g.textcentre - 128; g.attractmode.y += m.spritesheets["carsheet"].frameheight + 24; }

					if (g.attractmode.count < g.attractmode.countmax) 
						spawnCar(g.attractmode.x,g.attractmode.y,g.attractmode.count,false,0,0);

					if (g.attractmode.count == g.attractmode.countmax) spawnChopper(g.attractmode.x, g.attractmode.y);

					if (g.attractmode.count >= g.attractmode.countmax+6)
					{
						setTitle();
					}
					g.attractmode.count += 1;
					g.attractmode.x += 68;
				}
	

				// Text
				var x = g.textcentre - 108;
				var y = 38;
				for (var a=0;a < (g.attractmode.count < cast.length ? g.attractmode.count : cast.length) ;a++)
				{
					if (a % 4 == 0) { x = g.textcentre - 108; y += m.spritesheets["carsheet"].frameheight + 24; }
					if (cast[a].name=="Chopper") x += 6;
					writeText(cast[a].bonus,x,y,14,GAMEFONT,"white","center",null,"#000000");
					x += 68;
				}
				
				//Drawing
				for (var a=0;a < m.cars.length;a++)
				{
					draw(m.cars[a]);
				}
				draw(m.chopper);

				// UI
				g.blink -= DELTA; if (g.blink < 0) g.blink = 40;
				if (g.blink < 30)
					writeText(textdata[11],g.textcentre,256,22,GAMEFONT,"white","center",null,"#000000");
				hiScore();
			break;
			case "pregame":
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}

				for (var a=0;a<m.tile.length;a++)
				{
					m.tile[a].speed = g.roadspeed;
					move(m.tile[a]);
					draw(m.tile[a]);
				}

				drawPlayer(m.player);
				moveToTarget(m.player);
				g.resetting -= DELTA;
				if (g.resetting < 1) 
				{ 
					g.mode = "game";
					g.resetting = 120;
					g.go = 1;
				} else {
					g.go = 0;
				}

				writeText(howtoplay[g.howtoplay],g.textcentre,180,20,GAMEFONT,"white","center",null,"#000000");
				for (var a=0;a<m.entity.length;a++)
				{
					draw(m.entity[a]);
				}

				drawPlayerBar();
				stageTimer();
				updateScore();
				playerLives();
			break;
			case "game":
				g.nextthink -= DELTA;
				if (g.nextthink < 0) 
				{
					g.nextthink = g.nextthinkmax;
				}
				g.offroad = false;
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}
				roadCollision(m.player);

				if (g.resetting < 1 && !m.player.dying && !m.player.exploding) g.go = 0;
				if (!m.player.dying && !m.player.exploding)
				{
					g.roadspeedmax += 0.1; if (g.roadspeedmax > g.highestpossibleroadspeed) g.roadspeedmax = g.highestpossibleroadspeed;
				}
				if ((m.player.dying || m.player.exploding) && Math.floor(g.stagetimer) < 1)
				{
					writeText(textdata[20],g.textcentre,264,20,GAMEFONT,"white","center",null,"#000000");
				}
				if (m.player.dying)
				{
					g.resetting -= DELTA;
					g.roadspeedmax -= 1;
					if (g.roadspeedmax < 4) g.roadspeedmax = 4;
					g.targetroadspeed = g.roadspeedmax;
					if (g.resetting < 0)
					{
						m.player.dying = false;
						m.player.exploding = true;
						g.resetting = 150;
						spawnMonsterExplosion(m.player);
						remove(m.player);
					}
				} else if (m.player.exploding)
				{
					g.resetting -= DELTA;
					if (g.resetting < 1)
					{
						m.player.lives -= 1;
						if (m.player.lives < 1)
						{
							setAdverts(true,false);
							m.player.rank = getRank();
							g.resetting = 150;
							g.time = new Date() - g.time;
							for (var a=0;a<m.explosion.length;a++) remove(m.explosion[a]);
							postData(true);
							g.mode = "gameover";

							/* PLAYSTAR SOCIAL */
							g.socialmessage = "I just scored "+m.player.targetscore+" on Road Rage at the PlayStar Online Games Arcade.";
							$("#scorestatus").text(g.socialmessage);
							$('a[data-text]').each(function(){
								  $(this).attr('data-text', g.socialmessage);
							});
							$.getScript('http://platform.twitter.com/widgets.js');
							/* PLAYSTAR SOCIAL END */
						} else {
							wipe(true);
							preGame();
						}
					}
				} else {
					if (m.player.jumping)
					{
						g.targetroadspeed = (g.roadspeedmax / 2) * DELTA;
					} else if (m.player.boosting > 0)
					{
						g.targetroadspeed = g.roadspeedmax + m.player.boosting;
						if (g.targetroadspeed > 48) g.targetroadspeed = 48;
						m.player.boosting -= DELTA;
						if (Math.round(m.player.boosting) % 10 == 0) m.player.targetscore += 100;
						if (m.player.boosting < 0)
						{
							m.player.power = 0;
						}
						if (g.offroad)
						{
							playerDamage(4);
						}
					} else {
						if (g.offroad)
						{
							playerDamage(1);
						} else {
							g.targetroadspeed += DELTA; if (g.targetroadspeed > g.roadspeedmax) g.targetroadspeed = g.roadspeedmax;
						}
					}
				}

				for (var a=0;a<m.tile.length;a++)
				{
					m.tile[a].speed = g.roadspeed;
					m.tile[a].row = g.stage;
					move(m.tile[a]);
					draw(m.tile[a]);
				}

				for (var a=0;a<m.playermissile.length;a++)
				{
					move(m.playermissile[a]);
					draw(m.playermissile[a]);
				}
				drawPlayer(m.player);
				calculatePlayerPosition();

				moveToTarget(m.player);
				handleRoadSpeed();
				for (var a=0;a < m.cars.length;a++)
				{
					moveCar(m.cars[a]);
					draw(m.cars[a]);
					carCollision(m.cars[a]);
					playerCarCollision(m.cars[a]);
					playerMissileCollision(m.cars[a]);
					roadCollision(m.cars[a]);
				}

				moveChopper(m.chopper);

				m.player.missilecooldown -= DELTA;
				if (m.player.missilecooldown < 1)
				{
					m.player.missilecooldown = m.player.missilecooldownmax;
					if (m.player.missilecount > 0)
					{
						spawnPlayerMissiles();
					}
				}

				playerMissileCollision(m.chopper);
				draw(m.chopper);

				for (var a=0;a<m.explosion.length;a++)
				{
					move(m.explosion[a]);
					draw(m.explosion[a]);
				}
				
				for (var a=0;a<m.shards.length;a++)
				{
					move(m.shards[a]);
					draw(m.shards[a]);
				}
				
				for (var a=0;a<m.entity.length;a++)
				{
					moveEntity(m.entity[a]);
					draw(m.entity[a]);
					entityCollision(m.entity[a],m.player);
				}

				for (var a=0;a < m.alienbombs.length;a++)
				{
					moveAlienBomb(m.alienbombs[a]);
					drawAlienBomb(m.alienbombs[a]);
					bombPlayerCollision(m.alienbombs[a],m.player);				
				}
				
				if (m.player.boosting > 0)
				{
					colourScreen(30,"0,240,0");
				}
				if (g.offroad)
				{
					colourScreen(60,"240,0,0");
				}
				updateScore();
				if (g.pausemode < 1 && !m.player.dying && !m.player.exploding)
				{
					g.miles += (g.roadspeed / g.roadspeedmax) * DELTA;
					g.spymiles += (g.roadspeed / g.roadspeedmax) * DELTA;
					g.scoremiles += ((g.roadspeed / g.roadspeedmax) / 100) * DELTA;
					if (g.miles > (1000 + ((g.level - 1) * g.target))) { m.player.checkpoints+=1; setStage(); }
				}
				drawPlayerBar();
				stageTimer();
				for (var a=0;a < m.textsprites.length;a++)
				{
					moveTextSprite(m.textsprites[a]);
					drawTextSprite(m.textsprites[a]);
				}

				if (g.checkpointresetting > 0)
				{

					g.bonusticker -= DELTA;
					if (g.bonusticker < 0 && m.player.bonusamount > 0)
					{
						g.bonusticker = 3;
						m.player.bonusamount -= 1;
						m.player.damage -= 5; if (m.player.damage < 0) m.player.damage = 0;
						m.player.targetscore += Math.round(100);
						m.player.bonusvalue += Math.round(100);
						sfx("timebonus");
					}
					g.checkpointresetting -= g.pausemode > 0 ? 0 : DELTA;
					if (g.checkpointresetting > 100)
					{
						g.checkpointx -= 16;
						g.checkpointx2 -= 12;
						if (g.checkpointx < g.textcentre) { g.checkpointx = g.textcentre; }
						if (g.checkpointx2 < g.textcentre) { g.checkpointx2 = g.textcentre; }
					} else if (g.checkpointresetting > 0 && g.checkpointresetting < 28)
					{
						g.checkpointx -= 16;
						g.checkpointx2 -= 12;
					}
					if (g.checkpointresetting <= 90 && g.checkpointresetting > 0)
					{
						if (Math.round(90-g.checkpointresetting)%5==0 && g.wantedlevelcount < m.player.wantedlevel)
						{
							g.wantedlevelcount += 1;
							sfx("explode2");
						}
						writeText(textdata[18],g.checkpointx2,264,20,GAMEFONT,"white","center",null,"#000000");
						if (g.checkpointresetting > 28)
						{
							var ox = g.textcentre - (Math.round((m.spritesheets["entitysheet"].framewidth+4) * m.player.wantedlevel) / 2);
							var fx = g.textcentre - (Math.round((m.spritesheets["entitysheet"].framewidth+4) * 6) / 2);
							var es = m.spritesheets["entitysheet"];
							for (var wl=0;wl<6;wl++)
							{
								g.ctx.save();
								g.ctx.globalAlpha = 0.2;
								g.ctx.drawImage(es.image,
									0,
									7*es.frameheight,
									es.framewidth,
									es.frameheight,
									fx+((es.framewidth+4)*wl),
									278,
									es.framewidth,
									es.frameheight);
								g.ctx.restore();
							}
							for (var wl=0;wl<g.wantedlevelcount;wl++)
							{
								g.ctx.drawImage(es.image,
									0,
									7*es.frameheight,
									es.framewidth,
									es.frameheight,
									fx+((es.framewidth+4)*wl),
									278,
									es.framewidth,
									es.frameheight);
							}
						}
					}
					writeText(textdata[13]+" #"+Math.round(m.player.checkpoints),g.checkpointx,208,28,GAMEFONT,"yellow","center",null,"#000000");
					writeText(textdata[15] + " " + m.player.bonusvalue,g.checkpointx2,238,24,GAMEFONT,"white","center",null,"#000000");
				}
				playerLives();
			break;
			case "gameover":
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}
				writeText(textdata[1], g.textcentre,100,32,GAMEFONT,"yellow","center",null,"#000000");
				writeText(textdata[7] + Math.round(g.scoremiles), g.textcentre,180,16,GAMEFONT,"white","center",null,"#000000");
				writeText(textdata[9] + Math.round(g.carsdestroyed), g.textcentre,120,16,GAMEFONT,"white","center",null,"#000000");
				writeText(textdata[10] + ranks[m.player.rank], g.textcentre,160,16,GAMEFONT,"white","center",null,"#000000");
				g.ctx.drawImage(m.spritesheets["entitysheet"].image,0,7*m.spritesheets["entitysheet"].frameheight,m.spritesheets["entitysheet"].framewidth,m.spritesheets["entitysheet"].frameheight,g.textcentre-16,200,m.spritesheets["entitysheet"].framewidth,m.spritesheets["entitysheet"].frameheight);
				writeText(m.player.medals, g.textcentre+24,216,20,GAMEFONT,"white","left",null,"#000000");
				for (var a=0;a < m.textsprites.length;a++)
				{
					moveTextSprite(m.textsprites[a]);
					drawTextSprite(m.textsprites[a]);
				}
				g.resetting -= 1;
				if (g.resetting < 1)
				{
					setTitle();
					//g.mode = "playstar";
					//$("#social").show();
					//$("#promotion").show();	
				}
				updateScore();
			break;
			case "playstar":
				for (var a=0;a<m.ground.length;a++)
				{
					moveGround(m.ground[a]);
					drawGround(m.ground[a]);
				}
				for (var a=0;a<m.road.length;a++)
				{
					moveRoad(m.road[a]);
					drawRoad(m.road[a]);
				}
				break;
		}
		if (g.mode == "game") { g.ctx.drawImage(g.playpause, g.pausemode * 32, 0, 32, 32, 8, 8, 32, 32); }
		setDelta();
		if (USERAF)
		{
			window.requestAnimationFrame(loop, null);
		} else {
			g.ticker = setTimeout("loop()", MINDELAY);
		}
	}
	catch (e)
	{
		write("*"+e.message);
	}
};

function setDelta()
{
	try
	{
		if (isNaN(g.dtime)) { g.dtime = new Date(); }
		var d = new Date();
		DELTA = (d - g.dtime) / MINDELAY; // Time in ms since last update
		g.dtime = new Date();
		if (DELTA >= DELTALIMIT && USERAF == true && g.mode == "GAME") { USERAF = false; write("Reverting to setTimeout()"); }
	}
	catch (e)
	{
		write("Delta: " + e.message);
	}
};

function getRank()
{
	var a = 0;
	if (m.player.medals > 200) a = 1;
	if (m.player.medals > 500) a = 2;
	if (m.player.medals > 1000) a = 3;
	if (m.player.medals > 2000) a = 4;
	return a;
};

function getWantedLevel()
{
	var a = Math.round(g.carsdestroyed / 50) + 1;
	if (a > 6) a = 6;
	return a;
};

function setStage()
{
	g.target += 2; if (g.target > 110) g.target = 110; // increase the challenge to get to goal
	g.miles = 0;
	if (g.level > 6 || g.mode == "title")
	{
		g.stage = rnd(stages.length) - 1;
	} else {
		g.stage ++;
	}
	if (g.mode == "game") {
		g.level ++; if (g.level > 100) g.level = 100;
		m.player.wantedlevel = getWantedLevel();
		g.wantedlevelcount = 0;
	}

	postData(false);

	if (g.stage >= stages.length) g.stage = 0;
	g.checkpointresetting = 128;
	g.bonusticker = 3;
	m.player.bonusvalue = 0;
	m.player.bonusamount = Math.round(g.stagetimer);
	g.checkpointx = g.canvaswidth;
	g.checkpointx2 = g.canvaswidth + 16;
	g.stagetimer += 10 + Math.round((g.target-85) * 2.5); if (g.stagetimer > 40) g.stagetimer = 40;

	if (g.stage > 1 && g.mode != "title") sfx("special");
};

function caughtSpy()
{
	g.mode = "caughtspy";
	g.resetting = 100;
	g.level ++; if (g.level > 20) g.level = 20;
	g.displaylevel ++;
	g.spiescaught ++;
	m.player.boosting = 0;
	m.player.spinning = 0;
	m.player.jumping = false;
	var d = new Date();
	g.spytime = d - g.clockstart;
	g.clockstart = new Date();
	m.player.score += (g.stagecarsdestroyed * 100);
};

function moveAlienBomb(o)
{
	if (g.pausemode > 0) return;
	try
	{
		if (o.spritetype == "MISSILE" && o.xmod != 0)
		{
			if (o.direction == 6)
			{
				if (o.xmod > (g.level < 10 ? -1 : -2)) o.xmod -= (DELTA);
			} else {
				if (o.xmod < (g.level < 10 ? 1 : 2)) o.xmod += (DELTA);
			}
		} 
		o.y += (o.speed * DELTA);
		o.x -= o.xmod * DELTA;
		if (o.y > g.canvasheight) remove(o);
	}
	catch (e)
	{
		write("MoveAlienBomb: " + e.message);
	}
};

function drawAlienBomb(o)
{
	if (!o.visible || g.mode == "splash") return;
	try
	{
		if (isNaN(o.frame)) o.frame = o.startframe;
		o.framedelay -= DELTA;
		if (o.framedelay < 0)
		{
			o.framedelay = o.framedelaymax;
			o.frame ++;
			if (o.frame >= (o.startframe + o.spritesheet.framesperdirection))
			{
				o.frame = o.startframe;
			}
		}
		if (o.row == 0)
		{
			o.angle += 4;
			if (o.angle > 360) o.angle = 0;
		}
		g.ctx.save();
		g.ctx.translate(o.x + (o.w/2),o.y + (o.h/2));
		g.ctx.rotate(o.angle * (Math.PI / 180));
		g.ctx.drawImage(o.spritesheet.image, 
						o.frame * o.spritesheet.framewidth, 
						o.row * o.spritesheet.frameheight,  
						o.w, 
						o.h, 
						Math.round(-o.w/2), 
						Math.round(-o.h/2),
						o.w, 
						o.h);
		g.ctx.restore();
	}	
	catch (e)
	{
		write("DrawAlienBomb: " + e.message);
	}
};

function handleRoadSpeed()
{
	if (g.roadspeed < g.targetroadspeed)
	{
		g.roadspeed += DELTA * 2; if (g.roadspeed > g.targetroadspeed) g.roadspeed = g.targetroadspeed;
	} else {
		g.roadspeed -= DELTA; if (g.roadspeed < g.targetroadspeed) g.roadspeed = g.targetroadspeed;
	}
};

function moveRacer(o)
{
	if (o.bumped)
	{
		o.speed -= DELTA;
		if (o.speed < o.basespeed)
		{
			o.bumped = false;
		}
	}
	o.y += (o.speed) * DELTA;
	var carmiddle = Math.round(o.x + (o.w / 2));
	if (carmiddle < g.middleroad) o.x += DELTA;
	if (carmiddle > g.middleroad) o.x -= DELTA;
	o.miles += (((g.roadspeed + o.speed) / g.roadspeedmax) / 100) * DELTA;
};

function calculatePlayerPosition()
{
	var c = 0;
	for (var a=0;a < m.racers.length;a++)
	{
		if (m.racers[a].y < m.player.y) c += 1;
	}
	m.player.position = c + 1;
};

function moveCopter(o)
{
	if (g.pausemode > 0 || !o.visible) return;
	try
	{
		o.ymod += (o.attackpattern == 2 ? 0.02 : 0.04) * DELTA;
		switch (o.direction)
		{
			case 2:
				o.x += o.speed * DELTA;
				o.y += o.ymod;
				if (o.x > g.canvaswidth) { remove(o); g.copterattack = false; }
				o.angle += (o.attackpattern == 2 ? 0.8 : 0.4) * DELTA;
			break;
			case 6:
				o.x -= o.speed * DELTA;
				o.y += o.ymod;
				if (o.x + o.w < 0) { remove(o); g.copterattack = false; }
				o.angle -= (o.attackpattern == 2 ? 0.8 : 0.4) * DELTA;
			break;
		}
		if (cast[o.row].bombs) 
		{
			if (isNaN(o.nextbombthink)) o.nextbombthink = 4;
			o.nextbombthink -= DELTA;
			if (o.nextbombthink < 1)
			{
				o.nextbombthink = cast[o.row].nextbombthink;
				spawnCarBombs(o);
			}
		}
		if (o.damage < (cast[o.row].hp * 0.5) && cast[o.row].destructable)
		{
			o.spritesheet.framesperdirection = 3;
		} else {
			o.spritesheet.framesperdirection = 2;
		}
		if (o.damage < 1)
		{
			spawnCarExplosion(o);
			spawnEntityChance(o);
			remove(o);
			g.copterattack = false;
		}
	}
	catch (e)
	{
		write("MoveCopter: " + e.message);
	}
};

function moveCar(o)
{
	if (g.pausemode > 0 || !o.visible) return;
	try
	{
		if (cast[o.row].name == "Copter") { moveCopter(o); return; }
		if (o.bumped)
		{
			o.speed -= DELTA;
			if (o.speed < o.basespeed)
			{
				o.bumped = false;
			}
		}
		if (isNaN(o.nextthink)) o.nextthink = 10;
		o.nextthink -= DELTA;
		if (o.nextthink < 1)
		{
			if (cast[o.row].type == "enemy" && !o.oncoming)
			{
				o.direction = m.player.x + Math.round(m.player.w / 2) < o.x + Math.round(o.w / 2) ? 6 : 2;
				o.slidespeed = 1;
				o.nextthink = cast[o.row].nextattackthink;
			} else {
				// Handle the x co-ord.
				o.direction = rnd(10)<5?2:6;
				o.nextthink = 12;
				o.slidespeed = (0.1 * rnd(10)) * DELTA;
			}
		}
		if (cast[o.row].name == "Rocket")
		{
			if (m.player.x + (m.player.w/2) < o.x + (o.w/2))
			{
				o.x -= DELTA;
			} else {
				o.x += DELTA;
			}
		} else {
			o.x += o.direction == 2 ? o.slidespeed : o.slidespeed * -1;
		}

		if (cast[o.row].bombs) 
		{
			if (isNaN(o.nextbombthink)) o.nextbombthink = 4;
			o.nextbombthink -= DELTA;
			if (o.nextbombthink < 1)
			{
				o.nextbombthink = cast[o.row].nextbombthink;
				spawnCarBombs(o);
			}
		}

		if (o.offroad && cast[o.row].name != "Spikes") 
		{
			o.x += rnd(10)<5?rnd(4):rnd(4)*-1;
			o.damage -= cast[o.row].destructable ? 25 : 0;
		}
		if (o.damage < (cast[o.row].hp * 0.5) && cast[o.row].destructable)
		{
			o.spritesheet.framesperdirection = 3;
		} else {
			o.spritesheet.framesperdirection = 2;
		}
		if (o.damage < 1)
		{
			spawnCarExplosion(o);
			spawnEntityChance(o);
			if (o.playerbumped) 
			{
				g.carsdestroyed ++; 
				g.stagecarsdestroyed ++;
			}
			if (cast[o.row].name == "Police") g.policecar = false;
			if (cast[o.row].name == "Nitro Car") spawnMedals(o,4);
			remove(o);
			m.player.targetscore += cast[o.row].value;
			if (m.player.boosting > 0) 
			{
				m.player.boostbonus += 100;
				m.player.targetscore += m.player.boostbonus;
				spawnBoostText(g.textcentre,Math.round(g.canvasheight/2)-32,Math.round(m.player.boostbonus));
			}
		}

		if (cast[o.row].name == "Rocket")
		{
			if (o.launched)
			{
				o.y += ((g.roadspeed * (m.player.boosting ? 0.5 : 1.5)) - o.speed) * DELTA;
			} else {
				o.y += DELTA;
				if (o.y > 16)
				{
					o.launchnextthink -= DELTA;
				}
				if (o.launchnextthink < 1)
				{
					o.launched = true;
				}
			}
		} 

		if (cast[o.row].name != "Rocket")
		{
			o.y += ((g.roadspeed * 1.5) - o.speed) * DELTA;
		}

		if (cast[o.row].name != "Police")
		{
			if (o.y > g.canvasheight || (o.x+o.w) < 0 || o.x > g.canvaswidth) 
			{ 
				remove(o); 
				o.bumped = false; 
			}
		} else {
			if (o.y > 100) o.y = 100;
		}
	}
	catch (e)
	{
		write("MoveCar: " + e.message);
	}
};

function moveChopper(o)
{
	if (g.pausemode > 0 || !o.visible) return;
	if (g.mode == "game")
	{
		/*
			ROADSPEED ??
		*/
		
		if (o.missilesleft < 1 || m.player.boosting > 0)
		{
			o.missilesleft = 0;
			o.y += 8;
		} else {
			if (o.y > 90) 
			{
				o.y -= (o.speed * 2) * DELTA;
			} else if (o.y < 90)
			{
				o.y += (o.speed * 2) * DELTA;
			} 
			if (o.missilesleft > 0 && o.y < 98) 
			{
				o.nextthink -= DELTA;
				if (o.nextthink < 1)
				{
					o.nextthink = 80;
					spawnChopperBombs(o);
					o.missilesleft --;
				}
			}
		}
	} else if (m.player.dying || m.player.exploding && !o.dying)
	{
		o.y += 8;
		o.angle = 0;
	}
	if (o.x < m.player.x) o.x += o.speed * DELTA;
	if (o.x > m.player.x) o.x -= o.speed;
	if (o.y > g.canvasheight) 
	{ 
		remove(o); 
	}
	if (o.damage < 25 && g.mode == "game")
	{
		o.spritesheet.framesperdirection = 3;
	} else {
		o.spritesheet.framesperdirection = 2;
	}
	if (o.damage < 1 && !o.dying)
	{
		o.dying = 100;
		m.player.targetscore += cast[cast.length-1].value;
	}
};

function drawRadar()
{
	if (m.player.dying) return;
};

function stageTimer()
{
	try
	{
		var render = true; var c = "white";
		if (g.stagetimer < 20) c = "yellow";
		if (g.stagetimer < 15) c = "orange";
		if (g.stagetimer < 10) c = "red";
		if (render)
		{
			writeText(textdata[14],g.textcentre-48,100,20,GAMEFONT,c,"left",null,"#000000");
			writeText(Math.round(g.stagetimer),g.textcentre,100,20,GAMEFONT,c,"left",null,"#000000");
		}

		if (m.player.dying || m.player.exploding || g.pausemode > 0) return;

		g.stagetimer -= g.mode == "game" ? (DELTA / 40) : 0;
		if (Math.round(g.stagetimer) < g.laststagetimer && g.stagetimer < 10) sfx("whine"); 
		g.laststagetimer = Math.round(g.stagetimer);
		if (g.stagetimer <= 0) playerDeath();
	}
	catch (e)
	{
		write("StageTimer: " + e.message);
	}
};

function drawPlayerBar()
{
	// DAMAGE
	var c = GREEN;
	var w = 144 - (144 * (m.player.damage / 100)); // invert it for more aesthetic appeal
	if (w < 0) w = 0;
	if (w < 80) c = ORANGE;
	if (w < 40)
	{
		c = RED;
		m.player.spritesheet.framesperdirection = 3;
	} else {
		m.player.spritesheet.framesperdirection = 2;
	}
	fillRectangle(c,null,14,52,w,16);

	// POWER
	if (m.player.boosting > 0 && !m.player.dying && !m.player.exploding && g.pausemode < 1)
	{
		m.player.power -= (DELTA / 2.5);
	}
	if (m.player.power < 1)
	{
		m.player.boosting = 0;
	}
	var w = 134 * (m.player.power / 100);
	fillRectangle(PURPLE,null,174,52,w,16);

	/* Race bar */
	g.ctx.drawImage(g.bar,0,50);
	var targetw = Math.round(302 * (g.miles / (1000 + ((g.level - 1) * g.target))));
	fillRectangle("#ffffff",null,5+targetw,72,4,9);

	/* Miles */
	writeText("MILES " + Math.round(g.scoremiles),16,100,16,GAMEFONT,"yellow","left",null,"#000000");
	
};

function testFPS()
{
	try
	{
		// FPS
		if (isNaN(g.fps)) g.fps = 0;
		if (g.fps) 
		{
			var d = new Date();
			var c = Math.round(1000 / (d - g.fps));
		}
		var s = new String(c);
		g.fps = new Date();
		if (isNaN(g.testy)) g.testy = 0;
		if (isNaN(g.ave)) g.ave = 0;
		if (g.testy < 20) 
		{ 
			g.testy ++; g.ave += c; 
			if (g.testy >= 10)
			{
				if (g.ave > 1000) g.framedelay = 42; // throttle the fast devices
			}
		}
	}
	catch (e)
	{
		write(e.message);
	}
};

function spawnChopperBombs(o)
{
	if (m.player.dying || m.player.exploding || o.dying || m.player.boosting > 0) return;
	try
	{
		spawnAlienBomb(o, -2, 0, 4);
		//spawnAlienBomb(o, -1.25, 0, 5);
		//spawnAlienBomb(o, 1.25, 0, 5);
		spawnAlienBomb(o, 2, 0, 4);
		return;
		var r = rnd(100);
		if (r > 70)
		{
			if (g.level > 16)
			{
				spawnAlienBomb(o, -1.5, 1, 4);
				spawnAlienBomb(o, -1.25, 1, 5);
				spawnAlienBomb(o, 1.25, 1, 5);
				spawnAlienBomb(o, 1.5, 1, 4);
			} else {
				spawnAlienBomb(o, -1.5, 0, 4);
				spawnAlienBomb(o, -1.25, 0, 5);
				spawnAlienBomb(o, 1.25, 0, 5);
				spawnAlienBomb(o, 1.5, 0, 4);
			}
		} else if (r > 50)
		{
			spawnAlienBomb(o, -0.5, 1, 6);
			spawnAlienBomb(o, 0.5, 1, 6);
			spawnAlienBomb(o, -0.5, 1, 4);
			spawnAlienBomb(o, 0.5, 1, 4);
		} else if (r > 20)
		{
			spawnAlienBomb(o, -1, 0, 4);
			spawnAlienBomb(o, -0.75, 0, 5);
			spawnAlienBomb(o, 0.75, 0, 5);
			spawnAlienBomb(o, 1, 0, 4);
		} else {
			spawnAlienBomb(o, -1, 1, 4);
			spawnAlienBomb(o, -0.75, 1, 5);
			spawnAlienBomb(o, 0.75, 1, 5);
			spawnAlienBomb(o, 1, 1, 4);
		}
	}
	catch (e)
	{
		write("SpawnAlienBombs: " + e.message);
	}
};

function spawnCarBombs(o)
{
	if (o.y < 0 || (cast[o.row].name != "Copter" && o.y > 150) || m.player.dying || m.player.exploding || o.oncoming) return;
	try
	{
		spawnCarBomb(o,o.x + (o.w/2) - 12, o.y + o.h, 4, cast[o.row].name == "Police" ? 3 : 6, 0);
	}
	catch (e)
	{
		write("SpawnCarBombs: " + e.message);
	}
};

function calculateModsCarBomb(o)
{
	try
	{
		var steps = (m.player.y - (o.y + o.h)) / o.speed;
		var diff = (Math.round(o.x + (o.w / 2)) - Math.round(m.player.x + (m.player.w / 2)));
		var xmod = diff / steps;
		if ((Math.round(o.x + (o.w / 2)) > Math.round(m.player.x + (m.player.w / 2))))
		{
			if (xmod < -5) xmod = -5;
		} else {
			if (xmod > 5) xmod = 5;
		}
		return xmod;
	}
	catch (e)
	{
		write("CalculateModsCarBomb: " + e.message);
	}
};

function spawnCarBomb(o,x,y,dir,speed,row)
{
	if (!o.visible || m.player.dying || g.pausemode > 0) return;
	try
	{
		for (var a=0;a < m.alienbombs.length;a++)
		{
			var b = m.alienbombs[a];
			if (!b.visible)
			{
				b.visible = true;
				b.x = x;
				b.y = y;
				b.row = row;
				b.speed = o.y < 120 ? speed * 1.4 : speed;
				b.xmod = 0;
				b.direction = dir;
				b.spritetype = o.row == 0 ? "MISSILE" : "CARBOMB";
				b.angle = 0;
				sfx(row == 0 ? "shot2" : "shot");
				break;
			}
		}
	}
	catch (e)
	{
		write("SpawnCarBomb: " + e.message);
	}
};

function spawnAlienBomb(c,xmod,row,speed)
{
	if (!c.visible || m.player.dying || g.pausemode > 0) return;
	try
	{
		for (var a=0;a < m.alienbombs.length;a++)
		{
			var o = m.alienbombs[a];
			if (!o.visible)
			{
				o.visible = true;
				o.x = c.x + 16;
				o.y = c.y + (c.h / 2);
				o.row = row;
				o.speed = speed;
				o.xmod = xmod;
				o.angle = 0;
				o.spritetype = "ALIENBOMB";
				sfx("shot");
				break;
			}
		}
	}
	catch (e)
	{
		write("SpawnAlienBomb: " + e.message);
	}
};

function spawnMonsterExplosion(o)
{
	for (var a=0;a<16;a++)
	{
		spawnExplosion(o,rnd(8)-1,1+rnd(2),true);
	}
	sfx(m.player.boosting > 0 ? "boost" : "explosion");
};

function spawnCarExplosion(o)
{
	for (var a=0;a<4;a++)
	{
		spawnExplosion(o,rnd(8)-1,1+rnd(2),true);
	}
	sfx(m.player.boosting > 0 ? "boost" : "explosion");
};

function spawnExplosion(o,d,sp,monster)
{
	for (var a=0;a<m.explosion.length;a++)
	{
		if (!m.explosion[a].visible)
		{
			var e = m.explosion[a];
			e.visible = true;
			e.direction = d;
			e.x = o.x;
			e.y = o.y;
			e.speed = sp;
			e.frame = 0;
			e.startframe = 0;
			if (!monster) sfx("explosion");
			break;
		}
	}
	spawnShards(o,monster);
};

function spawnShards(o,monster)
{
	var r = monster ? 1 : rnd(4);
	for (var a=0;a<r;a++)
	{
		spawnShard(o,rnd(8)-1,6+(rnd(4)*2));
	}
}

function spawnShard(o,d,sp)
{
	for (var a=0;a<m.shards.length;a++)
	{
		if (!m.shards[a].visible)
		{
			var e = m.shards[a];
			e.visible = true;
			e.direction = d;
			e.x = o.x;
			e.y = o.y;
			e.speed = sp;
			e.frame = 0;
			e.anglespeed = 4 + rnd(12);
			e.row = rnd(4) - 1;
			e.ymod = (rnd(10) * 0.2) * (rnd(10) < 5 ? 1 : -1);
			e.xmod = (rnd(10) * 0.2) * (rnd(10) < 5 ? 1 : -1);
			break;
		}
	}
};

function spawnExplosionXY(x,y,d,sp)
{
	for (var a=0;a<m.explosion.length;a++)
	{
		if (!m.explosion[a].visible)
		{
			var e = m.explosion[a];
			e.visible = true;
			e.direction = d;
			e.x = x;
			e.y = y;
			e.speed = sp;
			e.frame = 0;
			break;
		}
	}
};

function spawnChopperChance(o)
{
	if (m.chopper.visible || m.player.wantedlevel < 3) return;
	var x = 0; var y = 0;
	if ((rnd(10) < 6) && g.pausemode < 1) 
	{
		x = g.canvaswidth / 2;
		y = g.canvasheight - 2;
		spawnChopper(x,y);
	}
};

function spawnChopper(x,y)
{
	var s = m.chopper;
	s.visible = true;
	s.x = x;
	s.y = y;
	s.speed = 1;
	s.basespeed = s.speed;
	s.dying = 0;
	s.nextthink = 0;
	s.damage = 500;
	s.missilesleft = 10;
	s.shadoww = s.w;
	s.shadowh = s.h;
	s.angle = 0;
	s.anglespeed = 8;
};

function spawnCar_OLD(x,y,row)
{
	if (m.car.visible) return;
	var s = m.car;
	s.visible = true;
	s.x = x;
	s.y = y;
	s.direction = 4;
	s.speed = 16 + rnd(4);
	if (s.speed < (m.player.speed+4)) s.speed = m.player.speed + 4;
	s.basespeed = s.speed;
	s.dying = 0;
	s.row = row;
	s.nextthink = 0;
	s.offroad = false;
	s.damage = 100;
	s.playerbumped = false;
	s.nextbombthink = 0;
};

function spawnCarChance(o)
{
	try
	{
		var rows = parseInt(m.spritesheets["carsheet"].height) / parseInt(m.spritesheets["carsheet"].frameheight);
		var r = rnd(rows) - 1;
		var direction = 4;
		var angle = 0;
		g.spawnside += 1; if (g.spawnside > 1) g.spawnside = 0;
		if (m.player.boosting > 0) 
		{
			g.spawnside = rnd(2)-1;
		}
		if (cast[r].name == "Rocket" && m.player.wantedlevel < 4) r = 0;
		var oncoming = cast[r].name == "Rocket" ? false : (g.spawnside < 1 ? (rnd(10) < 5 ? true : false) : false);

		var x = 0; var y = 0;
		x = o.x + (oncoming ? 16 + rnd(8) : (o.w / 2) + (16 + rnd(8)));
		y = parseInt(m.spritesheets["carsheet"].frameheight) * -1;

		if (cast[r].name == "Police" && m.player.wantedlevel < 2) r = 0;
		if (cast[r].name == "Spikes" && g.level < 4) r = 3;
		if (cast[r].name == "Copter" && m.player.boosting > 0) r = 1;
		if (cast[r].name == "Copter")
		{
			if (m.player.wantedlevel < 0 || g.copterattack)
			{
				r = 0;
			} else {
				var r2 = rnd(10);
				y = -64;
				if (r2 < 5)
				{
					x = -48;
					angle = m.player.missilepower < 2 ? 135 : 90;
					direction = 2;
				} else {
					x = g.canvaswidth;
					angle = m.player.missilepower < 2 ? 225 : 270;
					direction = 6;
				}
				g.copterattack = true;
			}
		}

		if (cast[r].name == "Police") g.policecar = true;

		spawnCar(x, y, r, oncoming,angle,direction);
		
	}
	catch (e)
	{
		write("SpawnCarChance: " + e.message);
	}
};

function spawnRacer(x,y,speed,row,miles,index)
{
	try
	{
		for (var a=0;a < m.racers.length;a++)
		{
			var r = m.racers[a];
			if (!r.visible)
			{
				r.visible = true;
				r.x = x;
				r.y = y;
				r.speed = speed;
				r.row = row;
				r.index = index;
				r.dying = 0;
				r.angle = 0;
				r.miles = miles;
				r.bumped = false;
				r.basespeed = speed;
				break;
			}
		}
	}
	catch (e)
	{
		write("SpawnRacer: " + e.message);
	}

};

function spawnCar(x,y,row,oncoming,angle,direction)
{
	try
	{
		for (var a=0;a <m.cars.length;a++)
		{
			var s = m.cars[a];
			if (!s.visible)
			{
				s.visible = true;
				s.x = x;
				s.y = y;
				s.direction = direction;
				s.spritesheet.framesperdirection = 2;
				s.dying = 0;
				s.row = row;
				s.nextthink = 0;
				s.offroad = false;
				s.damage = cast[row].hp;
				s.playerbumped = false;
				s.nextbombthink = 6;
				s.oncoming = oncoming;
				s.speed = cast[row].name == "Police" ? cast[row].speed : m.player.speed + (cast[row].speed * (s.oncoming ? -1 : 1)) + (rnd(3) - 1);
				if (cast[row].name == "Copter")
				{
					s.speed = 4;
					s.framedelaymax = 2;
				}
				if (cast[row].name == "Rocket")
				{
					s.framedelaymax = 12;
					s.launched = false;
					s.launchnextthink = 100;
				}
				s.basespeed = s.speed;
				if (cast[row].name == "Spikes") { s.framedelaymax = 8; }
				s.angle = angle;
				s.ymod = cast[row].name == "Copter" ? 2 : 0;
				s.attackpattern = cast[row].name == "Copter" ? (m.player.missilepower < 2 ? 1 : 2) : 0;
				break;
			}
		}
	}
	catch (e)
	{
		write("SpawnCar: " + e.message);
	}
};

function spawnEntityChance(o)
{
	var x = o.x; var y = o.y;
	//if (m.player.boosting > 0) return;
	var r = 0;
	if (cast[o.row].name == "Copter") r = m.player.missilepower >= 2 ? 4 : 3;
	if (cast[o.row].name == "Ambulance") r = 1;
	if (cast[o.row].name == "Sports Car") r = 4;
	if (cast[o.row].name == "Tank") r = 5;
	if (cast[o.row].name == "Super Tank") r = 6;
	spawnEntity(x,y,7,true,12);
	spawnEntity(x,y,0,true,12);
	if (cast[o.row].name == "Rocket" || o.y < 128)
	{
		for (var a=0;a < 8;a++)
		{
			spawnEntity(o.x + (rnd(10)<5?4:-8),o.y - 8,0, true,12);
		}
	}
	if (m.player.boosting < 1 && r > 0) spawnEntity(x, y, r, true,12);
};

function spawnMedal(o)
{
	if (!o.visible) return;
	try
	{
		spawnEntity(o.x + (rnd(10)<5?4:-8),o.y - 8,0, true,12);
	}
	catch (e)
	{
		write("SpawnMedal: " + e.message);
	}
};

function spawnMedals(o,n)
{
	if (!o.visible || m.player.boosting > 0) return;
	try
	{
		if (rnd(100) < 10)
		{
			n = n * 4;
		}
		for (var a=0;a < n;a++)
		{
			spawnEntity(o.x + (rnd(10)<5?4:-8),o.y - 8,0, true,12);
		}
	}
	catch (e)
	{
		write("SpawnMedals: " + e.message);
	}
};

function spawnEntity(x,y,row,xmod,ymod)
{
	try
	{
		if (m.player.dying > 0 || m.player.exploding > 0) return;
		for (var a=0;a<m.entity.length;a++)
		{
			if (!m.entity[a].visible)
			{
				var s = m.entity[a];
				s.visible = true;
				s.x = x;
				s.y = y;
				s.direction = 4;
				s.speed = row == 7 ? 2 : (xmod ? 4 + rnd(3) : g.roadspeed/2);
				if (row == 5 || row == 6) s.speed = 1;
				s.dying = 0;
				s.row = row;
				s.decay = row == 0 ? 300 : 200;
				s.angle = 0;
				s.xmod = xmod ?( rnd(10) * 0.1) * (rnd(10) < 5 ? 1 : -1) : 0;
				s.ymod = ymod;
				break;
			}
		}
	}
	catch (e)
	{
		write("SpawnEntity: " + e.message);
	}
};

function spawnTileChance(o)
{
	var x = 0; var y = 0;
	if ((rnd(10) < 6) && g.pausemode < 1) 
	{
		var x1 = g.roadx; var x2 = g.roadx + g.roadwidth;
		x = rnd(10) < 5 ? rnd(x1) - 48 : x2 + rnd(g.canvaswidth - x2);
		y = -64;
		var row = parseInt(m.spritesheets["tilesheet"].height) / parseInt(m.spritesheets["tilesheet"].frameheight);
		spawnTile(x, y, g.stage);
	}
};

function spawnTile(x,y,row)
{
	for (var a=0;a<m.tile.length;a++)
	{
		if (!m.tile[a].visible)
		{
			var s = m.tile[a];
			s.visible = true;
			s.x = x;
			s.y = y;
			s.direction = 4;
			s.speed = g.roadspeed;
			s.dying = 0;
			s.row = row;
			break;
		}
	}
};

function spawnPlayerMissiles()
{
	if (m.player.dying || m.player.exploding || g.pausemode > 0 || m.player.boosting > 0) return;
	try
	{
		switch (m.player.missiletype)
		{
			case 0:
				switch (m.player.missilepower)
				{
					case 0:
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,0,"CENTRE");
						break;
					case 1:
						spawnPlayerMissile(m.player.x,m.player.y-8,0,"LEFT");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,0,"RIGHT");	
						break;
					case 2:
						spawnPlayerMissile(m.player.x,m.player.y-8,0,"LEFT");
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,0,"CENTRE");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,0,"RIGHT");	
						break;
					case 3:
						spawnPlayerMissile(m.player.x-20,m.player.y+8,0,"LEFT");
						spawnPlayerMissile(m.player.x,m.player.y-8,0,"LEFT");
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,0,"CENTRE");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,0,"RIGHT");	
						spawnPlayerMissile(m.player.x+m.player.w+12,m.player.y+8,0,"RIGHT");	
						break;
				}
				break;
			case 1:
				switch (m.player.missilepower)
				{
					case 0:
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,1,"CENTRE");
						break;
					case 1:
						spawnPlayerMissile(m.player.x,m.player.y-8,1,"LEFT");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,1,"RIGHT");	
						break;
					case 2:
						spawnPlayerMissile(m.player.x,m.player.y-8,1,"LEFT");
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,1,"CENTRE");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,1,"RIGHT");	
						break;
					case 3:
						spawnPlayerMissile(m.player.x,m.player.y-8,1,"LEFT");
						spawnPlayerMissile(m.player.x-20,m.player.y+8,1,"LEFT");
						spawnPlayerMissile(m.player.x+(m.player.w/2)-4,m.player.y-8,1,"CENTRE");
						spawnPlayerMissile(m.player.x+m.player.w-8,m.player.y-8,1,"RIGHT");	
						spawnPlayerMissile(m.player.x+m.player.w+12,m.player.y+8,1,"RIGHT");	
						break;
				}
				break;
		}
		sfx("shot3");
	}
	catch (e)
	{
		write("SpawnPlayerMissiles: " + e.message);
	}
};

function spawnPlayerMissile(x,y,row,position)
{
	if (m.player.dying || m.player.exploding) return;
	for (var a=0;a<m.playermissile.length;a++)
	{
		if (!m.playermissile[a].visible)
		{
			var s = m.playermissile[a];
			s.visible = true;
			s.x = x;
			s.y = y;
			s.direction = 0;
			s.speed = 16;
			s.dying = 0;
			s.row = row;
			s.position = position;
			break;
		}
	}
};

function spawnTextSprite(o,t)
{
	try
	{
		if (g.pausemode > 0) return;
		for (var a=0;a<m.textsprites.length;a++)
		{
			if (!m.textsprites[a].visible)
			{
				var e = m.textsprites[a];
				e.visible = true;
				e.ticks = 100;
				e.x = o.x;
				e.y = o.y;
				e.text = t;
				e.speed = 1;
				e.colour = "#ffff00";
				e.type = "TEXTSPRITE";
				break;
			}
		}
	}
	catch (e)
	{
		write("Spawn text sprite: " + e.message);
	}

};

function spawnBoostText(x,y,t)
{
	try
	{
		if (g.pausemode > 0) return;
		for (var a=0;a<m.textsprites.length;a++)
		{
			if (!m.textsprites[a].visible)
			{
				var e = m.textsprites[a];
				e.visible = true;
				e.ticks = 100;
				e.x = x;
				e.y = y;
				e.text = t;
				e.speed = 1;
				e.colour = "#ffffff";
				e.type = "BOOST";
				break;
			}
		}
	}
	catch (e)
	{
		write("Spawn boost text: " + e.message);
	}

};

function spawnTextSpriteXY(x,y,t)
{
	if (g.pausemode > 0) return;
	for (var a=0;a<m.textsprites.length;a++)
	{
		if (!m.textsprites[a].visible)
		{
			var e = m.textsprites[a];
			e.visible = true;
			e.ticks = 100;
			e.x = x;
			e.y = y;
			e.text = t;
			e.speed = 1;
			e.colour = g.colours[rnd(g.colours.length-1)];
			break;
		}
	}
};

function writeString(s,x,y)
{
	var o = m.spritesheets["numberssheet"];
	for (var a=0;a<s.length;a++)
	{
		x += o.framewidth;
		var i = s.substr(a,1);
		g.ctx.drawImage(o.image, i*o.framewidth, 0, o.framewidth, o.frameheight, x, y, o.framewidth, o.frameheight);
	}
};

function writeLevel()
{
	var ph = new String();
	var ph2 = new String(g.level);
	var ls = ph2.length;
	var s = new String();
	
	for (var b = 0; b < ph2.length; b++) s += ph2.substring(b,b+1);
	
	writeString(s,190,200);

};

function hiScore()
{
	try
	{
		var sScore = new String();
		var sInScore = new String(m.player.hiscore);
		var ls = sInScore.length;
		var s = new String();
		
		for (var a = 0; a < (8-ls); a++) s += "0";
		for (var b = 0; b < sInScore.length; b++) s += "" + sInScore.substring(b,b+1);
		
		writeString(s,g.textcentre-120,0);
		
	}
	catch (e)
	{
		write(e.message);
	}
};

function updateScore()
{
	try
	{
		m.player.score += 50;
		if (m.player.score > m.player.targetscore) m.player.score = m.player.targetscore;
		if (m.player.score > m.player.hiscore) 
		{
			m.player.hiscore = Math.round(m.player.score);
			localStorage.setItem(GAMETITLE+"-hiscore", m.player.hiscore);
		}
		if (m.player.score > 99999999) m.player.score = 99999999;
		if (m.player.score >= 100000 && !m.player.extralife[0]) { sfx("extralife"); m.player.lives += 1; m.player.extralife[0] = true; }
		var sScore = new String();
		var sInScore = new String(m.player.score);
		var ls = sInScore.length;
		var s = new String();
		
		for (var a = 0; a < (8-ls); a++) s += "0";
		for (var b = 0; b < sInScore.length; b++) s += "" + sInScore.substring(b,b+1);
		
		writeString(s,g.textcentre-120,0);
		
	}
	catch (e)
	{
		write(e.message);
	}
};

function remove(o)
{
	try
	{
		o.visible = false;
	}
	catch (e)
	{
		write("Remove: " + e.message);
	}
};

function scanInput(e)
{
	if (window.event) keypress = e.keyCode;
	else if(e.which) keypress = e.which;
	switch (keypress)
	{
		case 16: // SHIFT
			break;
		case 18: // ALT
			break;
		case 32: // Space
			if (g.mode == "title") setGame();
			break;
		case 38: // Up
			break;
		case 40: // Down
			break;
		case 39: // Right
			break;
		case 37: // Left
			break;
		case 67: // C
			g.console.style.display = g.console.style.display == "none" ? "block" : "none";
			break;
		case 80: // P
			g.pausemode ++; if (g.pausemode > 1) g.pausemode = 0;
			break;
		case 83: // S
			g.audiomode ++; if (g.audiomode > 1) g.audiomode = 0;
			handleAudio();
			break;
		case 17: // CTRL
		case 90: // Z
			if (g.mode == "title") setGame();
			break;
	}
};

function stopMove(e)
{
	if (window.event) // IE
	{
		keyup = e.keyCode;
	}
	else if(e.which)
	{
		keyup = e.which;
	}

	var k = 0;
	if (keyup >= 48 && keyup <= 57)
	{
		k = (48 - keyup) * -1;
	}
	switch (keyup)
	{
		case 16: // SHIFT
			break;
		case 18: // ALT
			break;
		case 32: // Space
			break;
		case 38: // Up
			break;
		case 40: // Down
			break;
		case 39: // Right
			break;
		case 37: // Left
			break;
		case 67: // C
			break;
		case 83: // S
			break;
		case 17: // CTRL
		case 90: // Z
			break;
	}
};

function musicMode()
{
	var s = m.audio["titlemusic"];
	setSoundtrack();
	if (g.musicmode < 1)
	{
		if (SOUNDTRACK && s != null) { 	s.gainNode.gain.value = 0; }
	} else {
		if (SOUNDTRACK && s != null) { 	s.gainNode.gain.value = s.volume; }
	}
};

function getNextColour(carray,next,index)
{
	try
	{
		if (next + index < carray.length)
		{
			return carray[next+index];
		} else {
			return carray[(next+index)-carray.length];
		}
	}
	catch (e)
	{
		write("GetNextColour: " + e.message);
	}
};

function writeText(t,x,y,s,f,c,a,alpha,sc)
{
	try
	{
		x += 8;
		var sx = x;
		var grid = {};
		grid.w = 10;
		grid.h = 16;
		var text = new String(t);	
		g.ctx.save();
		var ss = "";
		g.ctx.font = "normal "+(LOCALISED ? s : s * 0.8)+"px '"+f+"'";
		g.ctx.textAlign = a ? a : "center";
		if (alpha)
		{
			g.ctx.fillStyle = "rgba(" + c + "," + (alpha * 0.01) + ")";
		} else {
			g.ctx.fillStyle = c ? c : "#FFFF00";
		}

		if (sc != null && SHADOWTEXT)
		{
			g.ctx.shadowColor = sc;
			g.ctx.shadowBlur = 0;
			g.ctx.shadowOffsetX = 1;
			g.ctx.shadowOffsetY = 1;
			wrapText(text,x,y+8,s+4);
		} else {
			wrapText(text,x,y+8,s+4);
		}

		g.ctx.restore();
		
	}
	catch (e)
	{
		write("WriteText: " + e.message);
	}
};

function wrapText(text, x, y, lineHeight) {
	var words = text.split(" ");
	var line = "";

	for(var n = 0; n < words.length; n++) {
	  var testLine = line + words[n] + " ";
	  var metrics = g.ctx.measureText(testLine);
	  var testWidth = metrics.width;
	  if(testWidth > (g.canvaswidth - 100)) {
		g.ctx.fillText(line, x, y);
		line = words[n] + " ";
		y += lineHeight;
	  }
	  else {
		line = testLine;
	  }
	}
	g.ctx.fillText(line, Math.round(x), Math.round(y));
};

function drawLine(x1,y1,x2,y2,c)
{
	try
	{
		g.ctx.beginPath();
		g.ctx.moveTo(x1, y1);
		g.ctx.lineTo(x2, y2);
		g.ctx.closePath();
		g.ctx.strokeStyle = c;
		g.ctx.stroke();
	}
	catch (e)
	{
		write("drawline: " + e.message);
	}
};

function fillRectangle(c,a,x,y,w,h)
{
	try
	{
		if (a != null)
		{
			g.ctx.fillStyle = "rgba(" + c + "," + a + ")";
		} else {
			g.ctx.fillStyle = c;
		}
		g.ctx.fillRect(x,y,w,h);
	}
	catch (e)
	{
		write("Fill: " + e.message);
	}
};

function fadeScreen(a,rgb)
{
	try
	{
		var alpha = 1 - (a * 0.01);
		if (alpha > 1) alpha = 1;
		fillRectangle((rgb ? rgb : "0,0,0"),alpha,0,0,g.canvaswidth,g.canvasheight);
	}
	catch (e)
	{
		write("Fade out: " + e.message);
	}
};

function colourScreen(a,rgb)
{
	try
	{
		var alpha = a * 0.01;
		if (alpha > 1) alpha = 1;
		fillRectangle(rgb,alpha,0,0,g.canvaswidth,g.canvasheight);
	}
	catch (e)
	{
		write("Fade out: " + e.message);
	}
};

function drawTextSprite(o)
{
	if (!o.visible) return;
	var text = new String(o.text);	
	g.ctx.save();
	g.ctx.font = "bold 18px '" + SCOREFONT + "'";
	g.ctx.textAlign = o.type == "BOOST" ? "center" : "left";
	g.ctx.fillStyle = "rgba(255,255,0," + (o.ticks * 0.01) + ")";
	g.ctx.fillText(text, o.x,o.y+8);
	g.ctx.restore();
};

function moveTextSprite(o)
{
	if (g.pausemode > 0) { return; }
	if (!o.visible) return;
	o.y -= (o.type == "BOOST" ? 2 : 1) * DELTA;
	o.ticks -= 2 * DELTA;
	if (o.ticks < 0) remove(o);
};

function handleVisibilityChange()
{
	var s = m.audio["titlemusic"];
	g.pausemode = g.pausemode == 1 ? 0 : 1;
	if (document.webkitHidden) 
	{
		if (AUDIO)
		{
			g.storedaudiomode = g.audiomode;
			g.storedmusicmode = g.musicmode;
			if (g.audiomode > 0)
			{
				g.audiomode = 0; 
			}
			if (g.musicmode > 0)
			{
				if (SOUNDTRACK && s != null) { 	s.gainNode.gain.value = 0; }
			}
		}
	} else {
		if (AUDIO)
		{
			if (g.storedaudiomode > 0)
			{
				g.audiomode = 1;
			}
			if (g.storedmusicmode > 0)
			{
				g.musicmode = 1;
				if (SOUNDTRACK && s != null) { 	s.gainNode.gain.value = s.volume; }
			}
		}
	}
};

function playerLives()
{
	var o = m.player;
	for (var a=0;a<o.lives-1;a++)
	{
		g.ctx.drawImage(o.spritesheet.image, 0, 0, o.spritesheet.framewidth, o.spritesheet.frameheight, (g.canvaswidth-60)+(a * 20), 12, 16, 24);
	}
};

document.addEventListener("webkitvisibilitychange", handleVisibilityChange, false);
