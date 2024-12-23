// console.log("hello world");
// const name3 = "nat";

//how to select elements from html page
//(with class f.e)

// const h1 = document.querySelector(".heading-primary");
// const heroimg = document.querySelector(".hero-img-box");
// console.log(h1);

//not - in js. the second letter capital. backgroundColor

// heroimg.addEventListener("click", () => {
//   h1.textContent = name3;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "9rem";
// });

//make the year of the copyright dynamic
const yearCopy = document.querySelector(".year");
const currentDate = new Date();
yearCopy.textContent = currentDate.getFullYear();

//make mobile navigation work
const header = document.querySelector(".header");

const btnMobile = document.querySelector(".btn-mobile-nav");

btnMobile.addEventListener("click", function () {
  // if (header.classList.contains("nav-open")) {
  //   //add class to element
  //   header.classList.remove("nav-open");
  // } else {
  //   //remove class from element
  //   header.classList.add("nav-open");
  // }

  //it does automatically add or remove when a class is present
  header.classList.toggle("nav-open");
});

//smooth scrolling in safari

const ahref = document.querySelectorAll("a:link");
console.log(ahref);

//add event listener to each link individually
ahref.forEach((a) => {
  a.addEventListener("click", (e) => {
    //access to the event object
    console.log(e);

    //prevent default event
    e.preventDefault();
    const href = a.getAttribute("href");

    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to a section
    //find it by id
    if (href != "#" && href.startsWith("#")) {
      //select the element by id
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });

      //na kleinei to menu otan eilegw navigation
      if (a.classList.contains("main-nav-link"))
        header.classList.toggle("nav-open");
    }
  });
});

//add sticky navigation after hero section is visible
const head = document.querySelector("header");
const body = document.querySelector("body");
const hero = document.querySelector(".section-hero");

//we want to observe the hero section
const obs = new IntersectionObserver(
  function (entries) {
    //if we had many thresholds, we would have many entries
    const ent = entries[0];
    console.log(ent);
    console.log(ent.isIntersecting);
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  }, //conditions
  {
    //in the viewport
    root: null,
    //the event is when 0% of the hero section is inside of the viewport
    //so moves out completely of th viewport
    threshold: 0, //,
    // margin applied outside of the root
    //the height is 8rem, so we want -80px
    //that s why we wanted a fixed height
    rootMargin: "-80px",
  }
);
obs.observe(hero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
