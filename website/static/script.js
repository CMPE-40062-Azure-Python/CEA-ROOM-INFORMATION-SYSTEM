document.getElementById('studentRepButton').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});

document.getElementById('adminButton').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});

document.getElementById('siteMap').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});

document.getElementById('useCases').addEventListener('click', function () {
    const route = this.getAttribute('data-route');
    window.location.href = route;
});