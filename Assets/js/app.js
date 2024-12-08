
let fetchedData;
function f() {
  fetch('player.json')
    .then(res => res.json())
    .then(data => {
      fetchedData = data;
      data.players.forEach((player, index) => {
        if (!player.id) {
          player.id = index + 1;
        }
      });

      const playercard = document.getElementById('playercard-fitsch');
      playercard.innerHTML = '';

      data.players.forEach((player, index) => {
        const playerCard = document.createElement('div');
        playerCard.setAttribute('draggable', 'true');
        playerCard.classList.add('d-flex', 'item2');
        playerCard.setAttribute('data-player-id', player.id);

        playerCard.innerHTML = `
          <div class="card-info2">
            <p class="position">${player.position}</p>
            <p class="rating">${player.rating}</p>
            <img src="${player.flag}" alt="flag" class="flag" />
          </div>
          <div class="card-image2">
            <img src="${player.photo}" alt="" />
          </div>
         <div class="flex flex-column items-center">
  <i class="fas fa-ellipsis-v cursor-pointer flex-column text-gray-600 text-l option"></i>
  <div class="flex flex-column hidden actionButton">

    <button class="flex items-center " 
            onclick="openEditModal('${player.id}')" 
            data-bs-toggle="modal" 
            data-bs-target="#Editplayer">
      <i class="fas fa-edit mr-2"></i>
     
    </button>
    <button class="flex items-center bg-hidden" 
            onclick="deletPlayer(${player.id})">
      <i class="fas fa-trash-alt mr-2"></i>
     
    </button>
    <button class="flex items-center " 
            onclick="showPlayerDetails(${player.id})">
      <i class="fas fa-info-circle mr-2"></i>
      
    </button>
  </div>
</div>
        `;

        playercard.appendChild(playerCard);
      });

      const options = document.querySelectorAll('.option');
      const actionButtons = document.querySelectorAll('.actionButton');

      options.forEach((option, index) => {
        option.addEventListener('click', () => {
          actionButtons[index].classList.toggle('hidden');
        });
      });

      dragItem();
    })
    .catch(error => console.error('Error fetching data:', error));
}



let drag = null;

let divs = document.querySelectorAll('.parent1 > div');

function dragItem() {
  let players = document.querySelectorAll('.d-flex[draggable="true"]');
  players.forEach(player => {

    player.addEventListener('dragstart', function (e) {
      drag = player;
      player.style.opacity = '0.5';
      // console.log('dragstar');
      // console.log(player);.
      // console.log('e.target');
    })

    player.addEventListener('dragend', function (e) {
      drag = null;
      player.style.opacity = '1';
      // console.log('dragend');
      // console.log(player);
      // console.log('e.target');
    })
    divs.forEach(div => {
      div.addEventListener('dragover', function (e) {
        e.preventDefault();

        console.log('dragover');
        // this.style.background = '#090';
      })

      div.addEventListener('dragleave', function () {
        // this.style.background = '##333';
      })

      // div.addEventListener('drop', function () {
      //   // div.append(drap);
      //   drag.className = 'parent1 d-flex item2';
      //   this.appendChild(drag);
      // })

      div.addEventListener('drop', function () {

        const playerPosition = drag.querySelector('.position').textContent.trim();
        const divPosition = this.getAttribute('data-position');

        const messag = document.getElementById('messag');



        if (playerPosition === divPosition) {

          messag.textContent = '';
          messag.classList.add('hidden');

          if (!this.hasChildNodes()) {

            this.appendChild(drag);
          } else {
            const playerstaduim = this.firstChild;
            const switsch = drag.parentNode;

            this.replaceChild(drag, playerstaduim);
            switsch.appendChild(playerstaduim);
          }
        } else {

          messag.textContent = `can't remplaces das ${playerPosition} here`;
          messag.classList.remove('hidden');

        }
        setTimeout(() => {
          messag.classList.add('hidden');
        }, 3000);


      });

    });
  });
};

function showmessag(message) {
  const messag = document.getElementById('messag');
  messag.textContent = message;
  messag.classList.remove('hidden');


  setTimeout(() => {
    messag.classList.add('hidden');
  }, 3000);
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


let currentPlayerId = 33;

function addPlayer() {
  // console.log("Adding player...");
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
    console.error("Missing fields");
    alert("Please fill in all fields.");
    return;
  }

  let imageSrc = "";
  if (photo) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageSrc = e.target.result;
      console.log("Image source:", imageSrc);

      addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc, currentPlayerId);
      currentPlayerId++;
      closeModal();
    };
    reader.readAsDataURL(photo);
  } else {
    addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc, currentPlayerId);
    currentPlayerId++;
    closeModal();
  }
}

function closeModal() {
  var modalElement = document.getElementById('addPlayerModal');
  var modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}





function addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc, playerId) {
  const container = document.getElementById('playercard-fitsch');const card = document.createElement('div');
  card.classList.add('d-flex', 'item2');
  card.setAttribute('data-player-id', playerId);
  card.setAttribute('draggable', 'true');

  card.innerHTML = `
    <div class="card-info2">
      <p class="position">${position}</p>
      <p class="rating">${shooting}</p>
      <img src="${flag}" alt="flag" class="flag" />
      <p class="player-name"style="display:none;">${Name}</p>
      <p class="club-name" style="display:none;">${club}</p>
      <p class="pace" style="display:none;">${pace}</p>
      <p class="shooting" style="display:none;">${shooting}</p>
      <p class="passing" style="display:none;">${passing}</p>
      <p class="dribbling" style="display:none;">${dribbling}</p>
      <p class="defending" style="display:none;">${defending}</p>
      <p class="physical" style="display:none;">${physical}</p>
      <img src="${logo}" alt="club logo" class="club-logo" style="display:none;" />
      <img src="${imageSrc}" alt="player" class="player-photo" style="display:none;" />
    </div>
    <div class="card-image2">
      <img src="${imageSrc}" alt="${Name}" />
    </div>
    <div class="flex flex-column items-center">
  <i class="fas fa-ellipsis-v cursor-pointer flex-column text-gray-600 text-xl option"></i>
  <div class="flex flex-column hidden actionButton">

  <button class="btn" onclick="openEditPlayerModal(${playerId})">
    
      <i class="fas fa-edit mr-2"></i>
     
    </button>
    <button class="btn  delete-btn" onclick="deletPlayer(${playerId})">
      
   
      <i class="fas fa-trash-alt mr-2"></i>
     
    </button>
    
  </div>
</div>
  `;
  const options = document.querySelectorAll('.option');
  const actionButtons = document.querySelectorAll('.actionButton');

  options.forEach((option, index) => {
    option.addEventListener('click', () => {
      actionButtons[index].classList.toggle('hidden');
    });
  });


  container.appendChild(card);
  dragItem();
}

function closeModal() {
  var modalElement = document.getElementById('exampleModal');
  var modal = bootstrap.Modal.getInstance(modalElement);
  if (modal) {
    modal.hide();
  }
}



// editng player

function openEditModal(playerId) {
  const playerCard = document.querySelector(`.item2[data-player-id="${playerId}"]`);

  if (playerCard) {
    const position = playerCard.querySelector('.position').textContent;
    const rating = playerCard.querySelector('.rating').textContent;
    const flagSrc = playerCard.querySelector('.flag').src;
    const photoSrc = playerCard.querySelector('.card-image2 img').src;
    const name = playerCard.querySelector('.player-name') ? playerCard.querySelector('.player-name').textContent : '';
    const club = playerCard.querySelector('.club-name') ? playerCard.querySelector('.club-name').textContent : '';
    const logoSrc = playerCard.querySelector('.club-logo') ? playerCard.querySelector('.club-logo').src : '';
    const pace = playerCard.querySelector('.pace') ? playerCard.querySelector('.pace').textContent : '';
    const shooting = playerCard.querySelector('.shooting') ? playerCard.querySelector('.shooting').textContent : '';
    const passing = playerCard.querySelector('.passing') ? playerCard.querySelector('.passing').textContent : '';
    const dribbling = playerCard.querySelector('.dribbling') ? playerCard.querySelector('.dribbling').textContent : '';
    const defending = playerCard.querySelector('.defending') ? playerCard.querySelector('.defending').textContent : '';
    const physical = playerCard.querySelector('.physical') ? playerCard.querySelector('.physical').textContent : '';

    document.getElementById('edit-player-id').value = playerId;
    document.getElementById('edit-position').value = position;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-nationality').value = '';
    document.getElementById('edit-flag').value = flagSrc;
    document.getElementById('edit-club').value = club;
    document.getElementById('edit-logo').value = logoSrc;
    document.getElementById('edit-pace').value = pace;
    document.getElementById('edit-shooting').value = shooting;
    document.getElementById('edit-passing').value = passing;
    document.getElementById('edit-dribbling').value = dribbling;
    document.getElementById('edit-defending').value = defending;
    document.getElementById('edit-physical').value = physical;


    document.getElementById('Editplayer').setAttribute('data-current-player-id', playerId);
  }
}

function updatePlayer() {

  const playerId = document.getElementById('Editplayer').getAttribute('data-current-player-id');
  const playerCard = document.querySelector(`.item2[data-player-id="${playerId}"]`);

  if (playerCard) {
    const newPace = document.getElementById('edit-pace').value;
    const newShooting = document.getElementById('edit-shooting').value;
    const newPassing = document.getElementById('edit-passing').value;
    const newDribbling = document.getElementById('edit-dribbling').value;
    const newDefending = document.getElementById('edit-defending').value;
    const newPhysical = document.getElementById('edit-physical').value;
    const newPosition = document.getElementById('edit-position').value;
    const newName = document.getElementById('edit-name').value;
    const newNationality = document.getElementById('edit-nationality').value;
    const newFlag = document.getElementById('edit-flag').value;
    const newClub = document.getElementById('edit-club').value;
    const newLogo = document.getElementById('edit-logo').value;
    const newRating = document.getElementById('edit-rating').value;
    const newPhotoFile = document.getElementById('edit-photo').files[0];

    const positionEl = playerCard.querySelector('.position');
    if (positionEl) positionEl.textContent = newPosition;

    const RatingEl = playerCard.querySelector('.rating');
    if (positionEl) positionEl.textContent = newRating;

    const nameEl = playerCard.querySelector('.player-name');
    if (nameEl) nameEl.textContent = newName;

    const clubEl = playerCard.querySelector('.club-name');
    if (clubEl) clubEl.textContent = newClub;

    const logoEl = playerCard.querySelector('.club-logo');
    if (logoEl) logoEl.src = newLogo;

    const flagEl = playerCard.querySelector('.flag');
    if (flagEl) flagEl.src = newFlag;

    if (newPhotoFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const photoEl = playerCard.querySelector('.card-image2 img');
        if (photoEl) photoEl.src = e.target.result;
      };
      reader.readAsDataURL(newPhotoFile);
    }

    const statsToUpdate = [
      { selector: '.pace', value: newPace },
      { selector: '.shooting', value: newShooting },
      { selector: '.passing', value: newPassing },
      { selector: '.dribbling', value: newDribbling },
      { selector: '.defending', value: newDefending },
      { selector: '.physical', value: newPhysical },
      { selector: '.position', value: newPosition },
      { selector: '.Name', value: newName },
      { selector: '.nationality', value: newNationality },
      { selector: '.flag', value: newFlag },
      { selector: '.club', value: newClub },
      { selector: '.logo', value: newLogo },
      { selector: '.rating', value: newRating },
      { selector: '.photo', value: newPhotoFile },
    ];

    statsToUpdate.forEach(stat => {
      const statEl = playerCard.querySelector(stat.selector);
      if (statEl) statEl.textContent = stat.value;
    });

    var modalElement = document.getElementById('Editplayer');
    var modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
}

// delete player json
function deletPlayer(playerId) {

  const confirme = confirm('confirm ');

  if (confirme) {
    const playerCard = document.querySelector(`.item2[data-player-id="${playerId}"]`);

    if (playerCard) {
      playerCard.remove();
      alert('delet Est acccept');
    }
  }
}

// Editing Creating Playr Information 

function openEditPlayerModal(playerId) {

  const allCards = document.querySelectorAll('.item2');
  const playerCard = document.querySelector(`.item2[data-player-id="${playerId}"]`);

  if (!playerCard) {
    console.error("Player card not found for ID:", playerId);
    return;
  }

  const position = playerCard.querySelector('.position').textContent;
  const rating = playerCard.querySelector('.rating').textContent;
  const name = playerCard.querySelector('.player-name').textContent;
  const club = playerCard.querySelector('.club-name').textContent;
  const pace = playerCard.querySelector('.pace').textContent;
  const shooting = playerCard.querySelector('.shooting').textContent;
  const passing = playerCard.querySelector('.passing').textContent;
  const dribbling = playerCard.querySelector('.dribbling').textContent;
  const defending = playerCard.querySelector('.defending').textContent;
  const physical = playerCard.querySelector('.physical').textContent;
  const flag = playerCard.querySelector('.flag').src;
  const logo = playerCard.querySelector('.club-logo').src;
  const photo = playerCard.querySelector('.player-photo').src;

  document.getElementById('CRedit-position').value = position;
  document.getElementById('CRedit-rating').value = rating;
  document.getElementById('CRedit-name').value = name;
  document.getElementById('CRedit-club').value = club;
  document.getElementById('CRedit-pace').value = pace;
  document.getElementById('CRedit-shooting').value = shooting;
  document.getElementById('CRedit-passing').value = passing;
  document.getElementById('CRedit-dribbling').value = dribbling;
  document.getElementById('CRedit-defending').value = defending;
  document.getElementById('CRedit-physical').value = physical;
  document.getElementById('CRedit-flag').value = flag;
  document.getElementById('CRedit-logo').value = logo;

  document.getElementById('edit-player-modal').setAttribute('data-current-player-id', playerId);


  const editModal = new bootstrap.Modal(document.getElementById('edit-player-modal'), {
    keyboard: true,
    focus: true
  });
  editModal.show();
}

function savePlayerEdits() {
  const playerId = document.getElementById('edit-player-modal')
    .getAttribute('data-current-player-id');

  const playerCard = document.querySelector(`.item2[data-player-id="${playerId}"]`);

  if (!playerCard) {
    console.error("Player card not found");
    return;
  }

  const position = document.getElementById('CRedit-position').value;
  const rating = document.getElementById('CRedit-rating').value;
  const name = document.getElementById('CRedit-name').value;
  const club = document.getElementById('CRedit-club').value;
  const pace = document.getElementById('CRedit-pace').value;
  const shooting = document.getElementById('CRedit-shooting').value;
  const passing = document.getElementById('CRedit-passing').value;
  const dribbling = document.getElementById('CRedit-dribbling').value;
  const defending = document.getElementById('CRedit-defending').value;
  const physical = document.getElementById('CRedit-physical').value;
  const flag = document.getElementById('CRedit-flag').value;
  const logo = document.getElementById('CRedit-logo').value;

  playerCard.querySelector('.position').textContent = position;
  playerCard.querySelector('.rating').textContent = rating;
  playerCard.querySelector('.player-name').textContent = name;
  playerCard.querySelector('.club-name').textContent = club;
  playerCard.querySelector('.pace').textContent = pace;
  playerCard.querySelector('.shooting').textContent = shooting;
  playerCard.querySelector('.passing').textContent = passing;
  playerCard.querySelector('.dribbling').textContent = dribbling;
  playerCard.querySelector('.defending').textContent = defending;
  playerCard.querySelector('.physical').textContent = physical;


  const flagElement = playerCard.querySelector('.flag');
  if (flagElement) flagElement.src = flag;

  const logoElement = playerCard.querySelector('.club-logo');
  if (logoElement) logoElement.src = logo;

  const editModal = bootstrap.Modal.getInstance(document.getElementById('edit-player-modal'));
  if (editModal) {
    editModal.hide();
  }
}


// afficher le deati de player

function showPlayerDetails(playerId) {
  
  const player = fetchedData.players.find(p => p.id == playerId);

  if (player) {
    const detailsCard = document.querySelector('.card-affichage');

    let backgroundImage = '';
    if (player.rating > 1 && player.rating <= 83) {
        backgroundImage = "url('./Assets/img/badge_gold.webp')"; 
    } else if (player.rating > 83 && player.rating <= 87) {
        backgroundImage = 'url("./Assets/img/badge_total_rush.webp")'; 
    } else if (player.rating > 87) {
        backgroundImage = 'url("./Assets/img/badge_ballon_dor.webp")'; 
    }

    
    detailsCard.innerHTML = `
      <div class="left-card">
        <div>
          <p style="display:none;">${player.rating}</p>
          <img class="logo-player"style="display:none;" src="${player.logo}" alt="logo">
          <img class="flag-player"style="display:none;" src="${player.flag}" alt="flag">
        </div>
        <div class="ffff"></div>
      </div>
      <div class="right-right">
        <div class="imageplayercard">
          
            <div>
          <p >${player.rating}</p>
          <img class="logo-player" src="${player.logo}" alt="logo">
          <img class="flag-player"src="${player.flag}" alt="flag">
        </div>
        <img src="${player.photo}" alt="imgplayer">
        </div> 
        <div class="nameplayercard">
          <p>${player.name}</p>
        </div>
        <div class="informationplayer">
          <div class="left-info">
            <div class="stat-value">
              <p>${player.pace}</p>
              <p>${player.shooting}</p>
              <p>${player.passing}</p>
            </div>
            <div class="stat-label">
              <p>Pac</p>
              <p>Sho</p>
              <p>Pas</p>
            </div>
          </div>
          <div class="right-info">
            <div class="stat-value">
              <p>${player.dribbling}</p>
              <p>${player.defending}</p>
              <p>${player.physical}</p>
            </div>
            <div class="stat-label">
              <p>Dri</p>
              <p>Def</p>
              <p>Phy</p>
            </div>
          </div>
        </div>
      </div>
    `;
    detailsCard.style.backgroundImage = backgroundImage;
    detailsCard.style.display = 'block';
  }
}


