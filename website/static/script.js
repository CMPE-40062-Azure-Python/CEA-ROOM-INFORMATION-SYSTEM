document.getElementById('studentRepButton').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});

document.getElementById('adminButton').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});