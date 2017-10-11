
function setAudio()
{
	try
	{
		var a = document.createElement('audio');
		if (a)
		{
			write("Audio element support.");

			// Bias toward Web Audio
			write("Set audioContext.");
			g.audioContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
			if (g.audioContext)
			{
				write("Web audio supported.");
				write("Audio context set: " + g.audioContext);
				AUDIO = AUDIO ? true : false;
				if (a.canPlayType && a.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, ''))
				{
					AUDIOFORMAT = "aac";
				}
				if (a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''))
				{
					write("WAV supported.");
					AUDIOFORMAT = "wav";
				}
				if (a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''))
				{
					write("OGG supported.");
					AUDIOFORMAT = "ogg";
				}
				if (a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''))
				{
					write("MP3 supported.");
					AUDIOFORMAT = "mp3";
				}
				write("AudioFormat: " + AUDIOFORMAT);
			}
		} else {
			AUDIO = false;
			write("No HTML5 audio.");
		}
	}
	catch (e)
	{
		AUDIO = false;
		write("setAudio: " + e.message);
	}
};

function setSoundtrack()
{
	try
	{
		if (!AUDIO || !SOUNDTRACK) { return; }
		if (g.musicmode > 0) { 
			var s			= m.audio["titlemusic"];
			if (!s || s.playing) { return; }
			s.source		= g.audioContext.createBufferSource();
			s.gainNode		= g.audioContext.createGainNode();
			s.source.buffer	= s.buffer;
			s.source.loop	= true;
			s.source.connect(s.gainNode);
			s.gainNode.connect(g.audioContext.destination);
			s.gainNode.gain.value = s.volume;
			s.source.noteOn(0);
			s.playing = true;
		}
	}
	catch (e)
	{
		write("SetSoundtrack: " + e.message);
	}
};

function sfx(o)
{
	try
	{
		if (!AUDIO) { return; }
		if (g.pausemode > 0) { return; }
		if (g.audiomode > 0) { 
			var s = m.audio[o];
			var source		= g.audioContext.createBufferSource();
			var gainNode	= g.audioContext.createGainNode();

			source.buffer	= s.buffer;
			source.loop		= false;
			source.connect(gainNode);
			gainNode.connect(g.audioContext.destination);
			gainNode.gain.value = s.volume;
			source.noteOn(0);
		}
	}
	catch (e)
	{
		write("sfx: " + e.message);
	}
};

