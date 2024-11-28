function f() {
  fetch('player.json')
    .then(res => res.json())
    .then(data => {
      const playercard = document.getElementById('playercard-fitsch');
      playercard.innerHTML = '';

      data.players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('d-flex', 'item2');
        playerCard.setAttribute('draggable', 'true');
        playerCard.setAttribute('data-player-index', index); 

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

        
        playerCard.addEventListener('dragstart', (event) => {
          isDragging = true;
          event.dataTransfer.setData('playerIndex', index); 
        });
        
        playerCard.addEventListener('dragend', () => {
          isDragging = false;
        });

        playercard.appendChild(playerCard);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

const openModalButton = document.getElementById('openModal');
const semiPage = document.getElementById('semiPage');
const closebtn = document.querySelector('.close');

let isDragging = false; 


openModalButton.addEventListener('click', () => {
  semiPage.classList.add('show');
  f(); 
});


closebtn.addEventListener('click', () => {
  semiPage.classList.remove('show');
});

semiPage.addEventListener('mouseleave', (event) => {
  
  const relatedTarget = event.relatedTarget || event.toElement;
  
  
  if (isDragging) return;
  
  
  if (relatedTarget && semiPage.contains(relatedTarget)) return;
  

  semiPage.classList.remove('show');
});


function enableDrop() {
  const lineupDivs = document.querySelectorAll('.parent1 .div1, .parent1 .div2, .parent1 .div3, .parent1 .div4, .parent1 .div5, .parent1 .div6, .parent1 .div7, .parent1 .div8, .parent1 .div9, .parent1 .div10, .parent1 .div11');

  lineupDivs.forEach(div => {
    div.addEventListener('dragover', (event) => {
      event.preventDefault(); 
    });

    div.addEventListener('drop', (event) => {
      event.preventDefault();
      const playerIndex = event.dataTransfer.getData('playerIndex');
      updateLineup(playerIndex, div);
      semiPage.classList.remove('show'); 
    });
  });
}

function updateLineup(playerIndex, div) {
  fetch('player.json')
    .then(res => res.json())
    .then(data => {
      const player = data.players[playerIndex];
      div.querySelector('.position').textContent = player.position;
      div.querySelector('.rating').textContent = player.rating;
      div.querySelector('.flag').src = player.flag;
      div.querySelector('img').src = player.photo;
    })
    .catch(error => console.error('Error updating lineup:', error));
}


document.addEventListener('DOMContentLoaded', () => {
  enableDrop();
});



function enableDrop() {
  const lineupDivs = document.querySelectorAll('.parent1 .div1, .parent1 .div2, .parent1 .div3, .parent1 .div4, .parent1 .div5, .parent1 .div6, .parent1 .div7, .parent1 .div8, .parent1 .div9, .parent1 .div10, .parent1 .div11');

  lineupDivs.forEach(div => {
    div.addEventListener('dragover', (event) => {
      event.preventDefault(); 
    });

    div.addEventListener('drop', (event) => {
      event.preventDefault();
      const playerIndex = event.dataTransfer.getData('playerIndex');
      updateLineup(playerIndex, div);

      semiPage.classList.remove('show'); 
    });
  });
}


function updateLineup(playerIndex, div) {
  fetch('player.json')
    .then(res => res.json())
    .then(data => {
      const player = data.players[playerIndex];
      div.querySelector('.position').textContent = player.position;
      div.querySelector('.rating').textContent = player.rating;
      div.querySelector('.flag').src = player.flag;
      div.querySelector('img').src = player.photo;
    })
    .catch(error => console.error('Error updating lineup:', error));
}


document.addEventListener('DOMContentLoaded', () => {
  enableDrop();
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

{/* <button onclick="editPlayer"></button> */}


