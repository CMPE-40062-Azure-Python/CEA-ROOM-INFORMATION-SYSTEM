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

//FAQs

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

//About Us

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

//Contact Us

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