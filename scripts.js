// get first paragraph by ID and add span with text to it
document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

// update images on page by tag name to set width to 250
let images = document.getElementsByTagName("img");
// console.log(images);

for(let img of images){
    img.width = "250";
}

// select the groups of spans by class name and update color
let ltBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of dkBlueSpans){
    span.style.color = "#3C5E73";
}

// select svg icons and change the stroke color on each
let svgs = document.querySelectorAll("#svgs svg");

// array of colors to change the stroke to
let colors = [];