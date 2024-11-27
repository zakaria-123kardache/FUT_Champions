


function f() {
  fetch('player.json') 
    .then(res => res.json())
    .then(data => {
    
      const playercard = document.getElementById('playercard-fitsch');
      playercard.innerHTML = '';

      
      data.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('d-flex', 'item2');

        playerCard.innerHTML = `
          <div class="card-info2">
            <p class="position">${player.position}</p>
            <p class="rating">${player.rating}</p>
            <img src="${player.flag}" alt="flag" class="flag" />
          </div>
          <div class="card-image2">
            <img src="${player.photo}" alt="${player.name}" />
          </div>
        `;

        playercard.appendChild(playerCard);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}


const openModalButton = document.getElementById('openModal');
const semiPage = document.getElementById('semiPage');
const closebtn = document.querySelector('.close');

openModalButton.addEventListener('click', () => {
  semiPage.classList.add('show');
  f(); 
});

closebtn.addEventListener('click', () => {
  semiPage.classList.remove('show');
});




