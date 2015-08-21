var webview = document.getElementById('webview');




                // var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(
                //     Windows.Web.Http.HttpMethod.get,
                //     new Windows.Foundation.Uri(location));
                // httpRequestMessage.headers.userAgent.tryParseAdd("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
                // WAT.options.webView.navigateWithHttpRequestMessage(httpRequestMessage);
                 
                var currentUri = "http://sp.mapfan.com/";
                webview.addEventListener("MSWebViewNavigationStarting", function (e) {
                    if (currentUri != e.uri) {
                        e.preventDefault();
  
                       if(e.uri) var currentUri = e.uri;
                        var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(
                            Windows.Web.Http.HttpMethod.get,
                            new Windows.Foundation.Uri(e.uri));
                        httpRequestMessage.headers.userAgent.tryParseAdd("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
                        webview.navigateWithHttpRequestMessage(httpRequestMessage);
                        
                    }
                });

//webview.navigate();

  var httpRequestMessage = new Windows.Web.Http.HttpRequestMessage(
                            Windows.Web.Http.HttpMethod.get,
                            new Windows.Foundation.Uri('http://m.bbc.com/weather'));
                        httpRequestMessage.headers.userAgent.tryParseAdd("Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
                        webview.navigateWithHttpRequestMessage(httpRequestMessage);