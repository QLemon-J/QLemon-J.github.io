var GoogleIMA = {};

GoogleIMA.TAG_URL = "http://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text&client=ca-games-pub-6945782069741964&videoad_start_delay=0&hl=en&max_ad_duration=60000";
GoogleIMA.TAG_URL_DESCRIPTION = "";

GoogleIMA.AD_CONTAINER_WIDTH = 320;
GoogleIMA.AD_CONTAINER_HEIGHT = 320;
GoogleIMA.SHOW_TIMEOUT = 15;

GoogleIMA.isEnabled = true;
GoogleIMA.isActive = false;

GoogleIMA.showOnStart = function()
{
    window.addEventListener("load", GoogleIMA.show);
};

GoogleIMA.show = function()
{
    if(!GoogleIMA.isEnabled) return;
	if(GoogleIMA.isActive) return;
    
    GoogleIMA.isActive = true;
    
    var d = document.createElement("div");
    d.setAttribute("id", "adContainerWrapper");
    d.style.cssText = "display: none; background: rgba(0, 0, 0, 1); position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; width: 100%; height: 100%; text-align: center; z-index: 100000;";
    d.innerHTML = '<div id="adHolder"><div style="color: #fff; font-size: 16px;">Advertisement - will close in <span id="adCloseTimer">0</span> seconds</div><div style="font-size: 16px;"><a id="adCloseButton" href="#" style="color: #aaf; font-size: 16px;">Close</a></div><div id="adContainer" style="width: 320px; height: 320px; margin: auto;"></div></div>';
    document.body.appendChild(d);
    
	document.getElementById('adCloseButton').onclick = GoogleIMA.onAdClosed;
	
    GoogleIMA.adContainerElement = document.getElementById('adContainer');
    GoogleIMA.adDisplayContainer = new google.ima.AdDisplayContainer(GoogleIMA.adContainerElement);
    GoogleIMA.adsLoader = new google.ima.AdsLoader(GoogleIMA.adDisplayContainer);
    
    GoogleIMA.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, GoogleIMA.onAdsManagerLoaded, false);
    GoogleIMA.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, GoogleIMA.onAdError, false);
    
    GoogleIMA.adsRequest = new google.ima.AdsRequest();
    GoogleIMA.adsRequest.adTagUrl = GoogleIMA.TAG_URL + "&description_url=" + GoogleIMA.TAG_URL_DESCRIPTION;
    
    GoogleIMA.adsRequest.linearAdSlotWidth = GoogleIMA.AD_CONTAINER_WIDTH;
    GoogleIMA.adsRequest.linearAdSlotHeight = GoogleIMA.AD_CONTAINER_HEIGHT;
    
    GoogleIMA.adsRequest.nonLinearAdSlotWidth = -1;
    GoogleIMA.adsRequest.nonLinearAdSlotHeight = -1;
    
    GoogleIMA.adsLoader.requestAds(GoogleIMA.adsRequest);
    
    GoogleIMA.adsManager = null;
    GoogleIMA.adTimer = null;
    GoogleIMA.adTimeout = GoogleIMA.SHOW_TIMEOUT + 1;
    
    Utils.addEventListener("fitlayout", GoogleIMA.fitAd);
    Utils.bindEvent(document.body, "touchmove", Utils.preventEvent);
	setTimeout(function()
	{
		document.body.removeEventListener("touchstart", Utils.preventEvent);
	}, 500);
};

GoogleIMA.onAdsManagerLoaded = function(e)
{
    GoogleIMA.adsManager = e.getAdsManager({});
    GoogleIMA.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, GoogleIMA.onAdError);
    GoogleIMA.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, GoogleIMA.onContentPauseRequested);
    GoogleIMA.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, GoogleIMA.onContentResumeRequested);
    GoogleIMA.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, GoogleIMA.onAdClosed);
    
    try
    {
        GoogleIMA.adsManager.init(GoogleIMA.AD_CONTAINER_WIDTH, GoogleIMA.AD_CONTAINER_HEIGHT, google.ima.ViewMode.FULLSCREEN);
        GoogleIMA.adsManager.start();
        
        GoogleIMA.showAdTimeout();
        GoogleIMA.fitAd();
    }
    catch (e)
    {
        GoogleIMA.onAdClosed();
    }
};

GoogleIMA.onAdError = function(e)
{
    GoogleIMA.onAdClosed();
};

GoogleIMA.onContentPauseRequested = function()
{
};

GoogleIMA.onContentResumeRequested = function()
{
};

GoogleIMA.onAdClosed = function(e)
{
    clearTimeout(GoogleIMA.adTimer);
    
    document.body.removeChild(document.getElementById('adContainerWrapper'));
    
    GoogleIMA.adContainerElement = null;
    GoogleIMA.adDisplayContainer = null;
    GoogleIMA.adsLoader = null;
    GoogleIMA.adsRequest = null;
    GoogleIMA.adsManager = null;
    
    Utils.removeEventListener("fitlayout", GoogleIMA.fitAd);
	document.body.removeEventListener("touchmove", Utils.preventEvent);
	Utils.bindEvent(document.body, "touchstart", Utils.preventEvent);
    
    GoogleIMA.isActive = false;
};

GoogleIMA.showAdTimeout = function()
{
    document.getElementById("adContainerWrapper").style.display = "";
    
    GoogleIMA.adTimeout--;
    document.getElementById("adCloseTimer").innerHTML = GoogleIMA.adTimeout;
    
    if(GoogleIMA.adTimeout <= 0) GoogleIMA.onAdClosed();
    else GoogleIMA.adTimer = setTimeout(GoogleIMA.showAdTimeout, 1000);
};

GoogleIMA.applyWendorStyles = function(style, prop, value)
{
    var prefix = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
    
    for(var i=0; i<prefix.length; i++)
    {
        style[prefix[i] + prop] = value;
    }
};

GoogleIMA.fitAd = function()
{
	var r = Utils.getWindowRect();
    var scale = r.height / (GoogleIMA.AD_CONTAINER_HEIGHT + 180);
    if(scale < 1) scale = 1;
	
    var wrapper = document.getElementById('adContainerWrapper');
    var holder = document.getElementById('adHolder');
	
    wrapper.style.paddingTop = ((r.height - document.getElementById('adContainer').offsetHeight)/2) + "px";
	wrapper.style.width = r.width + "px";
	wrapper.style.height = r.height + "px";
    
    GoogleIMA.applyWendorStyles(holder.style, "transform", "scale(" + scale + ", " + scale + ")");
};