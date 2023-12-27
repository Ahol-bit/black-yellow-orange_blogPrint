let menuToggle = document.getElementById('menu-toggle');
let activeElements = document.querySelectorAll('.active-element')
menuToggle.addEventListener('click', function() {
    activeElements.forEach(function(e) {
        e.classList.toggle('active');
        console.log(e);
    })
})