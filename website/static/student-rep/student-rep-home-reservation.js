//Menu - hover

const MenuIcon = document.querySelector('.Menu_icon');

MenuIcon.addEventListener("mouseover", function () {
    MenuIcon.src = "/static/images/student-rep-menu-yellow.png";
});

MenuIcon.addEventListener("mouseout", function () {
    MenuIcon.src = "/static/images/student-rep-menu.png";
});

//Back Hover
const back = document.querySelector('.Back-Icon');
const backTxt = document.querySelector('.Back-txt');
const backIcon = document.querySelector('.Back-bttn')

back.addEventListener("mouseover", function () {
    backTxt.style.color = '#DBA729';
    backIcon.src = "/static/images/student-rep-back-yellow.png";
});

back.addEventListener("mouseout", function () {
    backTxt.style.color = '#810403';
    backIcon.src = "/static/images/student-rep-back.png";
});

//Back Click
back.addEventListener("click", function () {
    window.location.href = '/student-rep/home';
});

//Search Hover
const Dropdown = document.querySelector('.Drop-down');
const DropdownTxt = document.querySelector('.Dropdown-txt');
const Dropdownbttn = document.querySelector('.Dropdown-toggle')

Dropdown.addEventListener("mouseover", function () {
    DropdownTxt.style.color = '#DBA729';
    Dropdownbttn.src = "/static/images/student-rep-dropdown-yellow.png";
});

Dropdown.addEventListener("mouseout", function () {
    DropdownTxt.style.color = '#810403';
    Dropdownbttn.src = "/static/images/student-rep-dropdown.png";
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


// Menu Toggle

function MenuIconClick() {
    const SideBar = document.querySelector('.Side-bar');
    const SidebarContent = document.querySelector('.Side-bar-Contents');

    const navLeft = document.querySelector('.Nav-left');
    const navLeftContent = document.querySelector('.Nav-left_Content');

    const navRightContent = document.querySelector('.Nav-Right-Content');
    const navRight = document.querySelector('.Nav-Right');

    const ReserveContainer = document.querySelector('.Reserve-Container');
    const ReservationStatus = document.querySelector('.Status');


    SideBar.classList.toggle('hidden');
    navLeft.classList.toggle('hidden');

    if (SideBar.classList.contains('hidden')) {
        navRight.style.width = '100%';
        navLeft.style.width = '0'
        navLeftContent.style.display = 'none';

        navRightContent.style.justifyContent = 'space-between';
        navRightContent.style.marginRight = '40px';
        navRightContent.style.marginLeft = '40px';

        SideBar.style.width = '0';
        SidebarContent.style.display = 'none';

        ReserveContainer.style.width = 'calc(100% + 230px)';
        ReserveContainer.style.marginRight = '20px';
        ReserveContainer.style.marginLeft = '20px';

        ReservationStatus.style.width = '25%'; 
    } else {
        navRight.style.width = 'calc(100% - 270px)';
        navLeft.style.width = '270px'
        navLeftContent.style.display = 'flex';

        SideBar.style.width = '270px'
        SidebarContent.style.display = 'block'

        ReserveContainer.style.width = 'calc(100% - 290px)';
        ReserveContainer.style.marginRight = 'auto';
        ReserveContainer.style.marginLeft = 'auto';
        ReservationStatus.style.width = '31%';
    }
}

document.querySelector('.Menu_icon').addEventListener('click', MenuIconClick);

//Navigate to Rooms
function handleRoomsButtonClick() {
    window.location.href = '/student-rep/home/rooms';
}

document.addEventListener('DOMContentLoaded', function() {
    // Hide Completed-content initially
    document.querySelector('.Completed-content').style.display = 'none';

    // Handle click event for Completed button
    document.getElementById('Completed').addEventListener('click', function() {
        // Hide Reserve-Container
        document.querySelector('.Reserve-Container').style.display = 'none';

        // Show Completed-content
        document.querySelector('.Completed-content').style.display = 'block';
    });
});


