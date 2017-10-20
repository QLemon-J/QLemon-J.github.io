//cookie functions
function setCookie( name, value, expires, path, domain, secure ) 
{
var today = new Date();
today.setTime( today.getTime() );

if ( expires )
{
expires = expires * 1000 * 60 * 60 * 24;
}
var expires_date = new Date( today.getTime() + (expires) );

document.cookie = name + "=" +escape( value ) +
( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
( ( path ) ? ";path=" + path : "" ) + 
( ( domain ) ? ";domain=" + domain : "" ) +
( ( secure ) ? ";secure" : "" );
}


function getCookie( name )
{
var c = document.cookie;
var start = c.indexOf( name + "=" );
var len = start + name.length + 1;
if ( !start  &&  name != c.substring( 0, name.length ) ) return null;
if ( start == -1 ) return null;
var end = c.indexOf( ";", len );
if ( end == -1 ) end = c.length;
return unescape( c.substring( len, end ) );
}

function getUnixSeconds() {return Math.round((new Date().getTime() / 1000));}

var eventCapping = {};
var gameEventDebug = true;

function recordGameEvent(eee)
	{
	//link rotation
 	if(eee=='go_home' && premiumGame==0 && typeof exportRoot!='undefined')
		{
		var brandingUrls = ['http://www.girlsplay.com','http://www.girlg.com','http://www.pop.games'];
		var cdev = getCookie('dev');
		if( cdev === null ) cdev = dev;
		if(++cdev>3) cdev=1;
		setCookie('dev',cdev,30,'/');
		exportRoot.globals.mother = brandingUrls[cdev-1];
		}
	else if(eee=='preload_end')
		document.getElementById('spinner').style.display = 'none';
		
	//capping
	if( typeof eventCapping[eee] != "undefined" && getUnixSeconds() - eventCapping[eee] < 5 ) 
		{
		if(gameEventDebug == true) console.log('game events gid:' + gid + ' ' + eee + ' %c[blocked spam]', 'color:red;');
		return;
		}
	eventCapping[eee] = getUnixSeconds();	
	
	if(eee=='preload_1st_quarter' || eee=='preload_2nd_quarter' || eee=='preload_3rd_quarter')
		{
		if(gameEventDebug == true) console.log('game events gid:' + gid + ' ' + eee + ' %c[filtered]', 'color:green;');
		return;
		}
	
	//send event
	ga('send', 'event', 'game_events_' + gid, eee);
	if(gameEventDebug == true) console.log('game events gid:' + gid + ' ' + eee);
	}
	
/*start test
var abTest = false;
var tiny = getCookie('tinytest');
if(getCookie('tinytest')!=0 && getCookie('tinytest')!=1)
	{
	tiny = Math.round(Math.random());
	setCookie('tinytest',tiny,30,'/');
	}
	else{
		abTest = false;
		}
//end test*/

function includeScriptURL(_src)
	{
	var sNew = document.createElement("script");
	sNew.async = false;
	sNew.src = _src;
	document.head.appendChild(sNew);
	//var s0 = document.getElementsByTagName('script')[0];
	//s0.parentNode.insertBefore(sNew, s0);
	}