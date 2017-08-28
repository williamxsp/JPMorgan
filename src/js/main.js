const windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView:windowWidth > 800 ? 2 : 1,
  pagination:'.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});   


var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('header');

toggleMenu.addEventListener('click', (e) => {
  menu.classList.toggle('active');
});

var selectCoursesContainer = document.querySelector('#select-course');
var selectCoursesButton = document.querySelectorAll('#select-course .course-list a');

selectCoursesButton.forEach((item) => {
  item.addEventListener('click', selectCourse);
});


function selectCourse(e) {
  console.log();
  e.preventDefault();
  var targetElem = document.querySelector(e.currentTarget.hash);
  selectCoursesContainer.classList.add('active');
  targetElem.classList.add('active');
}


var gradeButtons = document.querySelectorAll('.grade a');

gradeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('active');
    e.preventDefault();
  });
})

window.addEventListener('scroll', (e) => {
  var banner = document.querySelector('#banner');
  var header = document.querySelector('header');
  bannerHeight = banner.offsetHeight;
  if (window.scrollY > bannerHeight / 2) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
});