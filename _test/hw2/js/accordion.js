function accordion() {
  const accordionTitle = document.querySelectorAll(
    '[data-name="accordion-title"]'
  );

  if (accordionTitle) {
    accordionTitle.forEach((item) => {
      item.addEventListener("click", showContent);
    });
  }

  function showContent() {
    if (this.classList.contains("button--active")) {
      this.classList.remove("button--active");
      this.nextElementSibling.classList.add("content-hidden");
    } else {
      this.classList.add("button--active");
      this.nextElementSibling.classList.remove("content-hidden");
    }
  }
}

accordion();
