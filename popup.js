let changeColor = document.getElementById('badgeButton');
let randomText = document.getElementById("randomText");
let schreibWas = document.getElementById("schreibWas");

  chrome.storage.sync.get('text', function({text}) {
    randomText.innerHTML = text;
    chrome.extension.getBackgroundPage().console.log(text);
  });

  changeColor.onclick = function(element) {
    chrome.storage.sync.set({"text" : schreibWas.value});
    randomText.innerHTML = schreibWas.value;
    
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
  };