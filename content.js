var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('inject.js');
script.setAttribute('data-dynatablelink', chrome.extension.getURL('jquery.dynatable.js'))
script.setAttribute('data-csslink', chrome.extension.getURL('popup.css'))
script.setAttribute('data-filesaverlink',chrome.extension.getURL('filesaver/FileSaver.js'))
script.id = 'AgentlistextensionContentScript'
document.getElementsByTagName('head')[0].appendChild(script);
