const homelink = document.querySelector('.Home-Icon');
homelink.style.borderBottom = '2px solid #DBA729';
homelink.style.color = '#DBA729';

//Policies - Hover

const policies = document.querySelector('.Policies-Icon');
const policiesIcon = document.querySelector('.Policies-bttn')

policies.addEventListener("mouseover", function () {
    policies.style.borderBottom = '2px solid #DBA729';
    policies.style.color = '#DBA729';
    policiesIcon.src = "/static/images/student-rep-policies-yellow-icon.png";
});

policies.addEventListener("mouseout", function () {
    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = "/static/images/student-rep-policies-icon.png";
})

//FAQs - Hover

const Faqs = document.querySelector('.Faqs-Icon');
const FaqsIcon = document.querySelector('.Faqs-bttn');

Faqs.addEventListener("mouseover", function () {
    Faqs.style.borderBottom = '2px solid #DBA729';
    Faqs.style.color = '#DBA729';
    FaqsIcon.src = "/static/images/student-rep-faqs-yellow-icon.png";
});

Faqs.addEventListener("mouseout", function () {
    Faqs.style.borderBottom = '2px solid transparent';
    Faqs.style.color = '#810403';
    FaqsIcon.src = "/static/images/student-rep-faqs-icon.png";
});

//About Us - Hover

const AboutUs = document.querySelector('.AboutUs-Icon');
const AboutUsIcon = document.querySelector('.AboutUs-bttn');

AboutUs.addEventListener("mouseover", function () {
    AboutUs.style.borderBottom = '2px solid #DBA729';
    AboutUs.style.color = '#DBA729';
    AboutUsIcon.src = "/static/images/student-rep-us-yellow-icon.png";
});

AboutUs.addEventListener("mouseout", function () {
    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = "/static/images/student-rep-us-icon.png";
});


//Contact Us - Hover

const ContactUs = document.querySelector('.Contact-Icon');
const ContactUsIcon = document.querySelector('.Contact-bttn');

ContactUs.addEventListener("mouseover", function () {
    ContactUs.style.borderBottom = '2px solid #DBA729';
    ContactUs.style.color = '#DBA729';
    ContactUsIcon.src = "/static/images/student-rep-contact-yellow-icon.png";
});

ContactUs.addEventListener("mouseout", function () {
    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = "/static/images/student-rep-contact-icon.png";
});

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

Account_Icon.addEventListener("mouseover", function () {
    Account_Icon.src = "/static/images/student-rep-account-yellow.png";
});

Account_Icon.addEventListener("mouseout", function () {
    Account_Icon.src = "/static/images/student-rep-account.png";
});

// Account Setting - Clicked

const AccSettings = document.querySelector('.Profile-Setting');
let isOpen = false; // Display State to None

Account_Icon.addEventListener("click", function (event) {
    if (!isOpen) {
        AccSettings.style.display = "block";
        isOpen = true; // Show Container
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
    isOpen = false;
});

// Rooms - Hover
const RoomContainer = document.querySelector('.Room-img-Container');
const RoomsImg = document.querySelector('.Rooms-img');
const RoomsBttn = document.querySelector('.Rooms-bttn');

RoomContainer.addEventListener("mouseover", function () {
    RoomsImg.src = "/static/images/student-rep-rooms-yellow.png";
    RoomsBttn.style.color = '#DBA729';
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
const ReserveBttn = document.querySelector('.Reserve-bttn')

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