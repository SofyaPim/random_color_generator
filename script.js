const hexBtn = document.querySelector("#hex-button");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector("#hex-copy");

// create random hex color
function createRandomHexColor() {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";
  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }
  hexColorValue.textContent = `#${hexColorOutput}`;
  console.log(hexColorOutput);
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
}

hexBtn.addEventListener("click", createRandomHexColor);
// create random rgb color
const rgbBtn = document.querySelector("#rgb-button");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");


const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbCopyBtn = document.querySelector("#rgb-copy");

function createRandomRgbColor() {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
}

rgbBtn.addEventListener("click", createRandomRgbColor);

function copyHexColorToClipboard() {   
 console.log('========================================');
 console.log(hexColorValue.textContent);
 console.log('========================================');
 navigator.clipboard.writeText(hexColorValue.textContent);
 alert('hex color is copied to clipbord');
 
}
hexCopyBtn.addEventListener('click', copyHexColorToClipboard);
function copyRgbColorToClipboard() {   
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert('rgb color is copied to clipbord');
}
rgbCopyBtn.addEventListener('click', copyRgbColorToClipboard)
// rgb(82, 90, 111)
// #8D4FA3