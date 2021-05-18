var inputContainer = document.getElementById("inputTxt");
var btnTranslate = document.getElementById("translateBtn");
var outputContainer = document.getElementById("outputDiv");

btnTranslate.addEventListener("click", clickEvent);

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function errorHandler(error) {
    alert("Error: " + error);
}

function clickEvent() {
    var text = inputContainer.value;
    var url = serverURL + "?text=" + text;
    fetch(url)
    .then(Response => Response.json())
    .then(json => {
        outputContainer.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}