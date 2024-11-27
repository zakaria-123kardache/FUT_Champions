


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






function openModal() {
  var modalElement = document.getElementById('addPlayerModal');
  var modal = new bootstrap.Modal(modalElement); 
  modal.show(); 
}


function addPlayer() {
  const position = document.getElementById('position').value;
  const Name = document.getElementById('Name').value;
  const nationality = document.getElementById('nationality').value;
  const photo = document.getElementById('photo').files[0];
  const flag = document.getElementById('flag').value;
  const club = document.getElementById('club').value;
  const logo = document.getElementById('logo').value;
  const rating = document.getElementById('rating').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;

  
  if (!position || !Name || !nationality || !photo || !flag || !rating || !logo || !club || !pace || !shooting || !passing || !dribbling || !defending || !physical) {
    alert("Please fill in all fields.");
    return;
  }

  let imageSrc = "";
  if (photo) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageSrc = e.target.result;
      addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc);
      closeModal();  
    };
    reader.readAsDataURL(photo);
  } else {
    addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc);
    closeModal();  
  }
}


function closeModal() {
  var modalElement = document.getElementById('addPlayerModal');
  var modal = bootstrap.Modal.getInstance(modalElement); 
  modal.hide(); 
}


function addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc) {
  const container = document.getElementById('playercard-fitsch');
  const card =  `
  
  <div class="d-flex item2">
      <div class="card-info2">
        <p class="position">${position}</p>
        <p class="rating">${shooting}</p>
        <img src="${flag}" alt="" class="flag" />
      </div>
      <div class="card-image2">
        <img src="${imageSrc}" alt="" />
      </div>
    </div>
  
`;


    
  container.innerHTML += card;
}


// function showmodal(){
//   console.log("jajfkajf")
//   document.getElementById("modalsecond").style.display = "block"
// }




