let ip ={
    videoIp1:'http://E3_SERVER_IP:28866/',
    videoIp2:'ws:E3_SERVER_IP:8083/video/histroy',
    FTPvideoIp1:'ws://E3_SERVER_IP:8083/mediaweb/websocket?',
    FTPvideoIp2:'ws://E3_SERVER_IP:8083/mediaweb/websocket?',
    InIp:'ws://E3_SERVER_IP:8083/mediaweb/websocket?terCode=',
    FileAddress:'http://E3_SERVER_IP:8083/ftpdata/',
    videoWebSock:'ws://E3_SERVER_IP:8083/video/media'
}
let adasImageUrl ={
  imageUrl:'http://E3_SERVER_IP/adasfile/',
  alarmSocketUrl: 'ws://E3_SERVER_IP:11111/video/push',  //'wss://v3.exlive.cn/video/push',
  rawDataSocketUrl:'ws://E3_SERVER_IP:8083/video/org'
}
const homeC={
  path:'/homeNormal',
  name:'默认首页',

}
const LOGIN_CONFIG = {
  NOACTIVITYEXIT: 1000 * 60 * 0, //超时未操作自动退出时长，单位毫秒，0表示禁用，启用时设置小于1分钟将按1分钟计算
  VERIFYCODE: 0, //是否开启登录验证码，0表示禁用，1表示开启
  VERIFYTYPE:'blockPuzzle'
}
const TITLE='EXLIVE车联网综合服务平台'
const MicroApp={
  home:`/microApp/home/`,

}