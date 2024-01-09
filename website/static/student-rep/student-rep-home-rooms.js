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
const search = document.querySelector('.Search-Icon');
const searchTxt = document.querySelector('.Search-txt');
const searchIcon = document.querySelector('.Search-bttn')

search.addEventListener("mouseover", function () {
    searchTxt.style.color = '#DBA729';
    searchIcon.src = "/static/images/student-rep-search-yellow.png";
});

search.addEventListener("mouseout", function () {
    searchTxt.style.color = '#810403';
    searchIcon.src = "/static/images/student-rep-search.png";
});

// Search Clicked


const SearchContainer = document.querySelector('.Search-Icon');
const SearchContent = document.querySelector('.Search');

SearchContent.style.display = "none";


SearchContainer.addEventListener('click', function (event) {
    event.stopPropagation();
    SearchContent.style.display = (SearchContent.style.display === 'none' || SearchContent.style.display === '') ? 'block' : 'none';
});

// // Hide the search content when anything else on the document is clicked
// document.addEventListener('click', function () {
//     SearchContent.style.display = 'none';
// });


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

//Reservations - Hover
const ReservationContainer = document.querySelector('.Reservation-img-Container');
const ReserveImg = document.querySelector('.Reserve-img');
const ReserveBttn = document.querySelector('.Reserve-bttn');

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


// Menu Toggle

function MenuIconClick() {
    const SideBar = document.querySelector('.Side-bar');
    const SidebarContent = document.querySelector('.Side-bar-Contents');

    const navLeft = document.querySelector('.Nav-left');
    const navLeftContent = document.querySelector('.Nav-left_Content');

    const navRightContent = document.querySelector('.Nav-Right-Content');
    const navRight = document.querySelector('.Nav-Right');

    const RoomsContainer = document.querySelector('.Rooms-Container')


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

        RoomsContainer.style.width = 'calc(100% + 230px)';
        RoomsContainer.style.marginRight = '20px';
        RoomsContainer.style.marginLeft = '20px';



    } else {
        navRight.style.width = 'calc(100% - 270px)';
        navLeft.style.width = '270px'
        navLeftContent.style.display = 'flex';

        SideBar.style.width = '270px'
        SidebarContent.style.display = 'block'

        RoomsContainer.style.width = 'calc(100% - 290px)';
        RoomsContainer.style.marginRight = 'auto';
        RoomsContainer.style.marginLeft = 'auto';
    }
}

document.querySelector('.Menu_icon').addEventListener('click', MenuIconClick);

// Show roomNumber based on searchInput
$(document).ready(function () {
    $('#searchInput').on('input', function () {
        var searchText = $(this).val().toLowerCase(); // Convert to lowercase for case-insensitive matching
        console.log("Search Text:", searchText);

        if (searchText === "") {
            // If search input is empty, hide all room numbers
            $('.roomNumber').hide();
        } else {
            // If search input is not empty, filter and display matching room numbers
            $('.roomNumber').each(function () {
                var roomNumber = $(this).text().toLowerCase(); // Convert to lowercase for case-insensitive matching
                console.log("Room Number:", roomNumber);

                if (roomNumber.includes(searchText)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});

// Function to open the modal
function openModal() {
    document.getElementById('room313Modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('room313Modal').style.display = 'none';
}

const suffixes = ['a', 'b'];

for (let i = 300; i <= 325; i++) {
    const roomIdWithoutSuffix = 'RM' + i;
    const elementWithoutSuffix = document.getElementById(roomIdWithoutSuffix);

    // Add event listener for the room without suffix
    if (elementWithoutSuffix) {
        elementWithoutSuffix.addEventListener('click', openModal);
    }

    // Add event listeners for suffixed rooms
    for (const suffix of suffixes) {
        const roomIdWithSuffix = 'RM' + i + suffix;
        const elementWithSuffix = document.getElementById(roomIdWithSuffix);

        if (elementWithSuffix) {
            elementWithSuffix.addEventListener('click', openModal);
        }
    }
}

// Navigate to Reservations
function handleReservationsButtonClick() {
    window.location.href = '/student-rep/home/reservation';
}