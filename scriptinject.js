(function () {
	
	var pathForJS = '/customscript.txt';
	var webview = document.getElementById('webview');


var injectInWebview = function(jscode){
	
		var asyncOp = webview.invokeScriptAsync("eval", jscode);
	asyncOp.oncomplete = function() {
		console.log("Custom script " + pathForJS + " injected");
	};
	asyncOp.onerror = function(err) {
		console.error("Error during injection of custom script " + pathForJS, err);
	};
	asyncOp.start();
	
};






	webview.addEventListener('MSWebViewDOMContentLoaded', function(){
	
     $.ajax({url: pathForJS, success: function(result){injectInWebview(result) }});
	
});


	
	
	
	
})()