function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(async function slideshow() {

    var container = document.getElementById("header_feature1");

    container.style.transform = "translate(200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Steps_Right2.jpg')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Steps_Right3.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Steps_Right4.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Steps_Right1.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "ccenter";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
}, 27000);

// Image 1: https://i.imgur.com/mtcuKPZ.jpg ~~WHITE
// Image 2: https://i.imgur.com/e8cX3ia.jpg ~~WHITE
// Image 3: https://i.imgur.com/eJx2QHh.jpg ~~WHITE
// Image 4: https://i.imgur.com/Alwmx6U.jpg ~~WHITE

// Image 1: https://i.imgur.com/viCcTbb.jpg ~~BLACK
// Image 2: https://i.imgur.com/wLPoNPe.jpg ~~BLACK
// Image 3: https://i.imgur.com/7L123ws.jpg ~~BLACK
// Image 4: https://i.imgur.com/vEopGp2.jpg ~~BLACK

setInterval(async function slideshow2() {

    var container = document.getElementById("header_feature2");

    container.style.transform = "translate(-200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Prevention_Steps2.jpg')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(-200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Prevention_steps3.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(-200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Prevention_Steps4.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "center";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
    await sleep(6000);
    container.style.transform = "translate(-200px, 0px)";
    container.style.opacity = "0";
    container.style.transition = "all 0.5s";
    await sleep(500);
    container.style.backgroundImage = "url('images/Prevention_Steps1.png')";
    container.style.backgroundSize = "contain";
    container.style.backgroundPosition = "ccenter";
    await sleep(500)
    container.style.transform = "translate(0px, 0px)";
    container.style.opacity = "1";
    container.style.transition = "all 0.5s";
}, 27000);