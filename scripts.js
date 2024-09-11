function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

        $('.loop').owlCarousel({
    center: true,
    items:4,
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
    }
});
        $('.banner').owlCarousel({
            margin: 10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            dots:false,
            autoplayHoverPause: true,
            items: 1
        })
        function toggleDropdown(buttonId, menuId) {
            const button = document.getElementById(buttonId);
            const menu = document.getElementById(menuId);

            button.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevents the click event from propagating to the document
                menu.classList.toggle('show');
            });
        }

        // Initialize dropdowns
        toggleDropdown('category-button', 'category-menu');
        toggleDropdown('programs-button', 'programs-menu');
        toggleDropdown('universities-button', 'universities-menu');
        toggleDropdown('Master-button', 'Master-menu');

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (event) {
            const dropdowns = document.querySelectorAll('.dropdown-menu.show');
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(event.target) && !event.target.matches(`[id$='-button']`)) {
                    dropdown.classList.remove('show');
                }
            });
        });