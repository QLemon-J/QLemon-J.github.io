/* Константы выравнивания текста по горизонтали */
var TEXT_ALIGN_LEFT = 0;
var TEXT_ALIGN_CENTER = 1;
var TEXT_ALIGN_RIGHT = 2;

/* Константы выравнивания текста по вертикали */
var TEXT_VALIGN_TOP = 0;
var TEXT_VALIGN_MIDDLE = 1;
var TEXT_VALIGN_BOTTOM = 2;

/*

Дополнительные свойства:

text - текст

style - объект стилей
   .font - CSS имя шрифта
   .size - размер в пикселах
   .color - CSS цвет
   .borderColor - CSS цвет окантовки
   .bold - признак полужирного шрифта (boolean)
   .italic - признак наклонного шрифта (boolean)
   .lineHeight - высота в пикселах строки

padding - объект отступов (в пикселах)
   .left - слева
   .right - справа
   .top - сверху
   .bottom - снизу

align - выравнивание по горизонтали (см. константы выше)

valign - выравнивание по вертикали (см. константы выше)

wordWrap - признак, нужно ли переносить стрки по словам (boolean)
   
*/

var TEXT_SPRITE_FONT_DEFAULT = "sans-serif";

/** @ignore */
function TextSprite(img, w, h, f, l)
{
	var self = this;
	
	TextSprite.superclass.constructor.call(this, img, w, h, f, l);
	
	this.text = "";
	
	this.style =
	{
		font: TEXT_SPRITE_FONT_DEFAULT,
		size: 10,
		color: "#fff",
		borderColor: "#000",
		borderWidth: 0,
		bold: false,
		italic: false,
		lineHeight: 10
	};
	
	this.padding =
	{
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	};

	this.align = TEXT_ALIGN_LEFT;
	this.valign = TEXT_VALIGN_TOP;
	this.wordWrap = true;
	
	this.showTextAlways = false;
	
	this.prepareLine = function(text, y, ret)
	{
		var availWidth = this.width - this.padding.left - this.padding.right;
		var availHeight = this.height - this.padding.top - this.padding.bottom;
		var words;
		
		y += this.style.lineHeight;
		if(y >= availHeight)
		{
			return {ret: ret, y: 0, next: false};
		}
		
		words = text.split(" ");
			
		var s = "";
		var tmp = "";
		var newLine = false;
		
		for(var i=0; i<words.length; i++)
		{
			tmp += (i > 0 ? " " : "") + words[i];
			if(this.stage.getTextWidth(tmp, this.canvas)/Utils.globalScale > availWidth)
			{
				if(this.wordWrap) newLine = true;
				break;
			}
			else s = tmp;
		}
		
		var x = this.x - this.width/2 + this.padding.left;
		if(this.align != TEXT_ALIGN_LEFT)
		{
			var textWidth = this.stage.getTextWidth(s, this.canvas)/Utils.globalScale;
			if(this.align == TEXT_ALIGN_CENTER)
			{
				x = this.x - textWidth/2;
				x += (this.padding.left-this.padding.right)/2;
			}
			if(this.align == TEXT_ALIGN_RIGHT) x = this.x + availWidth/2 - textWidth - this.padding.right;
		}
		
		ret.push({text: s, x: x});
		
		if(newLine)
		{
			s = "";
			for(var n=i; n<words.length; n++) s += (n > i ? " " : "") + words[n];
			tmp = this.prepareLine(s, y, ret);
			ret = tmp.ret;
			y = tmp.y;
		}
		
		return {ret: ret, y: y, next: true};
	}
	
	this.prepareText = function()
	{
		var ret = [];
		var y = 0;
		var tmp;
		
		var txt = this.text + "";
		
		var lines = txt.split("\n");
		for(var i=0; i<lines.length; i++)
		{
			tmp = this.prepareLine(lines[i], y, ret);
			ret = tmp.ret;
			y = tmp.y;
			if(tmp.next === false) return ret;
		}
		
		return ret;
	}
	
	this.renderText = function(e)
	{
		self.canvas = e.canvas;
		
		var oldLW = self.canvas.ctx.lineWidth;
		
		var style = "";
		if(self.style.bold) style += "bold ";
		if(self.style.italic) style += "italic ";
		
		self.stage.setTextStyle(self.style.font, self.style.size, style, self.style.color, self.style.borderColor, self.canvas);
		self.canvas.ctx.lineWidth = self.style.borderWidth * Utils.globalScale;
		
		var data = self.prepareText();
		var sY = 0;
		
		if(self.valign == TEXT_VALIGN_TOP) sY = self.y - self.height/2 + self.padding.top;
		if(self.valign == TEXT_VALIGN_MIDDLE)
		{
			var y = self.y;
			y += (self.padding.top-self.padding.bottom)/2;
			sY = y - data.length*self.style.lineHeight/2;
		}
		if(self.valign == TEXT_VALIGN_BOTTOM) sY = self.y + self.height/2 - self.padding.bottom - data.length*self.style.lineHeight;
		sY += self.style.lineHeight;
		
		var ox, oy, diffX, diffY, ignoreVP, canvasMod;
		for(var i=0; i<data.length; i++)
		{
			oy = sY + i*self.style.lineHeight;
			ox = data[i].x;
			
			diffX = ox - self.x;
			diffY = oy - self.y;
			
			canvasMod = false;
			
			ignoreVP = self.ignoreViewport;
			
			if(self.rotation != 0 || self.scaleX != 1 || self.scaleY != 1)
			{
				canvasMod = true;

				var ow = self.width*Utils.globalScale;
				var oh = self.height*Utils.globalScale;
				
				var ox = self.getX()-Math.floor(ow/2);
				var oy = self.getY()-Math.floor(oh/2);
				
				if(!self.ignoreViewport)
				{
					ox -= self.stage.viewport.x*Utils.globalScale;
					oy -= self.stage.viewport.y*Utils.globalScale;
				}
				
				self.canvas.ctx.save();
				self.canvas.ctx.translate(ox+Math.floor(ow/2), oy+Math.floor(oh/2));
				self.canvas.ctx.rotate(self.rotation);
				self.canvas.ctx.scale(self.scaleX, self.scaleY);
				
				ox = diffX;
				oy = diffY;
				
				ignoreVP = true;
			}
			
			if(self.style.borderWidth > 0) self.stage.strokeText(data[i].text, ox, oy, (self.showTextAlways ? 1 : self.opacity), ignoreVP, false, self.canvas);
			self.stage.drawText(data[i].text, ox, oy, (self.showTextAlways ? 1 : self.opacity), ignoreVP, false, self.canvas);
			
			if(canvasMod) self.canvas.ctx.restore();
		}
		
		self.canvas.ctx.lineWidth = oldLW;
	}
	
	
	this.addEventListener("render", this.renderText);
}

Utils.extend(TextSprite, Sprite);

var FontsManager =
{
	fonts: [],
	
	embed: function(name, url)
	{
		for(var i=0; i<FontsManager.fonts.length; i++)
		{
			if(FontsManager.fonts[i].url == url && FontsManager.fonts[i].name == name) return;
		}
		
		var style = document.createElement('style');
		style.type = "text/css";
		style.innerHTML = '@font-face {font-family: "'+name+'"; src: url("'+url+'");}';
		document.getElementsByTagName('head')[0].appendChild(style);
	}
}