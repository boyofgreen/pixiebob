


var menu = document.getElementById('mobile-nav');
var newLink = document.createElement('a');
newLink.href = '#';
newLink.innerHTML = '<span class="mobile-nav-icon categories-icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-categories"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-categories" /></svg></span> Pin Page';

menu.appendChild(newLink);

newLink.addEventListener('click', function(){
	
	
	        var path = window.location.href;
        var secondaryTile, selectionRect, squareLogoUri,
          //  options = ((Windows.UI.StartScreen.TileOptions && Windows.UI.StartScreen.TileOptions.none) || 0),
            displayName = document.title;
        squareLogoUri = new Windows.Foundation.Uri('ms-appx:///images/logo.scale-100.png'); 
       
        secondaryTile = new Windows.UI.StartScreen.SecondaryTile(
            "tilePin",
            displayName,
            path,
            squareLogoUri,
            Windows.UI.StartScreen.TileSize.square150x150
        );

        selectionRect = document.getElementById('open-nav').getBoundingClientRect();

        secondaryTile.requestCreateForSelectionAsync(
            {
                x: selectionRect.left,
                y: selectionRect.top,
                width: selectionRect.width,
                height: selectionRect.height
            },
            Windows.UI.Popups.Placement.bottom
        ).done(function(iscreate){console.log(iscreate)});
	
	
});