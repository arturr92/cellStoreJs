     const navOpen = document.querySelector(".nav__hamburger");
     const navClose = document.querySelector(".close__toggle");
     const menu = document.querySelector(".nav__menu");
     const scrollLink = document.querySelectorAll(".scroll-link");
     const navContainer = document.querySelector(".nav__menu");

     navOpen.addEventListener("click", () => {
     menu.classList.add("open");
     document.body.classList.add("active");
     navContainer.style.left = "0";
     navContainer.style.width = "30rem";
     });

     navClose.addEventListener("click", () => {
     menu.classList.remove("open");
     document.body.classList.remove("active");
     navContainer.style.left = "-30rem";
     navContainer.style.width = "0";
     });


     const navBar = document.querySelector(".navigation");
     const gotoTop = document.querySelector(".goto-top");


     Array.from(scrollLink).map(link => {
     link.addEventListener("click", e => {
     e.preventDefault();

     const id = e.currentTarget.getAttribute("href").slice(1);
     const element = document.getElementById(id);
     const navHeight = navBar.getBoundingClientRect().height;
     const fixNav = navBar.classList.contains("fix__nav");
     let position = element.offsetTop - navHeight;

     if (!fixNav) {
          position = position - navHeight;
     }

     window.scrollTo({
          left: 0,
          top: position,
     });
     navContainer.style.left = "-30rem";
     document.body.classList.remove("active");
     });
     });

     window.addEventListener("scroll", e => {
     const scrollHeight = window.pageYOffset;
     const navHeight = navBar.getBoundingClientRect().height;
     if (scrollHeight > navHeight) {
     navBar.classList.add("fix__nav");
     } else {
     navBar.classList.remove("fix__nav");
     }
     });
