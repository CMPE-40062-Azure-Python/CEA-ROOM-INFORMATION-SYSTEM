function bringToFront(element) {
    // Remove 'clicked' class from all elements
    const elements = document.querySelectorAll('.clickable');
    elements.forEach((el) => el.classList.remove('clicked'));

    // Add 'clicked' class to the clicked element
    element.classList.add('clicked');
}