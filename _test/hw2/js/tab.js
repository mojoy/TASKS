function tabs() {
  const dataTab = document.querySelectorAll("[data-tab]");
  const contentTab = document.querySelectorAll("[data-tab-content]");

  if (dataTab.length > 0) {
    dataTab.forEach((item) => {
      item.addEventListener("click", function () {
        dataTab.forEach((tabBtn) => {
          tabBtn.classList.remove("tab-nav__item--active");
        });

        this.classList.add("tab-nav__item--active");

        contentTab.forEach((item) => {
          item.classList.add("tab-content--hidden");
        });

        const dataTabContent = document.querySelector(
          '.tab-content[data-tab-content="' + this.dataset.tab + '"]'
        );
        this.classList.add("tab-nav__item--active");

        if (dataTabContent) {
          dataTabContent.classList.remove("tab-content--hidden");
        }
      });
    });
  }
}

tabs();
