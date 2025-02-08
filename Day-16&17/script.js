
let bodyElements = document.getElementsByTagName("body");
let buttonElements = document.getElementsByTagName("button");
let body = bodyElements[0];
let button = buttonElements[0];


button.addEventListener("click", () => {
  // Generate random RGB color values
  let red = parseInt(Math.random() * 256);
  let green = parseInt(Math.random() * 256);
  let blue = parseInt(Math.random() * 256);
  

  let color = `rgb(${red}, ${green}, ${blue})`;
  

  body.style.background = color;
});