window.dictionary = "GAMEOVER最后得分历史最佳再玩一次更多游戏总数奖励分数剩余机会关卡发现奖励:123456789 0你要确定退出YC吗?";
var share = true;
(function(a) {
	Number.prototype.map = function(a, b, c, d) {
		return c + (d - c) * ((this - a) / (b - a))
	};
	Number.prototype.limit = function(a, b) {
		return Math.min(b, Math.max(a, this))
	};
	Number.prototype.round = function(a) {
		a = Math.pow(10, a || 0);
		return Math.round(this * a) / a
	};
	Number.prototype.floor = function() {
		return Math.floor(this)
	};
	Number.prototype.ceil = function() {
		return Math.ceil(this)
	};
	Number.prototype.toInt = function() {
		return this | 0
	};
	Number.prototype.toRad = function() {
		return this / 180 * Math.PI
	};
	Number.prototype.toDeg = function() {
		return 180 *
			this / Math.PI
	};
	Array.prototype.erase = function(a) {
		for (var b = this.length; b--;) this[b] === a && this.splice(b, 1);
		return this
	};
	Array.prototype.random = function() {
		return this[Math.floor(Math.random() * this.length)]
	};
	Function.prototype.bind = Function.prototype.bind || function(a) {
		if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		var b = Array.prototype.slice.call(arguments, 1),
			c = this,
			d = function() {}, e = function() {
				return c.apply(this instanceof d && a ?
					this : a, b.concat(Array.prototype.slice.call(arguments)))
			};
		d.prototype = this.prototype;
		e.prototype = new d;
		return e
	};
	a.ig = {
		game: null,
		debug: null,
		version: "1.21",
		global: a,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: "",
		ua: {},
		prefix: a.ImpactPrefix || "",
		lib: "lib/",
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function(a) {
			return "#" == a.charAt(0) ? document.getElementById(a.substr(1)) : document.getElementsByTagName(a)
		},
		$new: function(a) {
			return document.createElement(a)
		},
		copy: function(a) {
			if (!a || "object" != typeof a ||
				a instanceof HTMLElement || a instanceof ig.Class) return a;
			if (a instanceof Array)
				for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = ig.copy(a[c]);
			else
				for (c in b = {}, a) b[c] = ig.copy(a[c]);
			return b
		},
		merge: function(a, b) {
			for (var c in b) {
				var d = b[c];
				if ("object" != typeof d || d instanceof HTMLElement || d instanceof ig.Class) a[c] = d;
				else {
					if (!a[c] || "object" != typeof a[c]) a[c] = d instanceof Array ? [] : {};
					ig.merge(a[c], d)
				}
			}
			return a
		},
		ksort: function(a) {
			if (!a || "object" != typeof a) return [];
			var b = [],
				c = [],
				d;
			for (d in a) b.push(d);
			b.sort();
			for (d = 0; d < b.length; d++) c.push(a[b[d]]);
			return c
		},
		setVendorAttribute: function(a, b, c) {
			var d = b.charAt(0).toUpperCase() + b.substr(1);
			a[b] = a["ms" + d] = a["moz" + d] = a["webkit" + d] = a["o" + d] = c
		},
		getVendorAttribute: function(a, b) {
			var c = b.charAt(0).toUpperCase() + b.substr(1);
			return a[b] || a["ms" + c] || a["moz" + c] || a["webkit" + c] || a["o" + c]
		},
		normalizeVendorAttribute: function(a, b) {
			var c = ig.getVendorAttribute(a, b);
			!a[b] && c && (a[b] = c)
		},
		getImagePixels: function(a, b, c, d, e) {
			var f = ig.$new("canvas");
			f.width = a.width;
			f.height = a.height;
			var h = f.getContext("2d"),
				p = ig.getVendorAttribute(h, "backingStorePixelRatio") || 1;
			ig.normalizeVendorAttribute(h, "getImageDataHD");
			var t = a.width / p,
				r = a.height / p;
			f.width = Math.ceil(t);
			f.height = Math.ceil(r);
			h.drawImage(a, 0, 0, t, r);
			return 1 === p ? h.getImageData(b, c, d, e) : h.getImageDataHD(b, c, d, e)
		},
		module: function(a) {
			if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
			if (ig.modules[a] && ig.modules[a].body) throw "Module '" + a + "' is already defined";
			ig._current = {
				name: a,
				requires: [],
				loaded: !1,
				body: null
			};
			ig.modules[a] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig
		},
		requires: function() {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig
		},
		defines: function(a) {
			ig._current.body = a;
			ig._current = null;
			ig._initDOMReady()
		},
		addResource: function(a) {
			ig.resources.push(a)
		},
		setNocache: function(a) {
			ig.nocache = a ? "?" + Date.now() : ""
		},
		log: function() {},
		assert: function() {},
		show: function() {},
		mark: function() {},
		_loadScript: function(a, b) {
			ig.modules[a] = {
				name: a,
				requires: [],
				loaded: !1,
				body: null
			};
			ig._waitForOnload++;
			var c = ig.prefix + ig.lib + a.replace(/\./g, "/") + ".js" + ig.nocache,
				d = ig.$new("script");
			d.type = "text/javascript";
			d.src = c;
			d.onload = function() {
				ig._waitForOnload--;
				ig._execModules()
			};
			d.onerror = function() {
				throw "Failed to load module " + a + " at " + c + " required from " + b;
			};
			ig.$("head")[0].appendChild(d)
		},
		_execModules: function() {
			for (var a = !1, b = 0; b < ig._loadQueue.length; b++) {
				for (var c = ig._loadQueue[b], d = !0, e = 0; e < c.requires.length; e++) {
					var f = c.requires[e];
					ig.modules[f] ? ig.modules[f].loaded || (d = !1) : (d = !1, ig._loadScript(f,
						c.name))
				}
				d && c.body && (ig._loadQueue.splice(b, 1), c.loaded = !0, c.body(), a = !0, b--)
			}
			if (a) ig._execModules();
			else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
				a = [];
				for (b = 0; b < ig._loadQueue.length; b++) {
					d = [];
					f = ig._loadQueue[b].requires;
					for (e = 0; e < f.length; e++) c = ig.modules[f[e]], (!c || !c.loaded) && d.push(f[e]);
					a.push(ig._loadQueue[b].name + " (requires: " + d.join(", ") + ")")
				}
				throw "Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" + a.join("\n");
			}
		},
		_DOMReady: function() {
			if (!ig.modules["dom.ready"].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules["dom.ready"].loaded = !0;
				ig._waitForOnload--;
				ig._execModules()
			}
			return 0
		},
		_boot: function() {
			document.location.href.match(/\?nocache/) && ig.setNocache(!0);
			ig.ua.pixelRatio = a.devicePixelRatio || 1;
			ig.ua.viewport = {
				width: a.innerWidth,
				height: a.innerHeight
			};
			ig.ua.screen = {
				width: a.screen.availWidth * ig.ua.pixelRatio,
				height: a.screen.availHeight * ig.ua.pixelRatio
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.mobile = ig.ua.iOS || ig.ua.android
		},
		_initDOMReady: function() {
			ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
				requires: [],
				loaded: !1,
				body: null
			}, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), a.addEventListener("load",
				ig._DOMReady, !1)))
		}
	};
	ig.normalizeVendorAttribute(a, "requestAnimationFrame");
	if (a.requestAnimationFrame) {
		var b = 1,
			c = {};
		a.ig.setAnimation = function(d, e) {
			var f = b++;
			c[f] = !0;
			var m = function() {
				c[f] && (a.requestAnimationFrame(m, e), d())
			};
			a.requestAnimationFrame(m, e);
			return f
		};
		a.ig.clearAnimation = function(a) {
			delete c[a]
		}
	} else a.ig.setAnimation = function(b) {
		return a.setInterval(b, 1E3 / 60)
	}, a.ig.clearAnimation = function(b) {
		a.clearInterval(b)
	};
	var d = !1,
		f = /xyz/.test(function() {
			xyz
		}) ? /\bparent\b/ : /.*/;
	a.ig.Class = function() {};
	var e = function(a) {
		var b = this.prototype,
			c = {}, d;
		for (d in a) "function" == typeof a[d] && "function" == typeof b[d] && f.test(a[d]) ? (c[d] = b[d], b[d] = function(a, b) {
			return function() {
				var d = this.parent;
				this.parent = c[a];
				var e = b.apply(this, arguments);
				this.parent = d;
				return e
			}
		}(d, a[d])) : b[d] = a[d]
	};
	a.ig.Class.extend = function(b) {
		function c() {
			if (!d) {
				if (this.staticInstantiate) {
					var a = this.staticInstantiate.apply(this, arguments);
					if (a) return a
				}
				for (var b in this) "object" == typeof this[b] && (this[b] = ig.copy(this[b]));
				this.init &&
					this.init.apply(this, arguments)
			}
			return this
		}
		var j = this.prototype;
		d = !0;
		var m = new this;
		d = !1;
		for (var g in b) m[g] = "function" == typeof b[g] && "function" == typeof j[g] && f.test(b[g]) ? function(a, b) {
			return function() {
				var c = this.parent;
				this.parent = j[a];
				var d = b.apply(this, arguments);
				this.parent = c;
				return d
			}
		}(g, b[g]) : b[g];
		c.prototype = m;
		c.prototype.constructor = c;
		c.extend = a.ig.Class.extend;
		c.inject = e;
		return c
	}
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: "",
		staticInstantiate: function(a) {
			return ig.Image.cache[a] || null
		},
		init: function(a) {
			this.path = a;
			this.load()
		},
		load: function(a) {
			this.loaded ? a && a(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = a || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
				ig.Image.cache[this.path] = this)
		},
		reload: function() {
			this.loaded = !1;
			this.data = new Image;
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + "?" + Date.now()
		},
		onload: function() {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0)
		},
		onerror: function() {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1)
		},
		resize: function(a) {
			var b = ig.getImagePixels(this.data, 0, 0, this.width,
				this.height),
				c = this.width * a,
				d = this.height * a,
				f = ig.$new("canvas");
			f.width = c;
			f.height = d;
			for (var e = f.getContext("2d"), k = e.getImageData(0, 0, c, d), l = 0; l < d; l++)
				for (var j = 0; j < c; j++) {
					var m = 4 * (Math.floor(l / a) * this.width + Math.floor(j / a)),
						g = 4 * (l * c + j);
					k.data[g] = b.data[m];
					k.data[g + 1] = b.data[m + 1];
					k.data[g + 2] = b.data[m + 2];
					k.data[g + 3] = b.data[m + 3]
				}
			e.putImageData(k, 0, 0);
			this.data = f
		},
		draw: function(a, b, c, d, f, e) {
			if (this.loaded) {
				var k = ig.system.scale;
				f = (f ? f : this.width) * k;
				e = (e ? e : this.height) * k;
				ig.system.context.drawImage(this.data,
					c ? c * k : 0, d ? d * k : 0, f, e, ig.system.getDrawPos(a), ig.system.getDrawPos(b), f, e);
				ig.Image.drawCount++
			}
		},
		drawTile: function(a, b, c, d, f, e, k) {
			f = f ? f : d;
			if (this.loaded && !(d > this.width || f > this.height)) {
				var l = ig.system.scale,
					j = Math.floor(d * l),
					m = Math.floor(f * l),
					g = e ? -1 : 1,
					s = k ? -1 : 1;
				if (e || k) ig.system.context.save(), ig.system.context.scale(g, s);
				ig.system.context.drawImage(this.data, Math.floor(c * d) % this.width * l, Math.floor(c * d / this.width) * f * l, j, m, ig.system.getDrawPos(a) * g - (e ? j : 0), ig.system.getDrawPos(b) * s - (k ? m : 0), j, m);
				(e ||
					k) && ig.system.context.restore();
				ig.Image.drawCount++
			}
		}
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function() {
		for (var a in ig.Image.cache) ig.Image.cache[a].reload()
	}
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function() {
			if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
			else {
				for (var a = new Audio, b = 0; b < ig.Sound.use.length; b++) {
					var c = ig.Sound.use[b];
					if (a.canPlayType(c.mime)) {
						this.format = c;
						break
					}
				}
				this.format || (ig.Sound.enabled = !1)
			}
		},
		load: function(a, b, c) {
			var d = ig.prefix + a.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[a]) {
				if (b && this.clips[a].length < ig.Sound.channels)
					for (b = this.clips[a].length; b <
						ig.Sound.channels; b++) {
						var f = new Audio(d);
						f.load();
						this.clips[a].push(f)
					}
				return this.clips[a][0]
			}
			var e = new Audio(d);
			c && (e.addEventListener("canplaythrough", function l(b) {
				e.removeEventListener("canplaythrough", l, !1);
				c(a, !0, b)
			}, !1), e.addEventListener("error", function(b) {
				c(a, !1, b)
			}, !1));
			e.preload = "auto";
			e.load();
			this.clips[a] = [e];
			if (b)
				for (b = 1; b < ig.Sound.channels; b++) f = new Audio(d), f.load(), this.clips[a].push(f);
			return e
		},
		get: function(a) {
			a = this.clips[a];
			for (var b = 0, c; c = a[b++];)
				if (c.paused || c.ended) return c.ended &&
					(c.currentTime = 0), c;
			a[0].pause();
			a[0].currentTime = 0;
			return a[0]
		}
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function() {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty ? (Object.defineProperty(this, "volume", {
				get: this.getVolume.bind(this),
				set: this.setVolume.bind(this)
			}), Object.defineProperty(this, "loop", {
				get: this.getLooping.bind(this),
				set: this.setLooping.bind(this)
			})) :
				this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
		},
		add: function(a, b) {
			if (ig.Sound.enabled) {
				var c = ig.soundManager.load(a instanceof ig.Sound ? a.path : a, !1);
				c.loop = this._loop;
				c.volume = this._volume;
				c.addEventListener("ended", this._endedCallbackBound, !1);
				this.tracks.push(c);
				b && (this.namedTracks[b] = c);
				this.currentTrack ||
					(this.currentTrack = c)
			}
		},
		next: function() {
			this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
		},
		pause: function() {
			this.currentTrack && this.currentTrack.pause()
		},
		stop: function() {
			this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
		},
		play: function(a) {
			if (a && this.namedTracks[a]) a = this.namedTracks[a], a != this.currentTrack && (this.stop(),
				this.currentTrack = a);
			else if (!this.currentTrack) return;
			this.currentTrack.play()
		},
		getLooping: function() {
			return this._loop
		},
		setLooping: function(a) {
			this._loop = a;
			for (var b in this.tracks) this.tracks[b].loop = a
		},
		getVolume: function() {
			return this._volume
		},
		setVolume: function(a) {
			this._volume = a.limit(0, 1);
			for (var b in this.tracks) this.tracks[b].volume = this._volume
		},
		fadeOut: function(a) {
			this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(a), this._fadeInterval = setInterval(this._fadeStep.bind(this),
				50))
		},
		_fadeStep: function() {
			var a = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
			0.01 >= a ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = a
		},
		_endedCallback: function() {
			this._loop ? this.play() : this.next()
		}
	});
	ig.Sound = ig.Class.extend({
		path: "",
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function(a, b) {
			this.path = a;
			this.multiChannel = !1 !== b;
			this.load()
		},
		load: function(a) {
			ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
				this.multiChannel, a) : ig.addResource(this) : a && a(this.path, !0)
		},
		play: function() {
			ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
		},
		stop: function() {
			this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
		}
	});
	ig.Sound.FORMAT = {
		MP3: {
			ext: "mp3",
			mime: "audio/mpeg"
		},
		M4A: {
			ext: "m4a",
			mime: "audio/mp4; codecs=mp4a"
		},
		OGG: {
			ext: "ogg",
			mime: "audio/ogg; codecs=vorbis"
		},
		WEBM: {
			ext: "webm",
			mime: "audio/webm; codecs=vorbis"
		},
		CAF: {
			ext: "caf",
			mime: "audio/x-caf"
		}
	};
	ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
	ig.Font = ig.Image.extend({
		widthMap: [],
		indices: [],
		firstChar: 32,
		alpha: 1,
		letterSpacing: 1,
		lineSpacing: 0,
		onload: function(a) {
			this._loadMetrics(this.data);
			this.parent(a)
		},
		widthForString: function(a) {
			if (-1 !== a.indexOf("\n")) {
				a = a.split("\n");
				for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, this._widthForLine(a[c]));
				return b
			}
			return this._widthForLine(a)
		},
		_widthForLine: function(a) {
			var d = this.firstChar;
			for (var b = 0, c = 0; c < a.length; c++) {
				b += this.widthMap[window.dictionary.indexOf(a[c])] + this.letterSpacing;
			}
			return b
		},
		heightForString: function(a) {
			return a.split("\n").length * (this.height + this.lineSpacing)
		},
		draw: function(a, b, c, d) {
			"string" != typeof a && (a = a.toString());
			if (-1 !== a.indexOf("\n")) {
				a = a.split("\n");
				for (var f = this.height + this.lineSpacing, e = 0; e < a.length; e++) this.draw(a[e], b, c + e * f, d)
			} else {
				if (d == ig.Font.ALIGN.RIGHT || d == ig.Font.ALIGN.CENTER) e = this._widthForLine(a), b -= d == ig.Font.ALIGN.CENTER ? e / 2 : e;
				1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
				for (e = 0; e < a.length; e++) {
					// b += this._drawChar(d - this.firstChar, b, c);
					d = window.dictionary.indexOf(a[e]);
					b += this._drawChar(d, b, c);
				}
				1 !== this.alpha && (ig.system.context.globalAlpha = 1);
				ig.Image.drawCount += a.length
			}
		},
		_drawChar: function(a, b, c) {
			if (!this.loaded || 0 > a || a >= this.indices.length) return 0;
			var d = ig.system.scale,
				f = this.widthMap[a] * d,
				e = (this.height - 2) * d;
			ig.system.context.drawImage(this.data, this.indices[a] * d, 0, f, e, ig.system.getDrawPos(b), ig.system.getDrawPos(c), f, e);
			return this.widthMap[a] + this.letterSpacing
		},
		_loadMetrics: function(a) {
			this.height = a.height - 1;
			this.widthMap = [];
			this.indices =
				[];
			for (var b = ig.getImagePixels(a, 0, a.height - 1, a.width, 1), c = 0, d = 0, f = 0; f < a.width; f++) {
				var e = 4 * f + 3;
				50 < b.data[e] ? d++ : 0 == b.data[e] && d && (this.widthMap.push(d), this.indices.push(f - d), c++, d = 0)
			}
			this.widthMap.push(d);
			this.indices.push(f - d)
		}
	});
	ig.Font.ALIGN = {
		LEFT: 0,
		RIGHT: 1,
		CENTER: 2
	}
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.sound", "impact.font").defines(function() {
	ig.Loader = ig.Class.extend({
		resources: [],
		gameClass: null,
		status: 0,
		done: !1,
		_unloaded: [],
		_drawStatus: 0,
		_intervalId: 0,
		_loadCallbackBound: null,
		init: function(a, b) {
			this.gameClass = a;
			this.resources = b;
			this._loadCallbackBound = this._loadCallback.bind(this);
			for (var c = 0; c < this.resources.length; c++) this._unloaded.push(this.resources[c].path)
		},
		load: function() {
			ig.system.clear("#000");
			if (this.resources.length) {
				for (var a =
					0; a < this.resources.length; a++) this.loadResource(this.resources[a]);
				this._intervalId = setInterval(this.draw.bind(this), 16)
			} else this.end()
		},
		loadResource: function(a) {
			a.load(this._loadCallbackBound)
		},
		end: function() {
			this.done || (this.done = !0, clearInterval(this._intervalId), ig.system.setGame(this.gameClass))
		},
		draw: function() {
			this._drawStatus += (this.status - this._drawStatus) / 5;
			var a = ig.system.scale,
				b = 0.6 * ig.system.width,
				c = 0.1 * ig.system.height,
				d = 0.5 * ig.system.width - b / 2,
				f = 0.5 * ig.system.height - c / 2;
			ig.system.context.fillStyle =
				"#000";
			ig.system.context.fillRect(0, 0, 480, 320);
			ig.system.context.fillStyle = "#fff";
			ig.system.context.fillRect(d * a, f * a, b * a, c * a);
			ig.system.context.fillStyle = "#000";
			ig.system.context.fillRect(d * a + a, f * a + a, b * a - a - a, c * a - a - a);
			ig.system.context.fillStyle = "#fff";
			ig.system.context.fillRect(d * a, f * a, b * a * this._drawStatus, c * a)
		},
		_loadCallback: function(a, b) {
			if (b) this._unloaded.erase(a);
			else throw "Failed to load resource: " + a;
			this.status = 1 - this._unloaded.length / this.resources.length;
			0 == this._unloaded.length && setTimeout(this.end.bind(this),
				250)
		}
	})
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function(a) {
			this.last = this.base = ig.Timer.time;
			this.target = a || 0
		},
		set: function(a) {
			this.target = a || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		reset: function() {
			this.base = ig.Timer.time;
			this.pausedAt = 0
		},
		tick: function() {
			var a = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : a
		},
		delta: function() {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target
		},
		pause: function() {
			this.pausedAt ||
				(this.pausedAt = ig.Timer.time)
		},
		unpause: function() {
			this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
		}
	});
	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function() {
		var a = Date.now();
		ig.Timer.time += Math.min((a - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
		ig.Timer._last = a
	}
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
	ig.System = ig.Class.extend({
		fps: 30,
		width: 320,
		height: 240,
		realWidth: 320,
		realHeight: 240,
		scale: 1,
		tick: 0,
		animationId: 0,
		newGameClass: null,
		running: !1,
		delegate: null,
		clock: null,
		canvas: null,
		context: null,
		init: function(a, b, c, d, f) {
			this.fps = b;
			this.clock = new ig.Timer;
			this.canvas = ig.$(a);
			this.resize(c, d, f);
			this.context = this.canvas.getContext("2d");
			this.getDrawPos = ig.System.drawMode;
			1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
			ig.System.scaleMode(this.canvas, this.context)
		},
		resize: function(a, b, c) {
			this.width = a;
			this.height = b;
			this.scale = c || this.scale;
			this.realWidth = this.width * this.scale;
			this.realHeight = this.height * this.scale;
			this.canvas.width = this.realWidth;
			this.canvas.height = this.realHeight
		},
		setGame: function(a) {
			this.running ? this.newGameClass = a : this.setGameNow(a)
		},
		setGameNow: function(a) {
			ig.game = new a;
			ig.system.setDelegate(ig.game)
		},
		setDelegate: function(a) {
			if ("function" == typeof a.run) this.delegate = a, this.startRunLoop();
			else throw "System.setDelegate: No run() function in object";
		},
		stopRunLoop: function() {
			ig.clearAnimation(this.animationId);
			this.running = !1
		},
		startRunLoop: function() {
			this.stopRunLoop();
			this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
			this.running = !0
		},
		clear: function(a) {
			this.context.fillStyle = a;
			this.context.fillRect(0, 0, this.realWidth, this.realHeight)
		},
		run: function() {
			ig.Timer.step();
			this.tick = this.clock.tick();
			this.delegate.run();
			ig.input.clearPressed();
			this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
		},
		getDrawPos: null
	});
	ig.System.DRAW = {
		AUTHENTIC: function(a) {
			return Math.round(a) * this.scale
		},
		SMOOTH: function(a) {
			return Math.round(a * this.scale)
		},
		SUBPIXEL: function(a) {
			return a * this.scale
		}
	};
	ig.System.drawMode = ig.System.DRAW.SMOOTH;
	ig.System.SCALE = {
		CRISP: function(a, b) {
			ig.setVendorAttribute(b, "imageSmoothingEnabled", !1);
			a.style.imageRendering = "-moz-crisp-edges";
			a.style.imageRendering = "-o-crisp-edges";
			a.style.imageRendering = "-webkit-optimize-contrast";
			a.style.imageRendering = "crisp-edges";
			a.style.msInterpolationMode = "nearest-neighbor"
		},
		SMOOTH: function(a, b) {
			ig.setVendorAttribute(b, "imageSmoothingEnabled", !0);
			a.style.imageRendering = "";
			a.style.msInterpolationMode = ""
		}
	};
	ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0,
			z: 0
		},
		initMouse: function() {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var a = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener("mousewheel", a, !1);
				ig.system.canvas.addEventListener("DOMMouseScroll", a, !1);
				ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
				ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
				ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1)
			}
		},
		initKeyboard: function() {
			this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
		},
		initAccelerometer: function() {
			this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
		},
		mousewheel: function(a) {
			var b =
				this.bindings[0 < (a.wheelDelta ? a.wheelDelta : -1 * a.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
			b && (this.actions[b] = !0, this.presses[b] = !0, this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault())
		},
		mousemove: function(a) {
			var b = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
				b = ig.system.scale * (b / ig.system.realWidth),
				c = {
					left: 0,
					top: 0
				};
			ig.system.canvas.getBoundingClientRect && (c = ig.system.canvas.getBoundingClientRect());
			a = a.touches ? a.touches[0] : a;
			this.mouse.x = (a.clientX - c.left) / b;
			this.mouse.y =
				(a.clientY - c.top) / b
		},
		contextmenu: function(a) {
			this.bindings[ig.KEY.MOUSE2] && (a.stopPropagation(), a.preventDefault())
		},
		keydown: function(a) {
			var b = a.target.tagName;
			if (!("INPUT" == b || "TEXTAREA" == b))
				if (b = "keydown" == a.type ? a.keyCode : 2 == a.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == a.type || "mousedown" == a.type) && this.mousemove(a), b = this.bindings[b]) this.actions[b] = !0, this.locks[b] || (this.presses[b] = !0, this.locks[b] = !0), a.stopPropagation(), a.preventDefault()
		},
		keyup: function(a) {
			var b = a.target.tagName;
			if (!("INPUT" ==
				b || "TEXTAREA" == b))
				if (b = this.bindings["keyup" == a.type ? a.keyCode : 2 == a.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[b] = !0, a.stopPropagation(), a.preventDefault()
		},
		devicemotion: function(a) {
			this.accel = a.accelerationIncludingGravity
		},
		bind: function(a, b) {
			0 > a ? this.initMouse() : 0 < a && this.initKeyboard();
			this.bindings[a] = b
		},
		bindTouch: function(a, b) {
			var c = ig.$(a),
				d = this;
			c.addEventListener("touchstart", function(a) {
				d.touchStart(a, b)
			}, !1);
			c.addEventListener("touchend", function(a) {
				d.touchEnd(a, b)
			}, !1)
		},
		unbind: function(a) {
			this.delayedKeyup[this.bindings[a]] = !0;
			this.bindings[a] = null
		},
		unbindAll: function() {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {}
		},
		state: function(a) {
			return this.actions[a]
		},
		pressed: function(a) {
			return this.presses[a]
		},
		released: function(a) {
			return this.delayedKeyup[a]
		},
		clearPressed: function() {
			for (var a in this.delayedKeyup) this.actions[a] = !1, this.locks[a] = !1;
			this.delayedKeyup = {};
			this.presses = {}
		},
		touchStart: function(a, b) {
			this.actions[b] = !0;
			this.presses[b] = !0;
			a.stopPropagation();
			a.preventDefault();
			return !1
		},
		touchEnd: function(a, b) {
			this.delayedKeyup[b] = !0;
			a.stopPropagation();
			a.preventDefault();
			return !1
		}
	})
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.sound", "impact.input").defines(function() {
	ig.main = function(a, b, c, d, f, e, k) {
		ig.system = new ig.System(a, c, d, f, e || 1);
		ig.input = new ig.Input;
		ig.soundManager = new ig.SoundManager;
		ig.music = new ig.Music;
		ig.ready = !0;
		(new(k || ig.Loader)(b, ig.resources)).load()
	}
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
	ig.AnimationSheet = ig.Class.extend({
		width: 8,
		height: 8,
		image: null,
		init: function(a, b, c) {
			this.width = b;
			this.height = c;
			this.image = new ig.Image(a)
		}
	});
	ig.Animation = ig.Class.extend({
		sheet: null,
		timer: null,
		sequence: [],
		flip: {
			x: !1,
			y: !1
		},
		pivot: {
			x: 0,
			y: 0
		},
		frame: 0,
		tile: 0,
		loopCount: 0,
		alpha: 1,
		angle: 0,
		init: function(a, b, c, d) {
			this.sheet = a;
			this.pivot = {
				x: a.width / 2,
				y: a.height / 2
			};
			this.timer = new ig.Timer;
			this.frameTime = b;
			this.sequence = c;
			this.stop = !! d;
			this.tile = this.sequence[0]
		},
		rewind: function() {
			this.timer.set();
			this.loopCount = 0;
			this.tile = this.sequence[0];
			return this
		},
		gotoFrame: function(a) {
			this.timer.set(this.frameTime * -a);
			this.update()
		},
		gotoRandomFrame: function() {
			this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
		},
		update: function() {
			var a = Math.floor(this.timer.delta() / this.frameTime);
			this.loopCount = Math.floor(a / this.sequence.length);
			this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : a % this.sequence.length;
			this.tile = this.sequence[this.frame]
		},
		draw: function(a, b) {
			var c = Math.max(this.sheet.width, this.sheet.height);
			a > ig.system.width || (b > ig.system.height || 0 > a + c || 0 > b + c) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(a, b, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(a + this.pivot.x), ig.system.getDrawPos(b + this.pivot.y)), ig.system.context.rotate(this.angle),
				this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
		}
	})
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
	ig.Entity = ig.Class.extend({
		id: 0,
		settings: {},
		size: {
			x: 16,
			y: 16
		},
		offset: {
			x: 0,
			y: 0
		},
		pos: {
			x: 0,
			y: 0
		},
		last: {
			x: 0,
			y: 0
		},
		vel: {
			x: 0,
			y: 0
		},
		accel: {
			x: 0,
			y: 0
		},
		friction: {
			x: 0,
			y: 0
		},
		maxVel: {
			x: 100,
			y: 100
		},
		zIndex: 0,
		gravityFactor: 1,
		standing: !1,
		bounciness: 0,
		minBounceVelocity: 40,
		anims: {},
		animSheet: null,
		currentAnim: null,
		health: 10,
		type: 0,
		checkAgainst: 0,
		collides: 0,
		_killed: !1,
		slopeStanding: {
			min: (44).toRad(),
			max: (136).toRad()
		},
		init: function(a,
			b, c) {
			this.id = ++ig.Entity._lastId;
			this.pos.x = a;
			this.pos.y = b;
			ig.merge(this, c)
		},
		addAnim: function(a, b, c, d) {
			if (!this.animSheet) throw "No animSheet to add the animation " + a + " to.";
			b = new ig.Animation(this.animSheet, b, c, d);
			this.anims[a] = b;
			this.currentAnim || (this.currentAnim = b);
			return b
		},
		update: function() {
			this.last.x = this.pos.x;
			this.last.y = this.pos.y;
			this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
			this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
			this.vel.y =
				this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
			var a = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
			this.handleMovementTrace(a);
			this.currentAnim && this.currentAnim.update()
		},
		getNewVelocity: function(a, b, c, d) {
			return b ? (a + b * ig.system.tick).limit(-d, d) : c ? (b = c * ig.system.tick, 0 < a - b ? a - b : 0 > a + b ? a + b : 0) : a.limit(-d, d)
		},
		handleMovementTrace: function(a) {
			this.standing = !1;
			a.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) >
				this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
			a.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
			if (a.collision.slope) {
				var b = a.collision.slope;
				if (0 < this.bounciness) {
					var c = this.vel.x * b.nx + this.vel.y * b.ny;
					this.vel.x = (this.vel.x - 2 * b.nx * c) * this.bounciness;
					this.vel.y = (this.vel.y - 2 * b.ny * c) * this.bounciness
				} else c = (this.vel.x * b.x + this.vel.y * b.y) / (b.x * b.x + b.y * b.y), this.vel.x = b.x * c, this.vel.y =
					b.y * c, b = Math.atan2(b.x, b.y), b > this.slopeStanding.min && b < this.slopeStanding.max && (this.standing = !0)
			}
			this.pos = a.pos
		},
		draw: function() {
			this.currentAnim && this.currentAnim.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
		},
		kill: function() {
			ig.game.removeEntity(this)
		},
		receiveDamage: function(a) {
			this.health -= a;
			0 >= this.health && this.kill()
		},
		touches: function(a) {
			return !(this.pos.x >= a.pos.x + a.size.x || this.pos.x + this.size.x <= a.pos.x || this.pos.y >= a.pos.y + a.size.y || this.pos.y +
				this.size.y <= a.pos.y)
		},
		distanceTo: function(a) {
			var b = this.pos.x + this.size.x / 2 - (a.pos.x + a.size.x / 2);
			a = this.pos.y + this.size.y / 2 - (a.pos.y + a.size.y / 2);
			return Math.sqrt(b * b + a * a)
		},
		angleTo: function(a) {
			return Math.atan2(a.pos.y + a.size.y / 2 - (this.pos.y + this.size.y / 2), a.pos.x + a.size.x / 2 - (this.pos.x + this.size.x / 2))
		},
		check: function() {},
		collideWith: function() {},
		ready: function() {}
	});
	ig.Entity._lastId = 0;
	ig.Entity.COLLIDES = {
		NEVER: 0,
		LITE: 1,
		PASSIVE: 2,
		ACTIVE: 4,
		FIXED: 8
	};
	ig.Entity.TYPE = {
		NONE: 0,
		A: 1,
		B: 2,
		BOTH: 3
	};
	ig.Entity.checkPair =
		function(a, b) {
			a.checkAgainst & b.type && a.check(b);
			b.checkAgainst & a.type && b.check(a);
			a.collides && (b.collides && a.collides + b.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(a, b)
	};
	ig.Entity.solveCollision = function(a, b) {
		var c = null;
		if (a.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) c = a;
		else if (b.collides == ig.Entity.COLLIDES.LITE || a.collides == ig.Entity.COLLIDES.FIXED) c = b;
		a.last.x + a.size.x > b.last.x && a.last.x < b.last.x + b.size.x ? (a.last.y < b.last.y ? ig.Entity.seperateOnYAxis(a,
			b, c) : ig.Entity.seperateOnYAxis(b, a, c), a.collideWith(b, "y"), b.collideWith(a, "y")) : a.last.y + a.size.y > b.last.y && a.last.y < b.last.y + b.size.y && (a.last.x < b.last.x ? ig.Entity.seperateOnXAxis(a, b, c) : ig.Entity.seperateOnXAxis(b, a, c), a.collideWith(b, "x"), b.collideWith(a, "x"))
	};
	ig.Entity.seperateOnXAxis = function(a, b, c) {
		var d = a.pos.x + a.size.x - b.pos.x;
		c ? (c.vel.x = -c.vel.x * c.bounciness + (a === c ? b : a).vel.x, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, c == a ? -d : d, 0, c.size.x, c.size.y), c.pos.x = b.pos.x) : (c = (a.vel.x - b.vel.x) /
			2, a.vel.x = -c, b.vel.x = c, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, -d / 2, 0, a.size.x, a.size.y), a.pos.x = Math.floor(c.pos.x), a = ig.game.collisionMap.trace(b.pos.x, b.pos.y, d / 2, 0, b.size.x, b.size.y), b.pos.x = Math.ceil(a.pos.x))
	};
	ig.Entity.seperateOnYAxis = function(a, b, c) {
		var d = a.pos.y + a.size.y - b.pos.y;
		if (c) {
			b = a === c ? b : a;
			c.vel.y = -c.vel.y * c.bounciness + b.vel.y;
			var f = 0;
			c == a && Math.abs(c.vel.y - b.vel.y) < c.minBounceVelocity && (c.standing = !0, f = b.vel.x * ig.system.tick);
			a = ig.game.collisionMap.trace(c.pos.x, c.pos.y, f, c ==
				a ? -d : d, c.size.x, c.size.y);
			c.pos.y = a.pos.y;
			c.pos.x = a.pos.x
		} else ig.game.gravity && (b.standing || 0 < a.vel.y) ? (c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, 0, -(a.pos.y + a.size.y - b.pos.y), a.size.x, a.size.y), a.pos.y = c.pos.y, 0 < a.bounciness && a.vel.y > a.minBounceVelocity ? a.vel.y *= -a.bounciness : (a.standing = !0, a.vel.y = 0)) : (c = (a.vel.y - b.vel.y) / 2, a.vel.y = -c, b.vel.y = c, f = b.vel.x * ig.system.tick, c = ig.game.collisionMap.trace(a.pos.x, a.pos.y, f, -d / 2, a.size.x, a.size.y), a.pos.y = c.pos.y, a = ig.game.collisionMap.trace(b.pos.x,
			b.pos.y, 0, d / 2, b.size.x, b.size.y), b.pos.y = a.pos.y)
	}
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [
			[]
		],
		name: null,
		init: function(a, b) {
			this.tilesize = a;
			this.data = b;
			this.height = b.length;
			this.width = b[0].length
		},
		getTile: function(a, b) {
			var c = Math.floor(a / this.tilesize),
				d = Math.floor(b / this.tilesize);
			return 0 <= c && c < this.width && 0 <= d && d < this.height ? this.data[d][c] : 0
		},
		setTile: function(a, b, c) {
			a = Math.floor(a / this.tilesize);
			b = Math.floor(b / this.tilesize);
			0 <= a && a < this.width && (0 <= b && b < this.height) && (this.data[b][a] =
				c)
		}
	})
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
	ig.CollisionMap = ig.Map.extend({
		lastSlope: 1,
		tiledef: null,
		init: function(a, b, f) {
			this.parent(a, b);
			this.tiledef = f || ig.CollisionMap.defaultTileDef;
			for (var e in this.tiledef) e | 0 > this.lastSlope && (this.lastSlope = e | 0)
		},
		trace: function(a, b, f, e, k, l) {
			var j = {
				collision: {
					x: !1,
					y: !1,
					slope: !1
				},
				pos: {
					x: a,
					y: b
				},
				tile: {
					x: 0,
					y: 0
				}
			}, m = Math.ceil(Math.max(Math.abs(f), Math.abs(e)) / this.tilesize);
			if (1 < m)
				for (var g = f / m, s = e / m, h = 0; h < m && (g || s) && !(this._traceStep(j,
					a, b, g, s, k, l, f, e, h), a = j.pos.x, b = j.pos.y, j.collision.x && (f = g = 0), j.collision.y && (e = s = 0), j.collision.slope); h++);
			else this._traceStep(j, a, b, f, e, k, l, f, e, 0);
			return j
		},
		_traceStep: function(a, b, f, e, k, l, j, m, g, s) {
			a.pos.x += e;
			a.pos.y += k;
			var h = 0;
			if (e) {
				var p = 0 < e ? l : 0,
					t = 0 > e ? this.tilesize : 0,
					h = Math.max(Math.floor(f / this.tilesize), 0),
					r = Math.min(Math.ceil((f + j) / this.tilesize), this.height);
				e = Math.floor((a.pos.x + p) / this.tilesize);
				var x = Math.floor((b + p) / this.tilesize);
				if (0 < s || e == x || 0 > x || x >= this.width) x = -1;
				if (0 <= e && e < this.width)
					for (var q =
						h; q < r && !(-1 != x && (h = this.data[q][x], 1 < h && h <= this.lastSlope && this._checkTileDef(a, h, b, f, m, g, l, j, x, q))); q++)
						if (h = this.data[q][e], 1 == h || h > this.lastSlope || 1 < h && this._checkTileDef(a, h, b, f, m, g, l, j, e, q)) {
							if (1 < h && h <= this.lastSlope && a.collision.slope) break;
							a.collision.x = !0;
							a.tile.x = h;
							b = a.pos.x = e * this.tilesize - p + t;
							m = 0;
							break
						}
			}
			if (k) {
				p = 0 < k ? j : 0;
				k = 0 > k ? this.tilesize : 0;
				h = Math.max(Math.floor(a.pos.x / this.tilesize), 0);
				t = Math.min(Math.ceil((a.pos.x + l) / this.tilesize), this.width);
				q = Math.floor((a.pos.y + p) / this.tilesize);
				r = Math.floor((f + p) / this.tilesize);
				if (0 < s || q == r || 0 > r || r >= this.height) r = -1;
				if (0 <= q && q < this.height)
					for (e = h; e < t && !(-1 != r && (h = this.data[r][e], 1 < h && h <= this.lastSlope && this._checkTileDef(a, h, b, f, m, g, l, j, e, r))); e++)
						if (h = this.data[q][e], 1 == h || h > this.lastSlope || 1 < h && this._checkTileDef(a, h, b, f, m, g, l, j, e, q)) {
							if (1 < h && h <= this.lastSlope && a.collision.slope) break;
							a.collision.y = !0;
							a.tile.y = h;
							a.pos.y = q * this.tilesize - p + k;
							break
						}
			}
		},
		_checkTileDef: function(a, b, f, e, k, l, j, m, g, s) {
			var h = this.tiledef[b];
			if (!h) return !1;
			b = (h[2] -
				h[0]) * this.tilesize;
			var p = (h[3] - h[1]) * this.tilesize,
				t = h[4];
			j = f + k + (0 > p ? j : 0) - (g + h[0]) * this.tilesize;
			m = e + l + (0 < b ? m : 0) - (s + h[1]) * this.tilesize;
			if (0 < b * m - p * j) {
				if (0 > k * -p + l * b) return t;
				g = Math.sqrt(b * b + p * p);
				s = p / g;
				g = -b / g;
				var r = j * s + m * g,
					h = s * r,
					r = g * r;
				if (h * h + r * r >= k * k + l * l) return t || 0.5 > b * (m - l) - p * (j - k);
				a.pos.x = f + k - h;
				a.pos.y = e + l - r;
				a.collision.slope = {
					x: b,
					y: p,
					nx: s,
					ny: g
				};
				return !0
			}
			return !1
		}
	});
	var a = 1 / 3,
		b = 2 / 3;
	ig.CollisionMap.defaultTileDef = {
		5: [0, 1, 1, b, !0],
		6: [0, b, 1, a, !0],
		7: [0, a, 1, 0, !0],
		3: [0, 1, 1, 0.5, !0],
		4: [0, 0.5, 1, 0, !0],
		2: [0,
			1, 1, 0, !0
		],
		10: [0.5, 1, 1, 0, !0],
		21: [0, 1, 0.5, 0, !0],
		32: [b, 1, 1, 0, !0],
		43: [a, 1, b, 0, !0],
		54: [0, 1, a, 0, !0],
		27: [0, 0, 1, a, !0],
		28: [0, a, 1, b, !0],
		29: [0, b, 1, 1, !0],
		25: [0, 0, 1, 0.5, !0],
		26: [0, 0.5, 1, 1, !0],
		24: [0, 0, 1, 1, !0],
		11: [0, 0, 0.5, 1, !0],
		22: [0.5, 0, 1, 1, !0],
		33: [0, 0, a, 1, !0],
		44: [a, 0, b, 1, !0],
		55: [b, 0, 1, 1, !0],
		16: [1, a, 0, 0, !0],
		17: [1, b, 0, a, !0],
		18: [1, 1, 0, b, !0],
		14: [1, 0.5, 0, 0, !0],
		15: [1, 1, 0, 0.5, !0],
		13: [1, 1, 0, 0, !0],
		8: [0.5, 1, 0, 0, !0],
		19: [1, 1, 0.5, 0, !0],
		30: [a, 1, 0, 0, !0],
		41: [b, 1, a, 0, !0],
		52: [1, 1, b, 0, !0],
		38: [1, b, 0, 1, !0],
		39: [1, a, 0, b, !0],
		40: [1, 0,
			0, a, !0
		],
		36: [1, 0.5, 0, 1, !0],
		37: [1, 0, 0, 0.5, !0],
		35: [1, 0, 0, 1, !0],
		9: [1, 0, 0.5, 1, !0],
		20: [0.5, 0, 0, 1, !0],
		31: [1, 0, b, 1, !0],
		42: [b, 0, a, 1, !0],
		53: [a, 0, 0, 1, !0],
		12: [0, 0, 1, 0, !1],
		23: [1, 1, 0, 1, !1],
		34: [1, 0, 1, 1, !1],
		45: [0, 1, 0, 0, !1]
	};
	ig.CollisionMap.staticNoCollision = {
		trace: function(a, b, f, e) {
			return {
				collision: {
					x: !1,
					y: !1,
					slope: !1
				},
				pos: {
					x: a + f,
					y: b + e
				},
				tile: {
					x: 0,
					y: 0
				}
			}
		}
	}
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map").defines(function() {
	ig.Game = ig.Class.extend({
		clearColor: "#000000",
		gravity: 0,
		screen: {
			x: 0,
			y: 0
		},
		_rscreen: {
			x: 0,
			y: 0
		},
		entities: [],
		namedEntities: {},
		collisionMap: ig.CollisionMap.staticNoCollision,
		backgroundMaps: [],
		backgroundAnims: {},
		autoSort: !1,
		sortBy: null,
		cellSize: 64,
		_deferredKill: [],
		_levelToLoad: null,
		_doSortEntities: !1,
		staticInstantiate: function() {
			this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
			ig.game = this;
			return null
		},
		loadLevel: function(a) {
			this.screen = {
				x: 0,
				y: 0
			};
			this.entities = [];
			this.namedEntities = {};
			for (var b = 0; b < a.entities.length; b++) {
				var c = a.entities[b];
				this.spawnEntity(c.type, c.x, c.y, c.settings)
			}
			this.sortEntities();
			this.collisionMap = ig.CollisionMap.staticNoCollision;
			this.backgroundMaps = [];
			for (b = 0; b < a.layer.length; b++)
				if (c = a.layer[b], "collision" == c.name) this.collisionMap = new ig.CollisionMap(c.tilesize, c.data);
				else {
					var d = new ig.BackgroundMap(c.tilesize, c.data, c.tilesetName);
					d.anims = this.backgroundAnims[c.tilesetName] || {};
					d.repeat = c.repeat;
					d.distance = c.distance;
					d.foreground = !! c.foreground;
					d.preRender = !! c.preRender;
					d.name = c.name;
					this.backgroundMaps.push(d)
				}
			for (b = 0; b < this.entities.length; b++) this.entities[b].ready()
		},
		loadLevelDeferred: function(a) {
			this._levelToLoad = a
		},
		getMapByName: function(a) {
			if ("collision" == a) return this.collisionMap;
			for (var b = 0; b < this.backgroundMaps.length; b++)
				if (this.backgroundMaps[b].name == a) return this.backgroundMaps[b];
			return null
		},
		getEntityByName: function(a) {
			return this.namedEntities[a]
		},
		getEntitiesByType: function(a) {
			a =
				"string" === typeof a ? ig.global[a] : a;
			for (var b = [], c = 0; c < this.entities.length; c++) {
				var d = this.entities[c];
				d instanceof a && !d._killed && b.push(d)
			}
			return b
		},
		spawnEntity: function(a, b, c, d) {
			var f = "string" === typeof a ? ig.global[a] : a;
			if (!f) throw "Can't spawn entity of type " + a;
			a = new f(b, c, d || {});
			this.entities.push(a);
			a.name && (this.namedEntities[a.name] = a);
			return a
		},
		sortEntities: function() {
			this.entities.sort(this.sortBy)
		},
		sortEntitiesDeferred: function() {
			this._doSortEntities = !0
		},
		removeEntity: function(a) {
			a.name &&
				delete this.namedEntities[a.name];
			a._killed = !0;
			a.type = ig.Entity.TYPE.NONE;
			a.checkAgainst = ig.Entity.TYPE.NONE;
			a.collides = ig.Entity.COLLIDES.NEVER;
			this._deferredKill.push(a)
		},
		run: function() {
			this.update();
			this.draw()
		},
		update: function() {
			this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
			if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
			this.updateEntities();
			this.checkEntities();
			for (var a = 0; a < this._deferredKill.length; a++) this.entities.erase(this._deferredKill[a]);
			this._deferredKill = [];
			for (var b in this.backgroundAnims) {
				var a = this.backgroundAnims[b],
					c;
				for (c in a) a[c].update()
			}
		},
		updateEntities: function() {
			for (var a = 0; a < this.entities.length; a++) {
				var b = this.entities[a];
				b._killed || b.update()
			}
		},
		draw: function() {
			this.clearColor && ig.system.clear(this.clearColor);
			this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
			this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
			var a;
			for (a = 0; a < this.backgroundMaps.length; a++) {
				var b = this.backgroundMaps[a];
				if (b.foreground) break;
				b.setScreenPos(this.screen.x, this.screen.y);
				b.draw()
			}
			this.drawEntities();
			for (a; a < this.backgroundMaps.length; a++) b = this.backgroundMaps[a], b.setScreenPos(this.screen.x, this.screen.y), b.draw()
		},
		drawEntities: function() {
			for (var a = 0; a < this.entities.length; a++) this.entities[a]._killed || this.entities[a].draw()
		},
		checkEntities: function() {
			for (var a = {}, b = 0; b < this.entities.length; b++) {
				var c = this.entities[b];
				if (!(c.type == ig.Entity.TYPE.NONE && c.checkAgainst == ig.Entity.TYPE.NONE && c.collides ==
					ig.Entity.COLLIDES.NEVER))
					for (var d = {}, f = Math.floor(c.pos.y / this.cellSize), e = Math.floor((c.pos.x + c.size.x) / this.cellSize) + 1, k = Math.floor((c.pos.y + c.size.y) / this.cellSize) + 1, l = Math.floor(c.pos.x / this.cellSize); l < e; l++)
						for (var j = f; j < k; j++)
							if (a[l])
								if (a[l][j]) {
									for (var m = a[l][j], g = 0; g < m.length; g++) c.touches(m[g]) && !d[m[g].id] && (d[m[g].id] = !0, ig.Entity.checkPair(c, m[g]));
									m.push(c)
								} else a[l][j] = [c];
								else a[l] = {}, a[l][j] = [c]
			}
		}
	});
	ig.Game.SORT = {
		Z_INDEX: function(a, b) {
			return a.zIndex - b.zIndex
		},
		POS_X: function(a,
			b) {
			return a.pos.x + a.size.x - (b.pos.x + b.size.x)
		},
		POS_Y: function(a, b) {
			return a.pos.y + a.size.y - (b.pos.y + b.size.y)
		}
	}
});
ig.baked = !0;
ig.module("plugins.inFocus").requires("impact.entity").defines(function() {
	ig.Entity.inject({
		inFocus: function() {
			return this.pos.x <= ig.input.mouse.x + ig.game.screen.x && ig.input.mouse.x + ig.game.screen.x <= this.pos.x + this.size.x && this.pos.y <= ig.input.mouse.y + ig.game.screen.y && ig.input.mouse.y + ig.game.screen.y <= this.pos.y + this.size.y
		}
	})
});
ig.baked = !0;
ig.module("plugins.symbols").requires("impact.impact").defines(function() {
	ig.Symbols = ig.Class.extend({
		instance: null,
		staticInstantiate: function() {
			if (null == ig.Symbols.instance) return null;
			throw "Error: ig.Symbols has already been instantiated. It can only be instantiated once.";
		},
		init: function(a, b) {
			"undefined" == typeof b && (b = [ig.Entity]);
			var c = a.split(" "),
				d = c.length;
			if (30 < d) throw "Error: ig.Symbols allows a maximum of 30 symbol definitions.";
			for (var f = 0; f < b.length; f++)
				for (var e = b[f], k = 0; k < d; k++) {
					var l =
						c[k];
					l.replace(/^\s+|\s+$/g, "");
					l && (e[l] = 1 << k)
				}
			ig.Symbols.instance = this
		}
	})
});
ig.baked = !0;
ig.module("game.entities").requires("impact.entity").defines(function() {
	window.EntitySquare = ig.Entity.extend({
		correctColor: {
			r: 16,
			g: 19,
			b: 255
		},
		correctHoverColor: {
			r: 23,
			g: 118,
			b: 206
		},
		normalColor: {
			r: 216,
			g: 216,
			b: 216
		},
		normalHoverColor: {
			r: 250,
			g: 250,
			b: 250
		},
		failColor: {
			r: 239,
			g: 45,
			b: 45
		},
		displayColor: {
			r: 0,
			g: 0,
			b: 0
		},
		hoverable: !0,
		currentCircle: 2,
		init: function(a, b, c) {
			this.parent(a, b, c);
			this.currentSquare = "white";
			this.displayColor = this.normalColor;
			this.name = "s" + ig.game.numOfSquares;
			ig.game.numOfSquares++;
			this.randomColor = {
				r: 255 * Math.random(),
				g: 255 * Math.random(),
				b: 255 * Math.random()
			};
			this.radius1 = Math.floor(15 * this.size.x / 80);
			this.radius2 = Math.floor(45 * this.size.x / 80);
			this.ctx = ig.system.context;
			this.currentTile = this.currentCircle
		},
		update: function() {
			this.isCorrectSquare && this.show && (this.currentSquare = "blue", this.displayColor = this.correctColor, this.currentCircle = 0, this.show = !1);
			ig.game.currentCorrectSquares + 1 == ig.game.correctSquaresForThisRound && (this.isCorrectSquare && !this.clicked && !this.toggle) && (this.toggle = this.isLastCorrectSquare = !0)
		},
		draw: function() {
			var a = ig.game;
			this.placed && (this.inFocus() && ig.game.allowClicks && this.hoverable ? (this.currentTile = this.currentCircle + 1, ig.input.pressed("click") && !this.clicked && (this.isLastCorrectSquare ? (this.displayColor = this.correctColor, a.finishedTrans++, a.currentCorrectSquares++, this.currentSquare = "blue", this.currentCircle = 0, this.drawGradient = !0, a.bonusTm.pause()) : this.isCorrectSquare ? (this.currentSquare = "blue", this.colorTransitionEffect(this.correctColor), a.currentCorrectSquares++, this.currentCircle =
				0, this.drawGradient = !0) : (a.state = ig.Game.LOSE, this.currentSquare = "red", this.displayColor = this.failColor, this.currentCircle = 4, a.bonusTm.pause()), this.clicked = !0)) : this.currentTile = this.currentCircle, this.drawGradient ? this.drawCircle(this.displayColor) : a.circlesSheet && a.circlesSheet.drawTile(this.pos.x, this.pos.y, this.currentTile, this.size.x));
			a.circlesSheet.drawTile(this.pos.x, this.pos.y, 5, this.size.x)
		},
		drawCircle: function(a) {
			this.ctx.beginPath();
			this.ctx.arc(this.pos.x + this.size.x / 2, this.pos.y + this.size.y /
				2, 0.8 * this.size.x / 2, 0, 2 * Math.PI, !1);
			var b = this.ctx.createRadialGradient(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.radius1, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.radius2);
			b.addColorStop(0, "rgb(" + a.r.round() + ", " + a.g.round() + ", " + a.b.round() + ")");
			b.addColorStop(1, "transparent");
			this.ctx.fillStyle = b;
			this.ctx.fill()
		},
		colorTransitionEffect: function(a) {
			var b = TweenLite.to(this.displayColor, 0.5, {
				r: a.r,
				g: a.g,
				b: a.b,
				onComplete: function() {
					this.hoverable = !0;
					ig.game.finishedTrans++;
					this.drawGradient = !1
				}.bind(this)
			}).pause();
			TweenLite.to(this.displayColor, 0.5, {
				r: this.randomColor.r,
				g: this.randomColor.g,
				b: this.randomColor.b,
				onComplete: function() {
					b.play()
				}
			});
			this.hoverable = !1
		}
	});
	window.EntityPlacingCircle = ig.Entity.extend({
		finalLocation: null,
		init: function(a, b, c) {
			this.parent(a, b, c);
			this.size = this.square.size;
			this.finalLocation = this.square.pos;
			c = [Power1, Power2, Power3, Power4, Back, Bounce, Circ, Elastic, Expo, Sine, SlowMo];
			var d = ["easeIn", "easeOut", "easeInOut"];
			this.randTween = c[Math.floor(Math.random() *
				c.length)][d[Math.floor(Math.random() * d.length)]];
			this.ctx = ig.system.context;
			this.posX = a;
			this.posY = b
		},
		draw: function() {
			ig.game.circlesSheet.drawTile(this.pos.x, this.pos.y, 2, this.size.x);
			this.pos.x = this.posX;
			this.pos.y = this.posY;
			this.toggle1 || (this.toggle1 = !0, this.placeOn())
		},
		placeOn: function() {
			TweenLite.to(this, this.tweenTime, {
				posX: this.finalLocation.x,
				posY: this.finalLocation.y,
				ease: this.randTween,
				delay: this.delayTime,
				onComplete: function() {
					this.square.placed = !0;
					ig.game.circlesPlaced++;
					this.kill()
				}.bind(this)
			})
		},
		update: function() {}
	});
	window.EntityMask = ig.Entity.extend({
		maskOpacity: 0,
		init: function(a, b, c) {
			this.parent(a, b, c);
			this.blackScreen = ig.game.blackScreen
		},
		draw: function() {
			this.toggle1 || (this.toggle1 = !0, this.screenTransition());
			var a = ig.system.context;
			a.globalAlpha = this.maskOpacity;
			a.drawImage(this.blackScreen, 0, 0);
			a.globalAlpha = 1
		},
		screenTransition: function() {
			if ("fadeinAndFadeout" == this.maskType) {
				var a = TweenLite.to(this, 0.5, {
					maskOpacity: 0,
					onComplete: function() {
						this.kill()
					}.bind(this)
				}).pause();
				TweenLite.to(this,
					0.5, {
						maskOpacity: 1,
						onComplete: function() {
							var b = ig.game;
							b.killAll = !0;
							b.showResults = !0;
							b.drawHUD = !1;
							b.showSquaresLeft = !0;
							0 == b.chances ? (b.showFinalResults = !0, b.state = ig.Game.GAMEOVER, ig.ua.mobile ? b.spawnParticles(10) : b.spawnParticles(20)) : !ig.ua.mobile ? b.spawnParticles(20) : ig.ua.android ? null : b.spawnParticles(10);
							a.play()
						}
					})
			} else this.maskOpacity = 1, TweenLite, TweenLite.to(this, 0.5, {
				maskOpacity: 0,
				onComplete: function() {
					this.kill()
				}.bind(this)
			})
		},
		update: function() {}
	});
	window.EntityParticle = ig.Entity.extend({
		init: function(a,
			b, c) {
			this.parent(a, b, c);
			this.ballImg = new ig.TextureAtlasImage(ig.game.atlas1, "blueball.png", !0);
			this.reduceRadiusTm = new ig.Timer;
			this.newParticle(this.color)
		},
		draw: function() {
			(this.reduceRadiusTm.delta() > this.timeLimit || 0 > this.remainingLife) && this.newParticle();
			var a = ig.system.context;
			a.save();
			a.globalCompositeOperation = "lighter";
			a.translate(this.pos.x, this.pos.y);
			var b = (this.reduceRadiusTm.delta().round(2) / this.timeLimit).map(0, 1, 1, 0);
			a.scale(b, b);
			a.globalAlpha = (this.remainingLife / this.life).round(2);
			this.remainingLife--;
			this.ballImg.draw(0, 0);
			a.globalAlpha = 1;
			a.restore()
		},
		newParticle: function() {
			var a = (400 * Math.random()).round() + 200;
			this.vel.x = -a;
			this.pos.x = ig.system.realWidth;
			this.pos.y = (Math.random() * ig.system.realHeight).round(2);
			this.remainingLife = this.life = 70 + 70 * Math.random();
			this.reduceRadiusTm.set();
			this.timeLimit = (1 + 3 * Math.random()).round(2)
		},
		update: function() {
			this.pos.x += this.vel.x * ig.system.tick
		}
	})
});
ig.baked = !0;
ig.module("plugins.buttons").defines(function() {
	window.ButtonManager = ig.Class.extend({
		buttons: [],
		layer1: [],
		layer2: [],
		addButton: function(a) {
			a.size = {
				x: a.anim.frameData.sourceSize.w,
				y: a.anim.frameData.sourceSize.h
			};
			a.inFocus = function() {
				return this.pos.x <= ig.input.mouse.x + ig.game.screen.x && ig.input.mouse.x + ig.game.screen.x <= this.pos.x + this.size.x && this.pos.y <= ig.input.mouse.y + ig.game.screen.y && ig.input.mouse.y + ig.game.screen.y <= this.pos.y + this.size.y
			};
			"center" === a.pos.x && (a.pos.x = ig.system.width / 2 - a.size.x /
				2);
			"center" === a.pos.y && (a.pos.y = ig.system.height / 2 - a.size.y);
			1 === a.layer ? this.layer1.push(a) : 2 === a.layer && this.layer2.push(a);
			this.buttons.push(a)
		},
		drawLayer1: function() {
			for (var a = 0; a < this.layer1.length; a++)
				if (this.layer1[a].enabled) {
					var b = this.layer1[a],
						c = 0;
					b.inFocus() && (b.hoverable && (c = 1), ig.input.pressed("click") && b.action());
					b.anim.frameData = b.anim.frames[c];
					b.anim.draw(b.pos.x, b.pos.y)
				}
		},
		drawLayer2: function() {
			for (var a = 0; a < this.layer2.length; a++)
				if (this.layer2[a].enabled) {
					var b = this.layer2[a],
						c = 0;
					b.inFocus() && (b.hoverable && (c = 1), ig.input.pressed("click") && b.action());
					b.anim.frameData = b.anim.frames[c];
					b.anim.draw(b.pos.x, b.pos.y)
				}
		},
		enableButton: function(a) {
			if (a = this.getButton(a)) a.enabled = !0
		},
		disableButton: function(a) {
			if (a = this.getButton(a)) a.enabled = !1
		},
		disableAllButtons: function() {
			for (var a = 0; a < this.buttons.length; a++) this.buttons[a].enabled = !1
		},
		getButton: function(a) {
			for (var b = 0; this.buttons.length; b++)
				if (this.buttons[b].name == a) return this.buttons[b];
			throw "Error there's no button named " +
				a;
		}
	})
});
ig.baked = !0;
ig.module("plugins.impact-splash-loader").requires("impact.loader").defines(function() {
	ig.ImpactSplashLoader = ig.Loader.extend({
		endTime: 0,
		fadeToWhiteTime: 200,
		fadeToGameTime: 800,
		logoWidth: 340,
		logoHeight: 120,
		end: function() {
			this.parent();
			this.endTime = Date.now();
			ig.system.setDelegate(this)
		},
		run: function() {
			var a = Date.now() - this.endTime,
				b = 1;
			if (a < this.fadeToWhiteTime) this.draw(), b = a.map(0, this.fadeToWhiteTime, 0, 1);
			else if (a < this.fadeToGameTime) {
				btGame.gameLoading(1);
				ig.game.run(), b = a.map(this.fadeToWhiteTime, this.fadeToGameTime, 1, 0);
			}
			else {
				ig.system.setDelegate(ig.game);
				return
			}
			ig.system.context.fillStyle = "rgba(255,255,255," + b + ")";
			ig.system.context.fillRect(0, 0, ig.system.realWidth, ig.system.realHeight)
		},
		draw: function() {
			this._drawStatus += (this.status - this._drawStatus) / 5;
			btGame.gameLoading(this._drawStatus);
		},
		drawPaths: function(a, b) {
			var c = ig.system.context;
			c.fillStyle = a;
			for (var d = 0; d < b.length; d += 2) c[ig.ImpactSplashLoader.OPS[b[d]]].apply(c, b[d + 1])
		}
	});
	ig.ImpactSplashLoader.OPS = {
		bp: "beginPath",
		cp: "closePath",
		f: "fill",
		m: "moveTo",
		l: "lineTo",
		bc: "bezierCurveTo"
	};
	ig.ImpactSplashLoader.PATHS_COMET = ["bp", [], "m", [85.1, 58.3], "l", [0, 0], "l", [29.5, 40.4], "l", [16.1, 36.1], "l", [54.6, 91.6], "bc", [65.2, 106.1,
		83.4, 106.7, 93.8, 95.7
	], "bc", [103.9, 84.9, 98.6, 67.6, 85.1, 58.3], "cp", [], "m", [76, 94.3], "bc", [68.5, 94.3, 62.5, 88.2, 62.5, 80.8], "bc", [62.5, 73.3, 68.5, 67.2, 76, 67.2], "bc", [83.5, 67.2, 89.6, 73.3, 89.6, 80.8], "bc", [89.6, 88.2, 83.5, 94.3, 76, 94.3], "cp", [], "f", []];
	ig.ImpactSplashLoader.PATHS_IMPACT = ["bp", [], "m", [128.8, 98.7], "l", [114.3, 98.7], "l", [114.3, 26.3], "l", [128.8, 26.3], "l", [128.8, 98.7], "cp", [], "f", [], "bp", [], "m", [159.2, 70.1], "l", [163.6, 26.3], "l", [184.6, 26.3], "l", [184.6, 98.7], "l", [170.3, 98.7], "l", [170.3, 51.2], "l", [164.8,
			98.7
		], "l", [151.2, 98.7], "l", [145.7, 50.7], "l", [145.7, 98.7], "l", [134.1, 98.7], "l", [134.1, 26.3], "l", [155, 26.3], "l", [159.2, 70.1], "cp", [], "f", [], "bp", [], "m", [204.3, 98.7], "l", [189.8, 98.7], "l", [189.8, 26.3], "l", [211, 26.3], "bc", [220, 26.3, 224.5, 30.7, 224.5, 39.7], "l", [224.5, 60.1], "bc", [224.5, 69.1, 220, 73.6, 211, 73.6], "l", [204.3, 73.6], "l", [204.3, 98.7], "cp", [], "m", [207.4, 38.7], "l", [204.3, 38.7], "l", [204.3, 61.2], "l", [207.4, 61.2], "bc", [209.1, 61.2, 210, 60.3, 210, 58.6], "l", [210, 41.3], "bc", [210, 39.5, 209.1, 38.7, 207.4, 38.7],
		"cp", [], "f", [], "bp", [], "m", [262.7, 98.7], "l", [248.3, 98.7], "l", [247.1, 88.2], "l", [238, 88.2], "l", [237, 98.7], "l", [223.8, 98.7], "l", [233.4, 26.3], "l", [253.1, 26.3], "l", [262.7, 98.7], "cp", [], "m", [239.4, 75.5], "l", [245.9, 75.5], "l", [242.6, 43.9], "l", [239.4, 75.5], "cp", [], "f", [], "bp", [], "m", [300.9, 66.7], "l", [300.9, 85.9], "bc", [300.9, 94.9, 296.4, 99.4, 287.4, 99.4], "l", [278.5, 99.4], "bc", [269.5, 99.4, 265.1, 94.9, 265.1, 85.9], "l", [265.1, 39.1], "bc", [265.1, 30.1, 269.5, 25.6, 278.5, 25.6], "l", [287.2, 25.6], "bc", [296.2, 25.6, 300.7, 30.1,
			300.7, 39.1
		], "l", [300.7, 56.1], "l", [286.4, 56.1], "l", [286.4, 40.7], "bc", [286.4, 38.9, 285.6, 38.1, 283.8, 38.1], "l", [282.1, 38.1], "bc", [280.4, 38.1, 279.5, 38.9, 279.5, 40.7], "l", [279.5, 84.3], "bc", [279.5, 86.1, 280.4, 86.9, 282.1, 86.9], "l", [284, 86.9], "bc", [285.8, 86.9, 286.6, 86.1, 286.6, 84.3], "l", [286.6, 66.7], "l", [300.9, 66.7], "cp", [], "f", [], "bp", [], "m", [312.5, 98.7], "l", [312.5, 39.2], "l", [303.7, 39.2], "l", [303.7, 26.3], "l", [335.8, 26.3], "l", [335.8, 39.2], "l", [327, 39.2], "l", [327, 98.7], "l", [312.5, 98.7], "cp", [], "f", []
	]
});
ig.baked = !0;
ig.module("plugins.tweenlite").defines(function() {
	(window._gsQueue || (window._gsQueue = [])).push(function() {
		_gsDefine("easing.Back", ["easing.Ease"], function(a) {
			var b = window.com.greensock._class,
				c = function(c, d) {
					var u = b("easing." + c, function() {}, !0),
						e = u.prototype = new a;
					e.constructor = u;
					e.getRatio = d;
					return u
				}, d = function(c, d) {
					var u = b("easing." + c, function(a) {
						this._p1 = a || 0 === a ? a : 1.70158;
						this._p2 = 1.525 * this._p1
					}, !0),
						e = u.prototype = new a;
					e.constructor = u;
					e.getRatio = d;
					e.config = function(a) {
						return new u(a)
					};
					return u
				},
				e = d("BackOut", function(a) {
					return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
				}),
				f = d("BackIn", function(a) {
					return a * a * ((this._p1 + 1) * a - this._p1)
				}),
				d = d("BackInOut", function(a) {
					return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
				}),
				I = c("BounceOut", function(a) {
					return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
				}),
				J = c("BounceIn", function(a) {
					return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : a < 2 / 2.75 ? 1 - (7.5625 *
						(a -= 1.5 / 2.75) * a + 0.75) : a < 2.5 / 2.75 ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
				}),
				h = c("BounceInOut", function(a) {
					var b = 0.5 > a;
					a = b ? 1 - 2 * a : 2 * a - 1;
					a = a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
					return b ? 0.5 * (1 - a) : 0.5 * a + 0.5
				}),
				g = c("CircOut", function(a) {
					return Math.sqrt(1 - (a -= 1) * a)
				}),
				k = c("CircIn", function(a) {
					return -(Math.sqrt(1 - a * a) - 1)
				}),
				j = c("CircInOut", function(a) {
					return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 -
						a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
				}),
				l = 2 * Math.PI,
				m = function(c, d, u) {
					var e = b("easing." + c, function(a, b) {
						this._p1 = a || 1;
						this._p2 = b || u;
						this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0)
					}, !0);
					c = e.prototype = new a;
					c.constructor = e;
					c.getRatio = d;
					c.config = function(a, b) {
						return new e(a, b)
					};
					return e
				}, n = m("ElasticOut", function(a) {
					return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * l / this._p2) + 1
				}, 0.3),
				p = m("ElasticIn", function(a) {
					return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * l / this._p2))
				}, 0.3),
				m = m("ElasticInOut",
					function(a) {
						return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * l / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * l / this._p2) + 1
					}, 0.45),
				q = c("ExpoOut", function(a) {
					return 1 - Math.pow(2, -10 * a)
				}),
				r = c("ExpoIn", function(a) {
					return Math.pow(2, 10 * (a - 1)) - 0.001
				}),
				s = c("ExpoInOut", function(a) {
					return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
				}),
				t = Math.PI / 2,
				x = c("SineOut", function(a) {
					return Math.sin(a * t)
				}),
				A = c("SineIn", function(a) {
					return -Math.cos(a * t) +
						1
				}),
				c = c("SineInOut", function(a) {
					return -0.5 * (Math.cos(Math.PI * a) - 1)
				}),
				w = b("easing.SlowMo", function(a, b, c) {
					null == a ? a = 0.7 : 1 < a && (a = 1);
					this._p = 1 != a ? b || 0 === b ? b : 0.7 : 0;
					this._p1 = (1 - a) / 2;
					this._p2 = a;
					this._p3 = this._p1 + this._p2;
					this._calcEnd = !0 === c
				}, !0),
				v = w.prototype = new a;
			v.constructor = w;
			v.getRatio = function(a) {
				var b = a + (0.5 - a) * this._p;
				return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ?
					1 : b
			};
			w.ease = new w(0.7, 0.7);
			v.config = w.config = function(a, b, c) {
				return new w(a, b, c)
			};
			var z = b("easing.SteppedEase", function(a) {
				a = a || 1;
				this._p1 = 1 / a;
				this._p2 = a + 1
			}, !0),
				v = z.prototype = new a;
			v.constructor = z;
			v.getRatio = function(a) {
				0 > a ? a = 0 : 1 <= a && (a = 0.999999999);
				return (this._p2 * a >> 0) * this._p1
			};
			v.config = z.config = function(a) {
				return new z(a)
			};
			b("easing.Bounce", {
				easeOut: new I,
				easeIn: new J,
				easeInOut: new h
			}, !0);
			b("easing.Circ", {
				easeOut: new g,
				easeIn: new k,
				easeInOut: new j
			}, !0);
			b("easing.Elastic", {
				easeOut: new n,
				easeIn: new p,
				easeInOut: new m
			}, !0);
			b("easing.Expo", {
				easeOut: new q,
				easeIn: new r,
				easeInOut: new s
			}, !0);
			b("easing.Sine", {
				easeOut: new x,
				easeIn: new A,
				easeInOut: new c
			}, !0);
			return {
				easeOut: new e,
				easeIn: new f,
				easeInOut: new d
			}
		}, !0)
	});
	window._gsDefine && _gsQueue.pop()();
	var a = window,
		b = function(b) {
			b = b.split(".");
			var c = a,
				d;
			for (d = 0; d < b.length; d++) c[b[d]] = c = c[b[d]] || {};
			return c
		}, c = b("com.greensock"),
		d, f, e, k, l, j = {}, m = function(c, d, u, e) {
			this.sc = j[c] ? j[c].sc : [];
			j[c] = this;
			this.gsClass = null;
			this.def = u;
			var f = d || [],
				E = [];
			this.check = function(d) {
				for (var y =
					f.length, h = 0, g; - 1 < --y;)(g = j[f[y]] || new m(f[y])).gsClass ? E[y] = g.gsClass : (h++, d && g.sc.push(this));
				if (0 === h && u) {
					d = ("com.greensock." + c).split(".");
					var y = d.pop(),
						k = b(d.join("."))[y] = this.gsClass = u.apply(u, E);
					e && ((a.GreenSockGlobals || a)[y] = k, "function" === typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + c.split(".").join("/"), [], function() {
						return k
					}) : "undefined" !== typeof module && module.exports && (module.exports = k));
					for (y = 0; y < this.sc.length; y++) this.sc[y].check(!1)
				}
			};
			this.check(!0)
		},
		g = c._class = function(a, b, c) {
			new m(a, [], function() {
				return b
			}, c);
			return b
		};
	a._gsDefine = function(a, b, c, d) {
		return new m(a, b, c, d)
	};
	var s = [0, 0, 1, 1],
		h = [],
		p = g("easing.Ease", function(a, b, c, d) {
			this._func = a;
			this._type = c || 0;
			this._power = d || 0;
			this._params = b ? s.concat(b) : s
		}, !0);
	e = p.prototype;
	e._calcEnd = !1;
	e.getRatio = function(a) {
		if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
		var b = this._type,
			c = this._power,
			d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
		1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c &&
			(d *= d * d * d * d);
		return 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
	};
	d = ["Linear", "Quad", "Cubic", "Quart", "Quint"];
	for (f = d.length; - 1 < --f;) e = g("easing." + d[f], function() {}, !0), k = g("easing.Power" + f, function() {}, !0), e.easeOut = k.easeOut = new p(null, null, 1, f), e.easeIn = k.easeIn = new p(null, null, 2, f), e.easeInOut = k.easeInOut = new p(null, null, 3, f);
	g("easing.Strong", c.easing.Power4, !0);
	c.easing.Linear.easeNone = c.easing.Linear.easeIn;
	e = g("events.EventDispatcher", function(a) {
		this._listeners = {};
		this._eventTarget = a || this
	}).prototype;
	e.addEventListener = function(a, b, c, d, e) {
		e = e || 0;
		var f = this._listeners[a],
			h = 0,
			g;
		null == f && (this._listeners[a] = f = []);
		for (g = f.length; - 1 < --g;) a = f[g], a.c === b ? f.splice(g, 1) : 0 === h && a.pr < e && (h = g + 1);
		f.splice(h, 0, {
			c: b,
			s: c,
			up: d,
			pr: e
		})
	};
	e.removeEventListener = function(a, b) {
		var c = this._listeners[a];
		if (c)
			for (var d = c.length; - 1 < --d;)
				if (c[d].c === b) {
					c.splice(d, 1);
					break
				}
	};
	e.dispatchEvent = function(a) {
		var b = this._listeners[a];
		if (b)
			for (var c = b.length, d, e = this._eventTarget; - 1 < --c;) d = b[c], d.up ? d.c.call(d.s || e, {
				type: a,
				target: e
			}) :
				d.c.call(d.s || e)
	};
	var t = a.requestAnimationFrame,
		r = a.cancelAnimationFrame,
		x = Date.now || function() {
			return (new Date).getTime()
		};
	d = ["ms", "moz", "webkit", "o"];
	for (f = d.length; - 1 < --f && !t;) t = a[d[f] + "RequestAnimationFrame"], r = a[d[f] + "CancelAnimationFrame"] || a[d[f] + "CancelRequestAnimationFrame"];
	r || (r = function(b) {
		a.clearTimeout(b)
	});
	g("Ticker", function(b, c) {
		this.frame = this.time = 0;
		var d = this,
			e = x(),
			f = !1 !== c,
			h, g, k, l, j;
		this.tick = function() {
			d.time = (x() - e) / 1E3;
			if (!h || d.time >= j) d.frame++, j = d.time + l - (d.time - j) - 5E-4,
			j <= d.time && (j = d.time + 0.001), d.dispatchEvent("tick");
			k = g(d.tick)
		};
		this.fps = function(b) {
			if (!arguments.length) return h;
			h = b;
			l = 1 / (h || 60);
			j = this.time + l;
			g = 0 === h ? function() {} : !f || !t ? function(b) {
				return a.setTimeout(b, 1E3 * (j - d.time) + 1 >> 0 || 1)
			} : t;
			r(k);
			k = g(d.tick)
		};
		this.useRAF = function(a) {
			if (!arguments.length) return f;
			f = a;
			this.fps(h)
		};
		this.fps(b)
	});
	e = c.Ticker.prototype = new c.events.EventDispatcher;
	e.constructor = c.Ticker;
	var q = g("core.Animation", function(a, b) {
		this.vars = b || {};
		this._duration = this._totalDuration =
			a || 0;
		this._delay = Number(this.vars.delay) || 0;
		this._timeScale = 1;
		this._active = !0 == this.vars.immediateRender;
		this.data = this.vars.data;
		this._reversed = !0 == this.vars.reversed;
		if (w) {
			l || (A.tick(), l = !0);
			var c = this.vars.useFrames ? z : w;
			c.insert(this, c._time);
			this.vars.paused && this.paused(!0)
		}
	}),
		A = q.ticker = new c.Ticker;
	e = q.prototype;
	e._dirty = e._gc = e._initted = e._paused = !1;
	e._totalTime = e._time = 0;
	e._rawPrevTime = -1;
	e._next = e._last = e._onUpdate = e._timeline = e.timeline = null;
	e._paused = !1;
	e.play = function(a, b) {
		arguments.length &&
			this.seek(a, b);
		this.reversed(!1);
		return this.paused(!1)
	};
	e.pause = function(a, b) {
		arguments.length && this.seek(a, b);
		return this.paused(!0)
	};
	e.resume = function(a, b) {
		arguments.length && this.seek(a, b);
		return this.paused(!1)
	};
	e.seek = function(a, b) {
		return this.totalTime(Number(a), !1 != b)
	};
	e.restart = function(a, b) {
		this.reversed(!1);
		this.paused(!1);
		return this.totalTime(a ? -this._delay : 0, !1 != b)
	};
	e.reverse = function(a, b) {
		arguments.length && this.seek(a || this.totalDuration(), b);
		this.reversed(!0);
		return this.paused(!1)
	};
	e.render = function() {};
	e.invalidate = function() {
		return this
	};
	e._enabled = function(a, b) {
		this._gc = !a;
		this._active = a && !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration;
		!0 != b && (a && null == this.timeline ? this._timeline.insert(this, this._startTime - this._delay) : !a && null != this.timeline && this._timeline._remove(this, !0));
		return !1
	};
	e._kill = function() {
		return this._enabled(!1, !1)
	};
	e.kill = function(a, b) {
		this._kill(a, b);
		return this
	};
	e._uncache = function(a) {
		for (a = a ? this : this.timeline; a;) a._dirty = !0, a =
			a.timeline;
		return this
	};
	e.eventCallback = function(a, b, c, d) {
		if (null == a) return null;
		if ("on" === a.substr(0, 2)) {
			if (1 === arguments.length) return this.vars[a];
			if (null == b) delete this.vars[a];
			else if (this.vars[a] = b, this.vars[a + "Params"] = c, this.vars[a + "Scope"] = d, c)
				for (var e = c.length; - 1 < --e;) "{self}" === c[e] && (c = this.vars[a + "Params"] = c.concat(), c[e] = this);
			"onUpdate" === a && (this._onUpdate = b)
		}
		return this
	};
	e.delay = function(a) {
		if (!arguments.length) return this._delay;
		this._timeline.smoothChildTiming && this.startTime(this._startTime +
			a - this._delay);
		this._delay = a;
		return this
	};
	e.duration = function(a) {
		if (!arguments.length) return this._dirty = !1, this._duration;
		this._duration = this._totalDuration = a;
		this._uncache(!0);
		this._timeline.smoothChildTiming && this._active && 0 != a && this.totalTime(this._totalTime * (a / this._duration), !0);
		return this
	};
	e.totalDuration = function(a) {
		this._dirty = !1;
		return !arguments.length ? this._totalDuration : this.duration(a)
	};
	e.time = function(a, b) {
		if (!arguments.length) return this._time;
		this._dirty && this.totalDuration();
		a > this._duration &&
			(a = this._duration);
		return this.totalTime(a, b)
	};
	e.totalTime = function(a, b) {
		if (!arguments.length) return this._totalTime;
		if (this._timeline) {
			0 > a && (a += this.totalDuration());
			if (this._timeline.smoothChildTiming && (this._dirty && this.totalDuration(), a > this._totalDuration && (a = this._totalDuration), this._startTime = (this._paused ? this._pauseTime : this._timeline._time) - (!this._reversed ? a : this._totalDuration - a) / this._timeScale, this._timeline._dirty || this._uncache(!1), !this._timeline._active))
				for (var c = this._timeline; c._timeline;) c.totalTime(c._totalTime, !0), c = c._timeline;
			this._gc && this._enabled(!0, !1);
			this._totalTime != a && this.render(a, b, !1)
		}
		return this
	};
	e.startTime = function(a) {
		if (!arguments.length) return this._startTime;
		a != this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.insert(this, a - this._delay));
		return this
	};
	e.timeScale = function(a) {
		if (!arguments.length) return this._timeScale;
		a = a || 1E-6;
		if (this._timeline && this._timeline.smoothChildTiming) {
			var b = this._pauseTime || 0 == this._pauseTime ? this._pauseTime : this._timeline._totalTime;
			this._startTime = b - (b - this._startTime) * this._timeScale / a
		}
		this._timeScale = a;
		return this._uncache(!1)
	};
	e.reversed = function(a) {
		if (!arguments.length) return this._reversed;
		a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0));
		return this
	};
	e.paused = function(a) {
		if (!arguments.length) return this._paused;
		a != this._paused && this._timeline && (!a && this._timeline.smoothChildTiming && (this._startTime += this._timeline.rawTime() - this._pauseTime, this._uncache(!1)), this._pauseTime = a ? this._timeline.rawTime() :
			null, this._paused = a, this._active = !this._paused && 0 < this._totalTime && this._totalTime < this._totalDuration);
		this._gc && (a || this._enabled(!0, !1));
		return this
	};
	c = g("core.SimpleTimeline", function(a) {
		q.call(this, 0, a);
		this.autoRemoveChildren = this.smoothChildTiming = !0
	});
	e = c.prototype = new q;
	e.constructor = c;
	e.kill()._gc = !1;
	e._first = e._last = null;
	e._sortChildren = !1;
	e.insert = function(a, b) {
		a._startTime = Number(b || 0) + a._delay;
		a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale);
		a.timeline && a.timeline._remove(a, !0);
		a.timeline = a._timeline = this;
		a._gc && a._enabled(!0, !0);
		var c = this._last;
		if (this._sortChildren)
			for (var d = a._startTime; c && c._startTime > d;) c = c._prev;
		c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a);
		a._next ? a._next._prev = a : this._last = a;
		a._prev = c;
		this._timeline && this._uncache(!0);
		return this
	};
	e._remove = function(a, b) {
		a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev =
			a._prev : this._last === a && (this._last = a._prev), this._timeline && this._uncache(!0));
		return this
	};
	e.render = function(a, b) {
		var c = this._first,
			d;
		for (this._totalTime = this._time = this._rawPrevTime = a; c;) {
			d = c._next;
			if (c._active || a >= c._startTime && !c._paused) c._reversed ? c.render((!c._dirty ? c._totalDuration : c.totalDuration()) - (a - c._startTime) * c._timeScale, b, !1) : c.render((a - c._startTime) * c._timeScale, b, !1);
			c = d
		}
	};
	e.rawTime = function() {
		return this._totalTime
	};
	var n = g("TweenLite", function(a, b, c) {
		q.call(this, b, c);
		if (null ==
			a) throw "Cannot tween an undefined reference.";
		this.target = a;
		this._overwrite = null == this.vars.overwrite ? F[n.defaultOverwrite] : "number" === typeof this.vars.overwrite ? this.vars.overwrite >> 0 : F[this.vars.overwrite];
		if ((a instanceof Array || a.jquery) && "object" === typeof a[0]) {
			this._targets = a.slice(0);
			this._propLookup = [];
			this._siblings = [];
			for (a = 0; a < this._targets.length; a++) c = this._targets[a], c.jquery ? (this._targets.splice(a--, 1), this._targets = this._targets.concat(c.constructor.makeArray(c))) : (this._siblings[a] =
				B(c, this, !1), 1 === this._overwrite && 1 < this._siblings[a].length && D(c, this, null, 1, this._siblings[a]))
		} else this._propLookup = {}, this._siblings = B(a, this, !1), 1 === this._overwrite && 1 < this._siblings.length && D(a, this, null, 1, this._siblings);
		(this.vars.immediateRender || 0 === b && 0 === this._delay && !1 != this.vars.immediateRender) && this.render(-this._delay, !1, !0)
	}, !0);
	e = n.prototype = new q;
	e.constructor = n;
	e.kill()._gc = !1;
	e.ratio = 0;
	e._firstPT = e._targets = e._overwrittenProps = null;
	e._notifyPluginsOfEnabled = !1;
	n.version = 12;
	n.defaultEase = e._ease = new p(null, null, 1, 1);
	n.defaultOverwrite = "auto";
	n.ticker = A;
	var G = n._plugins = {}, v = n._tweenLookup = {}, K = 0,
		L = {
			ease: 1,
			delay: 1,
			overwrite: 1,
			onComplete: 1,
			onCompleteParams: 1,
			onCompleteScope: 1,
			useFrames: 1,
			runBackwards: 1,
			startAt: 1,
			onUpdate: 1,
			onUpdateParams: 1,
			onUpdateScope: 1,
			onStart: 1,
			onStartParams: 1,
			onStartScope: 1,
			onReverseComplete: 1,
			onReverseCompleteParams: 1,
			onReverseCompleteScope: 1,
			onRepeat: 1,
			onRepeatParams: 1,
			onRepeatScope: 1,
			easeParams: 1,
			yoyo: 1,
			orientToBezier: 1,
			immediateRender: 1,
			repeat: 1,
			repeatDelay: 1,
			data: 1,
			paused: 1,
			reversed: 1
		}, F = {
			none: 0,
			all: 1,
			auto: 2,
			concurrent: 3,
			allOnStart: 4,
			preexisting: 5,
			"true": 1,
			"false": 0
		}, z = q._rootFramesTimeline = new c,
		w = q._rootTimeline = new c;
	w._startTime = A.time;
	z._startTime = A.frame;
	w._active = z._active = !0;
	q._updateRoot = function() {
		w.render((A.time - w._startTime) * w._timeScale, !1, !1);
		z.render((A.frame - z._startTime) * z._timeScale, !1, !1);
		if (!(A.frame % 120)) {
			var a, b, c;
			for (c in v) {
				b = v[c].tweens;
				for (a = b.length; - 1 < --a;) b[a]._gc && b.splice(a, 1);
				0 === b.length && delete v[c]
			}
		}
	};
	A.addEventListener("tick", q._updateRoot);
	var B = function(a, b, c) {
		var d = a._gsTweenID,
			e;
		if (!v[d || (a._gsTweenID = d = "t" + K++)]) v[d] = {
			target: a,
			tweens: []
		};
		if (b && (a = v[d].tweens, a[e = a.length] = b, c))
			for (; - 1 < --e;) a[e] === b && a.splice(e, 1);
		return v[d].tweens
	}, D = function(a, b, c, d, e) {
			var f, h, g;
			if (1 === d || 4 <= d) {
				a = e.length;
				for (f = 0; f < a; f++)
					if ((g = e[f]) !== b) g._gc || g._enabled(!1, !1) && (h = !0);
					else
				if (5 === d) break;
				return h
			}
			var k = b._startTime + 1E-10,
				j = [],
				l = 0,
				m;
			for (f = e.length; - 1 < --f;)
				if (!((g = e[f]) === b || g._gc || g._paused)) g._timeline !==
					b._timeline ? (m = m || H(b, 0), 0 === H(g, m) && (j[l++] = g)) : g._startTime <= k && g._startTime + g.totalDuration() / g._timeScale + 1E-10 > k && ((0 === b._duration || !g._initted) && 2E-10 >= k - g._startTime || (j[l++] = g));
			for (f = l; - 1 < --f;)
				if (g = j[f], 2 === d && g._kill(c, a) && (h = !0), 2 !== d || !g._firstPT && g._initted) g._enabled(!1, !1) && (h = !0);
			return h
		}, H = function(a, b) {
			for (var c = a._timeline, d = c._timeScale, e = a._startTime; c._timeline;) {
				e += c._startTime;
				d *= c._timeScale;
				if (c._paused) return -100;
				c = c._timeline
			}
			e /= d;
			return e > b ? e - b : !a._initted && 2E-10 > e -
				b ? 1E-10 : (e += a.totalDuration() / a._timeScale / d) > b ? 0 : e - b - 1E-10
		};
	e._init = function() {
		this.vars.startAt && (this.vars.startAt.overwrite = 0, this.vars.startAt.immediateRender = !0, n.to(this.target, 0, this.vars.startAt));
		var a, b;
		this._ease = this.vars.ease instanceof p ? this.vars.easeParams instanceof Array ? this.vars.ease.config.apply(this.vars.ease, this.vars.easeParams) : this.vars.ease : "function" === typeof this.vars.ease ? new p(this.vars.ease, this.vars.easeParams) : n.defaultEase;
		this._easeType = this._ease._type;
		this._easePower =
			this._ease._power;
		this._firstPT = null;
		if (this._targets)
			for (a = this._targets.length; - 1 < --a;) {
				if (this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], this._overwrittenProps ? this._overwrittenProps[a] : null)) b = !0
			} else b = this._initProps(this.target, this._propLookup, this._siblings, this._overwrittenProps);
		b && n._onPluginEvent("_onInitAllProps", this);
		this._overwrittenProps && null == this._firstPT && "function" !== typeof this.target && this._enabled(!1, !1);
		if (this.vars.runBackwards)
			for (a = this._firstPT; a;) a.s +=
				a.c, a.c = -a.c, a = a._next;
		this._onUpdate = this.vars.onUpdate;
		this._initted = !0
	};
	e._initProps = function(a, b, c, d) {
		var e, f, g, h, k, j;
		if (null == a) return !1;
		for (e in this.vars) {
			if (L[e]) {
				if ("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e)
					if (k = this.vars[e])
						for (f = k.length; - 1 < --f;) "{self}" === k[f] && (k = this.vars[e] = k.concat(), k[f] = this)
			} else if (G[e] && (h = new G[e])._onInitTween(a, this.vars[e], this)) {
				this._firstPT = j = {
					_next: this._firstPT,
					t: h,
					p: "setRatio",
					s: 0,
					c: 1,
					f: !0,
					n: e,
					pg: !0,
					pr: h._priority
				};
				for (f = h._overwriteProps.length; - 1 < --f;) b[h._overwriteProps[f]] = this._firstPT;
				if (h._priority || h._onInitAllProps) g = !0;
				if (h._onDisable || h._onEnable) this._notifyPluginsOfEnabled = !0
			} else this._firstPT = b[e] = j = {
				_next: this._firstPT,
				t: a,
				p: e,
				f: "function" === typeof a[e],
				n: e,
				pg: !1,
				pr: 0
			}, j.s = !j.f ? parseFloat(a[e]) : a[e.indexOf("set") || "function" !== typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)](), f = this.vars[e], j.c = "number" === typeof f ? f - j.s : "string" === typeof f && "=" === f.charAt(1) ?
				parseInt(f.charAt(0) + "1") * Number(f.substr(2)) : Number(f) || 0;
			j && j._next && (j._next._prev = j)
		}
		return d && this._kill(d, a) ? this._initProps(a, b, c, d) : 1 < this._overwrite && this._firstPT && 1 < c.length && D(a, this, b, this._overwrite, c) ? (this._kill(b, a), this._initProps(a, b, c, d)) : g
	};
	e.render = function(a, b, c) {
		var d = this._time,
			e, f;
		if (a >= this._duration) {
			if (this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, f = "onComplete"), 0 === this._duration) {
				if (0 === a || 0 >
					this._rawPrevTime) this._rawPrevTime !== a && (c = !0);
				this._rawPrevTime = a
			}
		} else if (0 >= a) {
			this._totalTime = this._time = 0;
			this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
			if (0 !== d || 0 === this._duration && 0 < this._rawPrevTime) f = "onReverseComplete", e = this._reversed;
			0 > a ? (this._active = !1, 0 === this._duration && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = a)) : this._initted || (c = !0)
		} else if (this._totalTime = this._time = a, this._easeType) {
			var g = a / this._duration,
				j = this._easeType,
				k = this._easePower;
			if (1 === j || 3 === j && 0.5 <=
				g) g = 1 - g;
			3 === j && (g *= 2);
			1 === k ? g *= g : 2 === k ? g *= g * g : 3 === k ? g *= g * g * g : 4 === k && (g *= g * g * g * g);
			this.ratio = 1 === j ? 1 - g : 2 === j ? g : 0.5 > a / this._duration ? g / 2 : 1 - g / 2
		} else this.ratio = this._ease.getRatio(a / this._duration); if (this._time !== d || c) {
			this._initted || (this._init(), !e && this._time && (this.ratio = this._ease.getRatio(this._time / this._duration)));
			!this._active && !this._paused && (this._active = !0);
			if (0 === d && this.vars.onStart && (0 !== this._time || 0 === this._duration)) b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams ||
				h);
			for (a = this._firstPT; a;) {
				if (a.f) a.t[a.p](a.c * this.ratio + a.s);
				else a.t[a.p] = a.c * this.ratio + a.s;
				a = a._next
			}
			this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h));
			f && !this._gc && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), b || this.vars[f] && this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || h))
		}
	};
	e._kill = function(a, b) {
		"all" === a && (a = null);
		if (null == a && (null == b || b == this.target)) return this._enabled(!1, !1);
		b =
			b || this._targets || this.target;
		var c, d, e, f, g, h, j;
		if ((b instanceof Array || b.jquery) && "object" === typeof b[0])
			for (c = b.length; - 1 < --c;) this._kill(a, b[c]) && (g = !0);
		else {
			if (this._targets)
				for (c = this._targets.length; - 1 < --c;) {
					if (b === this._targets[c]) {
						f = this._propLookup[c] || {};
						this._overwrittenProps = this._overwrittenProps || [];
						d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
						break
					}
				} else {
					if (b !== this.target) return !1;
					f = this._propLookup;
					d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
				} if (f)
					for (e in h =
						a || f, j = a != d && "all" != d && a != f && (null == a || !0 != a._tempKill), h) {
						if (c = f[e]) {
							c.pg && c.t._kill(h) && (g = !0);
							if (!c.pg || 0 === c.t._overwriteProps.length) c._prev ? c._prev._next = c._next : c === this._firstPT && (this._firstPT = c._next), c._next && (c._next._prev = c._prev), c._next = c._prev = null;
							delete f[e]
						}
						j && (d[e] = 1)
					}
		}
		return g
	};
	e.invalidate = function() {
		this._notifyPluginsOfEnabled && n._onPluginEvent("_onDisable", this);
		this._onUpdate = this._overwrittenProps = this._firstPT = null;
		this._initted = this._active = this._notifyPluginsOfEnabled = !1;
		this._propLookup = this._targets ? {} : [];
		return this
	};
	e._enabled = function(a, b) {
		if (a && this._gc)
			if (this._targets)
				for (var c = this._targets.length; - 1 < --c;) this._siblings[c] = B(this._targets[c], this, !0);
			else this._siblings = B(this.target, this, !0);
		q.prototype._enabled.call(this, a, b);
		return this._notifyPluginsOfEnabled && this._firstPT ? n._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
	};
	n.to = function(a, b, c) {
		return new n(a, b, c)
	};
	n.from = function(a, b, c) {
		c.runBackwards = !0;
		!1 != c.immediateRender && (c.immediateRender = !0);
		return new n(a, b, c)
	};
	n.fromTo = function(a, b, c, d) {
		d.startAt = c;
		c.immediateRender && (d.immediateRender = !0);
		return new n(a, b, d)
	};
	n.delayedCall = function(a, b, c, d, e) {
		return new n(b, 0, {
			delay: a,
			onComplete: b,
			onCompleteParams: c,
			onCompleteScope: d,
			onReverseComplete: b,
			onReverseCompleteParams: c,
			onReverseCompleteScope: d,
			immediateRender: !1,
			useFrames: e,
			overwrite: 0
		})
	};
	n.set = function(a, b) {
		return new n(a, 0, b)
	};
	n.killTweensOf = n.killDelayedCallsTo = function(a, b) {
		for (var c = n.getTweensOf(a), d = c.length; - 1 < --d;) c[d]._kill(b,
			a)
	};
	n.getTweensOf = function(a) {
		if (null != a) {
			var b, c, d;
			if ((a instanceof Array || a.jquery) && "object" === typeof a[0]) {
				b = a.length;
				for (c = []; - 1 < --b;) c = c.concat(n.getTweensOf(a[b]));
				for (b = c.length; - 1 < --b;) {
					d = c[b];
					for (a = b; - 1 < --a;) d === c[a] && c.splice(b, 1)
				}
			} else {
				c = B(a).concat();
				for (b = c.length; - 1 < --b;) c[b]._gc && c.splice(b, 1)
			}
			return c
		}
	};
	var C = g("plugins.TweenPlugin", function(a, b) {
		this._overwriteProps = (a || "").split(",");
		this._propName = this._overwriteProps[0];
		this._priority = b || 0
	}, !0);
	e = C.prototype;
	C.version = 12;
	C.API =
		2;
	e._firstPT = null;
	e._addTween = function(a, b, c, d, e, f) {
		var g;
		if (null != d && (g = "number" === typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1") * Number(d.substr(2)))) this._firstPT = a = {
			_next: this._firstPT,
			t: a,
			p: b,
			s: c,
			c: g,
			f: "function" === typeof a[b],
			n: e || b,
			r: f
		}, a._next && (a._next._prev = a)
	};
	e.setRatio = function(a) {
		for (var b = this._firstPT, c; b;) {
			c = b.c * a + b.s;
			b.r && (c = c + (0 < c ? 0.5 : -0.5) >> 0);
			if (b.f) b.t[b.p](c);
			else b.t[b.p] = c;
			b = b._next
		}
	};
	e._kill = function(a) {
		if (null != a[this._propName]) this._overwriteProps = [];
		else
			for (var b = this._overwriteProps.length; - 1 < --b;) null != a[this._overwriteProps[b]] && this._overwriteProps.splice(b, 1);
		for (b = this._firstPT; b;) null != a[b.n] && ((b._next && (b._next._prev = b._prev), b._prev) ? (b._prev._next = b._next, b._prev = null) : this._firstPT === b && (this._firstPT = b._next)), b = b._next;
		return !1
	};
	e._roundProps = function(a, b) {
		for (var c = this._firstPT; c;) {
			if (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) c.r = b;
			c = c._next
		}
	};
	n._onPluginEvent = function(a, b) {
		var c = b._firstPT,
			d;
		if ("_onInitAllProps" ===
			a) {
			for (var e, f, g, h; c;) {
				h = c._next;
				for (e = f; e && e.pr > c.pr;) e = e._next;
				(c._prev = e ? e._prev : g) ? c._prev._next = c : f = c;
				(c._next = e) ? e._prev = c : g = c;
				c = h
			}
			c = b._firstPT = f
		}
		for (; c;) c.pg && "function" === typeof c.t[a] && c.t[a]() && (d = !0), c = c._next;
		return d
	};
	C.activate = function(a) {
		for (var b = a.length; - 1 < --b;) a[b].API === C.API && (n._plugins[(new a[b])._propName] = a[b]);
		return !0
	};
	if (d = a._gsQueue) {
		for (f = 0; f < d.length; f++) d[f]();
		for (e in j) j[e].def || console.log("Warning: TweenLite encountered missing dependency: com.greensock." + e)
	}
});
ig.baked = !0;
ig.module("plugins.packed-textures").defines(function() {
	window.assets = {
		frames: {
			"back1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 350,
					y: 126,
					w: 112,
					h: 40
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 112,
					h: 40
				},
				sourceSize: {
					w: 112,
					h: 40
				}
			},
			"back2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 350,
					y: 86,
					w: 112,
					h: 40
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 112,
					h: 40
				},
				sourceSize: {
					w: 112,
					h: 40
				}
			},
			"blueball.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 396,
					y: 166,
					w: 100,
					h: 100
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 100,
					h: 100
				},
				sourceSize: {
					w: 100,
					h: 100
				}
			},
			"correct2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 470,
					y: 0,
					w: 45,
					h: 45
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 45,
					h: 45
				},
				sourceSize: {
					w: 45,
					h: 45
				}
			},
			"credits1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 450,
					y: 517,
					w: 75,
					h: 29
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 75,
					h: 29
				},
				sourceSize: {
					w: 75,
					h: 29
				}
			},
			"credits2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 396,
					y: 266,
					w: 75,
					h: 29
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 75,
					h: 29
				},
				sourceSize: {
					w: 75,
					h: 29
				}
			},
			"dialog.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 0,
					y: 188,
					w: 250,
					h: 237
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 250,
					h: 237
				},
				sourceSize: {
					w: 250,
					h: 237
				}
			},
			"exit.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 250,
					y: 398,
					w: 30,
					h: 24
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 30,
					h: 24
				},
				sourceSize: {
					w: 30,
					h: 24
				}
			},
			"mainmenu1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 250,
					y: 244,
					w: 146,
					h: 56
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 146,
					h: 56
				},
				sourceSize: {
					w: 146,
					h: 56
				}
			},
			"mainmenu2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 250,
					y: 188,
					w: 146,
					h: 56
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 146,
					h: 56
				},
				sourceSize: {
					w: 146,
					h: 56
				}
			},
			"minus-button.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 478,
					y: 266,
					w: 37,
					h: 69
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 37,
					h: 69
				},
				sourceSize: {
					w: 37,
					h: 69
				}
			},
			"next1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 350,
					y: 0,
					w: 120,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 120,
					h: 43
				},
				sourceSize: {
					w: 120,
					h: 43
				}
			},
			"next2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 350,
					y: 43,
					w: 120,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 120,
					h: 43
				},
				sourceSize: {
					w: 120,
					h: 43
				}
			},
			"no1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 378,
					y: 300,
					w: 100,
					h: 38
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 100,
					h: 38
				},
				sourceSize: {
					w: 100,
					h: 38
				}
			},
			"no2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 376,
					y: 398,
					w: 100,
					h: 38
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 100,
					h: 38
				},
				sourceSize: {
					w: 100,
					h: 38
				}
			},
			"options1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 250,
					y: 300,
					w: 128,
					h: 49
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 128,
					h: 49
				},
				sourceSize: {
					w: 128,
					h: 49
				}
			},
			"options2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 250,
					y: 349,
					w: 128,
					h: 49
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 128,
					h: 49
				},
				sourceSize: {
					w: 128,
					h: 49
				}
			},
			"play1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 450,
					y: 474,
					w: 96,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 96,
					h: 43
				},
				sourceSize: {
					w: 96,
					h: 43
				}
			},
			"play2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 378,
					y: 338,
					w: 96,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 96,
					h: 43
				},
				sourceSize: {
					w: 96,
					h: 43
				}
			},
			"playagain1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 175,
					y: 497,
					w: 175,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 175,
					h: 43
				},
				sourceSize: {
					w: 175,
					h: 43
				}
			},
			"playagain2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 0,
					y: 497,
					w: 175,
					h: 43
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 175,
					h: 43
				},
				sourceSize: {
					w: 175,
					h: 43
				}
			},
			"plus-button.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 476,
					y: 338,
					w: 37,
					h: 69
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 37,
					h: 69
				},
				sourceSize: {
					w: 37,
					h: 69
				}
			},
			"reset1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 188,
					y: 425,
					w: 188,
					h: 71
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 188,
					h: 71
				},
				sourceSize: {
					w: 188,
					h: 71
				}
			},
			"reset2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 0,
					y: 425,
					w: 188,
					h: 72
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 188,
					h: 72
				},
				sourceSize: {
					w: 188,
					h: 72
				}
			},
			"title.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 0,
					y: 0,
					w: 350,
					h: 188
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 350,
					h: 188
				},
				sourceSize: {
					w: 350,
					h: 188
				}
			},
			"logo.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 0,
					y: 0,
					w: 204,
					h: 88
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 204,
					h: 88
				},
				sourceSize: {
					w: 204,
					h: 88
				}
			},
			"wrong.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 462,
					y: 86,
					w: 45,
					h: 45
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 45,
					h: 45
				},
				sourceSize: {
					w: 45,
					h: 45
				}
			},
			"yes1.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 350,
					y: 496,
					w: 100,
					h: 38
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 100,
					h: 38
				},
				sourceSize: {
					w: 100,
					h: 38
				}
			},
			"yes2.png": {
				rotated: !1,
				trimmed: !0,
				frame: {
					x: 376,
					y: 436,
					w: 100,
					h: 38
				},
				spriteSourceSize: {
					x: 0,
					y: 0,
					w: 100,
					h: 38
				},
				sourceSize: {
					w: 100,
					h: 38
				}
			}
		},
		meta: {
			app: "ShoeBox",
			size: {
				w: 546,
				h: 546
			}
		}
	}
});
ig.baked = !0;
ig.module("plugins.texture-atlas").requires("impact.animation", "impact.image", "impact.entity").defines(function() {
	ig.Entity.inject({
		addTextureAtlasAnim: function(a, b, c, d, f, e) {
			if (!a) throw "No texture atlas to add the animation from!";
			if (!b) throw "No name to call the animation!";
			a = new ig.TextureAtlasAnimation(a, c, d, f, e);
			this.anims[b] = a;
			this.currentAnim || (this.currentAnim = a);
			return a
		}
	});
	ig.TextureAtlas = ig.Class.extend({
		image: null,
		packedTexture: null,
		width: 0,
		height: 0,
		init: function(a, b) {
			this.image = a;
			if (null ==
				b) throw "Packed texture is null!";
			this.packedTexture = b;
			this.width = b.meta.size.w;
			this.height = b.meta.size.h
		},
		getFrameData: function(a) {
			for (var b in this.packedTexture.frames)
				if (b == a) return this.packedTexture.frames[b];
			throw "Frame: " + a + " does not exist!";
		}
	});
	ig.TextureAtlasAnimation = ig.Animation.extend({
		textureAtlas: null,
		maintainFrameOffset: !1,
		frameData: 0,
		init: function(a, b, c, d, f) {
			this.textureAtlas = a;
			this.timer = new ig.Timer;
			this.frameTime = b;
			this.sequence = c;
			this.stop = !! d;
			f && (this.maintainFrameOffset = f);
			this.frames = [];
			for (a = 0; a < c.length; a++) this.frames[a] = this.textureAtlas.getFrameData(c[a]);
			this.frameData = this.frames[0]
		},
		rewind: function() {
			this.timer.reset();
			this.loopCount = 0;
			this.frameData = this.frames[0];
			return this
		},
		update: function() {
			var a = Math.floor(this.timer.delta() / this.frameTime);
			this.loopCount = Math.floor(a / this.sequence.length);
			this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : a % this.sequence.length;
			this.frameData = this.frames[this.frame]
		},
		draw: function(a, b) {
			var c = Math.max(this.textureAtlas.width,
				this.textureAtlas.height),
				d = a,
				f = b;
			this.frameData.trimmed && this.maintainFrameOffset && (d += this.frameData.spriteSourceSize.x, f += this.frameData.spriteSourceSize.y);
			if (!(d > ig.system.width || f > ig.system.height || 0 > d + c || 0 > f + c)) {
				1 != this.alpha && (ig.system.context.globalAlpha = this.alpha);
				var c = this.frameData.frame.w / 2,
					e = this.frameData.frame.h / 2;
				ig.system.context.save();
				ig.system.context.translate(ig.system.getDrawPos(d + c), ig.system.getDrawPos(f + e));
				ig.system.context.rotate(this.angle);
				d = this.flip.x ? -1 : 1;
				f = this.flip.y ? -1 : 1;
				(this.flip.x || this.flip.y) && ig.system.context.scale(d, f);
				this.textureAtlas.image.draw(-c, -e, this.frameData.frame.x, this.frameData.frame.y, this.frameData.frame.w, this.frameData.frame.h);
				ig.system.context.restore();
				1 != this.alpha && (ig.system.context.globalAlpha = 1)
			}
		}
	});
	ig.TextureAtlasImage = ig.Image.extend({
		textureAtlas: null,
		frameData: 0,
		maintainFrameOffset: !1,
		init: function(a, b, c) {
			this.textureAtlas = a;
			this.frameData = this.textureAtlas.getFrameData(b);
			c && (this.maintainFrameOffset = c);
			this.width = this.frameData.frame.w;
			this.height = this.frameData.frame.h
		},
		draw: function(a, b) {
			var c = a,
				d = b;
			this.frameData.trimmed && this.maintainFrameOffset && (c += this.frameData.spriteSourceSize.x, d += this.frameData.spriteSourceSize.y);
			this.textureAtlas.image.draw(c, d, this.frameData.frame.x, this.frameData.frame.y, this.frameData.frame.w, this.frameData.frame.h)
		}
	});
	ig.TextureAtlasFont = ig.Font.extend({
		textureAtlas: null,
		frameData: 0,
		maintainFrameOffset: !1,
		init: function(a, b, c) {
			this.textureAtlas = a;
			this.frameData = this.textureAtlas.getFrameData(b);
			c && (this.maintainFrameOffset = c);
			this._loadMetrics()
		},
		_drawChar: function(a, b, c) {
			var d = ig.system.scale,
				f = this.indices[a] * d,
				e = this.widthMap[a] * d,
				d = (this.height - 2) * d;
			b = ig.system.getDrawPos(b);
			c = ig.system.getDrawPos(c);
			this.frameData.trimmed && this.maintainFrameOffset && (b += this.frameData.spriteSourceSize.x, c += this.frameData.spriteSourceSize.y);
			this.textureAtlas.image.draw(b, c, this.frameData.frame.x + f, this.frameData.frame.y + 0, e, d);
			return this.widthMap[a] + this.letterSpacing
		},
		_loadMetrics: function() {
			this.height =
				this.frameData.frame.h - 1;
			this.widthMap = [];
			this.indices = [];
			var a = ig.$new("canvas");
			a.width = this.frameData.frame.w;
			a.height = this.frameData.frame.h;
			a = a.getContext("2d");
			a.drawImage(this.textureAtlas.image.data, this.frameData.frame.x, this.frameData.frame.y, this.frameData.frame.w, this.frameData.frame.h, 0, 0, this.frameData.frame.w, this.frameData.frame.h);
			for (var a = a.getImageData(0, this.frameData.frame.h - 1, this.frameData.frame.w, 1), b = 0, c = 0, d = 0; d < this.frameData.frame.w; d++) {
				var f = 4 * d + 3;
				0 != a.data[f] ? c++ : 0 ==
					a.data[f] && c && (this.widthMap.push(c), this.indices.push(d - c), b++, c = 0)
			}
			this.widthMap.push(c);
			this.indices.push(d - c)
		}
	})
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.font", "plugins.inFocus", "plugins.symbols", "game.entities", "plugins.buttons", "plugins.impact-splash-loader", "plugins.tweenlite", "plugins.packed-textures", "plugins.texture-atlas").defines(function() {
	ig.Game.inject({
		checkEntities: function() {}
	});
	window.MemoryBox = ig.Game.extend({
		font: new ig.Font("media/showcard-26.png"),
		font2: new ig.Font("media/showcard-26-orange.png"),
		font3: new ig.Font("media/showcard-20.png"),
		font4: new ig.Font("media/showcard-64.png"),
		font5: new ig.Font("media/showcard-20-blue.png"),
		font6: new ig.Font("media/showcard-16.png"),
		rows: 3,
		columns: 3,
		offset: 0,
		correctSquaresForThisRound: 3,
		numOfSquares: 0,
		currentCorrectSquares: 0,
		showSquareCounter: 0,
		score: 0,
		totalScore: 0,
		plusColumns: !0,
		chances: 3,
		squareSize: 80,
		finishedTrans: 0,
		circlesPlaced: 0,
		currentBg: 0,
		clearColor: null,
		px: 20,
		py: 20,
		soundCounter: 0,
		soundToggle: !0,
		level: 1,
		maxLevel: 1,
		showSquaresLeft: !0,
		maxScore: localStorage.maxScore || 0,
		scoreResponse: 0,
		backgrounds: new ig.Image("media/bg5-w480.png"),
		assets: new ig.Image("media/assets-compr.png"),
		logo: new ig.Image("media/logo.png"),
		init: function() {
			ig.input.bind(ig.KEY.MOUSE1, "click");
			new ig.Symbols("WIN LOSE GAMEOVER ON TITLESCREEN", [ig.Game]);
			this.atlas1 = new ig.TextureAtlas(this.assets, assets);
			this.atlas2 = new ig.TextureAtlas(this.logo, assets);
			this.btnAnim1 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["play2.png", "play1.png"], !0, !0);
			this.btnAnim2 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["next2.png", "next1.png"], !0, !0);
			this.btnAnim3 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["playagain2.png", "playagain1.png"], !0, !0);
			this.btnAnim4 = new ig.TextureAtlasAnimation(this.atlas1,
				1, ["yes2.png", "yes1.png"], !0, !0);
			this.btnAnim5 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["no2.png", "no1.png"], !0, !0);
			this.btnAnim6 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["options2.png", "options1.png"], !0, !0);
			this.btnAnim7 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["back2.png", "back1.png"], !0, !0);
			this.btnAnim8 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["reset2.png", "reset1.png"], !0, !0);
			this.btnAnim9 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["plus-button.png"], !0, !0);
			this.btnAnim10 = new ig.TextureAtlasAnimation(this.atlas1,
				1, ["minus-button.png"], !0, !0);
			this.btnAnim11 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["mainmenu2.png", "mainmenu1.png"], !0, !0);
			this.btnAnim13 = new ig.TextureAtlasAnimation(this.atlas1, 1, ["exit.png"], !0, !0);
			this.titleScreen = new ig.TextureAtlasImage(this.atlas1, "title.png", !0);
			this.logoScreen = new ig.TextureAtlasImage(this.atlas2, "logo.png", !0);
			this.dialog = new ig.TextureAtlasImage(this.atlas1, "dialog.png", !0);
			this.wrongImg = new ig.TextureAtlasImage(this.atlas1, "wrong.png", !0);
			this.correctImg = new ig.TextureAtlasImage(this.atlas1, "correct2.png", !0);
			this.buttonManager =
				new ButtonManager;
			this.addButtons();
			this.limitBox = 470;
			this.showSquaresTm = new ig.Timer;
			this.waitTm = new ig.Timer;
			this.showCorrectTm = new ig.Timer;
			this.bonusTm = new ig.Timer;
			this.originalColumns = this.columns;
			this.originalRows = this.rows;
			this.originalCorrectSquaresFTR = this.correctSquaresForThisRound;
			ig.ua.mobile && (this.enableSndButton = !1);
			this.loadTitleScreen();
			MemoryBox.initialized = !0;
			this.tile = 780;
			this.adHeight = 0.0983606557377 * ig.system.height;
			var a = this.getGraySquareHUD();
			this.graySquare = new canvasImage(a);
			a = ig.$new("canvas");
			a.width = ig.system.width;
			a.height = ig.system.height;
			var b = a.getContext("2d");
			b.fillStyle = "rgb(0, 0, 0)";
			b.fillRect(0, 0, ig.system.width, ig.system.height);
			this.blackScreen = a
		},
		update: function() {
			this.currentCorrectSquares == this.correctSquaresForThisRound && this.finishedTrans == this.correctSquaresForThisRound && (this.state = ig.Game.WIN);
			this.currentCorrectSquares == this.correctSquaresForThisRound && (ig.game.allowClicks = !1);
			if (this.state == ig.Game.WIN) this.showSquaresLeft = !1, this.state = null,
			this.allowClicks = !1, this.waitTm.set(0.5), this.won = this.toggle2 = !0, this.bonusScore = (100 * Math.abs(this.bonusTm.delta().ceil()).map(0, (5 / 3 * this.correctSquaresForThisRound).round(), 0, 1).round(2) * this.correctSquaresForThisRound).round(), this.score += 100 * this.currentCorrectSquares * this.correctSquaresForThisRound, this.totalScore += 100 * this.currentCorrectSquares * this.correctSquaresForThisRound + this.bonusScore, this.score > this.maxScore && (localStorage.maxScore = this.maxScore = this.totalScore), this.currentCorrectSquares =
				0, this.correctSquaresForThisRound++, this.plusColumns ? (this.columns++, this.plusColumns = !1, this.minusColumns = !0) : (this.rows++, this.plusColumns = !0, this.minusColumns = !1), this.level++, (this.level>this.maxLevel&&(this.maxLevel=this.level));
			else if (this.state == ig.Game.LOSE) {
				this.showSquaresLeft = !1;
				this.state = null;
				this.allowClicks = !1;
				this.waitTm.set(1);
				this.lost = this.toggle2 = !0;
				this.bonusScore = 0;
				this.score += 100 * this.currentCorrectSquares * this.correctSquaresForThisRound;
				this.totalScore += 100 * this.currentCorrectSquares * this.correctSquaresForThisRound;
				this.score >
					this.maxScore && (localStorage.maxScore = this.maxScore = this.totalScore);
				this.currentCorrectSquares = 0;
				this.chances--;
				if (3 < this.rows || 3 < this.columns) this.minusColumns ? (this.columns--, this.minusColumns = !1, this.plusColumns = !0) : (this.rows--, this.minusColumns = !0, this.plusColumns = !1), this.correctSquaresForThisRound--, this.level--;
				for (var a = 0; a < this.randomCorrectSquaresId.length; a++) this.getEntityByName(this.randomCorrectSquaresId[a]).show = !0
			}
			if (0 < this.waitTm.delta() && this.killAll) {
				this.killAll = !1;
				for (var b =
					this.getEntitiesByType("EntitySquare"), a = 0; a < b.length; a++) b[a].kill();
				this.state != ig.Game.GAMEOVER ? this.buttonManager.enableButton("next") : (this.buttonManager.enableButton("playAgain"), this.buttonManager.enableButton("mainMenu"))
			}
			0 < this.waitTm.delta() && this.toggle2 && (this.toggle2 = !1, this.spawnEntity("EntityMask", 0, 0, {
				maskType: "fadeinAndFadeout"
			}));
			if (this.showCorrectSquares && 0 < this.showCorrectTm.delta())
				if (this.showSquareCounter == this.correctSquaresForThisRound && 0 < this.showSquaresTm.delta()) {
					this.showCorrectSquares = !1;
					for (a = this.showSquareCounter = 0; a < this.randomCorrectSquaresId.length; a++) b = this.getEntityByName(this.randomCorrectSquaresId[a]), b.currentSquare = "white", b.displayColor = b.normalColor, b.currentCircle = 2;
					this.allowClicks = !0;
					this.state = ig.Game.ON;
					this.buttonManager.enableButton("exit");
					a = Math.round(5 / 3 * this.correctSquaresForThisRound);
					this.bonusTm.set(a);
					this.toggle3 = !1
				} else 0 < this.showSquaresTm.delta() && (this.showSquareCounter == this.correctSquaresForThisRound - 1 ? this.showSquaresTm.set(0.5 + 0.1 * this.correctSquaresForThisRound) :
					this.showSquaresTm.set(0.25), this.getEntityByName(this.randomCorrectSquaresId[this.showSquareCounter]).show = !0, this.showSquareCounter++);
			this.circlesPlaced == this.totalSquares && this.toggle1 && (this.toggle1 = !1, this.showCorrectSquares = !0, this.showCorrectTm.set(0.25));
			!this.toggle3 && 0 < this.bonusTm.delta() && (this.bonusTm.set(0), this.bonusTm.pause(), this.toggle3 = !0);
			this.parent()
		},
		g: {
			x: 10,
			y: 10
		},
		draw: function() {
			this.drawBackground();
			var a = ig.system.context;
			this.drawHUD && (this.font3.draw("关卡: " + this.level,
				0.052 * ig.system.width, 0.0127 * ig.system.height), this.font3.draw("发现: " + (this.showSquaresLeft ? this.correctSquaresForThisRound - this.currentCorrectSquares : 0), 0.052 * ig.system.width, 0.0581 * ig.system.height), this.font3.draw("奖励: " + Math.abs(this.bonusTm.delta().ceil()), 0.6041 * ig.system.width, 0.0127 * ig.system.height), this.graySquare.draw(0, 0.10655 * ig.system.height));
			this.buttonManager.drawLayer1();
			var b = ig.system.width / 2,
				c = ig.system.height / 2;
			this.showResults && !this.killAll && (this.showFinalResults ?
				(this.font.draw("最后得分: " + this.totalScore, b, 0.34 * ig.system.height, ig.Font.ALIGN.CENTER), this.font2.draw("GAMEOVER", b, 0.2323 * ig.system.height, ig.Font.ALIGN.CENTER), 
					// this.font.draw("Thanks For playing!", b, 0.5454 * ig.system.height, ig.Font.ALIGN.CENTER), 
					function(_this) {
						if(share){
							var shareScore = _this.totalScore
							var shareLevel = _this.maxLevel-1;
							var str =  "我玩【记忆盒子】通过"+(shareLevel).toString()+"关，获得"+(shareScore).toString()+"分，来挑战你的记忆力吧！";
							//alert(str);
							try{parent.__4399finishgame(str);}catch(e){};
							share = false;
						}

						
						/*if (window.hasPlayMsg) {
							var shareScore = _this.totalScore
							,shareLevel = _this.maxLevel-1;
							var shareTitle = "我玩【记忆盒子】通过"+(shareLevel).toString()+"关，获得"+(shareScore).toString()+"分，来挑战你的记忆力吧！"
							btGame.setShare({
								title:shareTitle 
							});
							var scoreMsg = "你真棒，成功通过"+(shareLevel).toString()+"关，获得"+(shareScore).toString()+"分，快去通知下小伙伴吧！"
							btGame.playScoreMsg(scoreMsg);
							window.hasPlayMsg = false;
						}*/
					}(this)) : (window.hasPlayMsg = true, this.font.draw("总分: " + this.score, b, 0.3 * ig.system.height, ig.Font.ALIGN.CENTER), this.font5.draw("奖励分数: " + this.bonusScore, b, 0.3727 * ig.system.height, ig.Font.ALIGN.CENTER), this.font.draw("剩余机会: " + this.chances, b, 0.53 * ig.system.height,
					ig.Font.ALIGN.CENTER)), this.font.draw("历史最佳: " + this.maxScore, b, 0.44 * ig.system.height, ig.Font.ALIGN.CENTER));
					
			this.parent();
			0 > this.waitTm.delta() && this.won ? this.correctImg.draw(b - this.correctImg.width / 2, 0.0181 * ig.system.height) : 0 > this.waitTm.delta() && this.lost && this.wrongImg.draw(b - this.wrongImg.width / 2, 0.0181 * ig.system.height);
			this.state == ig.Game.TITLESCREEN && (
				this.titleScreen.draw(b - this.titleScreen.width / 2, 0.08196 * ig.system.height), 
				this.logoScreen.draw(b - this.logoScreen.width / 2, 0.83 * ig.system.height), 
				this.maxScore && this.font3.draw("历史最佳: " + this.maxScore,
				b, 0.45 * ig.system.height, ig.Font.ALIGN.CENTER));
			this.drawMask && (a.fillStyle = "rgba(0,0,0,0.7)", a.fillRect(0, 0, ig.system.width, ig.system.height));
			this.drawDialog && this.dialog.draw(b - this.dialog.width / 2, c - this.dialog.height / 2);
			this.buttonManager.drawLayer2();
			// this.drawQuitText && this.font3.draw("Do you want\nto quit?", 0.5 * ig.system.width, 0.3636 * ig.system.height, ig.Font.ALIGN.CENTER);
			this.drawQuitText && this.font3.draw("你确定要\n退出YC吗?", 0.5 * ig.system.width, 0.3636 * ig.system.height, ig.Font.ALIGN.CENTER);
			this.drawResponse && this.font3.draw(this.scoreResponse, b, 0.36 * ig.system.height, ig.Font.ALIGN.CENTER);
			this.showOffset && this.font4.draw(this.offset,
				b, 0.2381 * ig.system.height, ig.Font.ALIGN.CENTER);
			// this.showOffsetText && this.font.draw("Distance between\nthe squares", b, 0.1 * ig.system.height, ig.Font.ALIGN.CENTER)
			this.showOffsetText && this.font.draw("", b, 0.1 * ig.system.height, ig.Font.ALIGN.CENTER)
		},
		start: function() {
			// 3 === this.columns ? ig.$("#ad").style.display = "none" : this.plusColumns && (ig.$("#ad").style.display = "none");
			// !this.plusColumns && 3 !== this.columns && (ig.$("#ad").style.display = "block");
			this.bonusTm.set(0);
			this.bonusTm.pause();
			ig.game.drawHUD = !0;
			this.showParticles && this.killParticles();
			this.buttonManager.disableAllButtons();
			this.state =
				null;
			if (this.rows * (this.squareSize + this.offset) > this.limitBox || this.columns * (this.squareSize + this.offset) > this.limitBox) this.squareSize = Math.floor(Math.min((this.limitBox - this.offset * this.rows) / this.rows, (this.limitBox - this.offset * this.columns) / this.columns));
			else
				for (; this.rows * (this.squareSize + this.offset) < this.limitBox || this.columns * (this.squareSize + this.offset) < this.limitBox;) this.squareSize++;
			var a = this.getCircleImageSheet(this.squareSize);
			this.circlesSheet = new canvasImage(a);
			this.numOfSquares =
				0;
			this.showResults = !1;
			this.firstPos = {
				x: 0,
				y: 0
			};
			this.nextPos = {
				x: 0,
				y: 0
			};
			this.firstPos.x = 5 + ((this.limitBox - this.columns * (this.squareSize + this.offset)).round() + this.offset) / 2;
			this.firstPos.y = ig.ua.mobile ? 70 + this.offset / 2 : 70 + ((ig.system.height - 70) / 2 - this.rows * (this.squareSize + this.offset) / 2) + this.offset / 2;
			this.nextPos.x = this.firstPos.x;
			this.nextPos.y = this.firstPos.y;
			for (a = 0; a < this.rows; a++) {
				for (var b = 0; b < this.columns; b++) {
					var c = this.spawnEntity("EntitySquare", this.nextPos.x, this.nextPos.y, {
						size: {
							x: this.squareSize,
							y: this.squareSize
						}
					});
					this.nextPos.x = b == this.columns - 1 ? this.firstPos.x : this.nextPos.x + (c.size.x + this.offset)
				}
				this.nextPos.y += c.size.y + this.offset
			}
			this.totalSquares = this.rows * this.columns;
			this.randomCorrectSquaresId = [];
			for (a = 0; a < this.correctSquaresForThisRound; a++) c = Math.floor(Math.random() * this.totalSquares), this.randomCorrectSquaresId[a] = "s" + c;
			for (; this.repeatedValues(this.randomCorrectSquaresId);) {
				this.randomCorrectSquaresId = [];
				for (a = 0; a < this.correctSquaresForThisRound; a++) c = Math.floor(Math.random() *
					this.totalSquares), this.randomCorrectSquaresId[a] = "s" + c
			}
			for (a = 0; a < this.randomCorrectSquaresId.length; a++) this.getEntityByName(this.randomCorrectSquaresId[a]).isCorrectSquare = !0;
			this.spawnAndPlaceCircles();
			this.circlesPlaced = this.finishedTrans = 0;
			this.toggle1 = !0;
			this.allowClicks = this.won = !1
		},
		repeatedValues: function(a) {
			for (var b = 0, c = 0; c < a.length; c++)
				for (var d = b = 0; d < a.length; d++)
					if (a[d] == a[c] && b++, 2 == b) return !0;
			return !1
		},
		restartSettings: function() {
			this.rows = this.originalRows;
			this.columns = this.originalColumns;
			this.correctSquaresForThisRound = this.originalCorrectSquaresFTR;
			this.showSquareCounter = this.currentCorrectSquares = this.numOfSquares = 0;
			this.showCorrectSquares = !1;
			this.score = 0;
			this.chances = 3;
			this.squareSize = 80;
			this.plusColumns = !0;
			this.minusColumns = null;
			this.showFinalResults = this.showResults = !1;
			this.circlesPlaced = this.finishedTrans = 0;
			this.level = 1
		},
		spawnAndPlaceCircles: function() {
			var a = this.getEntitiesByType("EntitySquare"),
				a = this.shuffle(a);
			this.placingCircles = [];
			for (var b = 2 * Math.PI / this.totalSquares,
					c = 0, d = 250, f = 0; f < a.length; f++) this.placingCircles[f] = this.spawnEntity("EntityPlacingCircle", ig.system.width / 2 + (ig.system.width / 2 + d) * Math.cos(c), ig.system.height / 2 + (ig.system.height / 2 + d) * Math.sin(c), {
				square: a[f]
			}), c += b;
			this.placeIt = "linear";
			if ("linear" == this.placeIt) {
				a = (1 / this.totalSquares).round(3);
				d = 0;
				b = 1 - a;
				for (f = 0; f < this.placingCircles.length; f++) 1 === f && (this.placingCircles[f].name = "jaja"), this.placingCircles[f].delayTime = d, this.placingCircles[f].tweenTime = b, d += a
			}
		},
		shuffle: function(a) {
			for (var b,
					c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
			return a
		},
		drawBackground: function() {
			this.backgrounds.drawTile(0, 0, this.currentBg, 480, this.tile, this.flipX, this.flipY)
		},
		changeBackground: function() {
			this.flipX = 0.5 < Math.random() ? !0 : !1;
			this.flipY = 0.5 < Math.random() ? !0 : !1;
			this.currentBg = Math.floor(5 * Math.random())
		},
		spawnParticles: function(a) {
			for (var b = 0; b < a; b++) this.spawnEntity("EntityParticle", 0, 0);
			this.showParticles = !0
		},
		killParticles: function() {
			for (var a = this.getEntitiesByType("EntityParticle"),
					b = 0; b < a.length; b++) a[b].kill();
			this.showParticles = !1
		},
		exit: function() {
			for (var a = 0; a < this.entities.length; a++) this.entities[a].kill();
			this.showParticles = !1;
			this.buttonManager.disableAllButtons();
			this.allowClicks = !0;
			ig.input.mouse.x = 0;
			ig.input.mouse.y = 0;
			this.drawHUD = !1;
			this.restartSettings();
			this.loadTitleScreen()
		},
		loadTitleScreen: function() {
			this.buttonManager.disableAllButtons();
			this.buttonManager.enableButton("play");
			this.buttonManager.enableButton("options");
			this.state = ig.Game.TITLESCREEN;
			this.showParticles ||
				(!ig.ua.mobile ? this.spawnParticles(20) : ig.ua.android ? null : this.spawnParticles(10))
		},
		getCircleImageSheet: function(a) {
			this.canvas = ig.$new("canvas");
			this.ctx = this.canvas.getContext("2d");
			this.canvas.width = 6 * a;
			this.canvas.height = a;
			var b = Math.floor(15 * a / 80),
				c = Math.floor(45 * a / 80);
			7 == ig.game.level && (c -= 1);
			for (var d = a / 2, f = [{
					r: 16,
					g: 19,
					b: 255
				}, {
					r: 23,
					g: 118,
					b: 206
				}, {
					r: 216,
					g: 216,
					b: 216
				}, {
					r: 250,
					g: 250,
					b: 250
				}, {
					r: 239,
					g: 45,
					b: 45
				}], e = 0; 6 > e; e++) {
				if (5 === e) {
					this.ctx.beginPath();
					this.ctx.strokeStyle = "rgb(120, 120, 120)";
					this.ctx.lineWidth =
						1;
					this.ctx.strokeRect(d - a / 2, 0, a, a);
					this.ctx.closePath();
					break
				}
				this.ctx.beginPath();
				this.ctx.arc(d, a / 2, 0.8 * a / 2, 0, 2 * Math.PI, !1);
				var k = this.ctx.createRadialGradient(d, a / 2, b, d, a / 2, c);
				k.addColorStop(0, "rgb(" + f[e].r + ", " + f[e].g + ", " + f[e].b + ")");
				k.addColorStop(1, "transparent");
				this.ctx.fillStyle = k;
				this.ctx.fill();
				this.ctx.closePath();
				d += a
			}
			return this.canvas
		},
		getGraySquareHUD: function() {
			var a = ig.$new("canvas"),
				b = a.getContext("2d");
			a.width = ig.system.width;
			var c = a.height = (0.0081967 * ig.system.height).round();
			b.fillStyle = "rgba(205, 209, 218, 0.5)";
			b.fillRect(0, 0, ig.system.width, c);
			return a
		},
		addButtons: function() {
			this.buttonManager.addButton({
				name: "play",
				layer: 1,
				anim: this.btnAnim1,
				pos: {
					x: "center",
					y: 0.554 * ig.system.height
				},
				action: function() {
					var a = ig.game;
					a.start();
					a.spawnEntity("EntityMask", 0, 0);
					a.changeBackground();
					a.buttonManager.disableButton("play");
					a.drawContactInfo = !1
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "next",
				layer: 1,
				anim: this.btnAnim2,
				pos: {
					x: "center",
					y: 0.6727 * ig.system.height
				},
				action: function() {
					var a =
						ig.game;
					a.buttonManager.disableButton("next");
					a.spawnEntity("EntityMask", 0, 0);
					a.score = a.totalScore;
					a.drawDialog = !1;
					a.drawMask = !1;
					a.drawQuitText = !1;
					a.start();
					a.changeBackground()
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "playAgain",
				layer: 1,
				anim: this.btnAnim3,
				pos: {
					x: "center",
					y: 0.64977 * ig.system.height
				},
				action: function() {
					var a = ig.game;
					a.restartSettings();
					a.start();
					a.buttonManager.disableButton("playAgain");
					a.spawnEntity("EntityMask", 0, 0)
						share = true;
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "yes",
				layer: 2,
				anim: this.btnAnim4,
				pos: {
					x: 0.275 * ig.system.width,
					y: 0.6 * ig.system.height
				},
				action: function() {
					var a = ig.game;
					a.drawMask = !1;
					a.drawDialog = !1;
					a.drawQuitText = !1;
					a.buttonManager.disableButton("yes");
					a.buttonManager.disableButton("no");
					a.exit()
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "no",
				layer: 2,
				anim: this.btnAnim5,
				pos: {
					x: 0.5145 * ig.system.width,
					y: 0.6 * ig.system.height
				},
				action: function() {
					var a = ig.game;
					a.drawMask = !1;
					a.drawDialog = !1;
					a.drawQuitText = !1;
					a.buttonManager.disableButton("yes");
					a.buttonManager.disableButton("no");
					a.bonusTm.unpause();
					a.allowClicks = !0;
					ig.input.mouse.x = 0;
					ig.input.mouse.y = 0
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "options",
				layer: 2,
				anim: this.btnAnim6,
				pos: {
					x: "center",
					y: 0.6884 * ig.system.height
				},
				action: function() {
					location.href = "http://bbs.82java.com";
					ig.input.mouse.x =
						0;
					ig.input.mouse.y = 0
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "back",
				layer: 2,
				anim: this.btnAnim7,
				pos: {
					x: "center",
					y: 0.7963 * ig.system.height
				},
				action: function() {
					var a = ig.game;
					a.showOffsetText = !1;
					a.showOffset = !1;
					a.loadTitleScreen();
					ig.input.mouse.x = 0;
					ig.input.mouse.y = 0
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "reset",
				layer: 2,
				anim: this.btnAnim8,
				pos: {
					x: "center",
					y: 0.5272 * ig.system.height
				},
				action: function() {
					localStorage.clear();
					ig.game.buttonManager.disableButton("reset");
					ig.game.maxScore =
						0
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "+offset",
				layer: 2,
				anim: this.btnAnim9,
				pos: {
					x: 0.6145 * ig.system.width,
					y: 0.2454 * ig.system.height
				},
				action: function() {
					50 > ig.game.offset && (ig.game.offset += 5)
				}
			});
			this.buttonManager.addButton({
				name: "-offset",
				layer: 2,
				anim: this.btnAnim10,
				pos: {
					x: 0.302 * ig.system.width,
					y: 0.2454 * ig.system.height
				},
				action: function() {
					0 < ig.game.offset && (ig.game.offset -= 5)
				}
			});
			this.buttonManager.addButton({
				name: "mainMenu",
				layer: 1,
				anim: this.btnAnim11,
				pos: {
					x: "center",
					y: 0.76145 * ig.system.height
				},
				action: function() {
					//window.location.href=btGame.URL.getMoreGame();
					try{parent.moregame();}catch(e){};
				},
				hoverable: !0
			});
			this.buttonManager.addButton({
				name: "exit",
				layer: 1,
				anim: this.btnAnim13,
				pos: {
					x: 0.83 * ig.system.width,
					y: 10
				},
				action: function() {
					var a = ig.game;
					a.drawMask = !0;
					a.drawDialog = !0;
					a.drawQuitText = !0;
					a.buttonManager.enableButton("yes");
					a.buttonManager.enableButton("no");
					a.allowClicks = !1;
					a.bonusTm.pause()
				}
			})
		}
	});
	window.canvasImage = ig.Image.extend({
		init: function(a) {
			this.data = a;
			this.width = a.width;
			this.height = a.height;
			this.loaded = !0
		}
	});
	window.MemoryBox.startGame = function() {
		ig.System.drawMode = ig.System.DRAW.SUBPIXEL;
		var a = 610;
		if (ig.ua.mobile) {
			ig.Sound.enabled = !1;
			var b = 480 / (window.innerWidth * ig.ua.pixelRatio),
				a = window.innerHeight * ig.ua.pixelRatio * b;
			ig.internalScale = b * ig.ua.pixelRatio;
			b = ig.$("#canvas");
			b.style.width = Math.floor(window.innerWidth) + "px";
			b.style.height = Math.floor(window.innerHeight) + "px"
		}
		ig.main("#canvas", MemoryBox, 60, 480, a, 1, ig.ImpactSplashLoader)
	};
	window.MemoryBox.isPortrait = !1;
	window.MemoryBox.checkOrientation = function() {
		var a =
			MemoryBox.isPortrait();
		a !== MemoryBox.wasPortrait && ((MemoryBox.wasPortrait = a) ? (ig.$("#canvas").style.display = "block", ig.$("#rotate").style.display = "none", MemoryBox.initialized && MemoryBox.paused ? (ig.system.startRunLoop(), MemoryBox.paused = !1) : MemoryBox.initialized || (window.scrollTo(0, 0), window.setTimeout(MemoryBox.startGame, 1))) : (MemoryBox.initialized && (ig.system.stopRunLoop(), MemoryBox.paused = !0), ig.$("#canvas").style.display = "none", ig.$("#rotate").style.display = "block"))
	};
	window.MemoryBox.wasPortrait = -1;
	window.MemoryBox.isPortrait = function() {
		return !ig.ua.mobile || window.innerHeight > window.innerWidth
	};
	window.addEventListener("orientationchange", MemoryBox.checkOrientation, !1);
	window.addEventListener("resize", MemoryBox.checkOrientation, !1);
	window.MemoryBox.checkOrientation()
});