var stage;
var world;
var mc;
var fps = 24;
var bitmaps;
var GET;
var data = [];

var LANDSCAPE_MODE = true;

var STATE_LOAD = 0;
var STATE_LOGO = 1;
var STATE_MENU = 2;
var STATE_GAME = 3;
var STATE_MAP = 4;
var STATE_LEVEL_COMPLETE = 5;
var STATE_GAME_OVER = 6;
var STATE_CONSTRUCT = 7;

var gameState = STATE_LOAD;
var gameScore;

var curLevel = 0;

var showDebugDraw = false;
var mixer;
var HERO;
var LEVEL;
var door_mc;

window.onload = function()
{
	GET = Utils.parseGet();
	Utils.addMobileListeners(LANDSCAPE_MODE, true);
	Utils.mobileCorrectPixelRatio();
	Utils.addFitLayoutListeners();
	ExternalAPI.init();
	setTimeout(startLoad, 600);
};

function startLoad()
{
	var resolution = Utils.getMobileScreenResolution(LANDSCAPE_MODE);	
	if(GET["debug"] == 1) resolution = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE);
	Utils.globalScale = resolution.scale;
	Utils.createLayout(document.getElementById("main_container"), resolution);
	Utils.addEventListener("fitlayout", function()
	{
		if(stage)
		{
			stage.drawScene(document.getElementById("screen"));
			buildBackground();
		}
		
		if(world)
		{
			box2d.setDebugDrawScale(world);
		}
	});
	Utils.addEventListener("lockscreen", function()	{ if(stage && stage.started) stage.stop(); });
	Utils.addEventListener("unlockscreen", function()	{ if(stage && !stage.started) stage.start(); });
	
	Utils.mobileHideAddressBar();
	
	if(GET["debug"] != 1) Utils.checkOrientation(LANDSCAPE_MODE);
	var path = Utils.imagesRoot+"/"+Utils.globalScale+"/";
	var preloader = new ImagesPreloader();

	var game_assets =
    [
		{"name":"back1","src":"backs/back1.jpg","width":480,"height":320},
		{"name":"gameback","src":"backs/gameback.jpg","width":480,"height":320},
		{"name":"camera_btn","src":"buttons/camera_btn.png","width":31,"height":31},
		{"name":"map_btn","src":"buttons/map_btn.png","width":31,"height":31},
		{"name":"music_btn","src":"buttons/music_btn.png","width":22,"height":23,"frames":2},
		{"name":"next_btn","src":"buttons/next_btn.png","width":105,"height":31},
		{"name":"restart_btn","src":"buttons/restart_btn.png","width":31,"height":31},
		{"name":"sound_btn","src":"buttons/sound_btn.png","width":22,"height":23,"frames":2},
		{"name":"fail","src":"fail.png","width":70,"height":25},
		
		{"name":"hourglass","src":"hourglass.png","width":100,"height":150},
		{"name":"logo","src":"logo.png","width":142,"height":37},
		{"name":"LevelsButtons1","src":"map/LevelsButtons1.png","width":27,"height":33},
		{"name":"LevelsButtons1_1","src":"map/LevelsButtons1_1.png","width":26,"height":24},
		{"name":"LevelsButtons2","src":"map/LevelsButtons2.png","width":27,"height":33},
		{"name":"LevelsButtons2_1","src":"map/LevelsButtons2_1.png","width":26,"height":24},
		{"name":"LevelsButtons3","src":"map/LevelsButtons3.png","width":27,"height":33},
		{"name":"LevelsButtons3_1","src":"map/LevelsButtons3_1.png","width":26,"height":24},
		{"name":"LevelsButtonsClip3","src":"map/LevelsButtonsClip3.png","width":223,"height":256},
		{"name":"star","src":"map/star.png","width":10,"height":9, "frames":2},
		{"name":"star_big","src":"map/star_big.png","width":27,"height":26,"frames":2},		
		{"name":"levels_map","src":"map/levels_map.png","width":26,"height":24,"frames":3},
		{"name":"levels_map_star","src":"map/levels_map_star.png","width":27,"height":33,"frames":3},		
		{"name":"num_in_level","src":"num_in_level.png","width":16,"height":242},
		{"name":"num_level_select","src":"num_level_select.png","width":10,"height":176},
		{"name":"num_level_select_star","src":"num_level_select_star.png","width":12,"height":198},
		{"name":"play","src":"play.png","width":63,"height":22},
		{"name":"victory","src":"victory.png","width":88,"height":18},
		{"name":"victory_1","src":"victory_1.png","width":230,"height":129},
		{"name":"victory_2","src":"victory_2.png","width":230,"height":111},
		{"name":"level","src":"level.png","width":66,"height":21},
		{"name":"bang","src":"bang.png","width":50,"height":38,"frames":10},
		{"name":"bang_big","src":"bang_big.png","width":76,"height":56,"frames":10},
		{"name":"menu_btn","src":"buttons/menu_btn.png","width":106,"height":31},		
		{"name":"box_light","src":"box_light.png","width":32,"height":32},
		{"name":"circle_light","src":"circle_light.png","width":41,"height":41},		
		{"name":"gain10","src":"gain10.png","width":149,"height":29},
		{"name":"gain25","src":"gain25.png","width":149,"height":29},
		{"name":"gain50","src":"gain50.png","width":149,"height":29},
		{"name":"gain75","src":"gain75.png","width":149,"height":29},
		{"name":"gain90","src":"gain90.png","width":149,"height":29},		
		{"name":"check","src":"check.png","width":100,"height":22,"frames":16},
		{"name":"check_back","src":"check_back.png","width":99,"height":22},
		{"name":"check_line","src":"check_line.png","width":99,"height":22},
		{"name":"btn_more_games","src":"btn_more_games.png","width":89,"height":26},
	];
		
	for(var i=0; i<special_assets.length; i++)
	{		
		var obj = special_assets[i];		
		for (var j=0; j<obj.assets.length; j++)
		{
			game_assets.push({name: obj.assets[j].name, src: obj.assets[j].src, width:obj.assets[j].width, 
				height: obj.assets[j].height, frames: obj.assets[j].frames});
		}		
	}	
	
	library = new AssetsLibrary('images', Utils.globalScale, game_assets);
	
	TTLoader.create(loadImagesEnd, true);
	library.load(TTLoader.loadComplete, TTLoader.showLoadProgress);
	
	
	createObjectsArray();	
}

function loadImagesEnd(data)
{
	document.getElementById('progress_container').style.display = 'none';
	document.getElementById('screen_container').style.display = 'block';
	document.getElementById('screen_background_container').style.display = 'block';
		
	bitmaps = {};
    for (var bmp in library.items) bitmaps[bmp] = library.items[bmp].bitmap;
	
	getLevelsScores();
	getLevelsStars();
	
	//mixer = new AudioMixer("music", (Utils.touchScreen ? 1 : 3));
	
	if(parseInt(Utils.getCookie("soul_shift_sound")) == 2 || parseInt(Utils.getCookie("soul_shift_sound")) == 1){}
    else
    {
        Utils.setCookie("soul_shift_sound", 1);
    }
       
    if(parseInt(Utils.getCookie("soul_shift_music")) == 2 || parseInt(Utils.getCookie("soul_shift_music")) == 1){}
    else
    {
        Utils.setCookie("soul_shift_music", 1);
    }   
	      
    mixer = new AudioMixer("sounds", 2);
	if(GET["debug"] != 1)
	{
		showMenu();
	}		
}

var sound = false;
var music;

function getStageWidth() {return Math.floor(480/* * screenWidthCoef*/);}
function getStageHeight() {return Math.floor(320/* * screenHeightCoef*/);}
function getStageWidthCenter() {return getStageWidth()/2;}
function getStageHeightCenter() {return getStageHeight()/2;}

function showMenu()
{
	gameState = STATE_MENU;
	createScene();
}

function showMap()
{
	gameState = STATE_MAP;
	createScene();
}

function showGame(number)
{	
	prepareLevel(number-1);
}

function showLevelComplete()
{
	gameState = STATE_LEVEL_COMPLETE;
	createScene();
}

function showGameOver()
{
	
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

function createScene(number)
{
	createStage();
	if(gameState == STATE_LOGO)
	{
		stage.fillColor = '#000';
		
		mc = new Sprite(bitmaps.logo, 480, 320, 1);
		mc.opacity = 0;
		mc.x = 240;
		mc.y = 160;
		mc.onenterframe = showLogo;
		stage.addChild(mc);
	}
	
	if(gameState == STATE_MENU)
	{
		stage.fillColor = false;
			
		mc = library.getSprite("gameback");
		mc.x = 240;
		mc.y = 160;
		mc.static = true;
		stage.addChild(mc);

		mc = library.getSprite("play");
		mc.x = 50;
		mc.y = 110;
		mc.static = true;
		mc.onclick = function()
		{
			showGame(levelsScores.length+1);
		};
		stage.addChild(mc);

		mc = library.getSprite("logo");
		mc.x = 80;
		mc.y = 30;
		mc.static = true;
		stage.addChild(mc);

		mc = new Sprite(null, 50, 20);
		mc.width = 220;
		mc.height = 270;
		mc.x = getStageWidthCenter()+30;
		mc.y = getStageHeightCenter()+10;
		mc.fillColor = "#D68743";
		mc.static = true;
		mc.opacity = 0.5;
		stage.addChild(mc);
				
		setMapElements();
		putSound();		
	}
	
	if(gameState == STATE_MAP)
	{
		mc = new Sprite(bitmaps.map_back2, 480, 320, 1);
		mc.x = 240;
		mc.y = 160;
		mc.static = true;
		stage.addChild(mc);
		
		setMapElements();
	}
	
	if (gameState == STATE_GAME)
	{		
		prepareLevel(number-1);
	}	
	
	if (gameState == STATE_CONSTRUCT)
	{
		constructLevel();
	}	
	
	buildBackground();
	stage.start();
}

function setMapElements()
{	
	var big_star_spr = library.getSprite("star_big");
    big_star_spr.x = getStageWidthCenter()-10;
    big_star_spr.y = 20;
    big_star_spr.gotoAndStop(0);
    stage.addChild(big_star_spr);
      
   	var total_stars_cnt = 0;
   	for (var i=0; i<30; i++)
   	{
   		if (levelsStars[i]) total_stars_cnt+=levelsStars[i]*1;
   	}
    var total_star_text = new Text(bitmaps.num_level_select_star, 12,18);
	total_star_text.x = getStageWidthCenter()+40;
	total_star_text.y = 20;
	total_star_text.align = total_star_text.ALIGN_CENTER;
	total_star_text.write(total_stars_cnt+"/"+90);
	
	var x1 = 200;
	var x2 = 35;
	var y1 = 60;
	var y2 = 35;
	
	var setLevelStars = function(obj)
	{			
		var n = levelsStars[obj.number-1]*1;
		for (var i=0;i<3;i++)
		{			
			var spr = library.getSprite("star");
			spr.x = obj.x+i*9-9;
    		spr.y = obj.y-17;
    		spr.gotoAndStop(i<n ? 0 : 1);
    		stage.addChild(spr);
		}
	};	
	
	for (var n=0; n<35 ; n++)
	{
		var i = n%5;
        var j = Math.floor(n/5);
        var spr = library.getSprite("levels_map");    
        spr.number = n+1;
        spr.x = x1+ x2*i;
        spr.y = y1+ y2*j;
        spr.gotoAndStop(0);        
        spr.need_stars = 0;
        
        if (spr.number == 31) spr.need_stars = 10;
        else if (spr.number == 32) spr.need_stars = 25;
        else if (spr.number == 33) spr.need_stars = 50;
        else if (spr.number == 34) spr.need_stars = 75;
        else if (spr.number == 35) spr.need_stars = 90;
                
        if (n<=levelsStars.length)
        {
        	if (n<levelsStars.length)
        	{
        		spr.gotoAndStop(1);
        	}
        	else
        	{
        		spr.gotoAndStop(total_stars_cnt >= spr.need_stars ? 2 : 0);
        	}
        	spr.onclick = function()
	        {
	        	if (total_stars_cnt >= this.need_stars) showGame(this.number);
    			else showGain(this.need_stars);
	        };        	
	        if (n<30) setLevelStars(spr);
        }
        else
        {
        	if (spr.number>30)
        	{
        		spr.onclick = function()
        		{
        			showGain(this.need_stars);
        		};	
        	}        	
        }     
        stage.addChild(spr);
        
        var level_text = new Text(bitmaps.num_level_select, 10,16);
		level_text.x = spr.x;
		level_text.y = spr.y;
		level_text.align = level_text.ALIGN_CENTER;
		level_text.write(spr.number);
			
		if (n>=30)
		{
			spr.y += 20;
			level_text.y += 20;
			level_text.write(spr.number);
		}
	}    	   	   	
   	var special_levels_stars = [10,25,50,75,90];   	
   	var gain_spr;   	
   	function showGain(need_stars)
   	{
   		if (gain_spr) gain_spr.destroy = true; 		
   		if (need_stars == 0) return;
   		
   		gain_spr = library.getSprite("gain"+need_stars);
   		gain_spr.x = getStageWidthCenter()+30;
   		gain_spr.y = getStageHeight()-56;
   		stage.addChild(gain_spr);		
   	}   
   	
	var btn_more_games = library.getSprite("btn_more_games");
	btn_more_games.onclick = showMoreGames;
	stage.addChild(btn_more_games);
	btn_more_games.setPosition(48,160);  
	btn_more_games.setPropScale(0.9);
}

function findObject(name)
{
	for(var i=0; i<objects.length; i++)
	{
		if(objects[i].name == name) return objects[i];
	}
	return false;
}

function prepareLevel(id)
{
	if(stage)
	{
		mc = new Sprite(bitmaps.hourglass, 100, 150, 1);
		mc.x = 240;
		mc.y = 130;
		stage.addChild(mc);
	}
	setTimeout(function() {	startLevel(id);	}, (1000/fps)*2);
}

function getBodyByPoint(point, presentBody)
{
	var body = world.GetGroundBody();
	
	if(point)
	{
		stack = stage.getObjectsStackByCoord(point.x, point.y, false);
		if(stack.length > 0)
		{
			for(var i=stack.length-1; i >= 0; i--)
			{
				if(stack[i].box2dBody && stack[i].box2dBody != presentBody) body = stack[i].box2dBody;
			}
		}
	}	
	return body;
}

function getLevelsScores()
{
	levelsScores = [];
	var s = Utils.getCookie('soulshift_levels_scores') + "";
	if(s != "null") levelsScores = s.split(',');
}

function saveLevelsScores()
{
	Utils.setCookie('soulshift_levels_scores', levelsScores.join(","));
}

function getLevelsStars()
{
	levelsStars = [];
	var s = Utils.getCookie('soulshift_levels_stars') + "";
	if(s != "null") levelsStars = s.split(',');
}

function saveLevelsStars()
{
	Utils.setCookie('soulshift_levels_stars', levelsStars.join(","));
}

function getTotalLevelsScores()
{
	var sum = 0;
	for(var i=0; i<levels.length; i++)
	{
		if(levelsScores[i] >= 0) sum += levelsScores[i];
	}
	return sum;
}

function buildBackground()
{
	if(world) box2d.syncStage(world);
	stage.drawScene(document.getElementById("screen_background"), true);
}

function createLevelObjects(id, data) 
{
    var levelObjs;
    if (data) 
    {
        levelObjs = data.objects;
        levels = [data];
        gameState = STATE_GAME;
    }
    else levelObjs = levels[id].objects;        
    for (var i = 0; i < levelObjs.length; i++) 
    {    	
    	lo = levelObjs[i];
		mc = createObject(lo);
		mc.gotoAndStop(0);
				
		if (mc.box2dBody) mc.box2dBody.SetSleepingAllowed(false);
		if (mc.obType == "element_circle" || mc.obType == "element_box" || mc.obType == "triangle")
		{
			mc.onclick = function(e)
			{				
				if (this.active)
				{
					this.active = false;							
					if (this.active_spr)
					{
						stage.removeChild(this.active_spr);
						this.active_spr = null;		
					}					
				}				
				else
				{
					for (var i=0;i<stage.objects.length; i++)
					{
						if (stage.objects[i].active)
						{
							LEVEL.changeElements(stage.objects[i],e.target);
							return;							
						}
					}						
					this.active = true;									
					var koef = this.obType == "element_circle" ? this.width/28 : this.width/24;				
					this.active_spr = library.getSprite(this.obType == "element_circle" ? "circle_light" : "box_light");
					this.active_spr.width = this.active_spr.width*koef;
					this.active_spr.height = this.active_spr.height*koef;
					this.active_spr.x = this.x;
					this.active_spr.y = this.y;
					stage.addChild(this.active_spr);
				}
			};			
		}
		else if (mc.obType == "click_box")
		{
			mc.onclick = function(e)
			{
				ElementActions.destroyElement(e.target);
			};			
		}
		else if (mc.obType == "barrel")
		{
			mc.onclick = function(e)
			{
				ElementActions.makeBang(e.target);
			};		
		}
		else
		{
			mc.onclick = function(){};
		}
	}
}

var point_x = 0;
var point_y = 0;

var levels_moves = 
[1,1,2,3,2,1,2,2,1,3,2,3,6,3,2,3,8,5,6,6,2,2,1,2,0,2,3,6,2,2];

function Level()
{
	var self = this;
	this.number = 0;
	this.bitmap = null;

	this.pause = false;
	this.stars = [1,1,1];
	this.stars_spr = [];
		
	this.check_animation_spr = null;
		
	this.need_moves = 0;
	this.moves = 0;
	
	this.menu_btn = null;
	this.restart_btn = null;
		
	this.points = 0;
	this.coins_text = null;
		
	this.setLevel = function(id,data)
	{		
		this.number = id+1;
		this.need_moves = levels_moves[id]*1;
		create2dWorld();
			
		this.bitmap = new Sprite(bitmaps.back1, 480, 320, 1);
		this.bitmap.x = 240;
		this.bitmap.y = 160;
		this.bitmap.static = true;
		stage.addChild(this.bitmap);
							
		createLevelObjects(id, data);	
		this.setPanel();				
		this.updateStars();		
		createJoints(id);		
		
		for (var i=0; i<stage.objects.length;i++)
		{
			var sprite1 = stage.objects[i];
			for (var j=0; j<stage.objects.length;j++)
			{
				var sprite2 = stage.objects[j];
				if (sprite1.t_id == sprite2.target_id)
				{
					sprite2.target = sprite1;
				}				
			}
		}			
		this.setHints();	
		putSound();				
	};
	
	this.setPanel = function()
	{								
		var level_spr = library.getSprite("level");
		level_spr.x = 40;
		level_spr.y = 20;
		stage.addChild(level_spr);
				
		var level_text = new Text(bitmaps.num_in_level,16,22,11);
		level_text.align = level_text.ALIGN_LEFT;
	    level_text.x = 90;
	    level_text.y = 22;
	    level_text.write(this.number);	
						
		this.moves_text = new Text(bitmaps.num_in_level,16,22,11);
		this.moves_text.align = this.moves_text.ALIGN_LEFT;
	    this.moves_text.x = getStageWidthCenter()+65;
	    this.moves_text.y = 22;
	    if (this.number<=30) this.moves_text.write(0+"/"+levels_moves[this.number-1]);
								
		var restart_btn = new Sprite(bitmaps.restart_btn,31,31);
		restart_btn.x = 20;
		restart_btn.y = getStageHeightCenter()+20;
		restart_btn.onclick = function()
		{
			showGame(self.number);
			return false;
		};
		stage.addChild(restart_btn);
		
		var menu_btn = new Sprite(bitmaps.map_btn,31,31);
		menu_btn.x = 20;
		menu_btn.y = getStageHeightCenter()-20;
		menu_btn.onclick = function()
		{
			showMenu();
			return false;
		};
		stage.addChild(menu_btn);
		
		if (this.number<=30)
		{
			for (var i=0; i<3; i++)
			{
				var spr = library.getSprite("star_big");
				spr.x = getStageWidthCenter()-20+i*28;
				spr.y = 20;
				spr.gotoAndStop(0);
				stage.addChild(spr);
				this.stars_spr.push(spr);
			}
		}		
	};
							
	this.setHints = function()
	{
		if (this.number == 1)
		{			
			var text2 = GameUtils.findSprite("stage1_text2");
			text2.visible = false;
			var text3 = GameUtils.findSprite("stage1_text3");
			text3.visible = false;					
			var sprite1 = GameUtils.findSprite("circle_bad");						
			sprite1.addEventListener("click",function()
			{			
				var text1 = GameUtils.findSprite("stage1_text1");
				text1.destroy = true;				
				
				var text2 = GameUtils.findSprite("stage1_text2");
				text2.visible = true;
				
				var sprite2 = GameUtils.findSprite("box_good3");
				sprite2.addEventListener("click", function()
				{
					var text2 = GameUtils.findSprite("stage1_text2");
					text2.destroy = true;
					
					var text3 = GameUtils.findSprite("stage1_text3");
					text3.visible = true;
				});
			});
		}
		else if (this.number == 6)
		{
			var block = GameUtils.findSprite("block_click3");
			block.addEventListener("click",function()
			{
				var text1 = GameUtils.findSprite("stage6_text1");
				text1.destroy = true;
			});
			
			var barrel = GameUtils.findSprite("barrel");
			barrel.addEventListener("click",function()
			{
				var text1 = GameUtils.findSprite("stage6_text2");
				text1.destroy = true;
			});		
		}
		else if (this.number == 21)
		{			
			var block = GameUtils.findSprite("circle_good");
			block.addEventListener("click",function()
			{
				var text1 = GameUtils.findSprite("stage21_text1");
				text1.destroy = true;
			});
		}
		else if (this.number == 26)
		{						
			var circle = GameUtils.findSprite("circle_good2");
			circle.addEventListener("click",function()
			{
				var text1 = GameUtils.findSprite("stage26_text1");
				text1.destroy = true;
			});
		}			
	};
			
	this.updateStars = function()
	{		
		if (this.number>30) return;
		for (var i=0; i<3; i++)
		{
			this.stars_spr[i].gotoAndStop(i<this.stars.length ? 0 : 1);
		}						
		this.moves_text.write(this.moves+"/"+this.need_moves);
	};
			
	this.showPause = function()
	{
		this.freezeAll();
	};
	
	this.hidePause = function()
	{
		this.unFreezeAll();
	};
	
	this.freezeAll = function(end)
	{		
		var spr = new Sprite(null,getStageWidth(), getStageHeight());
		spr.x = getStageWidthCenter();
		spr.y = getStageHeightCenter();
		spr.fillColor = "black";
		spr.opacity = 0.3;
		spr.onclick = function()
		{
			return false;
		};			
		stage.addChild(spr);		
		this.pause = true;		
	};
	
	this.unFreezeAll = function()
	{
		this.pause = false;
	};
	
	this.showLevelComplete = function()
	{		
		if (this.check_animation_spr) this.check_animation_spr.destroy = true;			
		this.freezeAll(true);
		gameState = STATE_LEVEL_COMPLETE;				
		if (levelsStars[this.number-1])
		{
			if (this.stars.length > levelsStars[this.number-1]) levelsStars[this.number-1] = this.stars.length;
		}
		else levelsStars[this.number-1] = this.stars.length;
		saveLevelsStars();
						
		var spr = library.getSprite("victory_1");
		spr.x = getStageWidthCenter();
		spr.y = getStageHeightCenter()-40;
		stage.addChild(spr);

		var spr = library.getSprite(this.number<35 ? "next_btn" : "menu_btn");
		spr.x = getStageWidthCenter();
		spr.y = getStageHeightCenter()+60;
		spr.onclick = function()
		{
			self.number<35 ? showGame(self.number+1) : showMenu();
		}
		stage.addChild(spr);
		putEventSound("win");	
	
		var btn_more_games = library.getSprite("btn_more_games");
		btn_more_games.onclick = showMoreGames;
		stage.addChild(btn_more_games);
		btn_more_games.setPosition(spr.x,spr.y + 35);  
		
		ExternalAPI.exec('showAds');
		ExternalAPI.openWidget(160, 50, "I scored " + this.stars.length + " in Soul Shift game! Try to beat me!");
	};
	
	this.showGameOver = function()
	{
		if (this.check_animation_spr) this.check_animation_spr.destroy = true;
		this.freezeAll(true);
		gameState = STATE_GAME_OVER;
		
		var spr = library.getSprite("fail");
		spr.x = getStageWidthCenter();
		spr.y = getStageHeightCenter();
		spr.onclick = function()
		{
			showGame(self.number);
		}
		stage.addChild(spr);
		putEventSound("win");		
	};
	
	this.checkWin = function()
	{		
		var ready_for_animation = true;
		for (var i=0; i<stage.objects.length; i++)
	    {
	    	var sprite = stage.objects[i];
	    	if (sprite.box2dBody)
	    	{
				if (sprite.bad)	ready_for_animation = false;
				if (sprite.good)
				{
					if (Math.abs(sprite.box2dBody.m_angularVelocity)>1 || 
						Math.abs(sprite.box2dBody.m_linearVelocity.x)>1 ||
						Math.abs(sprite.box2dBody.m_linearVelocity.y)>1)
					{
						ready_for_animation = false;
						break;
					}					
				}
	    	}
	    }	    
	    if (ready_for_animation) this.showCheckWinAnimation();
	};
	
	this.showCheckWinAnimation = function()
	{
		this.check_animation_spr = library.getSprite("check");
		this.check_animation_spr.x = getStageWidthCenter();
		this.check_animation_spr.y = getStageHeightCenter();
		
		this.check_animation_spr.animDelay = 3;
		this.check_animation_spr.onenterframe = function(e)
		{
			if (e.target.currentFrame == 15) self.showLevelComplete();
		};
		stage.addChild(this.check_animation_spr);
	};
	
	this.changeElements = function(sprite1,sprite2)
	{	
		this.moves++;
		if (this.moves> this.need_moves) this.stars.pop();
		this.updateStars();
		ElementActions.changeElements(sprite1,sprite2);
		putEventSound("change");
	};
}

var ElementActions = 
{
	bangObj: null,
	fraction_cnt: 0,
	fractions: [],
	changeElements: function(sprite1,sprite2)
	{
		var pos1 = {x:sprite1.box2dBody.GetPosition().x*1,y:sprite1.box2dBody.GetPosition().y*1};
		var linearVelocity1 = {x:sprite1.box2dBody.GetLinearVelocity().x*1,y:sprite1.box2dBody.GetLinearVelocity().y*1};
		var angularVelocity1 = sprite1.box2dBody.GetAngularVelocity()*1;		
		
		var pos2 = {x:sprite2.box2dBody.GetPosition().x*1,y:sprite2.box2dBody.GetPosition().y*1};
		var linearVelocity2 = {x:sprite2.box2dBody.GetLinearVelocity().x*1,y:sprite2.box2dBody.GetLinearVelocity().y*1};
		var angularVelocity2 = sprite2.box2dBody.GetAngularVelocity()*1;		

		linearVelocity1.x = Math.floor(linearVelocity1.x*1000)/1000;
		linearVelocity1.y = Math.floor(linearVelocity1.y*1000)/1000;
		linearVelocity2.x = Math.floor(linearVelocity2.x*1000)/1000;
		linearVelocity2.y = Math.floor(linearVelocity2.y*1000)/1000;
		
		angularVelocity1 = Math.floor(angularVelocity1*1000)/1000;
		angularVelocity2 = Math.floor(angularVelocity2*1000)/1000;
		
		sprite1.box2dBody.SetSleepingAllowed(false);
		sprite2.box2dBody.SetSleepingAllowed(false);
		
		sprite1.box2dBody.SetPosition(pos2);
		sprite2.box2dBody.SetPosition(pos1);
		sprite1.box2dBody.SetLinearVelocity(linearVelocity2);
		sprite2.box2dBody.SetLinearVelocity(linearVelocity1);
		sprite1.box2dBody.SetAngularVelocity(angularVelocity2);
		sprite2.box2dBody.SetAngularVelocity(angularVelocity1);
				
		sprite1.active = false;
		sprite2.active = false;
					
		if (sprite1.active_spr) stage.removeChild(sprite1.active_spr);
		if (sprite2.active_spr) stage.removeChild(sprite2.active_spr);
		
	},
	makeBang: function(sprite)
	{

		var spr_x = sprite.x*1;
		var spr_y = sprite.y*1;		
		var obj = {};
		var radius = sprite.name == "barrel" ? 100 : 250;
		for (var i=0; i<levels[LEVEL.number-1].objects.length; i++)
		{
			obj = levels[LEVEL.number-1].objects[i];
			if (sprite.name == obj.type)
			{
				if (obj.radius) radius = obj.radius;
			}
		}
		
		var bang = library.getSprite(sprite.name == "barrel" ? "bang_big" : "bang_big");
		bang.x = sprite.x;
		bang.y = sprite.y;				
		bang.onenterframe = function(en)
		{
			if (this.currentFrame == 9) ElementActions.destroyElement(this);	
		};
		stage.addChild(bang);
		
		ElementActions.destroyElement(sprite);
		ElementActions.bangObj = box2d.createCircle(world, {
			x: spr_x, 
			y: spr_y, 
			radius: radius,
			bodyType: box2d.bodyType.static,
			isSensor: true,
		});
				
		putEventSound("bang");
				
	},	
	createBangEffect: function(sensor,element_arr)
	{
		var sensor_x = sensor.GetPosition().x;
		var sensor_y = sensor.GetPosition().y;
		for (var i=0; i<element_arr.length; i++)
		{						
			var body = element_arr[i];
			var obj = {};						
			obj.x = element_arr[i].GetPosition().x;
			obj.y = element_arr[i].GetPosition().y;	
			var dx = obj.x-sensor_x;
			var dy = obj.y-sensor_y;			
			obj.length = Math.round(Math.sqrt(dx*dx+dy*dy));
			var impulse = 100/obj.length;
			world.RayCast(function(fixture, point, normal, fraction)
			{
				ElementActions.fraction_cnt++;
				ElementActions.fractions.push(fixture);						
			},new b2Vec2(sensor_x,sensor_y),new b2Vec2(obj.x,obj.y));		
			var apply_impulse = true;								
			ElementActions.fractions.sort(function(first,second)
			{
				var obj = ElementActions.bangObj.GetPosition();
				var obj1 = first.GetBody().GetPosition();
				var obj2 = second.GetBody().GetPosition();
				var d_first = GameUtils.getLength(obj.x,obj.y,obj1.x,obj1.y);
				var d_second = GameUtils.getLength(obj.x,obj.y,obj2.x,obj2.y);												
				if (d_first == d_second)
			    return 0;
			    if (d_first < d_second)
			        return 1;
			    else
			        return -1;		
			});			
			ElementActions.fractions.reverse();
			//enable walls for bang			
			if (LEVEL.number == 7 || LEVEL.number == 9)
			{
				for (var j=0; j<ElementActions.fractions.length; j++)
				{				
					var sprite = ElementActions.fractions[j].GetBody().sprite;
					
					if (j<ElementActions.fractions.length-1)
					{
						if (sprite.obType == "ground_box" || 
							sprite.obType == "wood_box" ||
							sprite.obType == "click_box" ||
							sprite.obType == "static_box")
						{
							apply_impulse = false;
						}
					}									
				}
			}						
			if (apply_impulse) body.ApplyImpulse(new b2Vec2(dx*impulse,dy*impulse), body.GetPosition());			
 			ElementActions.fractions = [];
			ElementActions.fraction_cnt = 0;		
		}				
		world.DestroyBody(sensor);
	},	
	destroyElement: function(sprite)
	{
		deleteObject(sprite);
	},		
	useTrigger: function(obj)
	{
		ElementActions.destroyElement(obj.target);
		ElementActions.destroyElement(obj);
	},	
	addEventListener: function(type, callback)
	{
		LocalEventsManager.addEvent(Utils, type, callback);
	},
}

var GameUtils = 
{
	music: false,
	sound: false,
	bang: null,
	createMultiBox: function(world,options)
	{
		options = box2d.prepareBodyOptions(options);
		options.width = (typeof options.width != "undefined") ? options.width : 20;
		options.height = (typeof options.height != "undefined") ? options.height : 20;
			
		var fixDef = box2d.fillFixtureDef(new b2FixtureDef(), options);
		var bodyDef = box2d.fillBodyDef(new b2BodyDef(), options);				
        var body = world.CreateBody(bodyDef);             
                   
        fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsBox(options.width/box2d.SCALE/2, options.height/box2d.SCALE/2);
		body.CreateFixture(fixDef);                                                 
		
		options.width = 6;
		options.height = 64;
		
		var fixDef = box2d.fillFixtureDef(new b2FixtureDef(), options);				
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsOrientedBox(options.width/box2d.SCALE/2, options.height/box2d.SCALE/2,new b2Vec2(138/box2d.SCALE, -0.9), 0);
		body.CreateFixture(fixDef);
		
		var fixDef = box2d.fillFixtureDef(new b2FixtureDef(), options);			
		fixDef.shape = new b2PolygonShape();
		fixDef.shape.SetAsOrientedBox(options.width/box2d.SCALE/2, options.height/box2d.SCALE/2,new b2Vec2(68/box2d.SCALE, -0.9), 0);
		body.CreateFixture(fixDef);

        return body;
	},
	getLength: function(x1,y1,x2,y2)
	{
		var dx = x1-x2;
		var dy = y1-y2;
		var length = Math.sqrt(dx*dx+dy*dy);
		return length;
	},
	sortByDistance: function(first, second)
	{
		if (first.target_points == second.target_points)
	    return 0;
	    if (first.target_points < second.target_points)
	        return 1;
	    else
	        return -1;
	},	
	findSprite: function(name)
	{
		for (var i=0; i<stage.objects.length; i++)
		{
			if (stage.objects[i].name == name) return stage.objects[i];
		}
		return false;
	},
	addEventListener: function(type, callback)
	{
		LocalEventsManager.addEvent(Utils, type, callback);
	},	
};

var LocalEventsManager =
{
	addEvent: function(obj, type, callback)
	{
		if(!obj.eventsListeners) return;
		for(var i = 0; i < obj.eventsListeners.length; i++)
		{
			if(obj.eventsListeners[i].type === type && obj.eventsListeners[i].callback === callback) return;
		}
		obj.eventsListeners.push({type: type, callback: callback});
	},
};

function preTick()
{
	if(gameState == STATE_GAME)
	{
		world.Step(1/fps, 4, 4);
	    world.ClearForces();
	    box2d.syncStage(world);	    
	    for (var i=0; i<stage.objects.length; i++)
	    {
	    	var sprite = stage.objects[i];
	    	if (sprite.active_spr)sprite.active_spr.rotation = sprite.rotation;	
	    	if (sprite.box2dBody)
	    	{	    		
	    		if (sprite.good || sprite.bad)
	    		{
	    			if ((sprite.obType != "element_circle_unclick" && sprite.obType != "element_box_unclick"))
		    		{	    			
		    			var fall = true;
		    			for (var b = sprite.box2dBody.GetContactList(); b; b = b.next)
		    			{
		    				if (b.other)
		    				{
		    					fall = false;	
		    				}
		    			}			    			
		    			if (!fall)
		    			{
		    				if (sprite.currentFrame != 0) sprite.gotoAndStop(0);
		    			}
		    			
		    			if (fall)
		    			{
		    				if (sprite.currentFrame != 3) sprite.gotoAndStop(3);
		    			}
		    			else if (Math.abs(sprite.box2dBody.m_angularVelocity)>3 ||
	    							Math.abs(sprite.box2dBody.m_linearVelocity.x)>3 ||
		    						Math.abs(sprite.box2dBody.m_linearVelocity.y)>3)
		    			{
		    				if (sprite.currentFrame != 2)
							{
								sprite.gotoAndStop(2);
							}
		    			}
		    		}	    		 		
		    		
		    		if (sprite.y>600 || sprite.x>700 || sprite.x<-100)
		    		{	    	
		    			if (sprite.good) LEVEL.showGameOver();
		    			else if (sprite.bad) ElementActions.destroyElement(sprite);
		    			else ElementActions.destroyElement(sprite);
		    		}		    		    		
		    		if (sprite.active_spr)
		    		{
		    			sprite.active_spr.x = sprite.x;
		    			sprite.active_spr.y = sprite.y;
		    		}		    		
		    		for (var j=0; j<stage.objects.length; j++)
		    		{
		    			var sprite2 = stage.objects[j];
		    			if (sprite2.obType == "trigger")
		    			{
		    				if (stage.hitTest(sprite,sprite2)) ElementActions.useTrigger(sprite2);
		    			}	    			
		    		}				    		
		    	}
			}	
	    }
	    
	    if (ElementActions.bangObj)
	    {
	    	var sensor_arr = [];
	    	for (var b = ElementActions.bangObj.GetContactList(); b; b = b.next)
			{
				if (b.other) sensor_arr.push(b.other);
			}			
			if (sensor_arr.length>0) ElementActions.createBangEffect(ElementActions.bangObj,sensor_arr);
	    }	    
	    
	    if (!LEVEL.check_animation_spr) LEVEL.checkWin();
	}
}

function postTick()
{
	if(world && showDebugDraw) world.DrawDebugData();
}

function Text(font, width, height, zIndex)
{
    this.ALIGN_LEFT = 0;
    this.ALIGN_RIGHT = 1;
    this.ALIGN_CENTER = 2;
    this.font = font;
    this.x = 0;
    this.y = 0;
    this.zIndex = zIndex;
    this.width = width;
    this.height = height;
    this.align = this.ALIGN_LEFT;
    this.rotation = 0;
    this.static = false;
    this.charMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'];
    this.sprites = [];
    this.manageSprites = function(text)
    {
        var i, char;
        var len = text.length;
        var sp_len = this.sprites.length;
        if(sp_len < len)
        {
            for(i=0; i<len-sp_len; i++)
            {
                char = new Sprite(this.font, this.width, this.height, this.charMap.length);
                this.sprites.push(char);
                stage.addChild(char);
            }
        }
        if(sp_len > len)
        {
            for(i=0; i<sp_len-len; i++) stage.removeChild(this.sprites[i]);
            this.sprites.splice(0, sp_len-len);
        }
    }
    this.write = function(text)
    {
        var curX, curY, p, p2, n;
        text = text + "";
        this.manageSprites(text);
        curX = this.x;
        curY = this.y;
        if(this.align == this.ALIGN_CENTER) curX = this.x - (text.length-1)/2*this.width;
        if(this.align == this.ALIGN_RIGHT) curX = this.x - (text.length-1)*this.width;
        p = new Vector(curX-this.x, 0);
        p.rotate(-this.rotation);
        curX = p.x + this.x;
        curY = p.y + this.y;
        p = new Vector(0, 0);
        for(var i=0; i<text.length; i++)
        {
            this.sprites[i].visible = true;
            n = this.charMap.indexOf(text.substr(i, 1));
            if (text.substr(i, 1) == "/") n = 10;
            if(n < 0) this.sprites[i].visible = false;
            else
            {
                this.sprites[i].gotoAndStop(n);
                p2 = p.clone();
                p2.rotate(-this.rotation);
                this.sprites[i].x = p2.x + curX;
                this.sprites[i].y = p2.y + curY;
                this.sprites[i].rotation = this.rotation;
                this.sprites[i].static = this.static;
                //if (this.zIndex>0) this.sprites[i].zIndex = this.zIndex;
                
                p.x += this.width;
            }
        }
    }
    this.moveTo = function(value,duration,destroy)
    {
        for (var i=0; i<this.sprites.length;i++)
        {        	
        	var tweenY = stage.createTween(this.sprites[i],"y",this.sprites[i].y,this.sprites[i].y-30,15,Easing.linear);
        	tweenY.onfinish = function(e)
        	{
        		tweenY.destroy = true;     		
        	};
        	tweenY.play();
        	
        	var tweenY2 = stage.createTween(this.sprites[i],"opacity",1,0,15,Easing.linear);
        	tweenY2.onfinish = function(e)
        	{
        		tweenY2.destroy = true;     		
        	};
        	tweenY.play();
        	tweenY2.play();
        }
    };
    this.destroySpr = function()
    {
    	for (var i=0; i<this.sprites.length;i++)
        {
            this.sprites[i].destroy = true;
        }
    };
}

function putSound()
{
	var sound_btn = library.getSprite("sound_btn");
	sound_btn.x = getStageWidth()-20;
	sound_btn.y = 20;	
	sound_btn.gotoAndStop(0);
	stage.addChild(sound_btn);
		
    if(parseInt(Utils.getCookie("soul_shift_sound")) == 1 && !GameUtils.sound)
    {
        sound_btn.gotoAndStop(0);
        GameUtils.sound = true;
        mixer.play("back", true, false, 0);
    }
    else if (parseInt(Utils.getCookie("soul_shift_sound")) == 2)
    {
        sound_btn.gotoAndStop(1);
        GameUtils.sound = false;
        mixer.stop(0);
        Utils.setCookie("soul_shift_sound", 2);
    }
    sound_btn.onclick = function(e)
    {
        if(GameUtils.sound)
        {
            e.target.gotoAndStop(1);
            Utils.setCookie("soul_shift_sound", 2);
            GameUtils.sound = false;
            mixer.stop(0);
        }
        else
        {
            e.target.gotoAndStop(0);
            Utils.setCookie("soul_shift_sound", 1);
            GameUtils.sound = true;
            mixer.play("back", true, false, 0);
        }
    }    
    
    var music_btn = library.getSprite("music_btn");
	music_btn.x = getStageWidth()-50;
	music_btn.y = 20;
	music_btn.gotoAndStop(0);
	stage.addChild(music_btn);
    
    if(parseInt(Utils.getCookie("soul_shift_music")) == 1 && !GameUtils.music)
    {
        music_btn.gotoAndStop(0);
        GameUtils.music = true;
    }
    else if (parseInt(Utils.getCookie("soul_shift_music")) == 2)
    {
        music_btn.gotoAndStop(1);
        GameUtils.music = false;
        Utils.setCookie("soul_shift_music", 2);
    }
    music_btn.onclick = function(e)
    {
        if(GameUtils.music)
        {
            e.target.gotoAndStop(1);
            Utils.setCookie("soul_shift_music", 2);
            GameUtils.music = false;
        }
        else
        {
            e.target.gotoAndStop(0);
            Utils.setCookie("soul_shift_music", 1);
            GameUtils.music = true;
        }
    }
}
	
function putEventSound(track)
{
	if (!AudioMixer.isWebAudioSupport()) return false;
	if (!GameUtils.music) return;
    mixer.play(track, false, false, 1);
}

function showMoreGames() {
	window.open(ExternalAPI.getMoreGamesURL(), '_blank');
}	