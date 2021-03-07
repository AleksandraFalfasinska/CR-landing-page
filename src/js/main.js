const searchBtn = document.getElementsByClassName('btn-search')[0];
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    searchInput.style.display = searchInput.style.display === 'inline' ? 'none' : 'inline';
    console.log('xD');
});