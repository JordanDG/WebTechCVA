function cookiePolicy() {
    cookie_background_color = document.getElementById("cookie_background_color")
    cookie_policy = document.getElementById("cookie_policy")

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
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    if (mobile_burger_menu.classList.contains("change")) {
        mobile_burger_menu.classList.remove("change")
        burgerMenuRollaway()
    } else {
        mobile_burger_menu.classList.add("change")
        burgerMenuRollout()
    }
}

function animationToggleContact() {
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    if (mobile_burger_menu.classList.contains("change")) {
        mobile_burger_menu.classList.remove("change")
        burgerMenuRollawayContact()
    } else {
        mobile_burger_menu.classList.add("change")
        burgerMenuRolloutContact()
    }
}

function southWestInfo() {
    information_section_feature_southwest = document.getElementById("information_section_feature_southwest")
    information_section_feature_southwest.classList.toggle("information_section_feature_southwestVISIBLE")
}

function westMidlandsInfo() {
    information_section_feature_westmidlands = document.getElementById("information_section_feature_westmidlands")
    information_section_feature_westmidlands.classList.toggle("information_section_feature_westmidlandsVISIBLE")
}

function northWestInfo() {
    information_section_feature_northwest = document.getElementById("information_section_feature_northwest")
    information_section_feature_northwest.classList.toggle("information_section_feature_northwestVISIBLE")
}

function northEastInfo() {
    information_section_feature_northeast = document.getElementById("information_section_feature_northeast")
    information_section_feature_northeast.classList.toggle("information_section_feature_northeastVISIBLE")
}

function yorkshireInfo() {
    information_section_feature_yorkshire = document.getElementById("information_section_feature_yorkshire")
    information_section_feature_yorkshire.classList.toggle("information_section_feature_yorkshireVISIBLE")
}

function eastmidlandsInfo() {
    information_section_feature_eastmidlands = document.getElementById("information_section_feature_eastmidlands")
    information_section_feature_eastmidlands.classList.toggle("information_section_feature_eastmidlandsVISIBLE")
}

function eastenglandInfo() {
    information_section_feature_eastengland = document.getElementById("information_section_feature_eastengland")
    information_section_feature_eastengland.classList.toggle("information_section_feature_eastenglandVISIBLE")
}

function londonInfo() {
    information_section_feature_london = document.getElementById("information_section_feature_london")
    information_section_feature_london.classList.toggle("information_section_feature_londonVISIBLE")
}

function southeastInfo() {
    information_section_feature_southeast = document.getElementById("information_section_feature_southeast")
    information_section_feature_southeast.classList.toggle("information_section_feature_southeastVISIBLE")
}

function burgerMenuRolloutContact() {
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    mobile_nav_menu = document.getElementById("mobile_nav_menu")
    mobile_link_1_contact = document.getElementById("mobile_link_1_contact")
    mobile_link_2_contact = document.getElementById("mobile_link_2_contact")
    mobile_link_3 = document.getElementById("mobile_link_3")
    mobile_link_4_contact = document.getElementById("mobile_link_4_contact")
    header_logo = document.querySelector(".header_logo")
    header_contact = document.getElementById("header_contact")

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
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    mobile_nav_menu = document.getElementById("mobile_nav_menu")
    mobile_link_1_contact = document.getElementById("mobile_link_1_contact")
    mobile_link_2_contact = document.getElementById("mobile_link_2_contact")
    mobile_link_3 = document.getElementById("mobile_link_3")
    mobile_link_4_contact = document.getElementById("mobile_link_4_contact")
    header_contact = document.getElementById("header_contact")

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
    cookie_background_color = document.getElementById("cookie_background_color")
    cookie_policy = document.getElementById("cookie_policy")

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
    dummyconstruct = document.getElementById("dummyconstruct")
    contact_form_top_foldaway_header = document.getElementById("contact_form_top_foldaway_header")
    contact_form_top_foldaway_text = document.getElementById("contact_form_top_foldaway_text")
    contact_form_top_foldaway_button = document.getElementById("contact_form_top_foldaway_button")
    contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")
    loading_logo_container = document.getElementById("loading_logo_container")

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
    foldaway_left = document.getElementById("foldaway_left")
    foldaway_right = document.getElementById("foldaway_right")

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
    loading_circle_1 = document.getElementById("loading_circle_1")
    loading_circle_2 = document.getElementById("loading_circle_2")
    loading_circle_3 = document.getElementById("loading_circle_3")
    loading_logo_container = document.getElementById("loading_logo_container")
    contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")

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

function cancelContactMenu() {
    foldaway_left = document.getElementById("foldaway_left")
    foldaway_right = document.getElementById("foldaway_right")
    contact_form_top_feature_text_container = document.getElementById("contact_form_top_feature_text_container")
    loading_logo_container = document.getElementById("loading_logo_container")
    loading_circle_1 = document.getElementById("loading_circle_1")
    loading_circle_2 = document.getElementById("loading_circle_2")
    loading_circle_3 = document.getElementById("loading_circle_3")

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
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    mobile_nav_menu = document.getElementById("mobile_nav_menu")
    mobile_link_1 = document.getElementById("mobile_link_1")
    mobile_link_2 = document.getElementById("mobile_link_2")
    mobile_link_3 = document.getElementById("mobile_link_3")
    mobile_link_4 = document.getElementById("mobile_link_4")
    header_logo = document.querySelector(".header_logo")
    header_contact = document.getElementById("header_contact")

    mobile_nav_menu.style.width = "100vw";
    mobile_nav_menu.style.backgroundColor = "#0A56A6";
    mobile_burger_menu.style.color = "#fff";

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
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.visibility = "visible";
    }, 800);
    setTimeout(function () {
        mobile_link_3.style.color = "#fff";
    }, 800);
    setTimeout(function () {
        mobile_link_4.style.transform = "translateX(0px)";
        mobile_link_4.style.visibility = "visible";
        mobile_link_4.style.color = "#fff";
        mobile_link_4.style.transition = "all 0.5s ease-in-out";
    }, 800);
}

function burgerMenuRollaway() {
    mobile_burger_menu = document.getElementById("mobile_burger_menu")
    mobile_nav_menu = document.getElementById("mobile_nav_menu")
    mobile_link_1 = document.getElementById("mobile_link_1")
    mobile_link_2 = document.getElementById("mobile_link_2")
    mobile_link_3 = document.getElementById("mobile_link_3")
    mobile_link_4 = document.getElementById("mobile_link_4")
    header_contact = document.getElementById("header_contact")

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
    ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;
    ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;

    // Form Functionality Variables //
    CitySearch1 = document.getElementById('CitySearch1').value; // Search Query //
    CitySearcherSubmit1 = document.getElementById('SubmitButton1'); // Submit button //

    // Form Visibility Variables //
    CitySeacherForm1 = document.getElementById('CitySearcherForm1'); // Entire Form //

    // New Profile Variables //
    CitySearcherImage1 = document.getElementById('CitySearcherImage1'); // Featured Image //
    CitySearcherResult1 = document.getElementById('CitySearcherResult1'); // Entire Div //
    CitySearcherFacts1 = document.getElementById('CitySearcherFacts1'); // Facts ul //
    CitySearcherHeader1 = document.getElementById('CitySearcherHeader1'); // Country Name //

    // Facts ul li //
    CitySearcherFact_1_1 = document.getElementById('CitySearcherFact_1_1'); // Facts //
    CitySearcherFact2_1_2 = document.getElementById('CitySearcherFact_1_2'); // Facts //
    CitySearcherFact3_1_3 = document.getElementById('CitySearcherFact_1_3'); // Facts //

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
    ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;
    ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;

    // Form Functionality Variables //
    CitySearch2 = document.getElementById('CitySearch2').value; // Search Query //
    CitySearcherSubmit2 = document.getElementById('SubmitButton2'); // Submit button //

    // Form Visibility Variables //
    CitySeacherForm2 = document.getElementById('CitySearcherForm2'); // Entire Form //

    // New Profile Variables //
    CitySearcherImage2 = document.getElementById('CitySearcherImage2'); // Featured Image //
    CitySearcherResult2 = document.getElementById('CitySearcherResult2'); // Entire Div //
    CitySearcherFacts2 = document.getElementById('CitySearcherFacts2'); // Facts ul //
    CitySearcherHeader2 = document.getElementById('CitySearcherHeader2'); // Country Name //

    // Facts ul li //
    CitySearcherFact_2_1 = document.getElementById('CitySearcherFact_2_1'); // Facts //
    CitySearcherFact2_2_2 = document.getElementById('CitySearcherFact_2_2'); // Facts //
    CitySearcherFact3_2_3 = document.getElementById('CitySearcherFact_2_3'); // Facts //

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
    ActiveCountry4 = document.getElementById('CitySearcherHeader4').innerHTML;
    ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;
    ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;

    // Form Functionality Variables //
    CitySearch3 = document.getElementById('CitySearch3').value; // Search Query //
    CitySearcherSubmit3 = document.getElementById('SubmitButton3'); // Submit button //

    // Form Visibility Variables //
    CitySeacherForm3 = document.getElementById('CitySearcherForm3'); // Entire Form //

    // New Profile Variables //
    CitySearcherImage3 = document.getElementById('CitySearcherImage3'); // Featured Image //
    CitySearcherResult3 = document.getElementById('CitySearcherResult3'); // Entire Div //
    CitySearcherFacts3 = document.getElementById('CitySearcherFacts3'); // Facts ul //
    CitySearcherHeader3 = document.getElementById('CitySearcherHeader3'); // Country Name //

    // Facts ul li //
    CitySearcherFact_3_1 = document.getElementById('CitySearcherFact_3_1'); // Facts //
    CitySearcherFact2_3_2 = document.getElementById('CitySearcherFact_3_2'); // Facts //
    CitySearcherFact3_3_3 = document.getElementById('CitySearcherFact_3_3'); // Facts //

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
    ActiveCountry2 = document.getElementById('CitySearcherHeader2').innerHTML;
    ActiveCountry3 = document.getElementById('CitySearcherHeader3').innerHTML;
    ActiveCountry1 = document.getElementById('CitySearcherHeader1').innerHTML;

    // Form Functionality Variables //
    CitySearch4 = document.getElementById('CitySearch4').value; // Search Query //
    CitySearcherSubmit4 = document.getElementById('SubmitButton4'); // Submit button //

    // Form Visibility Variables //
    CitySeacherForm4 = document.getElementById('CitySearcherForm4'); // Entire Form //

    // New Profile Variables //
    CitySearcherImage4 = document.getElementById('CitySearcherImage4'); // Featured Image //
    CitySearcherResult4 = document.getElementById('CitySearcherResult4'); // Entire Div //
    CitySearcherFacts4 = document.getElementById('CitySearcherFacts4'); // Facts ul //
    CitySearcherHeader4 = document.getElementById('CitySearcherHeader4'); // Country Name //

    // Facts ul li //
    CitySearcherFact_4_1 = document.getElementById('CitySearcherFact_4_1'); // Facts //
    CitySearcherFact2_4_2 = document.getElementById('CitySearcherFact_4_2'); // Facts //
    CitySearcherFact3_4_3 = document.getElementById('CitySearcherFact_4_3'); // Facts //

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
    CitySearcherImage1 = document.getElementById('CitySearcherImage1'); // Featured Image //
    CitySeacherForm1 = document.getElementById('CitySearcherForm1'); // Entire Form //
    CityQuery1 = document.getElementById('CitySearch1').value; // Search Query
    CitySearcherSubmit1 = document.getElementById('SubmitButton1'); // Submit button //
    CitySearcherResult1 = document.getElementById('CitySearcherResult1'); // Entire initial display //

    CitySearcherHeader1 = document.getElementById('CitySearcherHeader1'); // Header Blankening //

    CitySearcherImage1.src = "images/cities/SearchQuery.png";
    CitySearcherResult1.style.visibility = "hidden";
    CitySeacherForm1.style.visibility = "visible";
    CitySearcherHeader1.innerHTML = "";
    CitySearcherSubmit1.style.display = "inline-block";
    CityQuery1.value = "";
}

function CityQueryReset2() {
    CitySearcherImage2 = document.getElementById('CitySearcherImage2'); // Featured Image //
    CitySeacherForm2 = document.getElementById('CitySearcherForm2'); // Entire Form //
    CityQuery2 = document.getElementById('CitySearch2').value; // Search Query
    CitySearcherSubmit2 = document.getElementById('SubmitButton2'); // Submit button //
    CitySearcherResult2 = document.getElementById('CitySearcherResult2'); // Entire initial display //

    CitySearcherHeader2 = document.getElementById('CitySearcherHeader2'); // Header Blankening //

    CitySearcherImage2.src = "images/cities/SearchQuery.png";
    CitySearcherResult2.style.visibility = "hidden";
    CitySeacherForm2.style.visibility = "visible";
    CitySearcherHeader2.innerHTML = "";
    CitySearcherSubmit2.style.display = "inline-block";
    CityQuery2.value = "";
}

function CityQueryReset3() {
    CitySearcherImage3 = document.getElementById('CitySearcherImage3'); // Featured Image //
    CitySeacherForm3 = document.getElementById('CitySearcherForm3'); // Entire Form //
    CityQuery3 = document.getElementById('CitySearch3').value; // Search Query
    CitySearcherSubmit3 = document.getElementById('SubmitButton3'); // Submit button //
    CitySearcherResult3 = document.getElementById('CitySearcherResult3'); // Entire initial display //

    CitySearcherHeader3 = document.getElementById('CitySearcherHeader3'); // Header Blankening //

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
