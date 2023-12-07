const homelink = document.querySelector('.Home-Icon');
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
    policiesIcon.src = yellowIconPolicies.src;
    policies.style.borderBottom = '2px solid #DBA729';
    policies.style.color = '#DBA729';
});

policies.addEventListener("mouseout", function () {
    policies.style.borderBottom = '2px solid transparent';
    policies.style.color = '#810403';
    policiesIcon.src = normalIconPolicies.src;
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
    Faqs.style.borderBottom = '2px solid #DBA729';
    Faqs.style.color = '#DBA729';
    FaqsIcon.src = yellowIconFaqs.src;
});

Faqs.addEventListener("mouseout", function () {
    Faqs.style.borderBottom = '2px solid transparent';
    Faqs.style.color = '#810403';
    FaqsIcon.src = normalIconFaqs.src;
});

//About Us - Hover

const AboutUs = document.querySelector('.AboutUs-Icon');
const AboutUsIcon = document.querySelector('.AboutUs-bttn');

// Preload images
const yellowIconAboutUs = new Image();
yellowIconAboutUs.src = "/static/images/student-rep-us-yellow-icon.png";

const normalIconAboutUs = new Image();
normalIconAboutUs.src = "/static/images/student-rep-us-icon.png";

AboutUs.style.color = '#810403';

AboutUs.addEventListener("mouseover", function () {
    AboutUs.style.borderBottom = '2px solid #DBA729';
    AboutUs.style.color = '#DBA729';
    AboutUsIcon.src = yellowIconAboutUs.src;
});

AboutUs.addEventListener("mouseout", function () {
    AboutUs.style.borderBottom = '2px solid transparent';
    AboutUs.style.color = '#810403';
    AboutUsIcon.src = normalIconAboutUs.src;
});


//Contact Us - Hover

const ContactUs = document.querySelector('.Contact-Icon');
const ContactUsIcon = document.querySelector('.Contact-bttn');

// Preload images
const yellowIconContactUs = new Image();
yellowIconContactUs.src = "/static/images/student-rep-contact-yellow-icon.png";

const normalIconContactUs = new Image();
normalIconContactUs.src = "/static/images/student-rep-contact-icon.png";

ContactUs.style.color = '#810403';

ContactUs.addEventListener("mouseover", function () {
    ContactUs.style.borderBottom = '2px solid #DBA729';
    ContactUs.style.color = '#DBA729';
    ContactUsIcon.src = yellowIconContactUs.src;
});

ContactUs.addEventListener("mouseout", function () {
    ContactUs.style.borderBottom = '2px solid transparent';
    ContactUs.style.color = '#810403';
    ContactUsIcon.src = normalIconContactUs.src;
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

function calculateGridRow(time) {
    let timeObj = {
        "7:00 AM": 1,
        "7:30 AM": 2,
        "8:00 AM": 3,
        "8:30 AM": 4,
        "9:00 AM": 5,
        "9:30 AM": 6,
        "10:00 AM": 7,
        "10:30 AM": 8,
        "11:00 AM": 9,
        "11:30 AM": 10,
        "12:00 PM": 11,
        "12:30 PM": 12,
        "1:00 PM": 13,
        "1:30 PM": 14,
        "2:00 PM": 15,
        "2:30 PM": 16,
        "3:00 PM": 17,
        "3:30 PM": 18,
        "4:00 PM": 19,
        "4:30 PM": 20,
        "5:00 PM": 21,
        "5:30 PM": 22,
        "6:00 PM": 23,
        "6:30 PM": 24,
        "7:00 PM": 25,
        "7:30 PM": 26,
        "8:00 PM": 27,
        "8:30 PM": 28,
        "9:00 PM": 29,
    };

    // Debugging: Log the input time
    console.log('Input time:', time);

    let [timeValue, period] = time.split(' ');

    // Check if the time is in AM or PM and adjust accordingly
    let row = timeObj[`${timeValue} ${period === 'PM' && timeValue !== '12:00' ? 'PM' : 'AM'}`];

    // Debugging: Log the calculated row
    console.log('Calculated row:', row);

    return row;
}

// Class Schedule
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

            // Debugging: Log the input start and end times
            console.log('Start time:', startValue, 'End time:', endValue);

            let startRow = calculateGridRow(startValue);
            let endRow = calculateGridRow(endValue);

            // Debugging: Log the calculated startRow and endRow
            console.log('Start row:', startRow, 'End row:', endRow);

            let startArea = `a${startRow}-${column}`;
            let endArea = `a${endRow}-${column}`;

            // Debugging: Log the calculated startArea and endArea
            console.log('Start area:', startArea, 'End area:', endArea);

            let eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.style.backgroundColor = 'yellow';
            eventDiv.textContent = 'Class';

            // Use grid areas to position the event only for the selected time
            eventDiv.style.gridArea = `${startArea} / ${column} / ${endArea} / ${column}`;

            document.querySelector('.content').appendChild(eventDiv);

            document.querySelector('.modal-container--form').reset();
            document.querySelector('.modal-container--form').removeEventListener('submit', arguments.callee);
            document.querySelector('.modal-container').style.display = 'none';
        });
    });
});





