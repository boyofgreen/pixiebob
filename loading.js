
(function () {
	var webview = document.getElementById('webview');
        var stage = document.getElementById('stage');
        var clearOverlay = document.querySelector(".transparent-overlay");
        var blurOverlay = document.querySelector(".webview-overlay");
        var contentLoaded = false;
        
            webview.addEventListener("MSWebViewNavigationStarting", function(){toggleLoadingScreen(true)});
            // when navigation is complete, remove the loading icon
            webview.addEventListener("MSWebViewNavigationCompleted", function(){toggleLoadingScreen(false)});
            //set to make sure page isn't already loaded
            webview.addEventListener("MSWebViewDOMContentLoaded", webViewLoaded);
            webview.addEventListener("MSWebViewContentLoading", webViewLoaded);
            
        var    webViewLoaded = function () {
                contentLoaded = true;
        };     
            
 /*var  toggleLoadingScreen = function (isLoading) {


      if (isLoading) {
          if (blurOverlay && clearOverlay) {
            if (!self.contentLoaded) {
                clearOverlay.style.display = 'inline';
                blurOverlay.classList.remove("fadeOut");
                if (!clearOverlay.classList.contains("overlay-wp")) {
                    clearOverlay.classList.add("overlay-wp");
                }
            }
          }

          stage.classList.add("loading");
      } else if (stage.classList.contains("loading")) {
          if (blurOverlay && clearOverlay) {
              clearOverlay.style.display = "none";
              blurOverlay.classList.add("fadeOut");
          }

          stage.classList.remove("loading");
      }
  }; */

       var  toggleLoadingScreen =  function (isLoading) {
               console.log('stating loading screen')
               contentLoaded = false;

            if (isLoading) {

                        // use base64 encoded bitmap to improve performance in Windows
                        var capturePreview = webview.capturePreviewToBlobAsync();
                        var blurImage = document.querySelector(".webview-overlay svg image");

                        capturePreview.oncomplete = function (completeEvent) {
                                console.log('capture is complete')
                            var reader = new window.FileReader();
                            reader.readAsDataURL(completeEvent.target.result);
                            reader.onloadend = function () {
                                // skip show blurred previous page if next page was already shown
                                if (!contentLoaded && stage.classList.contains("loading")) {
                                    clearOverlay.style.display = 'inline';

                                    blurImage.setAttribute("xlink:href", reader.result);
                                    blurOverlay.classList.remove("fadeOut");
                                }
                            
                        };
                        capturePreview.start();
                    }


               stage.classList.add("loading");
            } else if (stage.classList.contains("loading")) {
                    if (blurOverlay && clearOverlay) {
                        clearOverlay.style.display = "none";
                        blurOverlay.classList.add("fadeOut");
                    }

                    stage.classList.remove("loading");
            }
       
       };
        
        
        })();