
var colorChange = function () {
    let upperColor = document.querySelector('.leftColor').value;
    let downColor = document.querySelector('.rightColor').value;
    let rgbName = document.querySelector('h3');
    document.querySelector('body').style.background = `linear-gradient(${upperColor}, ${downColor})`;
    rgbName.textContent = `background: linear-gradient(${upperColor}, ${downColor});`;

}

document.addEventListener('change', colorChange);
