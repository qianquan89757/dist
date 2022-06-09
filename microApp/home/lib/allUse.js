window.W_W =
window.innerWidth ||
document.documentElement.clientWidth ||
document.body.clientWidth;

 //地图级别设置
 window.AREA_CODE={
    zIndex:4,//地图层级
    arcode:'中国'
}
 //userid
 function getQueryVariable(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
window.USER_ID=getQueryVariable('id');
 // 报警类型颜色配置
 window.COLOR_TYPE = {
    '视频信号丢失报警': '#f5b5ae ',
    '视频信号遮挡报警': '#7fa2d5',
    '存储单元故障报警': '#2c73b7',
    '其他视频设备报警': '#bd84b3',
    '客车超员报警': '#fe5492',
    '异常驾驶行为报警': '#f6c022',
    '特殊报警达到存储阀值报警': '#7b97ad',
    '夜间禁行报警': '#eceda2',
    '翻斗升起报警': '#f5b5ae',
    '非法行驶报警': '#ccedbc',
    '反转报警': '#657798',
    '夜间禁止上高速报警': '#6059f7',
    '伪基站报警': '#563672',
    '防劫报警': '#d3d2f0',
    '紧急报警': '#cfb3f7',
    'GNSS报警': '#9b84f3',
    '终端主电源掉电报警': '#c59148',
    '终端故障报警': '#ed1263',
    '油量信号异常': '#52d8da',
    '当天累计驾驶超时报警': '#b1f5f0',
    '非法点火报警': '#20c6f5',
    '非法位移报警': '#20c6f5',
    '非法开门报警': '#1e91e2',
    '非法拆除、见光报警': '#4a6ec1',
    '震动报警': '#b6dbff',
    '1078终端报警': '#a1a8e5',
    '低温报警': '#b091c3',
    '碰撞预警': '#8e6499',
    '侧翻预警': '#c6c675',
    '危险预警': '#d2d2a8',
    '伪基站报警': '#b075d1',
    '模块发生故障报警': '#a9aaaa',
    '天线未接或被剪断报警': '#e66795',
    '低速报警': '#af28ef',
    '超速报警': '#ff00ff',
    '道路限速超速报警': '#e6ba82',
    '偏离线路报警': '#264a8a',
    '上线报警': '#74cbed',
    '掉线报警': '#4176e2',
    '停车超时报警': '#bbf5dd',
    '疲劳驾驶报警': '#d0d6e0',
    '停车点火报警': '#e96c5b',
    '行驶异常报警': '#f6c022',
    '点火报警': '#4283ee',
    '进区域报警': '#44e7f6',
    '出区域报警': '#fae3a1',
    '出省报警': '#0a1bae',
    '加油报警': '#ee0591',
    '漏油报警': '#254451',
    '原地设防报警': '#7766a4',
    '低油量报警': '#3586d6',
    '围栏内超速报警': '#d4902f',
    '围栏内停车超时报警': '#2c73b7',
    '电瓶拆除报警': '#afc8fa',
    '低电压报警': '#e66795',
    '超温报警': '#a1a8e5',
    '无效定位报警': '#a0a1a1',
    '线路超速报警': '#f43c54',
    '驶入线路报警':'#fac858'
}
