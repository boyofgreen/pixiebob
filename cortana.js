

Windows.UI.WebUI.WebUIApplication.addEventListener('activated', function(args) {
	
	
  if (args.kind === Windows.ApplicationModel.Activation.ActivationKind.voiceCommand) {

    console.log('[WIN10] ... by voice command!');

    var results = args.result;
    var spoken = results.text;
    var command = results.rulePath[0];
    var details;
    var redirect;

    if (command === 'open') {

      details = results.semanticInterpretation.properties.section[0];
      switch (details) {
        case "categories":
          redirect = "https://www.thegreatcoursesplus.com/categories";
          break;
        case "watchlist":
          redirect = "https://www.thegreatcoursesplus.com/user/watchlist";
          break;
		default:
          redirect = "https://www.thegreatcoursesplus.com/sign-in";
      }
      webview.navigate(redirect);
		
	}
	
	
  }
	
});