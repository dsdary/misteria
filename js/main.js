document.getElementById("scrollToAbout").addEventListener("click", function () {
  window.scrollTo({
    top: 1200,
    behavior: "smooth",
  });
});

$(document).ready(function () {
  $(".sliders").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: "320px",
    focusOnSelect: true,
    prevArrow:
      '<button type="button" class=" slider-btn slider-prev"><img src="icons/arrow-left-solid.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class=" slider-btn slider-next"><img src="icons/arrow-right-solid.svg" alt="arrow-right"></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30px",
        },
      },
    ],
  });
});



let catalogIsotope = $(".catalog").isotope({
  itemSelector: ".catalog-item",
  layoutMode: "fitRows",
});

$("#filters li").on("click", function () {
  catalogIsotope.isotope({ filter: $(this).data("filter") });

  $("#filters li").removeClass("active-filter");
  $(this).addClass("active-filter");
});

let questionTitle = document.querySelectorAll(".question-title");

let toggleQuestion = function () {
  this.classList.toggle("active");
};
questionTitle.forEach(function (title) {
  title.addEventListener("click", toggleQuestion);
});

const mapWrapperElement = document.querySelector(".map");

document.addEventListener("click", (event) => {
  mapWrapperElement.classList.toggle(
    "is-active",
    event.target === mapWrapperElement
  );
});

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Пожалуйста, подождите...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Ваши данные успешно отправлены!";
      } else {
        console.log(response);
        result.innerHTML = "Ваши данные успешно отправлены!";
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Что-то пошло не так!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

document.querySelector(".icon").onclick = function () {
  this.firstElementChild.classList.toggle("cancel");
};

