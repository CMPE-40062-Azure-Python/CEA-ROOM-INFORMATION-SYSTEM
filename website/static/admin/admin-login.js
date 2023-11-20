document.getElementById('admin-login-btn').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});
