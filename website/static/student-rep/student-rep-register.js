document.getElementById('student-rep-register-btn').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});
