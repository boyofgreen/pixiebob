# pixiebob
This is a Cloud App Toolkit(CAT) for windows 10 hosted apps.  To impliment follow these steps:

### Step 1: 
Update the url in the webview (on default.html) with the url of the targeted web app.

### Step 2:
choose the "features" you want to include in the app by adding or removing js files at the bottom of the default.html page

### Step 3:
Deploy the content of this repo to any web server.  It can be on the domain, or on azure  if you do not deploy this on azure, make sure you update the whitelist_access rules in the manifest.json to match your domain.


## Deploy on Azure  
 [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)  
 
### Step 4:
 Use manifoldjs and point to this new site:
 
 ```html
 > manifoldjs http://pixiebob.azurewebsites.net -p windows
 
 ```
