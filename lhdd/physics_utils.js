var world;

// Для отладки спрайтов    
var sprite_debug_draw = false;

// Для отладки физики
var physics_debug = false;

// Создание 2D мира
function create2dWorld() 
{
	world = box2d.createWorld();	
	box2d.setDebugDraw(world, document.getElementById('screen'));
}

function goToSleepWorld()
{
	for(var i=0; i<stage.objects.length; i++)
	{
		//if(stage.objects[i].box2dBody) stage.objects[i].box2dBody.GoToSleep();
	}
}

function wakeUpWorld()
{
	for(var i=0; i<stage.objects.length; i++)
	{
		if(stage.objects[i].box2dBody) stage.objects[i].box2dBody.WakeUp();
	}
}

function createJoints(id) 
{
    var levelJoints = levels[id].joints;
    if (levelJoints) 
    {
        var j, joint, stack, body1, body2;
        
        //debugger
        
        for (var i=0; i<levelJoints.length; i++) 
        {
            joint = levelJoints[i];
            
            var point1 = {x: joint.point1.x, y: joint.point1.y};
            var point2 = joint.point2 ? {x: joint.point2.x, y: joint.point2.y} : null;
            
            point1.x += (getStageWidth() - 480)/2;
            point1.y += (getStageHeight() - 320)/2;
            if(point2) 
            {
                point2.x += (getStageWidth() - 480)/2;
                point2.y += (getStageHeight() - 320)/2;
            }
            
            body1 = getBodyByPoint(point1);
            body2 = getBodyByPoint((point2 ? point2 : point1), body1);
            
            
            //debugger
            
            if(joint.type == 0)
            {            	
            	j = box2d.createRevoluteJoint(world, {
            		body1: body1,
            		body2: body2,
            		point: point1,
            		collideConnected: false,
					enableMotor: true,
					motorSpeed: 0,
					maxMotorTorque: 0,
					enableLimit: false,
					lowerAngle: 0,
					upperAngle: 10,
            	});

            }
            if(joint.type == 1)
            {
                j = box2DCreateDistanceJoint(world, body1, body2, point1, point2);

                j.custom = joint.custom;
                createSpriteForDistanceJoint(j, point1, point2);
            }
            if(joint.type == 2) j = box2DCreatePrismaticJoint(world, body1, body2, point2, joint.custom);
        }
    }    
}
// Создание игровых объектов на основе файла levels.js
/*
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
        createObject(levelObjs[i]);
    }
}
*/

function findObject(name) 
{
    for (var i = 0; i < objects.length; i++) 
    {
        if (objects[i].name == name) return objects[i];
    }
    return false;
}

// Возвращает массив спрайтов с указанным info
function getObjectsByInfo(info) 
{
    var arr = [];
    for (var i = 0, j = stage.objects.length; i < j; i++) 
    {
        if (stage.objects[i].info == info) arr.push(stage.objects[i]);
    };
    return arr;
}

function deleteObject(sprite) 
{	
    stage.removeChild(sprite);
    if (sprite.box2dBody) 
    {
        world.DestroyBody(sprite.box2dBody);
    }
}

function debugDraw() 
{
    if (world) drawWorld(world, stage);
}

function startLevel(n, data) 
{	
	gameState = STATE_GAME;
    createStage();
    currentLevel = n + 1;
    if (LEVEL) LEVEL = null;
	LEVEL = new Level();
    LEVEL.setLevel(n, data);

    buildBackground();
    stage.start();
}

function getBodyByPoint(point, presentBody) 
{
    var body = world.GetGroundBody();    
    if (point) 
    {
        stack = stage.getObjectsStackByCoord(point.x, point.y, false);
        if (stack.length > 0) 
        {
            for (var i=stack.length - 1; i >= 0; i--)  
            {
                if (stack[i].box2dBody && stack[i].box2dBody != presentBody)
                {
                	body = stack[i].box2dBody;
                }                    
            }
        }
    }    
    return body;
}

function createObject(obj, relative)
{
	var body, points, density, restitution, friction, fixed, x, y, width, height;
	var lo, ob, body, points, density, restitution, friction, x, y, width, height;
    lo = obj;
    ob = findObject(lo.type);
		
	mc = new Sprite(bitmaps[ob.name], ob.width, ob.height, ob.frames);
	mc.x = lo.x;
	mc.y = lo.y;
	mc.target_id = lo.target_id ? lo.target_id : 0;
	mc.t_id = lo.t_id ? lo.t_id : 0;
	mc.rotation = lo.rotation;
		
	stage.addChild(mc);
	
	if(ob.bodyType != NONE)
	{
		fixed = (typeof(lo.fixed) != "undefined") ? lo.fixed : ob.fixed;
		density = (typeof(lo.density) != "undefined") ? lo.density : ob.density;
		restitution = (typeof(lo.restitution) != "undefined") ? lo.restitution : ob.restitution;
		friction = (typeof(lo.friction) != "undefined") ? lo.friction : ob.friction;
				
		if(density <= 0) fixed = true;
		
		width = ob.bodyWidth ? ob.bodyWidth : ob.width;
		height = ob.bodyHeight ? ob.bodyHeight : ob.height;
		x = lo.x;
		y = lo.y;
		if(ob.bodyPosCorrect)
		{
			x += ob.bodyPosCorrect.x;
			y += ob.bodyPosCorrect.y;
			mc.syncX = ob.bodyPosCorrect.x;
			mc.syncY = ob.bodyPosCorrect.y;
			mc.onbox2dsync = spritesSync;
		}
		
		if(ob.bodyType == BOX)
		{
			if (ob.name == "wood_09_blok4")
			{
				body = GameUtils.createMultiBox(world,{
					x: x,
					y: y,
					width: width,
					height: height,
					rotation: lo.rotation,
					bodyType: fixed ? box2d.bodyType.static : box2d.bodyType.dynamic,
					density: density,
					restitution: restitution,
					friction: friction
				});
			}
			else
			{
				body = box2d.createBox(world, {
					x: x,
					y: y,
					width: width,
					height: height,
					rotation: lo.rotation,
					bodyType: fixed ? box2d.bodyType.static : box2d.bodyType.dynamic,
					density: density,
					restitution: restitution,
					friction: friction
				});
			}
			
		}
		if(ob.bodyType == CIRCLE)
		{
			body = box2d.createCircle(world, {
				x: x,
				y: y,
				radius: width/2,
				rotation: lo.rotation,
				bodyType: fixed ? box2d.bodyType.static : box2d.bodyType.dynamic,
				density: density,
				restitution: restitution,
				friction: friction
			});
		}
		if(ob.bodyType == POLY)
		{
			body = box2d.createPoly(world, {
				x: x,
				y: y,
				points: ob.points,
				rotation: lo.rotation,
				bodyType: fixed ? box2d.bodyType.static : box2d.bodyType.dynamic,
				density: density,
				restitution: restitution,
				friction: friction
			});
		}
		
		body.sprite = mc;
		mc.box2dBody = body;
		
		
		//body.SetUserData(mc);
		
		
	}
	
	//if(GET["debug"] != 1 && (/*fixed || */ob.bodyType == NONE)) mc.static = true;
	mc.obType = ob.type;
	mc.good = ob.good;
	mc.bad = ob.bad;
	////////////////
    mc.name = ob.name;
    
    
    //mc.grav = false;
    //mc.destroyAble = ob.destroyAble;
	////////////////	
	
	
	return mc;
}