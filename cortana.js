

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
        case "foodball":
          redirect = "http://m.bbc.co.uk/sport/tennis/34855581.app";
          break;
        case "cricket":
          redirect = "http://m.bbc.co.uk/sport/cricket/34873689.app";
          break;
		default:
          redirect = "http://m.bbc.co.uk/sport.app";
      }
      webview.navigate(redirect);
		
	}
	
	
  }
	
});