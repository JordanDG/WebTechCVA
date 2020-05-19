window.addEventListener('scroll', function () {
    div = document.getElementById("information_section1");
    rect = div.getBoundingClientRect();
    information_section1_header = document.getElementById("information_section1_header");
    information_section1_text = document.getElementById("information_section1_text");
    information_section1_image = document.getElementById("information_section1_image")

    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        setTimeout(function () {
            information_section1_header.style.transform = "translateX(-175px)";
            information_section1_header.style.opacity = "1";
            information_section1_text.style.transform = "translateX(0px)";
            information_section1_text.style.opacity = "1";
            information_section1_image.style.transform = "translateX(0px)";
            information_section1_image.style.opacity = "1";
        }, 500);
    } else {}
});

window.addEventListener('scroll', function () {
    div2 = document.getElementById("information_section2");
    rect2 = div2.getBoundingClientRect();
    information_section2_header = document.getElementById("information_section2_header");
    information_section2_text = document.getElementById("information_section2_text");
    information_section2_image = document.getElementById("information_section2_image")

    if (
        rect2.top >= 0 &&
        rect2.left >= 0 &&
        rect2.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        setTimeout(function () {
            information_section2_header.style.transform = "translateX(-175px)";
            information_section2_header.style.opacity = "1";
            information_section2_text.style.transform = "translateX(0px)";
            information_section2_text.style.opacity = "1";
            information_section2_image.style.transform = "translateX(0px)";
            information_section2_image.style.opacity = "1";
        }, 500);
    } else {}
});

window.addEventListener('scroll', function () {
    div3 = document.getElementById("information_section3");
    rect3 = div3.getBoundingClientRect();
    information_section3_header = document.getElementById("information_section3_header");
    information_section3_text = document.getElementById("information_section3_text");
    information_section3_image = document.getElementById("information_section3_image")

    if (
        rect3.top >= 0 &&
        rect3.left >= 0 &&
        rect3.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect3.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        setTimeout(function () {
            information_section3_header.style.transform = "translateX(-175px)";
            information_section3_header.style.opacity = "1";
            information_section3_text.style.transform = "translateX(0px)";
            information_section3_text.style.opacity = "1";
            information_section3_image.style.transform = "translateX(0px)";
            information_section3_image.style.opacity = "1";
        }, 500);
    } else {}
});