// Home

// Preload images

const yellowIconHome = new Image();
yellowIconHome.src = "/static/images/student-rep-home-icon_clicked.png";

const normalIconHome = new Image();
normalIconHome.src = "/static/images/student-rep-home-icon.png";

const homelink = document.querySelector('.Home-Icon');
const homeIcon = document.querySelector('.Home-bttn')
homelink.style.borderBottom = '2px solid #DBA729';
homelink.style.color = '#DBA729';

//Policies - Hover

const policies = document.querySelector('.Policies-Icon');
const policiesIcon = document.querySelector('.Policies-bttn');

policies.style.color = '#810403';
// Preload images
const yellowIconPolicies = new Image();
yellowIconPolicies.src = "/static/images/student-rep-policies-yellow-icon.png";

const normalIconPolicies = new Image();
normalIconPolicies.src = "/static/images/student-rep-policies-icon.png";

policies.addEventListener("mouseover", function () {
    if (!policiesClicked || homelinkClicked) {
        policies.style.borderBottom = '2px solid #DBA729';
        policies.style.color = '#DBA729';
        policiesIcon.src = yellowIconPolicies.src;
    }
});

policies.addEventListener("mouseout", function () {
    if (!policiesClicked || homelinkClicked) {
        policies.style.borderBottom = '2px solid transparent';
        policies.style.color = '#810403';
        policiesIcon.src = policiesClicked ? yellowIconPolicies.src : normalIconPolicies.src;
    }
});


//FAQs - Hover

const Faqs = document.querySelector('.Faqs-Icon');
const FaqsIcon = document.querySelector('.Faqs-bttn');

// Preload images
const yellowIconFaqs = new Image();
yellowIconFaqs.src = "/static/images/student-rep-faqs-yellow-icon.png";

const normalIconFaqs = new Image();
normalIconFaqs.src = "/static/images/student-rep-faqs-icon.png";

Faqs.style.color = '#810403';

Faqs.addEventListener("mouseover", function () {
    if (!faqsClicked || homelinkClicked) {
        Faqs.style.borderBottom = '2px solid #DBA729';
        Faqs.style.color = '#DBA729';
        FaqsIcon.src = yellowIconFaqs.src;
    }
});

Faqs.addEventListener("mouseout", function () {
    if (!faqsClicked || homelinkClicked) {
        Faqs.style.borderBottom = '2px solid transparent';
        Faqs.style.color = '#810403';
        FaqsIcon.src = faqsClicked ? yellowIconFaqs.src : normalIconFaqs.src;
    }
});

//About Us - Hover

const AboutUs = document.querySelector('.AboutUs-Icon');
const AboutUsIcon = document.querySelector('.AboutUs-bttn');

// Preload images
const yellowIconAboutUs = new Image();
yellowIconAboutUs.src = "/static/images/student-rep-us-yellow-icon.png";

const normalIconAboutUs = new Image();
normalIconAboutUs.src = "/static/images/student-rep-us-icon.png";

AboutUs.addEventListener("mouseover", function () {
    if (!aboutUsClicked || homelinkClicked) {
        AboutUs.style.borderBottom = '2px solid #DBA729';
        AboutUs.style.color = '#DBA729';
        AboutUsIcon.src = yellowIconAboutUs.src;
    }
});

AboutUs.addEventListener("mouseout", function () {
    if (!aboutUsClicked || homelinkClicked) {
        AboutUs.style.borderBottom = '2px solid transparent';
        AboutUs.style.color = '#810403';
        AboutUsIcon.src = aboutUsClicked ? yellowIconAboutUs.src : normalIconAboutUs.src;
    }
});


//Contact Us - Hover

const ContactUs = document.querySelector('.Contact-Icon');
const ContactUsIcon = document.querySelector('.Contact-bttn');

// Preload images
const yellowIconContactUs = new Image();
yellowIconContactUs.src = "/static/images/student-rep-contact-yellow-icon.png";

const normalIconContactUs = new Image();
normalIconContactUs.src = "/static/images/student-rep-contact-icon.png";

let faqsClicked = false;
let contactUsClicked = false;
let homelinkClicked = false;
let aboutUsClicked = false;
let policiesClicked = false;

ContactUs.style.color = '#810403';

ContactUs.addEventListener("mouseover", function () {
    if (!contactUsClicked || homelinkClicked) {
        ContactUs.style.borderBottom = '2px solid #DBA729';
        ContactUs.style.color = '#DBA729';
        ContactUsIcon.src = yellowIconContactUs.src;
    }
});

ContactUs.addEventListener("mouseout", function () {
    if (!contactUsClicked || homelinkClicked) {
        ContactUs.style.borderBottom = '2px solid transparent';
        ContactUs.style.color = '#810403';
        ContactUsIcon.src = contactUsClicked ? yellowIconContactUs.src : normalIconContactUs.src;
    }
});

// Contact Us Toggle
const ContactContent = document.querySelector('.ContactUS-content');
const UpdatesContainer = document.querySelector('.Updates-Schedule-Container');

ContactUs.addEventListener("click", function () {
    const isContactContentVisible = window.getComputedStyle(ContactContent).display !== "none";

    if (!isContactContentVisible) {
        ContactContent.style.display = "block";
        UpdatesContainer.style.display = "none";
        AboutusContent.style.display = "none";
        PoliciesContent.style.display = "none";
        FaqsContent.style.display = "none";
    }

    contactUsClicked = true;
    homelinkClicked = false;
    aboutUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    ContactUs.style.borderBottom = '2px solid #DBA729';
    ContactUs.style.color = '#DBA729';
    ContactUsIcon.src = yellowIconContactUs.src;

    homelink.style.borderBottom = '2px solid transparent';
    homelink.style.color =  '#810403';
    homeIcon.src = normalIconHome.src;

    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;
});

// Back To Home

homelink.addEventListener("click", function () {
    const isHomeContentVisible = window.getComputedStyle(UpdatesContainer).display !== "none";

    if (!isHomeContentVisible) {
        UpdatesContainer.style.display = "block";
        ContactContent.style.display = "none";
        AboutusContent.style.display = "none";
        PoliciesContent.style.display = "none";
        FaqsContent.style.display = "none";
    }

    
    homelinkClicked = true;
    contactUsClicked = false;
    aboutUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    homelink.style.borderBottom = '2px solid #DBA729';
    homelink.style.color =  '#DBA729';
    homeIcon.src = yellowIconHome.src;

    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policies.src = normalIconPolicies.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;

});

homelink.addEventListener("mouseover", function () {
    if (contactUsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid #DBA729';
        homelink.style.color = '#DBA729';
        homeIcon.src = yellowIconHome.src;
    }
});

homelink.addEventListener("mouseout", function () {
    if (contactUsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid transparent';
        homelink.style.color = '#810403';
        homeIcon.src = normalIconHome.src;
    }
});

// About Us Toggle

const AboutusContent = document.querySelector('.AboutUS-content'); 

AboutUs.addEventListener("click", function () {
    const isAboutusContentVisible = window.getComputedStyle(AboutusContent).display !== "none";

    if (!isAboutusContentVisible) {
        AboutusContent.style.display = "block";
        UpdatesContainer.style.display = "none";
        ContactContent.style.display = "none";
        PoliciesContent.style.display = "none";
        FaqsContent.style.display = "none";
    }

    aboutUsClicked = true;
    homelinkClicked = false;
    contactUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    AboutUs.style.borderBottom = '2px solid #DBA729'
    AboutUs.style.color = '#DBA729';
    AboutUsIcon.src = yellowIconAboutUs.src;

    homelink.style.borderBottom = '2px solid transparent';
    homelink.style.color =  '#810403';
    homeIcon.src = normalIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;
});

// Back To Home about us

homelink.addEventListener("click", function () {
    const isHomeContentVisible = window.getComputedStyle(UpdatesContainer).display !== "none";

    if (!isHomeContentVisible) {
        UpdatesContainer.style.display = "block";
        AboutusContent.style.display = "none";
        ContactUs.style.display = "none";
        PoliciesContent.style.display = "none";
        FaqsContent.style.display = "none";
    }

    
    homelinkClicked = true;
    aboutUsClicked = false;
    contactUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

    homelink.style.borderBottom = '2px solid #DBA729';
    homelink.style.color =  '#DBA729';
    homeIcon.src = yellowIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policies.src = normalIconPolicies.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;

});

homelink.addEventListener("mouseover", function () {
    if (aboutUsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid #DBA729';
        homelink.style.color = '#DBA729';
        homeIcon.src = yellowIconHome.src;
    }
});

homelink.addEventListener("mouseout", function () {
    if (aboutUsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid transparent';
        homelink.style.color = '#810403';
        homeIcon.src = normalIconHome.src;
    }
});

//back to home end about us

// Policies Toggle

const PoliciesContent = document.querySelector('.Policies-content');


policies.addEventListener("click", function () {
    const isPoliciesContentVisible = window.getComputedStyle(PoliciesContent).display !== "none";

    if (!isPoliciesContentVisible) {
        PoliciesContent.style.display = "block";
        UpdatesContainer.style.display = "none";
        ContactContent.style.display = "none";
        AboutusContent.style.display = "none";
        FaqsContent.style.display = "none";
    }

    policiesClicked = true;
    aboutUsClicked = false;
    homelinkClicked = false;
    contactUsClicked = false;
    faqsClicked = false;

    policies.style.borderBottom = '2px solid #DBA729'
    policies.style.color = '#DBA729';
    policiesIcon.src = yellowIconPolicies.src;

    homelink.style.borderBottom = '2px solid transparent';
    homelink.style.color =  '#810403';
    homeIcon.src = normalIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    AboutUs.style.borderBottom = '2px solid transparent'
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;
});

// Back To Home policies

homelink.addEventListener("click", function () {
    const isHomeContentVisible = window.getComputedStyle(UpdatesContainer).display !== "none";

    if (!isHomeContentVisible) {
        UpdatesContainer.style.display = "block";
        PoliciesContent.style.display = "none";
        AboutusContent.style.display = "none";
        ContactUs.style.display = "none";
        FaqsContent.style.display = "none";
    }

    
    homelinkClicked = true;
    aboutUsClicked = false;
    contactUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;

    homelink.style.borderBottom = '2px solid #DBA729';
    homelink.style.color =  '#DBA729';
    homeIcon.src = yellowIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;
    


});

homelink.addEventListener("mouseover", function () {
    if (policiesClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid #DBA729';
        homelink.style.color = '#DBA729';
        homeIcon.src = yellowIconHome.src;
    }
});

homelink.addEventListener("mouseout", function () {
    if (policiesClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid transparent';
        homelink.style.color = '#810403';
        homeIcon.src = normalIconHome.src;
    }
});

//back to home end policies

// FAQs Toggle

const FaqsContent = document.querySelector('.FAQS-content');


Faqs.addEventListener("click", function () {
    const isFaqsContentVisible = window.getComputedStyle(FaqsContent).display !== "none";

    if (!isFaqsContentVisible) {
        FaqsContent.style.display = "block";
        PoliciesContent.style.display = "none";
        UpdatesContainer.style.display = "none";
        ContactContent.style.display = "none";
        AboutusContent.style.display = "none";
    }

    faqsClicked = true;
    policiesClicked = false;
    aboutUsClicked = false;
    homelinkClicked = false;
    contactUsClicked = false;

    Faqs.style.borderBottom = '2px solid #DBA729'
    Faqs.style.color = '#DBA729';
    FaqsIcon.src = yellowIconFaqs.src;

    homelink.style.borderBottom = '2px solid transparent';
    homelink.style.color =  '#810403';
    homeIcon.src = normalIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    AboutUs.style.borderBottom = '2px solid transparent'
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;
});

// Back To Home faqs

homelink.addEventListener("click", function () {
    const isHomeContentVisible = window.getComputedStyle(UpdatesContainer).display !== "none";

    if (!isHomeContentVisible) {
        UpdatesContainer.style.display = "block";
        PoliciesContent.style.display = "none";
        AboutusContent.style.display = "none";
        ContactUs.style.display = "none";
        FaqsContent.style.display = "none";
    }

    
    homelinkClicked = true;
    aboutUsClicked = false;
    contactUsClicked = false;
    policiesClicked = false;
    faqsClicked = false;

    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;

    homelink.style.borderBottom = '2px solid #DBA729';
    homelink.style.color =  '#DBA729';
    homeIcon.src = yellowIconHome.src;

    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;

    Faqs.style.borderBottom = '2px solid transparent'
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;

    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;

});

homelink.addEventListener("mouseover", function () {
    if (faqsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid #DBA729';
        homelink.style.color = '#DBA729';
        homeIcon.src = yellowIconHome.src;
    }
});

homelink.addEventListener("mouseout", function () {
    if (faqsClicked && !homelink.classList.contains('clicked')) {
        homelink.style.borderBottom = '2px solid transparent';
        homelink.style.color = '#810403';
        homeIcon.src = normalIconHome.src;
    }
});

//back to home end faqs

//Menu - hover

const MenuIcon = document.querySelector('.Menu_icon');

MenuIcon.addEventListener("mouseover", function () {
    MenuIcon.src = "/static/images/student-rep-menu-yellow.png";
});

MenuIcon.addEventListener("mouseout", function () {
    MenuIcon.src = "/static/images/student-rep-menu.png";
});

//Account Setting - Hover 
const Account_Icon = document.querySelector('.Acc_Settings');
let isMouseOverIcon = false;
let isClicked = false;

Account_Icon.addEventListener("mouseenter", function () {
    if (!isOpen && !isClicked) {
        isMouseOverIcon = true;
        Account_Icon.src = "/static/images/student-rep-account-yellow.png";
    }
});

Account_Icon.addEventListener("mouseleave", function () {
    isMouseOverIcon = false;

    if (!isOpen && !isClicked) {
        Account_Icon.src = "/static/images/student-rep-account.png";
    }
});

// Account Setting - Clicked

const AccSettings = document.querySelector('.Profile-Setting');
let isOpen = false;

Account_Icon.addEventListener("click", function (event) {
    if (!isOpen) {
        AccSettings.style.display = "block";
        isOpen = true;
        isClicked = true;
        Account_Icon.src = "/static/images/student-rep-account-yellow.png";
    } else {
        AccSettings.style.display = "none";
        Account_Icon.src = "/static/images/student-rep-account.png";
        isOpen = false;
    }
    event.stopPropagation();
});

// Account Settings Hide When Anything in the Screen is Clicked
document.addEventListener("click", function () {
    AccSettings.style.display = "none";
    Account_Icon.src = "/static/images/student-rep-account.png";

    // Check if the mouse is not over the icon and not clicked before changing the icon
    if (!isMouseOverIcon && !isClicked) {
        Account_Icon.src = "/static/images/student-rep-account.png";
    }
    isOpen = false;
    isClicked = false; // Reset the click state
});

// Rooms - Hover
const RoomContainer = document.querySelector('.Room-img-Container');
const RoomsImg = document.querySelector('.Rooms-img');
const RoomsBttn = document.getElementById('RoomsId');

RoomContainer.addEventListener("mouseover", function () {
    RoomsBttn.style.color = '#DBA729';
    RoomsImg.src = "/static/images/student-rep-rooms-yellow.png";
});

RoomContainer.addEventListener("mouseout", function () {
    RoomsImg.src = "/static/images/student-rep-rooms.png";
    RoomsBttn.style.color = '#810403';
});

RoomsBttn.addEventListener("mouseover", function () {
    RoomsImg.src = "/static/images/student-rep-rooms-yellow.png";
    RoomsBttn.style.color = '#DBA729';
});

RoomsBttn.addEventListener("mouseout", function () {
    RoomsImg.src = "/static/images/student-rep-rooms.png";
    RoomsBttn.style.color = '#810403';
});

//Reservations - Hover
const ReservationContainer = document.querySelector('.Reservation-img-Container');
const ReserveImg = document.querySelector('.Reserve-img');
const ReserveBttn = document.getElementById('ReserveId')

ReservationContainer.addEventListener("mouseover", function () {
    ReserveImg.src = "/static/images/student-rep-reserve-yellow.png";
    ReserveBttn.style.color = '#DBA729';
});

ReservationContainer.addEventListener("mouseout", function () {
    ReserveImg.src = "/static/images/student-rep-reserve.png";
    ReserveBttn.style.color = '#810403';
});

ReserveBttn.addEventListener("mouseover", function () {
    ReserveImg.src = "/static/images/student-rep-reserve-yellow.png";
    ReserveBttn.style.color = '#DBA729';
});

ReserveBttn.addEventListener("mouseout", function () {
    ReserveImg.src = "/static/images/student-rep-reserve.png";
    ReserveBttn.style.color = '#810403';
});

function handleRoomsButtonClick() {
    window.location.href = '/student-rep/home/rooms';
}

function handleReservationsButtonClick() {
    window.location.href = '/student-rep/home/reservation';
}

// Date and Time Container
const currentDate = new Date();

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.getElementById('CurrentMonth').textContent = monthNames[currentDate.getMonth()];
document.getElementById('CurrentYear').textContent = currentDate.getFullYear();

document.getElementById('CurrentDay').textContent = currentDate.getDate();

// Set time
const formatTimeUnit = unit => unit < 10 ? '0' + unit : unit;
document.getElementById('CurrentHour').textContent = formatTimeUnit(currentDate.getHours());
document.getElementById('CurrentMinute').textContent = formatTimeUnit(currentDate.getMinutes());
document.getElementById('CurrentSecond').textContent = formatTimeUnit(currentDate.getSeconds());

setInterval(() => {
    const currentTime = new Date();
    document.getElementById('CurrentHour').textContent = formatTimeUnit(currentTime.getHours());
    document.getElementById('CurrentMinute').textContent = formatTimeUnit(currentTime.getMinutes());
    document.getElementById('CurrentSecond').textContent = formatTimeUnit(currentTime.getSeconds());
}, 1000);

// Menu Icon Toggle

function MenuIconClick() {
    const SideBar = document.querySelector('.Side-bar');
    const SidebarContent = document.querySelector('.Side-bar-Contents');

    const navLeft = document.querySelector('.Nav-left');
    const navLeftContent = document.querySelector('.Nav-left_Content');

    const navRightContent = document.querySelector('.Nav-Right-Content');
    const navRight = document.querySelector('.Nav-Right');

    const updatesContainer = document.querySelector('.Updates-Container');

    const scheduleContainer = document.querySelector('.Schedule-Container');

    const ContactUsContent = document.querySelector('.ContactUS-content')

    SideBar.classList.toggle('hidden');
    navLeft.classList.toggle('hidden');

    if (SideBar.classList.contains('hidden')) {
        navRight.style.width = '100%';
        navLeft.style.width = '0'
        navLeftContent.style.display = 'none';

        navRightContent.style.justifyContent = 'space-between';
        navRightContent.style.marginRight = '20px';
        navRightContent.style.marginLeft = '20px';

        SideBar.style.width = '0';
        SidebarContent.style.display = 'none';

        //Home
        updatesContainer.style.width = 'calc(100% + 230px)';
        updatesContainer.style.marginRight = '20px';
        updatesContainer.style.marginLeft = '20px';
        updatesContainer.style.justifyContent = 'space-between';
        updatesContainer.style.paddingRight = '30px';
        updatesContainer.style.paddingLeft = '30px';


        scheduleContainer.style.width = 'calc(100% + 230px)';
        scheduleContainer.style.marginRight = '20px';
        scheduleContainer.style.marginLeft = '20px';
    } else {
        navRight.style.width = 'calc(100% - 270px)';
        navLeft.style.width = '270px'
        navLeftContent.style.display = 'flex';

        SideBar.style.width = '270px'
        SidebarContent.style.display = 'block'

        updatesContainer.style.width = '100%';
        updatesContainer.style.marginRight = '3px';
        updatesContainer.style.marginLeft = '0';

        scheduleContainer.style.width = '90%';
        scheduleContainer.style.marginRight = 'auto';
        scheduleContainer.style.marginLeft = 'auto';
    }
}

document.querySelector('.Menu_icon').addEventListener('click', MenuIconClick);



document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".planes").addEventListener('click', function (e) {
        let column = Array.from(e.target.parentNode.children).indexOf(e.target) + 1;

        document.querySelector('.modal-container').style.display = 'block';

        document.querySelector('.modal-container--close').addEventListener('click', function () {
            document.querySelector('.modal-container').style.display = 'none';
        });
        document.querySelector('.modal-container--form').addEventListener('submit', function (e) {
            e.preventDefault();

            let startValue = document.querySelector("#start-select").value;
            let endValue = document.querySelector("#end-select").value;

            let startRow, endRow;

            // Check the start time and assign the corresponding startRow
            if (startValue === "7:00 AM") {
                startRow = 1;
            } else if (startValue === "8:00 AM") {
                startRow = 2;
            } else if (startValue === "9:00 AM") {
                startRow = 3;
            } else if (startValue === "10:00 AM") {
                startRow = 4;
            } else if (startValue === "11:00 AM") {
                startRow = 5;
            } else if (startValue === "12:00 PM") {
                startRow = 6;
            } else if (startValue === "1:00 PM") {
                startRow = 7;
            } else if (startValue === "2:00 PM") {
                startRow = 8;
            } else if (startValue === "3:00 PM") {
                startRow = 9;
            } else if (startValue === "4:00 PM") {
                startRow = 10;
            } else if (startValue === "5:00 PM") {
                startRow = 11;
            } else if (startValue === "6:00 PM") {
                startRow = 12;
            } else if (startValue === "7:00 PM") {
                startRow = 13;
            } else if (startValue === "8:00 PM") {
                startRow = 14;
            } else if (startValue === "9:00 PM") {
                startRow = 15;
            }
            // Add more conditions for other start times

            // Check the end time and assign the corresponding endRow
            if (endValue === "8:00 AM") {
                endRow = 2;
            } else if (endValue === "9:00 AM") {
                endRow = 3;
            } else if (endValue === "10:00 AM") {
                endRow = 4;
            } else if (endValue === "11:00 AM") {
                endRow = 5;
            } else if (endValue === "12:00 PM") {
                endRow = 6;
            } else if (endValue === "1:00 PM") {
                endRow = 7;
            } else if (endValue === "2:00 PM") {
                endRow = 8;
            } else if (endValue === "3:00 PM") {
                endRow = 9;
            } else if (endValue === "4:00 PM") {
                endRow = 10;
            } else if (endValue === "5:00 PM") {
                endRow = 11;
            } else if (endValue === "6:00 PM") {
                endRow = 12;
            } else if (endValue === "7:00 PM") {
                endRow = 13;
            } else if (endValue === "8:00 PM") {
                endRow = 14;
            } else if (endValue === "9:00 PM") {
                endRow = 15;
            }
            // Add more conditions for other end times

            // Check if startRow and endRow are defined
            if (startRow !== undefined && endRow !== undefined) {
                // Loop through the rows and update the corresponding divs
                for (let i = startRow; i <= endRow; i++) {
                    let eventId = document.getElementById(i);
                    if (eventId) {
                        eventId.textContent = `SUN - ${i + 6}:00 AM-${i + 7}:00 AM`; // Adjust the text as needed
                        eventId.style.backgroundColor = 'yellow';
                    }
                }

                // Reset the form and hide the modal
                document.querySelector('.modal-container--form').reset();
                document.querySelector('.modal-container--form').removeEventListener('submit', arguments.callee);
                document.querySelector('.modal-container').style.display = 'none';
            }
        });
    });
});







