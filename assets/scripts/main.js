let vw = window.innerWidth;
//let main = document.getElementById('main');

let currentPage = 0;
function nextPage() {
  currentPage++;
  $( '#main' ).css("scroll-snap-type", "none");
  $( '#main' ).animate({
    'scrollLeft': currentPage * vw
  }, 700, "easeInOutCubic", function () {
    $( '#main' ).css("scroll-snap-type", "x mandatory");
  });
}
function prevPage() {
  currentPage--;
  $( '#main' ).css("scroll-snap-type", "none");
  $( '#main' ).animate({
    'scrollLeft': currentPage * vw
  }, 700, "easeInOutCubic", function () {
    $( '#main' ).css("scroll-snap-type", "x mandatory");
  });
}
