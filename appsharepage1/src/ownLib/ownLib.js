class OwnLib{
  constructor(){

  }
  //判断手机系统跳转市场
  downApp (){
    //判断浏览器
    function openApp(src) {
    // 通过iframe的方式试图打开APP，如果能正常打开，会直接切换到APP，并自动阻止a标签的默认行为
    // 否则打开a标签的href链接
      let ifr = document.createElement('iframe');
      ifr.src = src;
      ifr.style.display = 'none';
      
      document.body.appendChild(ifr);
      window.setTimeout(function(){
            document.body.removeChild(ifr);
      },5000);
    }
  
    let u = navigator.userAgent;
    if(/MicroMessenger/gi.test(u)) {
      // 引导用户在浏览器中打开
        alert('请在浏览器中打开');
        return;
    }
    let d = new Date();
    let t0 = d.getTime();
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
        //Android
        if(openApp('hohotest://com.jfcx/pathPrefix')){
        openApp('hohotest://com.jfcx/pathPrefix')
        }else{
            //由于打开需要1～2秒，利用这个时间差来处理－－打开app后，返回h5页面会出现页面变成app下载页面，影响用户体验
            let delay = setInterval(function(){
                let d = new Date();
                let t1 = d.getTime();
                if( t1-t0<3000 && t1-t0>2000){
                    window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.jufcx.hurricane";
                }
                if(t1-t0>=3000){
                      clearInterval(delay);
                }
            },1000);
        }
    }else if(u.indexOf('iPhone') > -1){
        //IOS
        // alert(openApp('com.jfcx://'))
        // window.location.href="com.jfcx://"
        if(openApp('com.jfcx://')){  
            openApp('com.jfcx://')
            // window.location.href="com.jfcx://"
        }else{
            let delay = setInterval(function(){
                let d = new Date();
                let t1 = d.getTime();
                if( t1-t0<3000 && t1-t0>2000){
                  // window.location='com.jfcx://'
                  window.location.href = "https://itunes.apple.com/us/app/id1441874018?ls=1&mt=8";
                }
                if(t1-t0>=3000){
                    clearInterval(delay);
                }
            },1000);
        }
    } 
  }
}
export default OwnLib;