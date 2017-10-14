var NONE = 0;
var BOX = 1;
var CIRCLE = 2;
var POLY = 3;

var NORMAL = 0;
var COIN = 1;
var DOOR = 2;
var GROUND = 3;
var PLATFORM_DOWN = 4;
var PLATFORM_UP = 5;
var SPIKE = 6;
var GUN = 7;
var BTN = 8;

function spritesSync(e, x, y)
{
	var p = new Vector(-e.target.syncX, -e.target.syncY);
	p.rotate(-e.target.rotation);
	e.target.x += p.x;
	e.target.y += p.y;
}

var objects = 
[{"name":"stage_01_blok1","image":"blocks/stage_01_blok1.png","type":"ground_box","good":false,"bad":false,"width":218,"height":21,"bodyWidth":218,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_01_blok2","image":"blocks/stage_01_blok2.png","type":"ground_box","good":false,"bad":false,"width":245,"height":21,"bodyWidth":245,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_02_blok11","image":"blocks/stage_02_blok11.png","type":"ground_box","good":false,"bad":false,"width":114,"height":23,"bodyWidth":114,"bodyHeight":23,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_02_blok2","image":"blocks/stage_02_blok2.png","type":"ground_box","good":false,"bad":false,"width":305,"height":21,"bodyWidth":305,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_03_blok1","image":"blocks/stage_03_blok1.png","type":"ground_box","good":false,"bad":false,"width":318,"height":21,"bodyWidth":318,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_03_blok2","image":"blocks/stage_03_blok2.png","type":"ground_box","good":false,"bad":false,"width":85,"height":21,"bodyWidth":85,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_04_blok12","image":"blocks/stage_04_blok12.png","type":"ground_box","good":false,"bad":false,"width":176,"height":18,"bodyWidth":176,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_04_blok3","image":"blocks/stage_04_blok3.png","type":"ground_box","good":false,"bad":false,"width":86,"height":21,"bodyWidth":86,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_05_blok1","image":"blocks/stage_05_blok1.png","type":"ground_box","good":false,"bad":false,"width":346,"height":18,"bodyWidth":346,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_05_blok2","image":"blocks/stage_05_blok2.png","type":"ground_box","good":false,"bad":false,"width":17,"height":27,"bodyWidth":17,"bodyHeight":27,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_05_blok4","image":"blocks/stage_05_blok4.png","type":"ground_box","good":false,"bad":false,"width":105,"height":18,"bodyWidth":105,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_06_blok1","image":"blocks/stage_06_blok1.png","type":"ground_box","good":false,"bad":false,"width":361,"height":15,"bodyWidth":361,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_06_blok2","image":"blocks/stage_06_blok2.png","type":"ground_box","good":false,"bad":false,"width":70,"height":23,"bodyWidth":70,"bodyHeight":23,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_07_blok1","image":"blocks/stage_07_blok1.png","type":"ground_box","good":false,"bad":false,"width":139,"height":23,"bodyWidth":139,"bodyHeight":23,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_07_blok2","image":"blocks/stage_07_blok2.png","type":"ground_box","good":false,"bad":false,"width":205,"height":16,"bodyWidth":205,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_08_blok1","image":"blocks/stage_08_blok1.png","type":"ground_box","good":false,"bad":false,"width":117,"height":19,"bodyWidth":117,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_08_blok2","image":"blocks/stage_08_blok2.png","type":"ground_box","good":false,"bad":false,"width":65,"height":20,"bodyWidth":65,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_08_blok3","image":"blocks/stage_08_blok3.png","type":"ground_box","good":false,"bad":false,"width":344,"height":20,"bodyWidth":344,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_09_blok1","image":"blocks/stage_09_blok1.png","type":"ground_box","good":false,"bad":false,"width":142,"height":19,"bodyWidth":142,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_09_blok4","image":"blocks/stage_09_blok4.png","type":"ground_box","good":false,"bad":false,"width":66,"height":18,"bodyWidth":66,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_10_blok1","image":"blocks/stage_10_blok1.png","type":"ground_box","good":false,"bad":false,"width":172,"height":12,"bodyWidth":172,"bodyHeight":12,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_10_blok2","image":"blocks/stage_10_blok2.png","type":"ground_box","good":false,"bad":false,"width":172,"height":14,"bodyWidth":172,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_10_blok3","image":"blocks/stage_10_blok3.png","type":"ground_box","good":false,"bad":false,"width":64,"height":17,"bodyWidth":64,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_11_blok1","image":"blocks/stage_11_blok1.png","type":"ground_box","good":false,"bad":false,"width":245,"height":22,"bodyWidth":245,"bodyHeight":22,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_12_blok1","image":"blocks/stage_12_blok1.png","type":"ground_box","good":false,"bad":false,"width":267,"height":19,"bodyWidth":267,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_12_blok2","image":"blocks/stage_12_blok2.png","type":"ground_box","good":false,"bad":false,"width":84,"height":18,"bodyWidth":84,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_12_blok3","image":"blocks/stage_12_blok3.png","type":"ground_box","good":false,"bad":false,"width":189,"height":19,"bodyWidth":189,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_13_blok1","image":"blocks/stage_13_blok1.png","type":"ground_box","good":false,"bad":false,"width":403,"height":20,"bodyWidth":403,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_13_blok2","image":"blocks/stage_13_blok2.png","type":"ground_box","good":false,"bad":false,"width":43,"height":19,"bodyWidth":43,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_13_blok3","image":"blocks/stage_13_blok3.png","type":"ground_box","good":false,"bad":false,"width":72,"height":19,"bodyWidth":72,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_14_blok1","image":"blocks/stage_14_blok1.png","type":"ground_box","good":false,"bad":false,"width":80,"height":19,"bodyWidth":80,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_14_blok2","image":"blocks/stage_14_blok2.png","type":"ground_box","good":false,"bad":false,"width":54,"height":19,"bodyWidth":54,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_14_blok3","image":"blocks/stage_14_blok3.png","type":"ground_box","good":false,"bad":false,"width":170,"height":20,"bodyWidth":170,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_15_blok1","image":"blocks/stage_15_blok1.png","type":"ground_box","good":false,"bad":false,"width":344,"height":17,"bodyWidth":344,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_15_blok2","image":"blocks/stage_15_blok2.png","type":"ground_box","good":false,"bad":false,"width":244,"height":18,"bodyWidth":244,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_15_blok3","image":"blocks/stage_15_blok3.png","type":"ground_box","good":false,"bad":false,"width":58,"height":15,"bodyWidth":58,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_15_blok4","image":"blocks/stage_15_blok4.png","type":"ground_box","good":false,"bad":false,"width":91,"height":15,"bodyWidth":91,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_16_blok1","image":"blocks/stage_16_blok1.png","type":"ground_box","good":false,"bad":false,"width":242,"height":19,"bodyWidth":242,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_16_blok2","image":"blocks/stage_16_blok2.png","type":"ground_box","good":false,"bad":false,"width":202,"height":17,"bodyWidth":202,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_16_blok3","image":"blocks/stage_16_blok3.png","type":"ground_box","good":false,"bad":false,"width":66,"height":16,"bodyWidth":66,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_17_blok1","image":"blocks/stage_17_blok1.png","type":"ground_box","good":false,"bad":false,"width":313,"height":25,"bodyWidth":313,"bodyHeight":25,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_18_blok1","image":"blocks/stage_18_blok1.png","type":"ground_box","good":false,"bad":false,"width":132,"height":14,"bodyWidth":132,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_18_blok2","image":"blocks/stage_18_blok2.png","type":"ground_box","good":false,"bad":false,"width":196,"height":14,"bodyWidth":196,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_18_blok3","image":"blocks/stage_18_blok3.png","type":"ground_box","good":false,"bad":false,"width":116,"height":19,"bodyWidth":116,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_18_blok4","image":"blocks/stage_18_blok4.png","type":"ground_box","good":false,"bad":false,"width":19,"height":44,"bodyWidth":19,"bodyHeight":44,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_18_blok6","image":"blocks/stage_18_blok6.png","type":"ground_box","good":false,"bad":false,"width":288,"height":15,"bodyWidth":288,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_19_blok1","image":"blocks/stage_19_blok1.png","type":"ground_box","good":false,"bad":false,"width":152,"height":16,"bodyWidth":152,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_20_blok1","image":"blocks/stage_20_blok1.png","type":"ground_box","good":false,"bad":false,"width":200,"height":21,"bodyWidth":200,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_20_blok2","image":"blocks/stage_20_blok2.png","type":"ground_box","good":false,"bad":false,"width":118,"height":20,"bodyWidth":118,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_20_blok3","image":"blocks/stage_20_blok3.png","type":"ground_box","good":false,"bad":false,"width":178,"height":19,"bodyWidth":178,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_20_blok4","image":"blocks/stage_20_blok4.png","type":"ground_box","good":false,"bad":false,"width":70,"height":20,"bodyWidth":70,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_21_blok1","image":"blocks/stage_21_blok1.png","type":"ground_box","good":false,"bad":false,"width":155,"height":22,"bodyWidth":155,"bodyHeight":22,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_21_blok2","image":"blocks/stage_21_blok2.png","type":"ground_box","good":false,"bad":false,"width":138,"height":22,"bodyWidth":138,"bodyHeight":22,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_21_blok3","image":"blocks/stage_21_blok3.png","type":"ground_box","good":false,"bad":false,"width":232,"height":21,"bodyWidth":232,"bodyHeight":21,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_22_blok1","image":"blocks/stage_22_blok1.png","type":"ground_box","good":false,"bad":false,"width":76,"height":17,"bodyWidth":76,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_22_blok2","image":"blocks/stage_22_blok2.png","type":"ground_box","good":false,"bad":false,"width":328,"height":17,"bodyWidth":328,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_23_blok2","image":"blocks/stage_23_blok2.png","type":"ground_box","good":false,"bad":false,"width":333,"height":22,"bodyWidth":333,"bodyHeight":22,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_24_blok1","image":"blocks/stage_24_blok1.png","type":"ground_box","good":false,"bad":false,"width":220,"height":16,"bodyWidth":220,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_24_blok2","image":"blocks/stage_24_blok2.png","type":"ground_box","good":false,"bad":false,"width":46,"height":14,"bodyWidth":46,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_24_blok3","image":"blocks/stage_24_blok3.png","type":"ground_box","good":false,"bad":false,"width":428,"height":15,"bodyWidth":428,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_24_blok4","image":"blocks/stage_24_blok4.png","type":"ground_box","good":false,"bad":false,"width":64,"height":14,"bodyWidth":64,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_25_blok1","image":"blocks/stage_25_blok1.png","type":"ground_box","good":false,"bad":false,"width":395,"height":17,"bodyWidth":395,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_25_blok2","image":"blocks/stage_25_blok2.png","type":"ground_box","good":false,"bad":false,"width":90,"height":16,"bodyWidth":90,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_26_blok1","image":"blocks/stage_26_blok1.png","type":"ground_box","good":false,"bad":false,"width":401,"height":19,"bodyWidth":401,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_26_blok2","image":"blocks/stage_26_blok2.png","type":"ground_box","good":false,"bad":false,"width":401,"height":18,"bodyWidth":401,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_27_blok1","image":"blocks/stage_27_blok1.png","type":"ground_box","good":false,"bad":false,"width":182,"height":16,"bodyWidth":182,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_27_blok2","image":"blocks/stage_27_blok2.png","type":"ground_box","good":false,"bad":false,"width":290,"height":19,"bodyWidth":290,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_28_blok1","image":"blocks/stage_28_blok1.png","type":"ground_box","good":false,"bad":false,"width":398,"height":16,"bodyWidth":398,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_28_blok2","image":"blocks/stage_28_blok2.png","type":"ground_box","good":false,"bad":false,"width":141,"height":15,"bodyWidth":141,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_28_blok3","image":"blocks/stage_28_blok3.png","type":"ground_box","good":false,"bad":false,"width":155,"height":16,"bodyWidth":155,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_28_blok4","image":"blocks/stage_28_blok4.png","type":"ground_box","good":false,"bad":false,"width":79,"height":15,"bodyWidth":79,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_28_blok5","image":"blocks/stage_28_blok5.png","type":"ground_box","good":false,"bad":false,"width":23,"height":76,"bodyWidth":23,"bodyHeight":76,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_29_blok1","image":"blocks/stage_29_blok1.png","type":"ground_box","good":false,"bad":false,"width":268,"height":15,"bodyWidth":268,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_29_blok2","image":"blocks/stage_29_blok2.png","type":"ground_box","good":false,"bad":false,"width":52,"height":15,"bodyWidth":52,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_29_blok3","image":"blocks/stage_29_blok3.png","type":"ground_box","good":false,"bad":false,"width":45,"height":16,"bodyWidth":45,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_29_blok4","image":"blocks/stage_29_blok4.png","type":"ground_box","good":false,"bad":false,"width":414,"height":16,"bodyWidth":414,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_30_blok1","image":"blocks/stage_30_blok1.png","type":"ground_box","good":false,"bad":false,"width":35,"height":15,"bodyWidth":35,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_30_blok2","image":"blocks/stage_30_blok2.png","type":"ground_box","good":false,"bad":false,"width":144,"height":15,"bodyWidth":144,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_31_blok1","image":"blocks/stage_31_blok1.png","type":"ground_box","good":false,"bad":false,"width":340,"height":26,"bodyWidth":340,"bodyHeight":26,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_32_blok1","image":"blocks/stage_32_blok1.png","type":"ground_box","good":false,"bad":false,"width":384,"height":18,"bodyWidth":384,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_32_blok2","image":"blocks/stage_32_blok2.png","type":"ground_box","good":false,"bad":false,"width":138,"height":15,"bodyWidth":138,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_32_blok3","image":"blocks/stage_32_blok3.png","type":"ground_box","good":false,"bad":false,"width":132,"height":15,"bodyWidth":132,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_33_blok1","image":"blocks/stage_33_blok1.png","type":"ground_box","good":false,"bad":false,"width":340,"height":26,"bodyWidth":340,"bodyHeight":26,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_33_blok2","image":"blocks/stage_33_blok2.png","type":"ground_box","good":false,"bad":false,"width":398,"height":16,"bodyWidth":398,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_34_blok1","image":"blocks/stage_34_blok1.png","type":"ground_box","good":false,"bad":false,"width":211,"height":18,"bodyWidth":211,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_34_blok2","image":"blocks/stage_34_blok2.png","type":"ground_box","good":false,"bad":false,"width":128,"height":17,"bodyWidth":128,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_34_blok3","image":"blocks/stage_34_blok3.png","type":"ground_box","good":false,"bad":false,"width":43,"height":16,"bodyWidth":43,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_34_blok5","image":"blocks/stage_34_blok5.png","type":"ground_box","good":false,"bad":false,"width":464,"height":17,"bodyWidth":464,"bodyHeight":17,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_35_blok1","image":"blocks/stage_35_blok1.png","type":"ground_box","good":false,"bad":false,"width":184,"height":27,"bodyWidth":184,"bodyHeight":27,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_35_blok2","image":"blocks/stage_35_blok2.png","type":"ground_box","good":false,"bad":false,"width":97,"height":26,"bodyWidth":97,"bodyHeight":26,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage_35_blok3","image":"blocks/stage_35_blok3.png","type":"ground_box","good":false,"bad":false,"width":57,"height":26,"bodyWidth":57,"bodyHeight":26,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad","image":"blocks/circle_bad.png","type":"element_circle","good":false,"bad":true,"width":58,"height":58,"frames":4,"bodyWidth":58,"bodyHeight":58,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad2","image":"blocks/circle_bad2.png","type":"element_circle","good":false,"bad":true,"width":35,"height":35,"frames":4,"bodyWidth":35,"bodyHeight":35,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad3","image":"blocks/circle_bad3.png","type":"element_circle","good":false,"bad":true,"width":27,"height":27,"frames":4,"bodyWidth":27,"bodyHeight":27,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_good","image":"blocks/circle_good.png","type":"element_circle","good":true,"bad":false,"width":46,"height":46,"frames":4,"bodyWidth":46,"bodyHeight":46,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_good2","image":"blocks/circle_good2.png","type":"element_circle","good":true,"bad":false,"width":35,"height":35,"frames":4,"bodyWidth":35,"bodyHeight":35,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad4","image":"blocks/circle_bad4.png","type":"element_circle_unclick","good":false,"bad":true,"width":69,"height":49,"bodyWidth":49,"bodyHeight":49,"bodyType":2,"bodyPosCorrect":{"x":12,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad5","image":"blocks/circle_bad5.png","type":"element_circle_unclick","good":false,"bad":true,"width":51,"height":36,"bodyWidth":36,"bodyHeight":36,"bodyType":2,"bodyPosCorrect":{"x":8,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_bad6","image":"blocks/circle_bad6.png","type":"element_circle_unclick","good":false,"bad":true,"width":62,"height":44,"bodyWidth":44,"bodyHeight":44,"bodyType":2,"bodyPosCorrect":{"x":10,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_good3","image":"blocks/circle_good3.png","type":"element_circle_unclick","good":true,"bad":false,"width":62,"height":44,"bodyWidth":42,"bodyHeight":44,"bodyType":2,"bodyPosCorrect":{"x":10,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle_good4","image":"blocks/circle_good4.png","type":"element_circle_unclick","good":true,"bad":false,"width":51,"height":36,"bodyWidth":34,"bodyHeight":36,"bodyType":2,"bodyPosCorrect":{"x":8,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_bad","image":"blocks/box_bad.png","type":"element_box","good":false,"bad":true,"width":65,"height":66,"frames":4,"bodyWidth":65,"bodyHeight":66,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_bad2","image":"blocks/box_bad2.png","type":"element_box","good":false,"bad":true,"width":35,"height":36,"frames":4,"bodyWidth":35,"bodyHeight":36,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_bad3","image":"blocks/box_bad3.png","type":"element_box","good":false,"bad":true,"width":27,"height":28,"frames":4,"bodyWidth":27,"bodyHeight":28,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good","image":"blocks/box_good.png","type":"element_box","good":true,"bad":false,"width":80,"height":80,"frames":4,"bodyWidth":80,"bodyHeight":80,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good2","image":"blocks/box_good2.png","type":"element_box","good":true,"bad":false,"width":61,"height":61,"frames":4,"bodyWidth":61,"bodyHeight":61,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good3","image":"blocks/box_good3.png","type":"element_box","good":true,"bad":false,"width":51,"height":51,"frames":4,"bodyWidth":51,"bodyHeight":51,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good4","image":"blocks/box_good4.png","type":"element_box","good":true,"bad":false,"width":24,"height":24,"frames":4,"bodyWidth":24,"bodyHeight":24,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good5","image":"blocks/box_good5.png","type":"element_box","good":true,"bad":false,"width":35,"height":35,"frames":4,"bodyWidth":35,"bodyHeight":35,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_good6","image":"blocks/box_good6.png","type":"element_box","good":true,"bad":false,"width":27,"height":27,"frames":4,"bodyWidth":27,"bodyHeight":27,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"box_bad4","image":"blocks/box_bad4.png","type":"element_box_unclick","good":false,"bad":true,"width":47,"height":38,"bodyWidth":38,"bodyHeight":38,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_02_blok3","image":"blocks/wood_02_blok3.png","type":"wood_box","good":false,"bad":false,"width":283,"height":20,"bodyWidth":283,"bodyHeight":20,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_05_blok3","image":"blocks/wood_05_blok3.png","type":"wood_box","good":false,"bad":false,"width":252,"height":13,"bodyWidth":252,"bodyHeight":13,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_09_blok2","image":"blocks/wood_09_blok2.png","type":"wood_box","good":false,"bad":false,"width":56,"height":8,"bodyWidth":56,"bodyHeight":8,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_09_blok3","image":"blocks/wood_09_blok3.png","type":"wood_box","good":false,"bad":false,"width":281,"height":8,"bodyWidth":281,"bodyHeight":8,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_09_blok4","image":"blocks/wood_09_blok4.png","type":"wood_box","good":false,"bad":false,"width":281,"height":62,"bodyWidth":281,"bodyHeight":8,"bodyType":1,"bodyPosCorrect":{"x":0,"y":28},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_16_blok4","image":"blocks/wood_16_blok4.png","type":"wood_box","good":false,"bad":false,"width":87,"height":23,"bodyWidth":87,"bodyHeight":23,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_18_blok5","image":"blocks/wood_18_blok5.png","type":"wood_box","good":false,"bad":false,"width":88,"height":15,"bodyWidth":88,"bodyHeight":15,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_23_blok1","image":"blocks/wood_23_blok1.png","type":"wood_box","good":false,"bad":false,"width":202,"height":12,"bodyWidth":202,"bodyHeight":12,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_25_blok3","image":"blocks/wood_25_blok3.png","type":"wood_box","good":false,"bad":false,"width":136,"height":23,"bodyWidth":136,"bodyHeight":23,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_30_blok3","image":"blocks/wood_30_blok3.png","type":"wood_box","good":false,"bad":false,"width":212,"height":19,"bodyWidth":212,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_31_blok2","image":"blocks/wood_31_blok2.png","type":"wood_box","good":false,"bad":false,"width":381,"height":12,"bodyWidth":381,"bodyHeight":12,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_33_blok3","image":"blocks/wood_33_blok3.png","type":"wood_box","good":false,"bad":false,"width":205,"height":25,"bodyWidth":205,"bodyHeight":25,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wood_34_blok4","image":"blocks/wood_34_blok4.png","type":"wood_box","good":false,"bad":false,"width":185,"height":14,"bodyWidth":185,"bodyHeight":14,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wheel1","image":"blocks/wheel1.png","type":"wheel","good":false,"bad":false,"width":32,"height":32,"bodyWidth":32,"bodyHeight":32,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"wheel2","image":"blocks/wheel2.png","type":"wheel","good":false,"bad":false,"width":32,"height":32,"bodyWidth":32,"bodyHeight":32,"bodyType":2,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"triangle","image":"blocks/triangle.png","type":"triangle","good":false,"bad":false,"width":80,"height":48,"frames":4,"bodyWidth":80,"bodyHeight":48,"bodyType":3,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[[[-37,22],[1,-22],[38,22]]]},{"name":"trigger","image":"blocks/trigger.png","type":"trigger","good":false,"bad":false,"width":12,"height":12,"bodyWidth":12,"bodyHeight":12,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"barrel","image":"blocks/barrel.png","type":"barrel","good":false,"bad":false,"width":24,"height":34,"bodyWidth":24,"bodyHeight":34,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"barrel_big","image":"blocks/barrel_big.png","type":"barrel","good":false,"bad":false,"width":40,"height":57,"bodyWidth":40,"bodyHeight":57,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_click1","image":"blocks/block_click1.jpg","type":"click_box","good":false,"bad":false,"width":73,"height":16,"bodyWidth":73,"bodyHeight":16,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_click2","image":"blocks/block_click2.jpg","type":"click_box","good":false,"bad":false,"width":101,"height":25,"bodyWidth":101,"bodyHeight":25,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_click3","image":"blocks/block_click3.jpg","type":"click_box","good":false,"bad":false,"width":87,"height":24,"bodyWidth":87,"bodyHeight":24,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_static1","image":"blocks/block_static1.png","type":"static_box","good":false,"bad":false,"width":57,"height":18,"bodyWidth":57,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_static2","image":"blocks/block_static2.png","type":"static_box","good":false,"bad":false,"width":57,"height":19,"bodyWidth":57,"bodyHeight":19,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_static3","image":"blocks/block_static3.png","type":"static_box","good":false,"bad":false,"width":69,"height":24,"bodyWidth":69,"bodyHeight":24,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"block_static4","image":"blocks/block_static4.png","type":"static_box","good":false,"bad":false,"width":63,"height":18,"bodyWidth":63,"bodyHeight":18,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":true,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"bolt","image":"blocks/bolt.png","type":"bolt","good":false,"bad":false,"width":13,"height":13,"bodyWidth":13,"bodyHeight":13,"bodyType":1,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"circle","image":"blocks/circle.png","type":"joint_circle","good":false,"bad":false,"width":18,"height":18,"bodyWidth":18,"bodyHeight":18,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage1_text1","image":"help/stage1_text1.png","type":"hint","good":false,"bad":false,"width":142,"height":23,"bodyWidth":142,"bodyHeight":23,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage1_text2","image":"help/stage1_text2.png","type":"hint","good":false,"bad":false,"width":263,"height":28,"bodyWidth":263,"bodyHeight":28,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage1_text3","image":"help/stage1_text3.png","type":"hint","good":false,"bad":false,"width":400,"height":18,"bodyWidth":400,"bodyHeight":18,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage21_text1","image":"help/stage21_text1.png","type":"hint","good":false,"bad":false,"width":221,"height":47,"bodyWidth":221,"bodyHeight":47,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage26_text1","image":"help/stage26_text1.png","type":"hint","good":false,"bad":false,"width":259,"height":118,"bodyWidth":259,"bodyHeight":118,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage6_text1","image":"help/stage6_text1.png","type":"hint","good":false,"bad":false,"width":133,"height":22,"bodyWidth":133,"bodyHeight":22,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]},{"name":"stage6_text2","image":"help/stage6_text2.png","type":"hint","good":false,"bad":false,"width":130,"height":26,"bodyWidth":130,"bodyHeight":26,"bodyType":0,"bodyPosCorrect":{"x":0,"y":0},"fixed":false,"density":3,"restitution":0.2,"friction":2,"points":[]}]
;

var temp_objects = [];

function createObjectsArray()
{	
	for(var i=0; i<special_assets.length; i++)
	{		
		var arr = special_assets[i];		
		for (var j=0; j<arr.assets.length; j++)
		{
			var item = arr.assets[j];
			var obj = 
			{
				name: item.name,
				image: item.src,
				type: arr.type,
				good: item.good ? item.good : false,
				bad: item.bad ? item.bad : false,
				width: item.width,
				height: item.height,
				frames: item.frames,
				bodyWidth: item.bodyWidth ? item.bodyWidth : item.width,
				bodyHeight: item.bodyHeight ? item.bodyHeight : item.height,
				bodyType: arr.bodyType,
				bodyPosCorrect: item.bodyPosCorrect ? item.bodyPosCorrect : {x: 0, y: 0},
				fixed: arr.fixed,
				density: arr.density,
				restitution: arr.restitution,
				friction: arr.friction,
				points: item.points ? item.points : [],
			}			
			temp_objects.push(obj);
		}		
	}	
	
}

var special_assets = 
[
	{
		type: "ground_box",
		assets: 
		[
			{"name":"stage_01_blok1","src":"blocks/stage_01_blok1.png","width":218,"height":21},
			{"name":"stage_01_blok2","src":"blocks/stage_01_blok2.png","width":245,"height":21},
			{"name":"stage_02_blok11","src":"blocks/stage_02_blok11.png","width":114,"height":23},
			{"name":"stage_02_blok2","src":"blocks/stage_02_blok2.png","width":305,"height":21},
			{"name":"stage_03_blok1","src":"blocks/stage_03_blok1.png","width":318,"height":21},
			{"name":"stage_03_blok2","src":"blocks/stage_03_blok2.png","width":85,"height":21},
			{"name":"stage_04_blok12","src":"blocks/stage_04_blok12.png","width":176,"height":18},
			{"name":"stage_04_blok3","src":"blocks/stage_04_blok3.png","width":86,"height":21},
			{"name":"stage_05_blok1","src":"blocks/stage_05_blok1.png","width":346,"height":18},
			{"name":"stage_05_blok2","src":"blocks/stage_05_blok2.png","width":17,"height":27},
			{"name":"stage_05_blok4","src":"blocks/stage_05_blok4.png","width":105,"height":18},
			{"name":"stage_06_blok1","src":"blocks/stage_06_blok1.png","width":361,"height":15},
			{"name":"stage_06_blok2","src":"blocks/stage_06_blok2.png","width":70,"height":23},
			{"name":"stage_07_blok1","src":"blocks/stage_07_blok1.png","width":139,"height":23},
			{"name":"stage_07_blok2","src":"blocks/stage_07_blok2.png","width":205,"height":16},
			{"name":"stage_08_blok1","src":"blocks/stage_08_blok1.png","width":117,"height":19},
			{"name":"stage_08_blok2","src":"blocks/stage_08_blok2.png","width":65,"height":20},
			{"name":"stage_08_blok3","src":"blocks/stage_08_blok3.png","width":344,"height":20},
			{"name":"stage_09_blok1","src":"blocks/stage_09_blok1.png","width":142,"height":19},
			{"name":"stage_09_blok4","src":"blocks/stage_09_blok4.png","width":66,"height":18},
			{"name":"stage_10_blok1","src":"blocks/stage_10_blok1.png","width":172,"height":12},
			{"name":"stage_10_blok2","src":"blocks/stage_10_blok2.png","width":172,"height":14},
			{"name":"stage_10_blok3","src":"blocks/stage_10_blok3.png","width":64,"height":17},
			{"name":"stage_11_blok1","src":"blocks/stage_11_blok1.png","width":245,"height":22},
			{"name":"stage_12_blok1","src":"blocks/stage_12_blok1.png","width":267,"height":19},
			{"name":"stage_12_blok2","src":"blocks/stage_12_blok2.png","width":84,"height":18},
			{"name":"stage_12_blok3","src":"blocks/stage_12_blok3.png","width":189,"height":19},
			{"name":"stage_13_blok1","src":"blocks/stage_13_blok1.png","width":403,"height":20},
			{"name":"stage_13_blok2","src":"blocks/stage_13_blok2.png","width":43,"height":19},
			{"name":"stage_13_blok3","src":"blocks/stage_13_blok3.png","width":72,"height":19},
			{"name":"stage_14_blok1","src":"blocks/stage_14_blok1.png","width":80,"height":19},
			{"name":"stage_14_blok2","src":"blocks/stage_14_blok2.png","width":54,"height":19},
			{"name":"stage_14_blok3","src":"blocks/stage_14_blok3.png","width":170,"height":20},
			{"name":"stage_15_blok1","src":"blocks/stage_15_blok1.png","width":344,"height":17},
			{"name":"stage_15_blok2","src":"blocks/stage_15_blok2.png","width":244,"height":18},
			{"name":"stage_15_blok3","src":"blocks/stage_15_blok3.png","width":58,"height":15},
			{"name":"stage_15_blok4","src":"blocks/stage_15_blok4.png","width":91,"height":15},
			{"name":"stage_16_blok1","src":"blocks/stage_16_blok1.png","width":242,"height":19},
			{"name":"stage_16_blok2","src":"blocks/stage_16_blok2.png","width":202,"height":17},
			{"name":"stage_16_blok3","src":"blocks/stage_16_blok3.png","width":66,"height":16},
			{"name":"stage_17_blok1","src":"blocks/stage_17_blok1.png","width":313,"height":25},
			{"name":"stage_18_blok1","src":"blocks/stage_18_blok1.png","width":132,"height":14},
			{"name":"stage_18_blok2","src":"blocks/stage_18_blok2.png","width":196,"height":14},
			{"name":"stage_18_blok3","src":"blocks/stage_18_blok3.png","width":116,"height":19},
			{"name":"stage_18_blok4","src":"blocks/stage_18_blok4.png","width":19,"height":44},
			{"name":"stage_18_blok6","src":"blocks/stage_18_blok6.png","width":288,"height":15},
			{"name":"stage_19_blok1","src":"blocks/stage_19_blok1.png","width":152,"height":16},
			{"name":"stage_20_blok1","src":"blocks/stage_20_blok1.png","width":200,"height":21},
			{"name":"stage_20_blok2","src":"blocks/stage_20_blok2.png","width":118,"height":20},
			{"name":"stage_20_blok3","src":"blocks/stage_20_blok3.png","width":178,"height":19},
			{"name":"stage_20_blok4","src":"blocks/stage_20_blok4.png","width":70,"height":20},
			{"name":"stage_21_blok1","src":"blocks/stage_21_blok1.png","width":155,"height":22},
			{"name":"stage_21_blok2","src":"blocks/stage_21_blok2.png","width":138,"height":22},
			{"name":"stage_21_blok3","src":"blocks/stage_21_blok3.png","width":232,"height":21},
			{"name":"stage_22_blok1","src":"blocks/stage_22_blok1.png","width":76,"height":17},
			{"name":"stage_22_blok2","src":"blocks/stage_22_blok2.png","width":328,"height":17},
			{"name":"stage_23_blok2","src":"blocks/stage_23_blok2.png","width":333,"height":22},
			{"name":"stage_24_blok1","src":"blocks/stage_24_blok1.png","width":220,"height":16},
			{"name":"stage_24_blok2","src":"blocks/stage_24_blok2.png","width":46,"height":14},
			{"name":"stage_24_blok3","src":"blocks/stage_24_blok3.png","width":428,"height":15},
			{"name":"stage_24_blok4","src":"blocks/stage_24_blok4.png","width":64,"height":14},
			{"name":"stage_25_blok1","src":"blocks/stage_25_blok1.png","width":395,"height":17},
			{"name":"stage_25_blok2","src":"blocks/stage_25_blok2.png","width":90,"height":16},
			{"name":"stage_26_blok1","src":"blocks/stage_26_blok1.png","width":401,"height":19},
			{"name":"stage_26_blok2","src":"blocks/stage_26_blok2.png","width":401,"height":18},
			{"name":"stage_27_blok1","src":"blocks/stage_27_blok1.png","width":182,"height":16},
			{"name":"stage_27_blok2","src":"blocks/stage_27_blok2.png","width":290,"height":19},
			{"name":"stage_28_blok1","src":"blocks/stage_28_blok1.png","width":398,"height":16},
			{"name":"stage_28_blok2","src":"blocks/stage_28_blok2.png","width":141,"height":15},
			{"name":"stage_28_blok3","src":"blocks/stage_28_blok3.png","width":155,"height":16},
			{"name":"stage_28_blok4","src":"blocks/stage_28_blok4.png","width":79,"height":15},
			{"name":"stage_28_blok5","src":"blocks/stage_28_blok5.png","width":23,"height":76},
			{"name":"stage_29_blok1","src":"blocks/stage_29_blok1.png","width":268,"height":15},
			{"name":"stage_29_blok2","src":"blocks/stage_29_blok2.png","width":52,"height":15},
			{"name":"stage_29_blok3","src":"blocks/stage_29_blok3.png","width":45,"height":16},
			{"name":"stage_29_blok4","src":"blocks/stage_29_blok4.png","width":414,"height":16},
			{"name":"stage_30_blok1","src":"blocks/stage_30_blok1.png","width":35,"height":15},
			{"name":"stage_30_blok2","src":"blocks/stage_30_blok2.png","width":144,"height":15},
			{"name":"stage_31_blok1","src":"blocks/stage_31_blok1.png","width":340,"height":26},
			{"name":"stage_32_blok1","src":"blocks/stage_32_blok1.png","width":384,"height":18},
			{"name":"stage_32_blok2","src":"blocks/stage_32_blok2.png","width":138,"height":15},
			{"name":"stage_32_blok3","src":"blocks/stage_32_blok3.png","width":132,"height":15},
			{"name":"stage_33_blok1","src":"blocks/stage_33_blok1.png","width":340,"height":26},
			{"name":"stage_33_blok2","src":"blocks/stage_33_blok2.png","width":398,"height":16},
			{"name":"stage_34_blok1","src":"blocks/stage_34_blok1.png","width":211,"height":18},
			{"name":"stage_34_blok2","src":"blocks/stage_34_blok2.png","width":128,"height":17},
			{"name":"stage_34_blok3","src":"blocks/stage_34_blok3.png","width":43,"height":16},
			{"name":"stage_34_blok5","src":"blocks/stage_34_blok5.png","width":464,"height":17},
			{"name":"stage_35_blok1","src":"blocks/stage_35_blok1.png","width":184,"height":27},
			{"name":"stage_35_blok2","src":"blocks/stage_35_blok2.png","width":97,"height":26},
			{"name":"stage_35_blok3","src":"blocks/stage_35_blok3.png","width":57,"height":26},
		],
		bodyType: BOX,
		fixed: true,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "element_circle",
		assets: 
		[
			
			{"name":"circle_bad","src":"blocks/circle_bad.png","width":58,"height":58,"frames":4,"bad":true},		
			{"name":"circle_bad2","src":"blocks/circle_bad2.png","width":35,"height":35,"frames":4,"bad":true},
			{"name":"circle_bad3","src":"blocks/circle_bad3.png","width":27,"height":27,"frames":4,"bad":true},			
			{"name":"circle_good","src":"blocks/circle_good.png","width":46,"height":46,"frames":4,"good":true},
			{"name":"circle_good2","src":"blocks/circle_good2.png","width":35,"height":35,"frames":4,"good":true},			
		],	
		bodyType: CIRCLE,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	
	{
		type: "element_circle_unclick",
		assets: 
		[
			{"name":"circle_bad4","src":"blocks/circle_bad4.png","width":69,"height":49,"bad":true,"bodyPosCorrect":{x: 12, y: 0},"bodyWidth":49,},
			{"name":"circle_bad5","src":"blocks/circle_bad5.png","width":51,"height":36,"bad":true,"bodyPosCorrect":{x: 8, y: 0},"bodyWidth":36,},
			{"name":"circle_bad6","src":"blocks/circle_bad6.png","width":62,"height":44,"bad":true,"bodyPosCorrect":{x: 10, y: 0},"bodyWidth":44,},
			{"name":"circle_good3","src":"blocks/circle_good3.png","width":62,"height":44,"good":true,"bodyPosCorrect":{x: 10, y: 0},"bodyWidth":42,},
			{"name":"circle_good4","src":"blocks/circle_good4.png","width":51,"height":36,"good":true,"bodyPosCorrect":{x: 8, y: 0},"bodyWidth":34,},
		],
		bodyType: CIRCLE,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "element_box",
		assets:
		[
			{"name":"box_bad","src":"blocks/box_bad.png","width":65,"height":66,"frames":4,"bad":true},
			{"name":"box_bad2","src":"blocks/box_bad2.png","width":35,"height":36,"frames":4,"bad":true},
			{"name":"box_bad3","src":"blocks/box_bad3.png","width":27,"height":28,"frames":4,"bad":true},
			
			{"name":"box_good","src":"blocks/box_good.png","width":80,"height":80,"frames":4,"good":true},
			{"name":"box_good2","src":"blocks/box_good2.png","width":61,"height":61,"frames":4,"good":true},
			{"name":"box_good3","src":"blocks/box_good3.png","width":51,"height":51,"frames":4,"good":true},
			{"name":"box_good4","src":"blocks/box_good4.png","width":24,"height":24,"frames":4,"good":true},
			{"name":"box_good5","src":"blocks/box_good5.png","width":35,"height":35,"frames":4,"good":true},
			{"name":"box_good6","src":"blocks/box_good6.png","width":27,"height":27,"frames":4,"good":true},
		],
		bodyType: BOX,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "element_box_unclick",
		assets:
		[
			{"name":"box_bad4","src":"blocks/box_bad4.png","width":47,"height":38,"bad":true,"bodyWidth":38,},
		],
		bodyType: BOX,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "wood_box",
		assets:
		[
			{"name":"wood_02_blok3","src":"blocks/wood_02_blok3.png","width":283,"height":20},
			{"name":"wood_05_blok3","src":"blocks/wood_05_blok3.png","width":252,"height":13},
			{"name":"wood_09_blok2","src":"blocks/wood_09_blok2.png","width":56,"height":8},
			{"name":"wood_09_blok3","src":"blocks/wood_09_blok3.png","width":281,"height":8},
			{"name":"wood_09_blok4","src":"blocks/wood_09_blok4.png","width":281,"height":62,"bodyPosCorrect": {x: 0, y: 28},"bodyHeight": 8,},
			{"name":"wood_16_blok4","src":"blocks/wood_16_blok4.png","width":87,"height":23},
			{"name":"wood_18_blok5","src":"blocks/wood_18_blok5.png","width":88,"height":15},
			{"name":"wood_23_blok1","src":"blocks/wood_23_blok1.png","width":202,"height":12},
			{"name":"wood_25_blok3","src":"blocks/wood_25_blok3.png","width":136,"height":23},
			{"name":"wood_30_blok3","src":"blocks/wood_30_blok3.png","width":212,"height":19},
			{"name":"wood_31_blok2","src":"blocks/wood_31_blok2.png","width":381,"height":12},
			{"name":"wood_33_blok3","src":"blocks/wood_33_blok3.png","width":205,"height":25},
			{"name":"wood_34_blok4","src":"blocks/wood_34_blok4.png","width":185,"height":14},
		],
		bodyType: BOX,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
		
	},
	{
		type: "wheel",
		assets:
		[
			{"name":"wheel1","src":"blocks/wheel1.png","width":32,"height":32},
			{"name":"wheel2","src":"blocks/wheel2.png","width":32,"height":32},
		],
		bodyType: CIRCLE,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "triangle",
		assets:
		[
			{"name":"triangle","src":"blocks/triangle.png","width":80,"height":48,"frames":4,"points":[[[-37,22],[1,-22],[38,22]]]},
		],
		bodyType: POLY,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "trigger",
		assets:
		[
			{"name":"trigger","src":"blocks/trigger.png","width":12,"height":12},
		],
		bodyType: NONE,
		fixed: true,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "barrel",
		assets:
		[
			{"name":"barrel","src":"blocks/barrel.png","width":24,"height":34},
			{"name":"barrel_big","src":"blocks/barrel_big.png","width":40,"height":57},
		],
		bodyType: BOX,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "click_box",
		assets:
		[
			{"name":"block_click1","src":"blocks/block_click1.jpg","width":73,"height":16},
			{"name":"block_click2","src":"blocks/block_click2.jpg","width":101,"height":25},
			{"name":"block_click3","src":"blocks/block_click3.jpg","width":87,"height":24},
		],
		bodyType: BOX,
		fixed: true,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "static_box",
		assets:
		[
			{"name":"block_static1","src":"blocks/block_static1.png","width":57,"height":18},
			{"name":"block_static2","src":"blocks/block_static2.png","width":57,"height":19},
			{"name":"block_static3","src":"blocks/block_static3.png","width":69,"height":24},
			{"name":"block_static4","src":"blocks/block_static4.png","width":63,"height":18},
		],
		bodyType: BOX,
		fixed: true,
		density: 3,
		restitution: 0.2,
		friction: 2,
	},
	{
		type: "bolt",
		assets:
		[
			{"name":"bolt","src":"blocks/bolt.png","width":13,"height":13},
		],
		bodyType: BOX,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,		
	},	
	{
		type: "joint_circle",
		assets:
		[
			{"name":"circle","src":"blocks/circle.png","width":18,"height":18},
		],
		bodyType: NONE,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,		
	},
	{
		type: "hint",
		assets:
		[
			{"name":"stage1_text1","src":"help/stage1_text1.png","width":142,"height":23},
			{"name":"stage1_text2","src":"help/stage1_text2.png","width":263,"height":28},
			{"name":"stage1_text3","src":"help/stage1_text3.png","width":400,"height":18},
			{"name":"stage21_text1","src":"help/stage21_text1.png","width":221,"height":47},
			{"name":"stage26_text1","src":"help/stage26_text1.png","width":259,"height":118},
			{"name":"stage6_text1","src":"help/stage6_text1.png","width":133,"height":22},
			{"name":"stage6_text2","src":"help/stage6_text2.png","width":130,"height":26},
		],
		bodyType: NONE,
		fixed: false,
		density: 3,
		restitution: 0.2,
		friction: 2,		
	},	
];
