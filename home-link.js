document.addEventListener(
  "click",
  (event) => {
    if (event.target.closest(".header__name, .header__nameLink")) {
      event.preventDefault();
      window.location.assign("/");
    }
  },
  true,
);
