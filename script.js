function cookiePolicy() {
    var cookie_background_color = document.getElementById("cookie_background_color")
    var cookie_policy = document.getElementById("cookie_policy")

    cookie_policy.style.visibility = "visible";
    setTimeout(function () {
        cookie_background_color.style.display = "block";
    }, 1000);
    setTimeout(function () {
        cookie_background_color.style.backgroundColor = "#333";
    }, 1250);
    setTimeout(function () {
        cookie_policy.style.opacity = "1";
        cookie_policy.style.transform = "translateY(0px)";
    }, 1500);
}

function animationToggle() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    if (mobile_burger_menu.classList.contains("change")) {
        mobile_burger_menu.classList.remove("change")
        burgerMenuRollaway()
    } else {
        mobile_burger_menu.classList.add("change")
        burgerMenuRollout()
    }
}

function animationToggleContact() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    if (mobile_burger_menu.classList.contains("change")) {
        mobile_burger_menu.classList.remove("change")
        burgerMenuRollawayContact()
    } else {
        mobile_burger_menu.classList.add("change")
        burgerMenuRolloutContact()
    }
}

function animationToggleGallery() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    if (mobile_burger_menu.classList.contains("change")) {
        mobile_burger_menu.classList.remove("change")
        burgerMenuRollawayGallery()
    } else {
        mobile_burger_menu.classList.add("change")
        burgerMenuRolloutGallery()
    }
}

function southWestInfo() {
    var information_section_feature_southwest = document.getElementById("information_section_feature_southwest")
    information_section_feature_southwest.classList.toggle("information_section_feature_southwestVISIBLE")
}

function westMidlandsInfo() {
    var information_section_feature_westmidlands = document.getElementById("information_section_feature_westmidlands")
    information_section_feature_westmidlands.classList.toggle("information_section_feature_westmidlandsVISIBLE")
}

function northWestInfo() {
    var information_section_feature_northwest = document.getElementById("information_section_feature_northwest")
    information_section_feature_northwest.classList.toggle("information_section_feature_northwestVISIBLE")
}

function northEastInfo() {
    var information_section_feature_northeast = document.getElementById("information_section_feature_northeast")
    information_section_feature_northeast.classList.toggle("information_section_feature_northeastVISIBLE")
}

function yorkshireInfo() {
    var information_section_feature_yorkshire = document.getElementById("information_section_feature_yorkshire")
    information_section_feature_yorkshire.classList.toggle("information_section_feature_yorkshireVISIBLE")
}

function eastmidlandsInfo() {
    var information_section_feature_eastmidlands = document.getElementById("information_section_feature_eastmidlands")
    information_section_feature_eastmidlands.classList.toggle("information_section_feature_eastmidlandsVISIBLE")
}

function eastenglandInfo() {
    var information_section_feature_eastengland = document.getElementById("information_section_feature_eastengland")
    information_section_feature_eastengland.classList.toggle("information_section_feature_eastenglandVISIBLE")
}

function londonInfo() {
    var information_section_feature_london = document.getElementById("information_section_feature_london")
    information_section_feature_london.classList.toggle("information_section_feature_londonVISIBLE")
}

function southeastInfo() {
    var information_section_feature_southeast = document.getElementById("information_section_feature_southeast")
    information_section_feature_southeast.classList.toggle("information_section_feature_southeastVISIBLE")
}

function burgerMenuRolloutContact() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1_contact = document.getElementById("mobile_link_1_contact")
    var mobile_link_2_contact = document.getElementById("mobile_link_2_contact")
    var mobile_link_3 = document.getElementById("mobile_link_3")
    var mobile_link_4_contact = document.getElementById("mobile_link_4_contact")
    var header_logo = document.querySelector(".header_logo")
    var header_contact = document.getElementById("header_contact")

    mobile_nav_menu.style.width = "100vw";
    mobile_nav_menu.style.backgroundColor = "#0A56A6";
    mobile_burger_menu.style.color = "#fff";

    setTimeout(function () {
        header_contact.style.height = "100vh";
        mobile_nav_menu.style.height = "100vh";
    }, 500);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 500);
    setTimeout(function () {
        header_logo.src = "images/cvaWHITE.png";
    }, 600);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 600);
    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_4_contact.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_4_contact.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_4_contact.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_2_contact.style.transform = "translateX(0px)";
        mobile_link_2_contact.style.visibility = "visible";
        mobile_link_2_contact.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_1_contact.style.transform = "translateX(0px)";
        mobile_link_1_contact.style.visibility = "visible";
        mobile_link_1_contact.style.color = "#fff";
    }, 800);
}

function burgerMenuRollawayContact() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1_contact = document.getElementById("mobile_link_1_contact")
    var mobile_link_2_contact = document.getElementById("mobile_link_2_contact")
    var mobile_link_3 = document.getElementById("mobile_link_3")
    var mobile_link_4_contact = document.getElementById("mobile_link_4_contact")
    var header_contact = document.getElementById("header_contact")

    setTimeout(function () {
        mobile_link_3.style.transform = "translateX(-200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_3.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_4_contact.style.transform = "translateX(-200px)";
        mobile_link_4_contact.style.visibility = "hidden";
        mobile_link_4_contact.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_3.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_2_contact.style.transform = "translateX(200px)";
        mobile_link_2_contact.style.visibility = "hidden";
        mobile_link_2_contact.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_1_contact.style.transform = "translateX(200px)";
        mobile_link_1_contact.style.visibility = "hidden";
        mobile_link_1_contact.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        header_contact.style.height = "13vh";
        mobile_nav_menu.style.height = "5.3vh";
    }, 300);
    setTimeout(function () {
        mobile_nav_menu.style.width = "0vw";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 800);
    setTimeout(function () {
        header_logo.src = "images/CVA_Logo_Black_Transparent.png";
    }, 900);
    setTimeout(function () {
        mobile_nav_menu.style.backgroundColor = "transparent";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 900);
}

function policyClose() {
    var cookie_background_color = document.getElementById("cookie_background_color")
    var cookie_policy = document.getElementById("cookie_policy")

    cookie_policy.style.opacity = "0";
    cookie_policy.style.transform = "translateY(200px)";
    cookie_policy.style.visibility = "hidden";
    cookiesAccepted = 1;
    setTimeout(function () {
        cookie_background_color.style.backgroundColor = "transparent";
    }, 1000);
    setTimeout(function () {
        cookie_background_color.style.display = "none";
    }, 1500);
}

function contactOpeningToggle() {
    var dummyconstruct = document.getElementById("dummyconstruct")
    var contact_form_top_foldaway_header = document.getElementById("contact_form_top_foldaway_header")
    var contact_form_top_foldaway_text = document.getElementById("contact_form_top_foldaway_text")
    var contact_form_top_foldaway_button = document.getElementById("contact_form_top_foldaway_button")
    var contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")
    var loading_logo_container = document.getElementById("loading_logo_container")

    dummyconstruct.style.display = "none";
    if (contact_form_top_feature_text_container.classList.contains("unlock")) {
        contact_form_top_feature_text_container.classList.remove("unlock")
    } else {
        contact_form_top_feature_text_container.classList.add("unlock")
        setTimeout(function () {
            loading_logo_container.style.opacity = "1";
            loading_logo_container.style.transition = "all 0.5s ease-in-out";
        }, 500);
        contactLogoLoading()
    }
}

function foldaway() {
    var foldaway_left = document.getElementById("foldaway_left")
    var foldaway_right = document.getElementById("foldaway_right")

    foldaway_left.style.borderRight = "2px solid #000"
    foldaway_left.style.transition = "all 0.5s ease-in-out"
    foldaway_right.style.borderLeft = "2px solid #000"
    foldaway_right.style.transition = "all 0.5s ease-in-out"
    setTimeout(function () {
        foldaway_left.style.transform = "translateX(-1050px)"
        foldaway_right.style.transform = "translateX(1050px)"
    }, 1250);
}

function contactLogoLoading() {
    var loading_circle_1 = document.getElementById("loading_circle_1")
    var loading_circle_2 = document.getElementById("loading_circle_2")
    var loading_circle_3 = document.getElementById("loading_circle_3")
    var loading_logo_container = document.getElementById("loading_logo_container")
    var contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")

    setTimeout(function () {
        loading_circle_1.style.backgroundColor = "#000";
        loading_circle_1.style.transition = "all 1s ease-in-out"
    }, 1000);
    setTimeout(function () {
        loading_circle_2.style.backgroundColor = "#000";
        loading_circle_2.style.transition = "all 1s ease-in-out"
    }, 2000);
    setTimeout(function () {
        loading_circle_3.style.backgroundColor = "#000";
        loading_circle_3.style.transition = "all 1s ease-in-out"
    }, 3000);
    setTimeout(function () {
        loading_logo_container.style.opacity = "0";
        loading_logo_container.style.transition = "all 0.5s ease-in-out";
    }, 5000);
    setTimeout(function () {
        loading_logo_container.style.height = "0px";
        loading_logo_container.style.width = "0px";
    }, 5500);
    setTimeout(function () {
        contact_form_top_feature_text_container.style.display = "none";
        foldaway()
    }, 6000);
}

function burgerMenuRolloutGallery() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1 = document.getElementById("mobile_link_1")
    var mobile_link_2 = document.getElementById("mobile_link_2")
    var mobile_link_3_contact = document.getElementById("mobile_link_3_contact")
    var mobile_link_4 = document.getElementById("mobile_link_4")
    var header_logo = document.querySelector(".header_logo")
    var header_gallery = document.getElementById("header_gallery")

    mobile_nav_menu.style.width = "100vw";
    mobile_nav_menu.style.backgroundColor = "#0A56A6";
    mobile_burger_menu.style.color = "#fff";

    setTimeout(function () {
        header_gallery.style.height = "100vh";
        mobile_nav_menu.style.height = "100vh";
    }, 500);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 500);
    setTimeout(function () {
        header_logo.src = "images/cvaWHITE.png";
    }, 600);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 600);
    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_3_contact.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_3_contact.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_3_contact.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_4.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_4.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_4.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(0px)";
        mobile_link_2.style.visibility = "visible";
        mobile_link_2.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(0px)";
        mobile_link_1.style.visibility = "visible";
        mobile_link_1.style.color = "#fff";
    }, 800);
}

function burgerMenuRollawayGallery() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1 = document.getElementById("mobile_link_1")
    var mobile_link_2 = document.getElementById("mobile_link_2")
    var mobile_link_3_contact = document.getElementById("mobile_link_3_contact")
    var mobile_link_4 = document.getElementById("mobile_link_4")
    var header_logo = document.querySelector(".header_logo")
    var header_gallery = document.getElementById("header_gallery")

    mobile_nav_menu.style.width = "100vw";
    mobile_nav_menu.style.backgroundColor = "#0A56A6";
    mobile_burger_menu.style.color = "#fff";

    setTimeout(function () {
        mobile_link_3_contact.style.transform = "translateX(-200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_3_contact.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_4.style.transform = "translateX(-200px)";
        mobile_link_4.style.visibility = "hidden";
        mobile_link_4.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_3_contact.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(200px)";
        mobile_link_2.style.visibility = "hidden";
        mobile_link_2.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(200px)";
        mobile_link_1.style.visibility = "hidden";
        mobile_link_1.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        header_gallery.style.height = "90vh";
        mobile_nav_menu.style.height = "5.3vh";
    }, 300);
    setTimeout(function () {
        mobile_nav_menu.style.width = "0vw";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 800);
    setTimeout(function () {
        header_logo.src = "images/CVA_Logo_Black_Transparent.png";
    }, 900);
    setTimeout(function () {
        mobile_nav_menu.style.backgroundColor = "transparent";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 900);
}

function cancelContactMenu() {
    var foldaway_left = document.getElementById("foldaway_left")
    var foldaway_right = document.getElementById("foldaway_right")
    var contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")
    var loading_logo_container = document.getElementById("loading_logo_container")
    var loading_circle_1 = document.getElementById("loading_circle_1")
    var loading_circle_2 = document.getElementById("loading_circle_2")
    var loading_circle_3 = document.getElementById("loading_circle_3")

    foldaway_left.style.transform = "translateX(0px)"
    foldaway_right.style.transform = "translateX(0px)"
    setTimeout(function () {
        foldaway_left.style.borderRight = "1px solid transparent"
        foldaway_left.style.transition = "all 0.5s ease-in-out"
        foldaway_right.style.borderLeft = "1px solid transparent"
        foldaway_right.style.transition = "all 0.5s ease-in-out"
    }, 1250);
    setTimeout(function () {
        contact_form_top_feature_text_container.classList.remove("unlock")
        loading_logo_container.style.height = "20vh";
        loading_logo_container.style.width = "20vw";
        loading_circle_1.style.backgroundColor = "#fff";
        loading_circle_2.style.backgroundColor = "#fff";
        loading_circle_3.style.backgroundColor = "#fff";
        dummyconstruct.style.display = "block";
        contact_form_top_feature_text_container.style.display = "block";
    }, 2500);
}

function burgerMenuRollout() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1 = document.getElementById("mobile_link_1")
    var mobile_link_2 = document.getElementById("mobile_link_2")
    var mobile_link_3 = document.getElementById("mobile_link_3")
    var mobile_link_4 = document.getElementById("mobile_link_4")
    var header_logo = document.querySelector(".header_logo")
    var header_contact = document.getElementById("header_contact")

    mobile_nav_menu.style.width = "100vw";
    mobile_nav_menu.style.backgroundColor = "#0A56A6";
    mobile_burger_menu.style.color = "#fff";

    mobile_link_3_contact = document.getElementById("mobile_link_3_contact")

    setTimeout(function () {
        mobile_nav_menu.style.height = "100vh";
    }, 500);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 500);
    setTimeout(function () {
        header_logo.src = "images/cvaWHITE.png";
    }, 600);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 600);
    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_1.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_2.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.transform = "translateX(0px)";
        mobile_link_3_contact.style.transform = "translateX(0px)";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.visibility = "visible";
        mobile_link_3_contact.style.visibility = "visisble";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.color = "#fff";
        mobile_link_3_contact.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_4.style.transform = "translateX(0px)";
        mobile_link_4.style.visibility = "visible";
        mobile_link_4.style.color = "#fff";
        mobile_link_4.style.transition = "all 0.5s ease-in-out";
    }, 800);
}

function burgerMenuRollaway() {
    var mobile_burger_menu = document.getElementById("mobile_burger_menu")
    var mobile_nav_menu = document.getElementById("mobile_nav_menu")
    var mobile_link_1 = document.getElementById("mobile_link_1")
    var mobile_link_2 = document.getElementById("mobile_link_2")
    var mobile_link_3 = document.getElementById("mobile_link_3")
    var mobile_link_4 = document.getElementById("mobile_link_4")
    var header_contact = document.getElementById("header_contact")

    setTimeout(function () {
        mobile_link_1.style.transform = "translateX(-200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_1.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_1.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_2.style.transform = "translateX(200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_2.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_2.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_3.style.transform = "translateX(-200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_3.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_3.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_link_4.style.transform = "translateX(200px)";
    }, 100);
    setTimeout(function () {
        mobile_link_4.style.visibility = "hidden";
    }, 100);
    setTimeout(function () {
        mobile_link_4.style.color = "transparent";
    }, 100);
    setTimeout(function () {
        mobile_nav_menu.style.height = "5.3vh";
    }, 300);
    setTimeout(function () {
        mobile_nav_menu.style.width = "0vw";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "hidden";
    }, 800);
    setTimeout(function () {
        header_logo.src = "images/CVA_Logo_Black_Transparent.png";
    }, 900);
    setTimeout(function () {
        mobile_nav_menu.style.backgroundColor = "transparent";
    }, 800);
    setTimeout(function () {
        header_logo.style.visibility = "visible";
    }, 900);
}

function CitySearcher1() {
    // Active Countries //
    var ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;
    var ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    var ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;

    // Form Functionality Variables //
    var CitySearch1 = document.getElementById('CitySearch1').value; // Search Query //
    var CitySearcherSubmit1 = document.getElementById('SubmitButton1'); // Submit button //

    // Form Visibility Variables //
    var CitySeacherForm1 = document.getElementById('CitySearcherForm1'); // Entire Form //

    // New Profile Variables //
    var CitySearcherImage1 = document.getElementById('CitySearcherImage1'); // Featured Image //
    var CitySearcherResult1 = document.getElementById('CitySearcherResult1'); // Entire Div //
    var CitySearcherFacts1 = document.getElementById('CitySearcherFacts1'); // Facts ul //
    var CitySearcherHeader1 = document.getElementById('CitySearcherHeader1'); // Country Name //

    // Facts ul li //
    var CitySearcherFact_1_1 = document.getElementById('CitySearcherFact_1_1'); // Facts //
    var CitySearcherFact2_1_2 = document.getElementById('CitySearcherFact_1_2'); // Facts //
    var CitySearcherFact3_1_3 = document.getElementById('CitySearcherFact_1_3'); // Facts //

    if (CitySearch1 == ActiveCountry2 || CitySearch1 == ActiveCountry3 || CitySearch1 == ActiveCountry4) {
        alert("Information for this country is already being displayed, please try again.")
        CitySearch1.value = "";
    } else if (CitySearch1 == "usa" || CitySearch1 == "america" || CitySearch1 == "us" || CitySearch1 == "north america") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/usa.jpg";
        CitySearcherHeader1.innerHTML = "united states";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in US was on January 19th."
        CitySearcherFact_1_2.innerHTML = "1st most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "Severely under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "uk" || CitySearch3 == "united kingdom" || CitySearch3 == "england") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/london.jpg";
        CitySearcherHeader1.innerHTML = "united kingdom";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in the UK were on January 29th."
        CitySearcherFact_1_2.innerHTML = "6th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "Under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "france" || CitySearch3 == "paris") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/paris.jpg";
        CitySearcherHeader1.innerHTML = "france";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in the UK were on January 24th."
        CitySearcherFact_1_2.innerHTML = "4th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "italy") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/italy.jpg";
        CitySearcherHeader1.innerHTML = "italy";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Italy were on January 20th."
        CitySearcherFact_1_2.innerHTML = "3rd most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "spain") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/spain.jpeg";
        CitySearcherHeader1.innerHTML = "spain";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Spain were on January 24th."
        CitySearcherFact_1_2.innerHTML = "2nd most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "Moderately prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "china") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/china.jpg";
        CitySearcherHeader1.innerHTML = "china";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in china were on December 1st, 2019."
        CitySearcherFact_1_2.innerHTML = "9th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "New Pandemic, under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "germany") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/germany.jpg";
        CitySearcherHeader1.innerHTML = "germany";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Germany were on 27th January."
        CitySearcherFact_1_2.innerHTML = "5th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "Most prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "turkey") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/turkey.jpg";
        CitySearcherHeader1.innerHTML = "Turkey";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Turkey was on 14th of March."
        CitySearcherFact_1_2.innerHTML = "7th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "belgium") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/belgium.jpg";
        CitySearcherHeader1.innerHTML = "belgium";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in belgium were on February 4th."
        CitySearcherFact_1_2.innerHTML = "12th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "brazil") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/brazil.jpg";
        CitySearcherHeader1.innerHTML = "brazil";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Brazil were on February 25th."
        CitySearcherFact_1_2.innerHTML = "11th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "canada") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/canada.jpg";
        CitySearcherHeader1.innerHTML = "canada";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Canada were on January 27th."
        CitySearcherFact_1_2.innerHTML = "13th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "iran") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/iran.jpg";
        CitySearcherHeader1.innerHTML = "iran";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Iran were on February 19th."
        CitySearcherFact_1_2.innerHTML = "8th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "severely under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "netherlands") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/netherlands.jpg";
        CitySearcherHeader1.innerHTML = "netherlands";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in the Netherlands were on February 27th."
        CitySearcherFact_1_2.innerHTML = "14th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "russia") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/russia.jpg";
        CitySearcherHeader1.innerHTML = "russia";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Russia were on January 31st."
        CitySearcherFact_1_2.innerHTML = "10th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "switzerland") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/switzerland.jpg";
        CitySearcherHeader1.innerHTML = "switzerland";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Switzerland were on February 25th."
        CitySearcherFact_1_2.innerHTML = "15th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "india") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/india.jpg";
        CitySearcherHeader1.innerHTML = "india";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in India were on January 30th."
        CitySearcherFact_1_2.innerHTML = "16th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "severely underprepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "portugal") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/portgugal.jpg";
        CitySearcherHeader1.innerHTML = "portugal";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Portugal were on March 2nd."
        CitySearcherFact_1_2.innerHTML = "17th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "equador") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/equador.jpg";
        CitySearcherHeader1.innerHTML = "equador";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Equador were on February 29th."
        CitySearcherFact_1_2.innerHTML = "18th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "peru") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/peru.jpg";
        CitySearcherHeader1.innerHTML = "peru";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Peru were on Marcg 6th."
        CitySearcherFact_1_2.innerHTML = "19th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "moderately prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "ireland") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/ireland.jpg";
        CitySearcherHeader1.innerHTML = "ireland";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Ireland were on February 25th."
        CitySearcherFact_1_2.innerHTML = "20th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "sweden") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/sweden.jpg";
        CitySearcherHeader1.innerHTML = "sweden";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Sweden were on January 31st."
        CitySearcherFact_1_2.innerHTML = "21st most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "saudi arabia") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/saudiarabia.jpeg";
        CitySearcherHeader1.innerHTML = "saudi arabia";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Saudi Arabia were on April 8th."
        CitySearcherFact_1_2.innerHTML = "22nd most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "very prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "austria") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/austria.jpg";
        CitySearcherHeader1.innerHTML = "austria";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Austria were on February 25th."
        CitySearcherFact_1_2.innerHTML = "23rd most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "moderately prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "israel") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/israel.jpg";
        CitySearcherHeader1.innerHTML = "israel";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Israel were on February 21st."
        CitySearcherFact_1_2.innerHTML = "24th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "under-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else if (CitySearch1 == "japan") {
        CitySearcherSubmit1.style.display = "none";
        CitySearcherImage1.src = "images/cities/japan.jpeg";
        CitySearcherHeader1.innerHTML = "japan";
        CitySearcherFact_1_1.innerHTML = "The first confirmed cases in Japan were on January 16th."
        CitySearcherFact_1_2.innerHTML = "25th most infected country in the world."
        CitySearcherFact_1_3.innerHTML = "well-prepared."
        CitySeacherForm1.style.visibility = "hidden";
        CitySearcherResult1.style.visibility = "visible";
    } else {
        alert("Unrecognised country!")
        CitySearch1.value = "";
    }
}

function CitySearcher2() {
    // Active Countries //
    var ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    var ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;
    var ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;

    // Form Functionality Variables //
    var CitySearch2 = document.getElementById('CitySearch2').value; // Search Query //
    var CitySearcherSubmit2 = document.getElementById('SubmitButton2'); // Submit button //

    // Form Visibility Variables //
    var CitySeacherForm2 = document.getElementById('CitySearcherForm2'); // Entire Form //

    // New Profile Variables //
    var CitySearcherImage2 = document.getElementById('CitySearcherImage2'); // Featured Image //
    var CitySearcherResult2 = document.getElementById('CitySearcherResult2'); // Entire Div //
    var CitySearcherFacts2 = document.getElementById('CitySearcherFacts2'); // Facts ul //
    var CitySearcherHeader2 = document.getElementById('CitySearcherHeader2'); // Country Name //

    // Facts ul li //
    var CitySearcherFact_2_1 = document.getElementById('CitySearcherFact_2_1'); // Facts //
    var CitySearcherFact2_2_2 = document.getElementById('CitySearcherFact_2_2'); // Facts //
    var CitySearcherFact3_2_3 = document.getElementById('CitySearcherFact_2_3'); // Facts //

    if (CitySearch2 == ActiveCountry3 || CitySearch2 == ActiveCountry4 || CitySearch2 == ActiveCountry1) {
        alert("Information for this country is already being displayed, please try again.")
        CitySearch2.value = "";
    } else if (CitySearch2 == "usa" || CitySearch2 == "america" || CitySearch2 == "us" || CitySearch2 == "north america") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/usa.jpg";
        CitySearcherHeader2.innerHTML = "united states";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in US was on January 19th."
        CitySearcherFact_2_2.innerHTML = "1st most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "Severely under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "uk" || CitySearch2 == "united kingdom" || CitySearch2 == "england") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/london.jpg";
        CitySearcherHeader2.innerHTML = "united kingdom";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in the UK were on January 29th."
        CitySearcherFact_2_2.innerHTML = "6th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "Under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "france" || CitySearch2 == "paris") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/paris.jpg";
        CitySearcherHeader2.innerHTML = "france";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in the UK were on January 24th."
        CitySearcherFact_2_2.innerHTML = "4th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "italy") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/italy.jpg";
        CitySearcherHeader2.innerHTML = "italy";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Italy were on January 20th."
        CitySearcherFact_2_2.innerHTML = "3rd most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "spain") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/spain.jpeg";
        CitySearcherHeader2.innerHTML = "spain";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Spain were on January 24th."
        CitySearcherFact_2_2.innerHTML = "2nd most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "Moderately prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "china") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/china.jpg";
        CitySearcherHeader2.innerHTML = "china";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in china were on December 1st, 2019."
        CitySearcherFact_2_2.innerHTML = "9th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "New Pandemic, under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "germany") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/germany.jpg";
        CitySearcherHeader2.innerHTML = "germany";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Germany were on 27th January."
        CitySearcherFact_2_2.innerHTML = "5th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "Most prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "turkey") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/turkey.jpg";
        CitySearcherHeader2.innerHTML = "Turkey";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Turkey was on 14th of March."
        CitySearcherFact_2_2.innerHTML = "7th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "belgium") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/belgium.jpg";
        CitySearcherHeader2.innerHTML = "belgium";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on February 4th."
        CitySearcherFact_2_2.innerHTML = "12th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "brazil") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/brazil.jpg";
        CitySearcherHeader2.innerHTML = "brazil";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_2_2.innerHTML = "11th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "canada") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/canada.jpg";
        CitySearcherHeader2.innerHTML = "canada";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on January 27th."
        CitySearcherFact_2_2.innerHTML = "13th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "iran") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/belgium.jpg";
        CitySearcherHeader2.innerHTML = "iran";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on February 19th."
        CitySearcherFact_2_2.innerHTML = "8th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "severely under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "netherlands") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/netherlands.jpg";
        CitySearcherHeader2.innerHTML = "netherlands";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on February 27th."
        CitySearcherFact_2_2.innerHTML = "14th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "russia") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/russia.jpg";
        CitySearcherHeader2.innerHTML = "russia";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on January 31st."
        CitySearcherFact_2_2.innerHTML = "10th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "switzerland") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/switzerland.jpg";
        CitySearcherHeader2.innerHTML = "switzerland";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_2_2.innerHTML = "15th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "india") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/india.jpg";
        CitySearcherHeader2.innerHTML = "india";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in India were on January 30th."
        CitySearcherFact_2_2.innerHTML = "16th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "severely underprepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "portugal") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/portgugal.jpg";
        CitySearcherHeader2.innerHTML = "portugal";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Portugal were on March 2nd."
        CitySearcherFact_2_2.innerHTML = "17th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "equador") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/equador.jpg";
        CitySearcherHeader2.innerHTML = "equador";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Equador were on February 29th."
        CitySearcherFact_2_2.innerHTML = "18th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "peru") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/peru.jpg";
        CitySearcherHeader2.innerHTML = "peru";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Peru were on Marcg 6th."
        CitySearcherFact_2_2.innerHTML = "19th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "moderately prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "ireland") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/ireland.jpg";
        CitySearcherHeader2.innerHTML = "ireland";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Ireland were on February 25th."
        CitySearcherFact_2_2.innerHTML = "20th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "sweden") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/sweden.jpg";
        CitySearcherHeader2.innerHTML = "sweden";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Sweden were on January 31st."
        CitySearcherFact_2_2.innerHTML = "21st most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "saudi arabia") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/saudiarabia.jpeg";
        CitySearcherHeader2.innerHTML = "saudi arabia";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Saudi Arabia were on April 8th."
        CitySearcherFact_2_2.innerHTML = "22nd most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "very prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "austria") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/austria.jpg";
        CitySearcherHeader2.innerHTML = "austria";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Austria were on February 25th."
        CitySearcherFact_2_2.innerHTML = "23rd most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "moderately prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "israel") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/israel.jpg";
        CitySearcherHeader2.innerHTML = "israel";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Israel were on February 21st."
        CitySearcherFact_2_2.innerHTML = "24th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "under-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else if (CitySearch2 == "japan") {
        CitySearcherSubmit2.style.display = "none";
        CitySearcherImage2.src = "images/cities/japan.jpeg";
        CitySearcherHeader2.innerHTML = "japan";
        CitySearcherFact_2_1.innerHTML = "The first confirmed cases in Japan were on January 16th."
        CitySearcherFact_2_2.innerHTML = "25th most infected country in the world."
        CitySearcherFact_2_3.innerHTML = "well-prepared."
        CitySeacherForm2.style.visibility = "hidden";
        CitySearcherResult2.style.visibility = "visible";
    } else {
        alert("Unrecognised country!")
        CitySearch2.value = "";
    }
}

function CitySearcher3() {
    // Active Countries //
    var ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;
    var ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;
    var ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;

    // Form Functionality Variables //
    var CitySearch3 = document.getElementById('CitySearch3').value; // Search Query //
    var CitySearcherSubmit3 = document.getElementById('SubmitButton3'); // Submit button //

    // Form Visibility Variables //
    var CitySeacherForm3 = document.getElementById('CitySearcherForm3'); // Entire Form //

    // New Profile Variables //
    var CitySearcherImage3 = document.getElementById('CitySearcherImage3'); // Featured Image //
    var CitySearcherResult3 = document.getElementById('CitySearcherResult3'); // Entire Div //
    var CitySearcherFacts3 = document.getElementById('CitySearcherFacts3'); // Facts ul //
    var CitySearcherHeader3 = document.getElementById('CitySearcherHeader3'); // Country Name //

    // Facts ul li //
    var CitySearcherFact_3_1 = document.getElementById('CitySearcherFact_3_1'); // Facts //
    var CitySearcherFact2_3_2 = document.getElementById('CitySearcherFact_3_2'); // Facts //
    var CitySearcherFact3_3_3 = document.getElementById('CitySearcherFact_3_3'); // Facts //

    if (CitySearch3 == ActiveCountry4 || CitySearch3 == ActiveCountry1 || CitySearch3 == ActiveCountry2) {
        alert("Information for this country is already being displayed, please try again.")
        CitySearch3.value = "";
    } else if (CitySearch3 == "usa" || CitySearch3 == "america" || CitySearch3 == "us" || CitySearch3 == "north america") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/usa.jpg";
        CitySearcherHeader3.innerHTML = "united states";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in US was on January 19th."
        CitySearcherFact_3_2.innerHTML = "1st most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "Severely under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "uk" || CitySearch3 == "united kingdom" || CitySearch3 == "england") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/london.jpg";
        CitySearcherHeader3.innerHTML = "united kingdom";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in the UK were on January 29th."
        CitySearcherFact_3_2.innerHTML = "6th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "Under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "france" || CitySearch3 == "paris") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/paris.jpg";
        CitySearcherHeader3.innerHTML = "france";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in the UK were on January 24th."
        CitySearcherFact_3_2.innerHTML = "4th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "italy") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/italy.jpg";
        CitySearcherHeader3.innerHTML = "italy";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Italy were on January 20th."
        CitySearcherFact_3_2.innerHTML = "3rd most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "spain") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/spain.jpeg";
        CitySearcherHeader3.innerHTML = "spain";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Spain were on January 24th."
        CitySearcherFact_3_2.innerHTML = "2nd most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "Moderately prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "china") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/china.jpg";
        CitySearcherHeader3.innerHTML = "china";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in china were on December 1st, 2019."
        CitySearcherFact_3_2.innerHTML = "9th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "New Pandemic, under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "germany") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/germany.jpg";
        CitySearcherHeader3.innerHTML = "germany";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Germany were on 27th January."
        CitySearcherFact_3_2.innerHTML = "5th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "Most prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "turkey") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/turkey.jpg";
        CitySearcherHeader3.innerHTML = "Turkey";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Turkey was on 14th of March."
        CitySearcherFact_3_2.innerHTML = "7th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "belgium") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/belgium.jpg";
        CitySearcherHeader3.innerHTML = "belgium";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on February 4th."
        CitySearcherFact_3_2.innerHTML = "12th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "brazil") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/brazil.jpg";
        CitySearcherHeader3.innerHTML = "brazil";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_3_2.innerHTML = "11th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "canada") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/canada.jpg";
        CitySearcherHeader3.innerHTML = "canada";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on January 27th."
        CitySearcherFact_3_2.innerHTML = "13th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "iran") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/belgium.jpg";
        CitySearcherHeader3.innerHTML = "iran";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on February 19th."
        CitySearcherFact_3_2.innerHTML = "8th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "severely under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "netherlands") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/netherlands.jpg";
        CitySearcherHeader3.innerHTML = "netherlands";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on February 27th."
        CitySearcherFact_3_2.innerHTML = "14th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "russia") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/russia.jpg";
        CitySearcherHeader3.innerHTML = "russia";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on January 31st."
        CitySearcherFact_3_2.innerHTML = "10th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "switzerland") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/switzerland.jpg";
        CitySearcherHeader3.innerHTML = "switzerland";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_3_2.innerHTML = "15th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "india") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/india.jpg";
        CitySearcherHeader3.innerHTML = "india";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in India were on January 30th."
        CitySearcherFact_3_2.innerHTML = "16th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "severely underprepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "portugal") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/portgugal.jpg";
        CitySearcherHeader3.innerHTML = "portugal";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Portugal were on March 2nd."
        CitySearcherFact_3_2.innerHTML = "17th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "equador") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/equador.jpg";
        CitySearcherHeader3.innerHTML = "equador";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Equador were on February 29th."
        CitySearcherFact_3_2.innerHTML = "18th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "peru") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/peru.jpg";
        CitySearcherHeader3.innerHTML = "peru";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Peru were on Marcg 6th."
        CitySearcherFact_3_2.innerHTML = "19th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "moderately prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "ireland") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/ireland.jpg";
        CitySearcherHeader3.innerHTML = "ireland";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Ireland were on February 25th."
        CitySearcherFact_3_2.innerHTML = "20th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "sweden") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/sweden.jpg";
        CitySearcherHeader3.innerHTML = "sweden";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Sweden were on January 31st."
        CitySearcherFact_3_2.innerHTML = "21st most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "saudi arabia") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/saudiarabia.jpeg";
        CitySearcherHeader3.innerHTML = "saudi arabia";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Saudi Arabia were on April 8th."
        CitySearcherFact_3_2.innerHTML = "22nd most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "very prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "austria") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/austria.jpg";
        CitySearcherHeader3.innerHTML = "austria";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Austria were on February 25th."
        CitySearcherFact_3_2.innerHTML = "23rd most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "moderately prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "israel") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/israel.jpg";
        CitySearcherHeader3.innerHTML = "israel";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Israel were on February 21st."
        CitySearcherFact_3_2.innerHTML = "24th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "under-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else if (CitySearch3 == "japan") {
        CitySearcherSubmit3.style.display = "none";
        CitySearcherImage3.src = "images/cities/japan.jpeg";
        CitySearcherHeader3.innerHTML = "japan";
        CitySearcherFact_3_1.innerHTML = "The first confirmed cases in Japan were on January 16th."
        CitySearcherFact_3_2.innerHTML = "25th most infected country in the world."
        CitySearcherFact_3_3.innerHTML = "well-prepared."
        CitySeacherForm3.style.visibility = "hidden";
        CitySearcherResult3.style.visibility = "visible";
    } else {
        alert("Unrecognised country!")
        CitySearch3.value = "";
    }
}

function CitySearcher4() {
    // Active Countries //
    var ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;
    var ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    var ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;

    // Form Functionality Variables //
    var CitySearch4 = document.getElementById('CitySearch4').value; // Search Query //
    var CitySearcherSubmit4 = document.getElementById('SubmitButton4'); // Submit button //

    // Form Visibility Variables //
    var CitySeacherForm4 = document.getElementById('CitySearcherForm4'); // Entire Form //

    // New Profile Variables //
    var CitySearcherImage4 = document.getElementById('CitySearcherImage4'); // Featured Image //
    var CitySearcherResult4 = document.getElementById('CitySearcherResult4'); // Entire Div //
    var CitySearcherFacts4 = document.getElementById('CitySearcherFacts4'); // Facts ul //
    var CitySearcherHeader4 = document.getElementById('CitySearcherHeader4'); // Country Name //

    // Facts ul li //
    var CitySearcherFact_4_1 = document.getElementById('CitySearcherFact_4_1'); // Facts //
    var CitySearcherFact2_4_2 = document.getElementById('CitySearcherFact_4_2'); // Facts //
    var CitySearcherFact3_4_3 = document.getElementById('CitySearcherFact_4_3'); // Facts //

    if (CitySearch4 == ActiveCountry2 || CitySearch4 == ActiveCountry3 || CitySearch4 == ActiveCountry1) {
        alert("Information for this country is already being displayed, please try again.")
        CitySearch4.value = "";
    } else if (CitySearch4 == "usa" || CitySearch4 == "america" || CitySearch4 == "us" || CitySearch4 == "north america") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/usa.jpg";
        CitySearcherHeader4.innerHTML = "united states";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in US was on January 19th."
        CitySearcherFact_4_2.innerHTML = "1st most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "Severely under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "uk" || CitySearch4 == "united kingdom" || CitySearch4 == "england") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/london.jpg";
        CitySearcherHeader4.innerHTML = "united kingdom";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in the UK were on January 29th."
        CitySearcherFact_4_2.innerHTML = "6th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "Under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "france" || CitySearch4 == "paris") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/paris.jpg";
        CitySearcherHeader4.innerHTML = "france";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in the UK were on January 24th."
        CitySearcherFact_4_2.innerHTML = "4th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "italy") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/italy.jpg";
        CitySearcherHeader4.innerHTML = "italy";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Italy were on January 20th."
        CitySearcherFact_4_2.innerHTML = "3rd most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "spain") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/spain.jpeg";
        CitySearcherHeader4.innerHTML = "spain";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Spain were on January 24th."
        CitySearcherFact_4_2.innerHTML = "2nd most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "Moderately prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "china") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/china.jpg";
        CitySearcherHeader4.innerHTML = "china";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in china were on December 1st, 2019."
        CitySearcherFact_4_2.innerHTML = "9th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "New Pandemic, under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "germany") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/germany.jpg";
        CitySearcherHeader4.innerHTML = "germany";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Germany were on 27th January."
        CitySearcherFact_4_2.innerHTML = "5th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "Most prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "turkey") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/turkey.jpg";
        CitySearcherHeader4.innerHTML = "Turkey";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Turkey was on 14th of March."
        CitySearcherFact_4_2.innerHTML = "7th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "belgium") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/belgium.jpg";
        CitySearcherHeader4.innerHTML = "belgium";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on February 4th."
        CitySearcherFact_4_2.innerHTML = "12th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "brazil") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/brazil.jpg";
        CitySearcherHeader4.innerHTML = "brazil";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_4_2.innerHTML = "11th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "canada") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/canada.jpg";
        CitySearcherHeader4.innerHTML = "canada";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on January 27th."
        CitySearcherFact_4_2.innerHTML = "13th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "iran") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/belgium.jpg";
        CitySearcherHeader4.innerHTML = "iran";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on February 19th."
        CitySearcherFact_4_2.innerHTML = "8th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "severely under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "netherlands") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/netherlands.jpg";
        CitySearcherHeader4.innerHTML = "netherlands";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on February 27th."
        CitySearcherFact_4_2.innerHTML = "14th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "russia") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/russia.jpg";
        CitySearcherHeader4.innerHTML = "russia";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on January 31st."
        CitySearcherFact_4_2.innerHTML = "10th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "switzerland") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/switzerland.jpg";
        CitySearcherHeader4.innerHTML = "switzerland";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in belgium were on February 25th."
        CitySearcherFact_4_2.innerHTML = "15th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "india") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/india.jpg";
        CitySearcherHeader4.innerHTML = "india";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in India were on January 30th."
        CitySearcherFact_4_2.innerHTML = "16th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "severely underprepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "portugal") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/portgugal.jpg";
        CitySearcherHeader4.innerHTML = "portugal";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Portugal were on March 2nd."
        CitySearcherFact_4_2.innerHTML = "17th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "equador") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/equador.jpg";
        CitySearcherHeader4.innerHTML = "equador";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Equador were on February 29th."
        CitySearcherFact_4_2.innerHTML = "18th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "peru") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/peru.jpg";
        CitySearcherHeader4.innerHTML = "peru";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Peru were on Marcg 6th."
        CitySearcherFact_4_2.innerHTML = "19th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "moderately prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "ireland") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/ireland.jpg";
        CitySearcherHeader4.innerHTML = "ireland";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Ireland were on February 25th."
        CitySearcherFact_4_2.innerHTML = "20th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "sweden") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/sweden.jpg";
        CitySearcherHeader4.innerHTML = "sweden";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Sweden were on January 31st."
        CitySearcherFact_4_2.innerHTML = "21st most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "saudi arabia") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/saudiarabia.jpeg";
        CitySearcherHeader4.innerHTML = "saudi arabia";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Saudi Arabia were on April 8th."
        CitySearcherFact_4_2.innerHTML = "22nd most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "very prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "austria") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/austria.jpg";
        CitySearcherHeader4.innerHTML = "austria";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Austria were on February 25th."
        CitySearcherFact_4_2.innerHTML = "23rd most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "moderately prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "israel") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/israel.jpg";
        CitySearcherHeader4.innerHTML = "israel";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Israel were on February 21st."
        CitySearcherFact_4_2.innerHTML = "24th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "under-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else if (CitySearch4 == "japan") {
        CitySearcherSubmit4.style.display = "none";
        CitySearcherImage4.src = "images/cities/japan.jpeg";
        CitySearcherHeader4.innerHTML = "japan";
        CitySearcherFact_4_1.innerHTML = "The first confirmed cases in Japan were on January 16th."
        CitySearcherFact_4_2.innerHTML = "25th most infected country in the world."
        CitySearcherFact_4_3.innerHTML = "well-prepared."
        CitySeacherForm4.style.visibility = "hidden";
        CitySearcherResult4.style.visibility = "visible";
    } else {
        alert("Unrecognised country!")
        CitySearch4.value = "";
    }
}

function CityQueryReset1() {
    var CitySearcherImage1 = document.getElementById('CitySearcherImage1'); // Featured Image //
    var CitySeacherForm1 = document.getElementById('CitySearcherForm1'); // Entire Form //
    var CityQuery1 = document.getElementById('CitySearch1').value; // Search Query
    var CitySearcherSubmit1 = document.getElementById('SubmitButton1'); // Submit button //
    var CitySearcherResult1 = document.getElementById('CitySearcherResult1'); // Entire initial display //

    var CitySearcherHeader1 = document.getElementById('CitySearcherHeader1'); // Header Blankening //

    CitySearcherImage1.src = "images/cities/SearchQuery.png";
    CitySearcherResult1.style.visibility = "hidden";
    CitySeacherForm1.style.visibility = "visible";
    CitySearcherHeader1.innerHTML = "";
    CitySearcherSubmit1.style.display = "inline-block";
    CityQuery1.value = "";
}

function CityQueryReset2() {
    var CitySearcherImage2 = document.getElementById('CitySearcherImage2'); // Featured Image //
    var CitySeacherForm2 = document.getElementById('CitySearcherForm2'); // Entire Form //
    var CityQuery2 = document.getElementById('CitySearch2').value; // Search Query
    var CitySearcherSubmit2 = document.getElementById('SubmitButton2'); // Submit button //
    var CitySearcherResult2 = document.getElementById('CitySearcherResult2'); // Entire initial display //

    var CitySearcherHeader2 = document.getElementById('CitySearcherHeader2'); // Header Blankening //

    CitySearcherImage2.src = "images/cities/SearchQuery.png";
    CitySearcherResult2.style.visibility = "hidden";
    CitySeacherForm2.style.visibility = "visible";
    CitySearcherHeader2.innerHTML = "";
    CitySearcherSubmit2.style.display = "inline-block";
    CityQuery2.value = "";
}

function CityQueryReset3() {
    var CitySearcherImage3 = document.getElementById('CitySearcherImage3'); // Featured Image //
    var CitySeacherForm3 = document.getElementById('CitySearcherForm3'); // Entire Form //
    var CityQuery3 = document.getElementById('CitySearch3').value; // Search Query
    var CitySearcherSubmit3 = document.getElementById('SubmitButton3'); // Submit button //
    var CitySearcherResult3 = document.getElementById('CitySearcherResult3'); // Entire initial display //

    var CitySearcherHeader3 = document.getElementById('CitySearcherHeader3'); // Header Blankening //

    CitySearcherImage3.src = "images/cities/SearchQuery.png";
    CitySearcherResult3.style.visibility = "hidden";
    CitySeacherForm3.style.visibility = "visible";
    CitySearcherHeader3.innerHTML = "";
    CitySearcherSubmit3.style.display = "inline-block";
    CityQuery3.value = "";
}

function CityQueryReset4() {
    var CitySearcherImage4 = document.getElementById('CitySearcherImage4'); // Featured Image //
    var CitySeacherForm4 = document.getElementById('CitySearcherForm4'); // Entire Form //
    var CityQuery4 = document.getElementById('CitySearch4').value; // Search Query
    var CitySearcherSubmit4 = document.getElementById('SubmitButton4'); // Submit button //

    var CitySearcherHeader4 = document.getElementById('CitySearcherHeader4'); // Header Blankening //

    CitySearcherImage4.src = "images/cities/SearchQuery.png";
    CitySearcherResult4.style.visibility = "hidden";
    CitySeacherForm4.style.visibility = "visible";
    CitySearcherHeader4.innerHTML = "";
    CitySearcherSubmit4.style.display = "inline-block";
    CityQuery4.value = "";
}

function galleryCitySearcher() {
    // City Name H1 //
    var gallerySearchHeader = document.getElementById("gallerySearchHeader");

    // Submission BUTTON //
    var GallerySearchInput = document.getElementById("GallerySearchInput").value;
    var GallerySearchInputSubmit = document.getElementById("GallerySearchInputSubmit");

    // Gallery Icons Total DIVs // 
    var gallerySearchPanel1 = document.getElementById("gallerySearchPanel1");
    var gallerySearchPanel2 = document.getElementById("gallerySearchPanel2");
    var gallerySearchPanel3 = document.getElementById("gallerySearchPanel3");
    var gallerySearchPanel4 = document.getElementById("gallerySearchPanel4");
    var gallerySearchPanel5 = document.getElementById("gallerySearchPanel5");

    // Gallery Icons IMG //
    var gallerySearchPanel1_Image = document.getElementById("gallerySearchPanel1_Image");
    var gallerySearchPanel2_Image = document.getElementById("gallerySearchPanel2_Image");
    var gallerySearchPanel3_Image = document.getElementById("gallerySearchPanel3_Image");
    var gallerySearchPanel4_Image = document.getElementById("gallerySearchPanel4_Image");
    var gallerySearchPanel5_Image = document.getElementById("gallerySearchPanel5_Image");

    // Gallery Icons Overlay P // 
    var gallerySearchPanel1_p = document.getElementById("gallerySearchPanel1_p");
    var gallerySearchPanel2_p = document.getElementById("gallerySearchPanel2_p");
    var gallerySearchPanel3_p = document.getElementById("gallerySearchPanel3_p");
    var gallerySearchPanel4_p = document.getElementById("gallerySearchPanel4_p");
    var gallerySearchPanel5_p = document.getElementById("gallerySearchPanel5_p");

    // Gallery Icons Overlay A // 
    var gallerySearchPanel1_a = document.getElementById("gallerySearchPanel1_a");
    var gallerySearchPanel2_a = document.getElementById("gallerySearchPanel2_a");
    var gallerySearchPanel3_a = document.getElementById("gallerySearchPanel3_a");
    var gallerySearchPanel4_a = document.getElementById("gallerySearchPanel4_a");
    var gallerySearchPanel5_a = document.getElementById("gallerySearchPanel5_a");

    if (GallerySearchInput == "Sweden" || GallerySearchInput == "sweden" || GallerySearchInput == "stockholm" || GallerySearchInput == "Stockholm") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Stockholm";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_sweden_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_sweden_2.jpg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_sweden_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_sweden_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_sweden_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "No lockdown was issued, so the streets were full.";
            gallerySearchPanel2_p.innerHTML = "The virus spread rampantly.";
            gallerySearchPanel3_p.innerHTML = "The government claimed it had a better solution.";
            gallerySearchPanel4_p.innerHTML = "No social distancing rules were implicated either.";
            gallerySearchPanel5_p.innerHTML = "Sweden was one of the few countries to not implicate a lockdown.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://www.cnbc.com/2020/04/22/no-lockdown-in-sweden-but-stockholm-could-see-herd-immunity-in-weeks.html";
            gallerySearchPanel2_a.href = "www.telegraph.co.uk/news/2020/04/01/sweden-may-have-escaped-lockdown-struggling-resist-socialism/";
            gallerySearchPanel3_a.href = "https://www.thelocal.se/20200324/while-most-of-europe-is-in-lockdown-sweden-is-going-its-own-way";
            gallerySearchPanel4_a.href = "www.independent.co.uk/news/world/europe/sweden-coronavirus-lockdown-doctor-death-certificates-latest-a9462796.html";
            gallerySearchPanel5_a.href = "https://news.sky.com/story/coronavirus-sweden-determined-it-has-smarter-strategy-for-dealing-with-covid-19-11968101";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else if (GallerySearchInput == "Madrid" || GallerySearchInput == "madrid" || GallerySearchInput == "Spain" || GallerySearchInput == "spain") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Madrid";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_spain_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_spain_2.jpg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_spain_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_spain_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_spain_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "The nation was changed forever.";
            gallerySearchPanel2_p.innerHTML = "Empty Tourist destinations plagued the city.";
            gallerySearchPanel3_p.innerHTML = "The Sleepy streets used exclusively for exercise.";
            gallerySearchPanel4_p.innerHTML = "The Spanish military was drafted in to ensure the lockdown was adhered to.";
            gallerySearchPanel5_p.innerHTML = "Social Distancing was present in every walk of life.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://www.aljazeera.com/news/2020/05/barcelona-madrid-left-lockdown-spain-lifts-curbs-200507211505073.html";
            gallerySearchPanel2_a.href = "https://www.theolivepress.es/spain-news/2020/03/20/pollution-levels-in-spain-reach-historically-low-levels-because-of-coronavirus/"
            gallerySearchPanel3_a.href = "https://www.manchestereveningnews.co.uk/news/world-news/spain-lockdown-mid-may-lifting-18130501";
            gallerySearchPanel4_a.href = "https://www.theolivepress.es/spain-news/2020/03/20/youve-been-warned-police-and-military-in-spain-to-crackdown-on-rule-breakers-of-coronavirus-lockdown/";
            gallerySearchPanel5_a.href = "https://abcnews.go.com/International/italy-spain-begin-reopen-coronavirus-lockdown-rest-europe/story?id=70742735";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else if (GallerySearchInput == "germany" || GallerySearchInput == "Germany" || GallerySearchInput == "Berlin" || GallerySearchInput == "berlin") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Berlin";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_germany_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_germany_2.jpg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_germany_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_germany_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_germany_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "The nation was changed forever.";
            gallerySearchPanel2_p.innerHTML = "Empty Tourist destinations plagued the city.";
            gallerySearchPanel3_p.innerHTML = "The Sleepy streets used exclusively for exercise.";
            gallerySearchPanel4_p.innerHTML = "The Spanish military was drafted in to ensure the lockdown was adhered to.";
            gallerySearchPanel5_p.innerHTML = "Social Distancing was present in every walk of life.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://www.spiegel.de/consent-a-?targetUrl=https%3A%2F%2Fwww.spiegel.de%2Finternational%2Fgermany%2Fwhen-will-germany-begin-loosening-coronavirus-restrictions-a-5ceb8ad0-2cf4-44e4-80ff-7d58466cf082&ref=https%3A%2F%2Fwww.google.com%2F";
            gallerySearchPanel2_a.href = "https://www.straitstimes.com/multimedia/photos/in-pictures-transport-and-shipping-sectors-hit-as-countries-enforce-lockdowns-and"
            gallerySearchPanel3_a.href = "https://www.bbc.co.uk/news/in-pictures-52127945";
            gallerySearchPanel4_a.href = "https://medicalxpress.com/news/2020-04-germany-lockdown-playgrounds-churches-zoos.html";
            gallerySearchPanel5_a.href = "https://consent.yahoo.com/collectConsent?sessionId=3_cc-session_d1484ed0-346e-48c8-9c7c-0c21b7db9988&lang=en-GB&inline=false";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else if (GallerySearchInput == "America" || GallerySearchInput == "america" || GallerySearchInput == "usa" || GallerySearchInput == "USA" || GallerySearchInput == "US" || GallerySearchInput == "us" || GallerySearchInput == "washington" || GallerySearchInput == "Washington") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Washington D.C.";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_usa_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_usa_2.jpeg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_usa_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_usa_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_usa_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "The lockdown was protested, by idiots everywhere.";
            gallerySearchPanel2_p.innerHTML = "The lockdown was protested, by idiots everywhere.";
            gallerySearchPanel3_p.innerHTML = "The lockdown was protested, by idiots everywhere.";
            gallerySearchPanel4_p.innerHTML = "The lockdown was protested, by idiots everywhere.";
            gallerySearchPanel5_p.innerHTML = "Trump remained clueless throughout.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://www.bangkokpost.com/world/1902805/hundreds-protest-against-us-virus-rules-amid-spreading-resentment";
            gallerySearchPanel2_a.href = "https://www.telegraph.co.uk/news/2020/04/18/has-british-love-liberty-gone/"
            gallerySearchPanel3_a.href = "https://www.itv.com/news/2020-04-21/the-defiance-of-anger-of-us-anti-lockdown-protesters/";
            gallerySearchPanel4_a.href = "https://globalnews.ca/news/6830288/coronavirus-protests-united-states/";
            gallerySearchPanel5_a.href = "https://www.ft.com/content/ce4098c9-8d34-4036-9a84-ca40b0294b88";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else if (GallerySearchInput == "Brazil" || GallerySearchInput == "brazil" || GallerySearchInput == "rio" || GallerySearchInput == "rio de janeiro" || GallerySearchInput == "brasilia" || GallerySearchInput == "Brasilia") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Brasilia";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_brazil_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_brazil_2.jpg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_brazil_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_brazil_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_brazil_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "The lockdown was enforced after a long battle with the government.";
            gallerySearchPanel2_p.innerHTML = "Protests both for and against a lockdown took place throughout the city.";
            gallerySearchPanel3_p.innerHTML = "Eventually the city was given a lenient lockdown.";
            gallerySearchPanel4_p.innerHTML = "Protests continued long after the lockdown was started.";
            gallerySearchPanel5_p.innerHTML = "The lockdown allowed the surrounding oceans to become cleaner.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://gulfnews.com/photos/news/brazils-covid-19-lockdown-seen-from-above-1.1585485074781";
            gallerySearchPanel2_a.href = "https://www.theguardian.com/world/video/2020/apr/20/bolsonaro-joins-anti-lockdown-coronavirus-protests-in-brazil-video-report"
            gallerySearchPanel3_a.href = "https://www.reuters.com/news/picture/brazils-coronavirus-lockdown-seen-from-a-idUSRTS37FMI";
            gallerySearchPanel4_a.href = "https://www.deccanherald.com/international/jair-bolsonaro-tells-rally-brazil-lockdown-destroying-jobs-833250.html";
            gallerySearchPanel5_a.href = "https://www.reuters.com/news/picture/brazils-coronavirus-lockdown-seen-from-a-idUSRTS37FMI";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else if (GallerySearchInput == "Portugal" || GallerySearchInput == "portugal" || GallerySearchInput == "Lisbon" || GallerySearchInput == "lisbon") {
        gallerySearchHeader.style.transition = "all 0.5s ease-in-out";
        gallerySearchHeader.innerHTML = "Lisbon";
        gallerySearchHeader.style.opacity = "1";
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(-100px)";
            gallerySearchPanel2.style.transform = "translateY(-100px)";
            gallerySearchPanel3.style.transform = "translateY(-100px)";
            gallerySearchPanel4.style.transform = "translateY(-100px)";
            gallerySearchPanel5.style.transform = "translateY(-100px)";
            gallerySearchPanel1.style.opacity = "0";
            gallerySearchPanel2.style.opacity = "0";
            gallerySearchPanel3.style.opacity = "0";
            gallerySearchPanel4.style.opacity = "0";
            gallerySearchPanel5.style.opacity = "0";
        }, 1000);
        setTimeout(function () {
            // Images //
            gallerySearchPanel1_Image.src = "images/gallery/gallery_portugal_1.jpg";
            gallerySearchPanel2_Image.src = "images/gallery/gallery_portugal_2.jpg";
            gallerySearchPanel3_Image.src = "images/gallery/gallery_portugal_3.jpg";
            gallerySearchPanel4_Image.src = "images/gallery/gallery_portugal_4.jpg";
            gallerySearchPanel5_Image.src = "images/gallery/gallery_portugal_5.jpg";

            // Text //
            gallerySearchPanel1_p.innerHTML = "The empty streets of Lisbon.";
            gallerySearchPanel2_p.innerHTML = "Social distancing was enforced in all areas.";
            gallerySearchPanel3_p.innerHTML = "Tourist hotspots were closed and disinfected.";
            gallerySearchPanel4_p.innerHTML = "Only essential journeys were permitted.";
            gallerySearchPanel5_p.innerHTML = "The empty streets of Lisbon.";

            // A Tag // 
            gallerySearchPanel1_a.href = "https://in.reuters.com/article/health-coronavirus-portugal/portugal-mulls-beach-restrictions-face-masks-for-lockdown-exit-idINKBN2200KP";
            gallerySearchPanel2_a.href = "https://uk.reuters.com/article/uk-health-coronavirus-portugal/portugal-relaxes-coronavirus-lockdown-with-sector-by-sector-plan-idUKKBN22C37I";
            gallerySearchPanel3_a.href = "https://southeusummit.com/europe/how-portugal-confronted-the-coronavirus/";
            gallerySearchPanel4_a.href = "https://europost.eu/en/a/view/portugal-set-to-extend-coronavirus-lockdown-for-15-more-days-28210";
            gallerySearchPanel5_a.href = "https://www.reuters.com/article/us-health-coronavirus-portugal/portugal-prepares-to-extend-state-of-emergency-as-deaths-rise-to-187-idUSKBN21J5P7";
        }, 1500);
        setTimeout(function () {
            gallerySearchPanel1.style.transform = "translateY(0px)";
            gallerySearchPanel2.style.transform = "translateY(0px)";
            gallerySearchPanel3.style.transform = "translateY(0px)";
            gallerySearchPanel4.style.transform = "translateY(0px)";
            gallerySearchPanel5.style.transform = "translateY(0px)";
            gallerySearchPanel1.style.opacity = "1";
            gallerySearchPanel2.style.opacity = "1";
            gallerySearchPanel3.style.opacity = "1";
            gallerySearchPanel4.style.opacity = "1";
            gallerySearchPanel5.style.opacity = "1";
        }, 2000);
    } else {
        alert("This country / city is not currently supported. This feature is a work in progress, therefore those currently functioning are: Stockholm / Sweden, Berlin / Germany, Madrid / Spain, Brasilia / Brazil, Washington / USA, and Lisbon / Portugal! We're sorry for any inconvinience caused by this.")
    }
}