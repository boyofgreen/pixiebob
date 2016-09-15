(function(){

	var webview = document.getElementById('webview');
    var initURL;
    //this is a cheat, probably only real way is to pull it from the manifest
    setTimeout(function(){    initURL = webview.src + "";},1000)


// function to handle the system Navigation Event
function handleSystemNavigationEvent(args) {
    if (webview.canGoBack == false) {
        return;
    }
  
    webview.goBack();
    args.Handled = true;
}

// Initialize the code on Windows load

   //  setNavigationState();
        var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
        systemNavigationManager.addEventListener("backrequested", handleSystemNavigationEvent.bind(this));
		var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();

        
     
     //set up event to show if you can
     
      webview.addEventListener('MSWebViewDOMContentLoaded', function(){
        
    if (webview.canGoBack == true && initURL != webview.src) {
                systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        
    }
    else{
        systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
    }
      });
      
      
      })();