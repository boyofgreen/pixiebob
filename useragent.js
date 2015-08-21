

(function(){
  
  
  
var webview = document.getElementById('webview');
                 
var currentUri = "";
webview.addEventListener("MSWebViewNavigationStarting", function (e) {
    if (currentUri != e.uri) {
        e.preventDefault();

        if(e.uri) currentUri = e.uri;
        var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(
            Windows.Web.Http.HttpMethod.get,
            new Windows.Foundation.Uri(e.uri));
        httpRequestMessage.headers.userAgent.tryParseAdd("Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25")
        webview.navigateWithHttpRequestMessage(httpRequestMessage);
        
    }
});

//webview.navigate();

  // var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(
    //                         Windows.Web.Http.HttpMethod.get,
    //                         new Windows.Foundation.Uri('http://m.bbc.com/weather'));
    //                     httpRequestMessage.headers.userAgent.tryParseAdd("Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25")
    //                     webview.navigateWithHttpRequestMessage(httpRequestMessage);
  
  
})();
