function openClose() {
  const btn = document.body.querySelector(".triggers-block .button");
  const box = document.body.querySelector(".triggers-block");

  if (btn) {
    btn.addEventListener("click", function () {
      if (box.classList.contains("content-hidden")) {
        box.classList.remove("content-hidden");
        btn.innerHTML = "закрыть блок";
      } else {
        box.classList.add("content-hidden");
        btn.innerHTML = "открыть блок";
      }
    });
  }
}
openClose();
