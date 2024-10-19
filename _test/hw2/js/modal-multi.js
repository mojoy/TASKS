function modal() {
  const modalButtons = document.body.querySelectorAll('[data-button]');
  const modalAll = document.body.querySelectorAll('[data-modal]');
  const modalBtnClose = document.body.querySelectorAll('[data-model-close]');
  
  modalButtons.forEach(function(item) {
    item.addEventListener('click', function() {
      const modalId = this.dataset.button;
      const modal = document.querySelector('#' + modalId);

      modal.classList.remove('fade-block--hidden');

      modal.querySelector('.modal-box').addEventListener('click', function(event){
        event.stopPropagation(); // запрещаем передачу события передачи клика
      })

    })
  })

  modalBtnClose.forEach(function(item) {
    item.addEventListener('click', function() {
      const modal = this.closest('[data-modal]');
      modal.classList.add('fade-block--hidden');
    })
  })

  modalAll.forEach(function(item) {
    item.addEventListener('click', function() {
      this.classList.add('fade-block--hidden');
    })
  })

}
modal();
