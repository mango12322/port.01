function toggleMenu() {
  const $navMenu = document.getElementById("nav__menu");
  $navMenu.classList.toggle("show");
}

function init() {
  const $navToggle = document.getElementById("nav-toggle");
  $navToggle.addEventListener("click", () => {
    // menu Toggle
    toggleMenu();
  });

  const $navLinklist = document.querySelectorAll(".nav__link");
  $navLinklist.forEach((el) => el.addEventListener("click", toggleMenu));
}

init();

const options = {
  threshold: 0.7,
};

// 옵저버 객체 생성
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add("active-link");

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove("active-link"));
    }
  });
}, options);

// 옵저버 감지 -> 감지 후 콜백함수 실행
const $sectionList = document.querySelectorAll(".section");
$sectionList.forEach((el) => observer.observe(el));
// observer.observe($workSection);

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

scrollReveal.reveal(".home__data, .about__img, .skills__text");
scrollReveal.reveal(".home__img, .about__data, .skills__img", { delay: 400 });
scrollReveal.reveal(".skills__data, .work__link, .contact__input", {
  interval: 200,
});

const $floatingButton = document.getElementById("floatingButton");
$floatingButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const typeit = new TypeIt("#typeit", {
  speed: 70,
  stratDelay: 1300,
  waitUntilVisible: true,
});

typeit.go();

var a = 10;

function sum() {
  console.log("10");
}
