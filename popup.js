let changeColor = document.getElementById("badgeButton");
let randomText = document.getElementById("randomText");
let schreibWas = document.getElementById("schreibWas");
const test = {};

const tabUrl = chrome.tabs.query(
  { currentWindow: true, active: true },
  async tab => {
    if (!tab[0].url.includes("watch?v=")) return; // out of function when on YouTube but no YouTube video is found

    const data = await fetch("http://localhost:4000/")
      .then(data => data.json())
      .then(data => console.log(data) || data)
      .catch(err => console.log(err));

    test[tab[0].id] = tab[0].url.split("=")[1];
    return tab[0].url.split("=")[1];
  }
);

chrome.storage.sync.get("text", function({ text }) {
  randomText.innerHTML = text;
});

changeColor.onclick = async function(element) {
  chrome.storage.sync.set({ text: schreibWas.value });
  randomText.innerHTML = schreibWas.value;
  const data = await fetch("http://localhost:4000/")
    .then(data => data.json())
    .then(data => console.log(data) || data)
    .catch(err => console.log(err));

  console.log(data);

  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.executeScript(
  //       tabs[0].id,
  //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
  // });
};

console.log(tabUrl);
console.log(test);
