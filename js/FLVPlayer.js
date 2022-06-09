function FLVPlayer(opts) {
    this.videoElement = opts.container;
    this.httpFlvURL = opts.url;
    this.mediaInfo = null;
    this.play = null;
    this.onPlayEvtListener = null;
    this.onPauseEvtListener = null;
    this.onStopEvtListener = null;

    this.play = function()
    {
        console.info("FLV.js play ....")
        if (this.player) return;

        var self = this;
        self.player = new flvjs.createPlayer({
            type                            : 'flv',
            url                             : self.httpFlvURL,
            isLive                          : true,
            enableStashBuffer               : false,
            autoCleanupSourceBuffer         : true,
            autoCleanupMaxBackwardDuration  : 5,
            autoCleanupMinBackwardDuration  : 1,
            stashInitialSize                : 32
        });

        self.player.on('media_info', function()
        {
            console.info("player on.....")
            self.mediaInfo = self.player.mediaInfo;
        });
        
        self.player.on('statistics_info', function()
        {
          //  console.log(arguments);
        });
       
        var autoPlayTimer = null;
        self.videoElement.addEventListener('player', function(e)
        {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
            if (self.onPlayEvtListener) self.onPlayEvtListener(self, e);
        });
        
        
        self.videoElement.addEventListener('dblclick', function()
        {
            if (self.videoElement.requestFullscreen) self.videoElement.requestFullscreen();
        });
       
        
       /**  autoPlayTimer = setInterval(function()
        {
            try { self.player.play(); } catch(e) { clearInterval(autoPlayTimer); };
        });
        */
        self.player.attachMediaElement(self.videoElement);
        self.player.load();
        self.player.play();
    };
    /**全屏 */
    this.fullscreen = function()
    {
        if (this.videoElement && this.videoElement.requestFullscreen)
            this.videoElement.requestFullscreen();
            
    };

    this.onPlay = function()
    {
        console.info("onplay....")
        this.player.onplay();
        //this.onPlayEvtListener = fn;
    };
    /**关闭 */
    this.destroy = function()
    {
        console.info("FLV.js ... destroy")
        this.player.destroy();
    };
    /**暂停 */
    this.pause =function () {
        console.info("FLV.js...pause")
        this.player.pause();
    }
};