(function () {
	var pathForCSS = '/customcss.css';
	var webview = document.getElementById('webview');

	
	
	
	
	var setupCSSInject = function(result){
              
			var cssString = result.replace(/\r\n/gm, " ");  
            var scriptString = "var cssString = '" + cssString + "';" +
            "var styleEl = document.createElement('style');" +
            "document.body.appendChild(styleEl);" +
            "styleEl.innerHTML = cssString;";  
            
            injectInWebview(scriptString);
                
        };
	


	
	var injectInWebview = function(jscode){
	
		var asyncOp = webview.invokeScriptAsync("eval", jscode);
	asyncOp.oncomplete = function() {
		console.log("Custom script " + pathForCSS + " injected");
	};
	asyncOp.onerror = function(err) {
		console.error("Error during injection of custom script " + pathForCSS, err);
	};
	asyncOp.start();
	
};
        
     webview.addEventListener('MSWebViewDOMContentLoaded', function(){
	
     $.ajax({url: pathForCSS, success: function(result){setupCSSInject(result)}});
	
});

	
})()