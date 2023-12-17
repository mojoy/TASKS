function modal() {
  const btn = document.body.querySelector('[data-modal-button]');
  const modal = document.body.querySelector('[data-modal]');
  const btnCloseModal = document.body.querySelector('[data-model-close]');


  btn.addEventListener('click', function() {
    modal.classList.remove('fade-block--hidden');
  })

  btnCloseModal.addEventListener('click', function() {
    modal.classList.add('fade-block--hidden');
  })

  modal.addEventListener('click', function() {
    modal.classList.add('fade-block--hidden');
  })

  modal.querySelector('.modal-box').addEventListener('click', function(event){
    event.stopPropagation(); // запрещаем передачу события передачи клика
  })

}
modal();
