
const clickItem = document.getElementById('clickItem');
const modal = document.getElementById('myModal');


clickItem.addEventListener('click', () => {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
});


function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}


window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
