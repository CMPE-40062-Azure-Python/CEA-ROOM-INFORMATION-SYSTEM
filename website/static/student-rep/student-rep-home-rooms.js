//Menu - hover

const MenuIcon = document.querySelector('.Menu_icon');

MenuIcon.addEventListener("mouseover", function () {
    MenuIcon.src = "/static/images/student-rep-menu-yellow.png";
});

MenuIcon.addEventListener("mouseout", function (){
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

//Account Setting - Hover 
const Account_Icon = document.querySelector('.Acc_Settings');

Account_Icon.addEventListener("mouseover", function (){
    Account_Icon.src = "/static/images/student-rep-account-yellow.png";
});

Account_Icon.addEventListener("mouseout", function (){
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

