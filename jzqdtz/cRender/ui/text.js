var STR_ALIGN_LEFT = 'left';
var STR_ALIGN_CENTER = 'center';
var STR_ALIGN_RIGHT = 'right';

var STR_VALIGN_TOP = 'top';
var STR_VALIGN_MIDDLE = 'middle';
var STR_VALIGN_BOTTOM = 'bottom';

var GUIFont = function(font_asset)
{
	this.animated = false;
	
	this.fontProperties = font_asset;
	this.charmap = this.fontProperties.charmap;
	
	GUIFont.superclass.constructor.call(this, 
		this.fontProperties.image.bitmap, 
		this.fontProperties.image.width, 
		this.fontProperties.image.height, 
		this.fontProperties.image.frames, 
		this.fontProperties.image.layers
	);
	
	GUIFont.prototype.validChar = function(c)
	{
		return (this.fontProperties.charmap.indexOf(c.toString()) >= 0);
	}
	
	GUIFont.prototype.setChar = function(c)
	{
		var i = this.fontProperties.charmap.indexOf(c.toString());
		if (i < 0) return;
		
		var l = i % this.totalLayers;
		this.currentLayer = l;
		
		var f = Math.floor(i / this.totalLayers);
		this.gotoAndStop(f);
	}
	
	GUIFont.prototype.getChar = function()
	{
		var n = this.currentLayer + this.currentFrame * this.totalLayers;
		return this.fontProperties.charmap[n];
	}
}

Utils.extend(GUIFont, Sprite);

// ----------------------------------------------------------------------------
var GUIString = function(fontClass, in_back, params)
{
	this.font = FontManager.getFont(fontClass);
	if (!this.font) throw new Error("Font '" + fontClass + "' not found!");
	
	// internal. for multiline support
	this.strings = [];
	// internal. stack of char sprites
	this.chars = [];
	
	this.align = STR_ALIGN_CENTER;
	this.valign = STR_VALIGN_MIDDLE;
	
	var ch = new this.font();
	this.charWidth = ch.fontProperties['char'].width;
	this.charHeight = ch.fontProperties['char'].height;
	delete(ch);
	
	this.visible = true;
	
	this.x = 0;
	this.y = 0;
	this.zIndex = 0;
	this.rotation = 0;
	this.opacity = 1.0;
	
	this.height = 0;
	this.width = 0;
	this['static'] = (typeof in_back == 'undefined') ? false : in_back; // Photoshop thinks static as reserved word

	this.getString = function()
	{
		return this.strings.join("\n");
	}
	
	this.getParams = function()
	{
		var obj = 
		{
			visible: this.visible,
			x: this.x,
			y: this.y,
			zIndex: this.zIndex,
			rotation: this.rotation,
			opacity: this.opacity,
			align: this.align,
			valign: this.valign,
			letterSpacing: this.charWidth,
			lineHeight: this.charHeight
		}
		return obj;
	}
	
	this.setParams = function(obj, refresh)
	{
		if (typeof obj != 'object') obj = {};
		if (typeof refresh == 'undefined') refresh = false;
		
		if (typeof obj['visible'] == 'undefined') obj.visible = this.visible;
		
		if (typeof obj['letterSpacing'] == 'undefined') obj.letterSpacing = this.charWidth;
		if (typeof obj['lineHeight'] == 'undefined') obj.lineHeight = this.charHeight;
		
		if (typeof obj['align'] == 'undefined') obj.align = this.align;
		if (typeof obj['valign'] == 'undefined') obj.valign = this.valign;
		
		if (typeof obj['x'] == 'undefined') obj.x = this.x;
		obj.x = parseInt(obj.x);
		if (isNaN(obj.x)) obj.x = this.x;
		
		if (typeof obj['y'] == 'undefined') obj.y = this.y;
		obj.y = parseInt(obj.y);
		if (isNaN(obj.y)) obj.y = this.y;
		
		if (typeof obj['zIndex'] == 'undefined') obj.zIndex = this.zIndex;
		obj.zIndex = parseInt(obj.zIndex);
		if (isNaN(obj.zIndex)) obj.zIndex = this.zIndex;
		
		if (typeof obj['rotation'] == 'undefined') obj.rotation = this.rotation;
		obj.rotation = parseFloat(obj.rotation);
		if (isNaN(obj.rotation)) obj.rotation = this.rotation;
		
		if (typeof obj['opacity'] == 'undefined') obj.opacity = this.opacity;
		obj.opacity = parseFloat(obj.opacity);
		if (isNaN(obj.opacity)) obj.opacity = this.opacity;
		
		if ((obj.letterSpacing != this.charWidth) || (obj.lineHeight != this.charHeight))
		{
			this._setSpacing(obj.letterSpacing, obj.lineHeight);
			refresh = true;
		}
		
		if ((obj.align != this.align) || (obj.valign != this.valign))
		{
			this._setAlign(obj.align, obj.valign);
			refresh = true;
		}
		
		if ((obj.x != this.x) || (obj.y != this.y) || (obj.rotation != this.rotation) || refresh)
		{
			this._refreshSize();
			this._setPosition(obj.x, obj.y);
			this._setRotation(obj.rotation);
			this._setOpacity(obj.opacity);
			refresh = true;
		}
		
		if (obj.zIndex != this.zIndex)
		{
			this._setZIndex(obj.zIndex);
		}
		
		if (obj.visible != this.visible)
		{
			this._setVisible(obj.visible);
		}
	}
	
	this.refresh = function()
	{
		this.setParams(this.getParams());
	}
	
	this.write = function(str, x, y, align, valign, rotation, hspace, vspace)
	{
		str = this._prepareString(str);
		this.strings = str;
		
		this._createStageChars();
		var params = 
		{
			align: align, valign: valign, 
			x: x, y: y, rotation: rotation,
			letterSpacing: hspace, lineHeight: vspace
		}
		if (this.chars.length > 0) params.zIndex = (this.zIndex > 0 ? this.zIndex : this.chars[0].zIndex);
		
		var n = 0;
		for (var i = 0; i < this.strings.length; i++)
		{
			for (var j = 0; j < this.strings[i].length; j++)
			{
				var mc = this.chars[n++];
				mc['static'] = this['static'];
				mc.setChar(this.strings[i].substring(j, j + 1));
			}
		}
		
		this.setParams(params, true); // force refresh
	}
	
	this.clear = function()
	{
		this.write('');
	}
	
	this._setVisible = function(v)
	{
		this.visible = v;
		for (var i = 0; i < this.chars.length; i++)
		{
			if (this.chars[i]) this.chars[i].visible = this.visible;
		}
	}
	
	this._setOpacity = function(v)
	{
		this.opacity = v;
		for (var i = 0; i < this.chars.length; i++)
		{
			if (this.chars[i]) this.chars[i].opacity = this.opacity;
		}
	}
	
	this._setZIndex = function(z)
	{
		if (typeof z == 'undefined') z = this.zIndex;
		z = ~~z;
		if (z != this.zIndex)
		{
			this.zIndex = ~~z;
			for (var i = 0; i < this.chars.length; i++)
			{
				if (this.chars[i]) this.chars[i].setZIndex(z);
			}
		}
	}
	
	this._setSpacing = function(letterSpacing, lineHeight)
	{
		if (typeof letterSpacing == 'undefined') letterSpacing = this.charWidth;
		this.charWidth = ~~letterSpacing;
		
		if (typeof lineHeight == 'undefined') lineHeight = this.charHeight;
		this.charHeight = ~~lineHeight;
	}
	
	this._setAlign = function(align, valign)
	{
		// todo -o jet: validate values
		
		if (typeof align == 'undefined') align = this.align;
		this.align = align.toString().toLowerCase();
		
		if (typeof valign == 'undefined') valign = this.valign;
		this.valign = valign.toString().toLowerCase();
	}
	
	this._setPosition = function(x, y)
	{
		this.x = x;
		this.y = y;
		
		var dy = Math.round(this.charHeight / 2);
		if (this.valign == STR_VALIGN_MIDDLE) dy -= Math.round(this.height / 2);
		if (this.valign == STR_VALIGN_BOTTOM) dy -= this.height;
		
		var n = 0;
		for (var i = 0; i < this.strings.length; i++)
		{
			var strWidth = this.charWidth * this.strings[i].length;
			
			var dx = -Math.round(this.charWidth / 2);
			if (this.align == STR_ALIGN_CENTER) dx -= Math.round(strWidth / 2);
			if (this.align == STR_ALIGN_RIGHT) dx -= strWidth;
			
			for (var j = 0; j < this.strings[i].length; j++) 
			{
				var ch = this.chars[n++];
				if (ch)
				{
					dx += this.charWidth;
					ch.x = this.x + dx;
					ch.y = this.y + dy;
				}
			}
			
			dy += this.charHeight;
		}
	}
	
	this._setRotation = function(a)
	{
		if (a >= Math.PI * 2) a -= Math.PI * 2;
		if (a < 0) a += Math.PI * 2;
		
		this.rotation = a;
		if (this.chars.length == 0) return;
		
		for (var i = 0; i < this.chars.length; i++)
		{
			if (!this.chars[i]) continue;
			
			var p = new Vector(this.chars[i].x - this.x, this.chars[i].y - this.y);
			p.rotate(-this.rotation);
			this.chars[i].x = this.x + p.x;
			this.chars[i].y = this.y + p.y;
			this.chars[i].rotation = this.rotation;
		}
	}
	
	this._validateString = function(str)
	{
		str = str.toString();
		var valid = '';
		var font = new this.font();
		for (var i = 0; i < str.length; i++)
		{
			var c = str.substring(i, i + 1);
			if (font.validChar(c)) valid += c;
		}
		return valid;
	}
	
	this._refreshSize = function()
	{
		var maxLength = 0;
		for (var i = 0; i < this.strings.length; i++) 
		{
			maxLength = Math.max(maxLength, this.strings[i].length);
		}
		
		this.width = this.charWidth * maxLength;
		this.height = this.charHeight * this.strings.length;
	}
	
	this._createStageChars = function()
	{
		var n = this.strings.join('').length;
		
		var diff = this.chars.length - n;
		if (diff == 0) return; // no need to add or remove clips
		while (diff != 0)
		{
			var mc;
			if (diff < 0)
			{
				mc = new this.font();
				mc = stage.addChild(mc);
				mc.visible = this.visible;
				this.chars.push(mc);
			}
			else
			{
				mc = this.chars.pop();
				stage.removeChild(mc);
			}
			diff += diff < 0 ? 1 : -1;
		}
		
		this._refreshSize();
	}
	
	this._prepareString = function(str)
	{
		str = String(str).split("\n");
		for (var i = 0; i < str.length; i++)
		{
			str[i] = this._validateString(str[i]);
		}
		return str;
	}
	
	this.debugDraw = function(col)
	{
		if (typeof col == 'undefined') col = '#FFF';
		this._debugDrawAnchor(col);
		this._debugDrawBox(col);
	}
	
	this._debugDrawBox = function(col)
	{
		// not implemented...
	}
	
	this._debugDrawAnchor = function(col)
	{
		stage.drawRectangle(this.x, this.y, 3, 3, col, true, 0.8);
	}
	
	if (typeof params == 'object') this.setParams(params);
}

// ----------------------------------------------------------------------------
// Use it with Photoshop script to create fonts
var Charset =
{
	getByName: function(name)
	{
		if (typeof Charset[name] == 'undefined') 
		{
			throw new Error("Character set ' " + name + " ' is not defined!");
		}
		return Charset[name];
	},
	
	// Useful for points, money, counters etc...
	digits: [
		'0','1','2','3','4','5','6','7','8','9','+','-','.',',','*','/',
		'=','(',')','<','>','#','$','%','&',':',';','|','№','@','~','"'
	],
	
	// ASCII Cyrylic + Western Europe. Should fit any european text...
	full:
	[ 
		' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
		'0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
		'@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
		'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
		'`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
		'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~',' ',
		'Ё','Ђ','Ѓ','Є','Ѕ','І','Ї','Ј','Љ','Њ','Ћ','Ќ','Ў','Џ','А','Б',
		'В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С',
		'Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я','а','б',
		'в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с',
		'т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я','№','ё',
		'ђ','ѓ','є','ѕ','і','ї','ј','љ','њ','ћ','ќ','§','ў','џ','Š','Ž',
		'š','ž','Ÿ','¢','£','¥','§','©','«','®','µ','»','À','Á','Â','Ã',
		'Ä','Å','Æ','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ð','Ñ','Ò','Ó',
		'Ô','Õ','Ö','×','Ø','Ù','Ú','Û','Ü','Ý','Þ','ß','à','á','â','ã',
		'ä','å','æ','ç','è','é','ê','ë','ì','í','î','ï','ð','ñ','ò','ó',
		'ô','õ','ö','÷','ø','ù','ú','û','ü','ý','þ','ÿ'
	],
	
	latin: [ // ASCII + Western Europe, no cyrylic symbols...
		' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',
		'0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?',
		'@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
		'P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_',
		'`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
		'p','q','r','s','t','u','v','w','x','y','z','{','|','}','~',' '
	]
	
}

// ----------------------------------------------------------------------------
var FontManager = 
{
	_fonts: {},
	
	defaultCharmap: Charset.full,
	
	fontNameFromBitmap: function(bitmap)
	{
		var src = (typeof bitmap == 'string') ? bitmap : bitmap.src;
		src = src.replace('\\', '/').split('/').pop(); // file basename
		src = src.split('.').shift(); // cut the extension
		return src;
	},
	
	createAssetFromSprite: function(name, sprite)
	{
		var img = new Asset(name, sprite.bitmap.src, sprite.width, sprite.height, sprite.totalFrames, sprite.totalLayers);
		img.bitmap = sprite.bitmap;
		return img;
	},
	
	createFontAsset: function(img, charmap, w, h)
	{
		var asset, name;
		
		// is it asset name in library?
		if (typeof img == 'string')
		{
			// no library - no sprite...
			if (typeof library == 'undefined') throw new Error("Bitmaps access by name works only with AssetsLibrary");
			try
			{
				name = img;
				asset = library.getAsset(name);
			}
			catch (e)
			{
				throw new Error("Sprite not found for font '" + name + "'");
			}
		}
		else if (typeof img == 'object')
		{
			// check for critical Sprite properties
			var check_props = ['bitmap', 'width', 'height', 'totalFrames', 'totalLayers'];
			for(var i=0; i<check_props.length; i++)
			{
				if (typeof img[check_props[i]] == 'undefined')
				{
					throw new Error("Invalid image. Instance of Sprite expected.");
				}
			}
			
			name = FontManager.fontNameFromBitmap(img.bitmap);
			asset = FontManager.createAssetFromSprite(name, img);
		}
		else throw new Error("Invalid image. Asset name or instance of Sprite expected.");
		
		asset = new GUIFontAsset(name, asset, charmap);
		
		w = ~~w; h = ~~h;
		if (w > 0) asset['char'].width = w;
		if (h > 0) asset['char'].height = h;
		
		return asset;
	},
	
	registerFont: function(bitmap, charmap, w, h)
	{
		if (typeof charmap == 'string')
		{
			charmap = Charset.getByName(charmap);
		}
		
		var asset = FontManager.createFontAsset(bitmap, charmap, w, h);
		
		var f = function()
		{
			f.superclass.constructor.call(this, asset);
		}
		Utils.extend(f, GUIFont);
		
		FontManager._fonts[asset.name] = f;
		return asset.name;
	},
	
	getFont: function(name)
	{
		if (typeof FontManager._fonts[name] == 'undefined') 
		{
			FontManager.registerFont(name, FontManager.defaultCharmap);
		}
		return FontManager._fonts[name];
	}
}

// ----------------------------------------------------------------------------
var GUIFontAsset = function(name, asset, charmap)
{
	this.name = name;
	this.image = asset;
	this.charmap = charmap;
	this['char'] = {width: asset.width, height: asset.height};
}

/*
function Text2(font, charMap)
{
    var self = this;

	this.ALIGN_LEFT = 0;
	this.ALIGN_RIGHT = 1;
	this.ALIGN_CENTER = 2;

	this.font = font;
	this.x = 0;
	this.y = 0;
	this.align = this.ALIGN_LEFT;
	this.rotation = 0;
	this.static = false;
	this.charMap = charMap;
	this.letterSpacing = 0;

	this.scale = 1

	this.text = "";

	this.sprites = [];

    this.remove = function()
    {
        self.write("");
    }

	this.manageSprites = function()
	{
		var i, char;
		var len = this.text.length;
		var sp_len = this.sprites.length;
		if(sp_len < len)
		{
			for(i=0; i<len-sp_len; i++)
			{
				char = new Sprite(this.font, 1, 1);
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

	this.getCharInfo = function(char)
	{
		//console.log(char);
		for(var i=0; i<this.charMap.length; i++)
		{
			if(this.charMap[i].char == char) return this.charMap[i];
		}

		return false;
	}

	this.getWidth = function()
	{
		var w = 0;
		for(var i=0; i<this.text.length; i++)
		{
			var c = this.getCharInfo(this.text.substr(i, 1));
			if(c) w += c.w/2 * this.scale + this.letterSpacing * this.scale;
		}

		return w;
	}

	this.write = function()
	{
		var curX, curY, p, p2, n;

		self.manageSprites(self.text);

		curX = self.x;
		curY = self.y;
		curWidth = self.getWidth(self.text)/2;

		if(self.align == self.ALIGN_CENTER) curX = self.x - curWidth/2;
		if(self.align == self.ALIGN_RIGHT) curX = self.x - curWidth;

		p = new Vector(curX-self.x, 0);
		p.rotate(-self.rotation);
		curX = p.x + self.x;
		curY = p.y + self.y;

		p = new Vector(0, 0);
		for(var i=0; i<self.text.length; i++)
		{
			self.sprites[i].visible = true;
			var info = self.getCharInfo(self.text.substr(i, 1));
			if(info)
			{
				var letter = self.sprites[i];
				letter.offset.left = info.x/2;
				letter.offset.top = info.y/2;
				letter.width = info.w/2;
				letter.height = info.h/2;
				letter.scaleX = self.scale;
				letter.scaleY = self.scale;
				p2 = p.clone();
				p2.rotate(-self.rotation);
				letter.x = p2.x + curX;
				letter.y = p2.y + curY;
				letter.rotation = self.rotation;
				letter.static = self.static;
				p.x += info.width/2 * self.scale + self.letterSpacing * self.scale;
			}
			else self.sprites[i].visible = false;
		}
	}

	stage.addEventListener("pretick", this.write);
}

var font1CharMap =
[
	{char:" ",width:16,x:0,y:49,w:8,h:8,ox:-4,oy:4},
	{char:"!",width:23,x:8,y:4,w:26,h:64,ox:-3,oy:49},
	{char:'"',width:35,x:34,y:5,w:39,h:29,ox:-4,oy:48},
	{char:"$",width:42,x:73,y:1,w:47,h:74,ox:-5,oy:52},
	{char:"'",width:22,x:120,y:5,w:27,h:30,ox:-4,oy:48},
	{char:"(",width:30,x:147,y:0,w:33,h:75,ox:-3,oy:53},
	{char:")",width:30,x:180,y:0,w:33,h:75,ox:-3,oy:53},
	{char:"+",width:37,x:213,y:18,w:39,h:40,ox:-3,oy:35},
	{char:",",width:27,x:252,y:44,w:25,h:32,ox:-1,oy:9},
	{char:"-",width:40,x:277,y:27,w:43,h:25,ox:-3,oy:26},
	{char:".",width:26,x:320,y:44,w:26,h:23,ox:-2,oy:9},
	{char:"/",width:41,x:346,y:2,w:45,h:74,ox:-4,oy:51},
	{char:"0",width:45,x:391,y:9,w:48,h:59,ox:-4,oy:44},
	{char:"1",width:31,x:439,y:9,w:34,h:58,ox:-4,oy:44},
	{char:"2",width:43,x:473,y:9,w:48,h:58,ox:-5,oy:44},
	{char:"3",width:39,x:521,y:8,w:44,h:59,ox:-5,oy:45},
	{char:"4",width:41,x:0,y:83,w:46,h:58,ox:-5,oy:44},
	{char:"5",width:39,x:46,y:82,w:43,h:59,ox:-3,oy:45},
	{char:"6",width:41,x:89,y:83,w:44,h:58,ox:-3,oy:44},
	{char:"7",width:43,x:133,y:83,w:47,h:59,ox:-4,oy:44},
	{char:"8",width:43,x:180,y:83,w:48,h:59,ox:-5,oy:44},
	{char:"9",width:41,x:228,y:83,w:45,h:58,ox:-4,oy:44},
	{char:":",width:30,x:273,y:87,w:25,h:50,ox:0,oy:40},
	{char:";",width:29,x:298,y:87,w:25,h:58,ox:0,oy:40},
	{char:"<",width:40,x:323,y:83,w:44,h:58,ox:-4,oy:44},
	{char:":",width:38,x:367,y:90,w:36,h:42,ox:-1,oy:37},
	{char:">",width:40,x:403,y:83,w:44,h:58,ox:-4,oy:44},
	{char:"?",width:40,x:447,y:78,w:43,h:63,ox:-5,oy:49},
	{char:"@",width:66,x:490,y:76,w:69,h:72,ox:-3,oy:51},
	{char:"A",width:50,x:559,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"B",width:42,x:567,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"C",width:43,x:575,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"D",width:45,x:583,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"E",width:41,x:591,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"F",width:40,x:599,y:123,w:8,h:8,ox:-4,oy:4},
	{char:"G",width:48,x:0,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"H",width:46,x:8,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"I",width:27,x:16,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"J",width:43,x:24,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"K",width:46,x:32,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"L",width:44,x:40,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"M",width:55,x:48,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"N",width:49,x:56,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"O",width:48,x:64,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"P",width:42,x:72,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"Q",width:47,x:80,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"R",width:43,x:88,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"S",width:40,x:96,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"T",width:45,x:104,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"U",width:44,x:112,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"V",width:50,x:120,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"W",width:62,x:128,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"X",width:43,x:136,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"Y",width:49,x:144,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"Z",width:46,x:152,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"\\",width:42,x:160,y:148,w:46,h:74,ox:-4,oy:51},
	{char:"`",width:17,x:206,y:195,w:8,h:8,ox:-4,oy:4},
	{char:"a",width:45,x:214,y:155,w:57,h:59,ox:-8,oy:44},
	{char:"b",width:43,x:271,y:154,w:48,h:59,ox:-4,oy:45},
	{char:"c",width:45,x:319,y:155,w:50,h:58,ox:-4,oy:44},
	{char:"d",width:45,x:369,y:155,w:49,h:57,ox:-3,oy:44},
	{char:"e",width:40,x:418,y:155,w:44,h:58,ox:-3,oy:44},
	{char:"f",width:38,x:462,y:155,w:43,h:58,ox:-3,oy:44},
	{char:"g",width:47,x:505,y:155,w:53,h:58,ox:-4,oy:44},
	{char:"h",width:47,x:558,y:155,w:49,h:58,ox:-3,oy:44},
	{char:"i",width:30,x:0,y:223,w:26,h:58,ox:0,oy:44},
	{char:"j",width:43,x:26,y:223,w:47,h:58,ox:-4,oy:44},
	{char:"k",width:48,x:73,y:223,w:50,h:58,ox:-2,oy:44},
	{char:"l",width:44,x:123,y:223,w:47,h:58,ox:-4,oy:44},
	{char:"m",width:55,x:170,y:223,w:63,h:58,ox:-7,oy:44},
	{char:"n",width:49,x:233,y:223,w:52,h:58,ox:-3,oy:44},
	{char:"o",width:47,x:285,y:223,w:52,h:59,ox:-5,oy:44},
	{char:"p",width:43,x:337,y:223,w:46,h:58,ox:-3,oy:44},
	{char:"q",width:46,x:383,y:222,w:54,h:59,ox:-4,oy:45},
	{char:"r",width:41,x:437,y:223,w:48,h:58,ox:-3,oy:44},
	{char:"s",width:39,x:485,y:223,w:46,h:58,ox:-5,oy:44},
	{char:"t",width:44,x:531,y:223,w:51,h:58,ox:-5,oy:44},
	{char:"u",width:45,x:0,y:283,w:50,h:58,ox:-3,oy:44},
	{char:"v",width:48,x:50,y:283,w:58,h:58,ox:-7,oy:44},
	{char:"w",width:59,x:108,y:283,w:69,h:58,ox:-7,oy:44},
	{char:"x",width:43,x:177,y:283,w:49,h:58,ox:-4,oy:44},
	{char:"y",width:47,x:226,y:283,w:56,h:58,ox:-6,oy:44},
	{char:"z",width:46,x:282,y:283,w:49,h:58,ox:-3,oy:44},
	{char:"а",width:46,x:331,y:283,w:57,h:59,ox:-8,oy:44},
	{char:"б",width:45,x:388,y:284,w:52,h:57,ox:-5,oy:43},
	{char:"в",width:42,x:440,y:282,w:48,h:59,ox:-4,oy:45},
	{char:"г",width:42,x:488,y:283,w:47,h:58,ox:-5,oy:44},
	{char:"д",width:57,x:535,y:284,w:65,h:71,ox:-6,oy:43},
	{char:"е",width:40,x:0,y:373,w:44,h:58,ox:-3,oy:44},
	{char:"ж",width:64,x:44,y:373,w:71,h:57,ox:-5,oy:44},
	{char:"з",width:39,x:115,y:372,w:45,h:59,ox:-5,oy:45},
	{char:"и",width:49,x:160,y:372,w:52,h:59,ox:-3,oy:45},
	{char:"й",width:49,x:212,y:355,w:52,h:76,ox:-3,oy:62},
	{char:"к",width:47,x:264,y:373,w:50,h:58,ox:-2,oy:44},
	{char:"л",width:45,x:314,y:373,w:57,h:58,ox:-8,oy:44},
	{char:"м",width:53,x:371,y:373,w:63,h:58,ox:-7,oy:44},
	{char:"н",width:47,x:434,y:373,w:49,h:58,ox:-3,oy:44},
	{char:"о",width:47,x:483,y:373,w:52,h:59,ox:-5,oy:44},
	{char:"п",width:49,x:535,y:374,w:54,h:57,ox:-5,oy:43},
	{char:"р",width:42,x:0,y:432,w:46,h:58,ox:-3,oy:44},
	{char:"с",width:45,x:46,y:432,w:50,h:58,ox:-4,oy:44},
	{char:"т",width:44,x:96,y:432,w:51,h:58,ox:-5,oy:44},
	{char:"у",width:40,x:147,y:432,w:46,h:59,ox:-5,oy:44},
	{char:"ф",width:62,x:193,y:432,w:68,h:58,ox:-5,oy:44},
	{char:"х",width:43,x:261,y:432,w:49,h:58,ox:-4,oy:44},
	{char:"ц",width:53,x:310,y:432,w:59,h:66,ox:-3,oy:44},
	{char:"ч",width:44,x:369,y:432,w:47,h:58,ox:-3,oy:44},
	{char:"ш",width:62,x:416,y:432,w:67,h:58,ox:-4,oy:44},
	{char:"щ",width:68,x:483,y:432,w:71,h:68,ox:-3,oy:44},
	{char:"ъ",width:49,x:554,y:432,w:54,h:58,ox:-5,oy:44},
	{char:"ы",width:63,x:0,y:500,w:65,h:58,ox:-3,oy:44},
	{char:"ь",width:43,x:65,y:500,w:46,h:57,ox:-3,oy:44},
	{char:"э",width:40,x:111,y:501,w:47,h:57,ox:-6,oy:43},
	{char:"ю",width:56,x:158,y:501,w:60,h:57,ox:-4,oy:43},
	{char:"я",width:45,x:218,y:500,w:49,h:59,ox:-5,oy:44}
];
*/