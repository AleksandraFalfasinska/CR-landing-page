// Show/hide search button 
const searchBtn = document.getElementsByClassName('btn-search')[0];
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    searchInput.style.display = searchInput.style.display === 'inline' ? 'none' : 'inline';
});

// Multilevel dropdown
// const submenu = document.querySelector('.dropdown-submenu');
// const submenuNestedList = document.querySelector('.dropdown-submenu>.dropdown-menu');

// submenu.addEventListener("click", function(event) {
//     submenuNestedList.style.display = submenuNestedList.style.display === 'block' ? 'none' : 'block';

// });

// Owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})