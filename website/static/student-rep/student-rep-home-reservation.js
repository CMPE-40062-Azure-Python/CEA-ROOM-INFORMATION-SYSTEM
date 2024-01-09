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


// Click Event For Reservation

document.addEventListener('DOMContentLoaded', function() {
    // Initial display settings
    document.querySelector('.Completed-content').style.display = 'none';
    document.querySelector('.Cancelled-content').style.display = 'none';

    // Navigate To Completed button
    document.getElementById('Completed').addEventListener('click', function() {
        document.querySelector('.Reserve-Container').style.display = 'none';
        document.querySelector('.Completed-content').style.display = 'block';
    });

    // Navigate To Cancelled button
    document.getElementById('Cancelled').addEventListener('click', function() {
        document.querySelector('.Reserve-Container').style.display = 'none';
        document.querySelector('.Cancelled-content').style.display = 'block';
    });

    // Navigate To Upcoming button in Completed content
    document.getElementById('Completed-Upcoming').addEventListener('click', function() {
        document.querySelector('.Reserve-Container').style.display = 'block';
        document.querySelector('.Completed-content').style.display = 'none';
    });

    // Navigate To Upcoming button in Cancelled content
    document.getElementById('Cancelled-Upcoming').addEventListener('click', function() {
        document.querySelector('.Reserve-Container').style.display = 'block';
        document.querySelector('.Cancelled-content').style.display = 'none';
    });

    // Navigate To Cancelled button in Completed content
    document.getElementById('Completed-Cancelled').addEventListener('click', function() {
        document.querySelector('.Cancelled-content').style.display = 'block';
        document.querySelector('.Completed-content').style.display = 'none';
    });

    // Navigate To Cancelled button in Cancelled content
    document.getElementById('Cancelled-Completed').addEventListener('click', function() {
        document.querySelector('.Completed-content').style.display = 'block';
        document.querySelector('.Cancelled-content').style.display = 'none';
    });

});

// Upcoming - Time Option

document.addEventListener('DOMContentLoaded', function() {
    
    const DropdownText = document.querySelector('.Dropdown-txt');
    const DropdownImage = document.querySelector('.Dropdown-toggle');

    document.querySelector('.Upcoming-Time-Option').style.display = 'none';

    document.querySelector('.Drop-down').addEventListener('click', function() {
        var upcomingTimeOption = document.querySelector('.Upcoming-Time-Option');
        upcomingTimeOption.style.display = (upcomingTimeOption.style.display === 'none' || upcomingTimeOption.style.display === '') ? 'block' : 'none';
        
        DropdownText.style.color = '#DBA729';
        DropdownImage.src = '/static/images/student-rep-dropdown-yellow.png';
    });
});


// Completed Content - Completed Time Option 
document.addEventListener('DOMContentLoaded', function() {
    const completedTimeOption = document.querySelector('.Completed-Time-Option');
    const upcomingTimeOption = document.querySelector('.Upcoming-Time-Option');
    completedTimeOption.style.display = 'none';


    document.getElementById('Completed').addEventListener('click', function() {
        document.querySelector('.Reserve-Container').style.display = 'none';
        document.querySelector('.Completed-content').style.display = 'block';
        completedTimeOption.style.display = 'none';
    });

    document.querySelector('.Drop-down').addEventListener('click', function() {
        const completedContentVisible = document.querySelector('.Completed-content').style.display === 'block';

        if (completedContentVisible) {
            upcomingTimeOption.style.display = 'none';
            completedTimeOption.style.display = (completedTimeOption.style.display === 'none' || completedTimeOption.style.display === '') ? 'block' : 'none';
        }
    });
});


