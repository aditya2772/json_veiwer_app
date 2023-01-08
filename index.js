const inputArea = document.getElementById("inputArea");
jsonData = localStorage.getItem("jsonData");
inputArea.value = jsonData;
//copy function
function copyText() {
  navigator.clipboard.writeText(inputArea.value);
}
//paste function
async function pasteText() {
  const text = await navigator.clipboard.readText();
  localStorage.setItem("jsonData", text);
  inputArea.value = text;
}
//clear function
function clearText() {
  inputArea.value = "";
  localStorage.setItem("jsonData", "");
}
//remove white spaces
function removeSpaces() {
  const text = inputArea.value;
  const noWhitespace = text.replace(/\s/g, "");
  inputArea.value = noWhitespace;
}
//format function
function formatText() {
  const text = inputArea.value;
  let obj;
  let newText;
  try {
    obj = JSON.parse(text);
    newText = JSON.stringify(obj, null, 4);
    inputArea.value = newText;
  } catch (error) {
    alert("data is not in proper json format");
  }
}

//code to get json data from other website
async function loadJsonData() {
  const urlInput = document.getElementById("urlInput");
  await fetch(urlInput.value)
    .then((res) => res.json())
    .then((out) => {
      inputArea.value = JSON.stringify(out);
      localStorage.setItem("jsonData", JSON.stringify(out));
    })
    .catch((error) => {
      alert(error);
    });
}

//code to hide popover which open after click on copy
$(".pop")
  .popover()
  .click(function () {
    setTimeout(function () {
      $(".pop").popover("hide");
    }, 500);
  });
