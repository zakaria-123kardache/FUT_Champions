

function f() {
  fetch('player.json')
    .then(res => res.json())
    .then(data => {
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
          <button class="btn btn-warning edit-btn" 
              onclick="openEditModal('${player.id}')" 
              data-bs-toggle="modal" 
              data-bs-target="#Editplayer">
              Edit
            </button>
             <button class="btn btn-danger delete-player" onclick="deletPlayer(${player.id})">delet</button>
        `;

        playercard.appendChild(playerCard);
      });
      
      dragItem();
    })
    .catch(error => console.error('Error fetching data:', error));
}
let drag = null;
// let divs = Document.querySelectorAll('.parent1.div1 .parent1.div2 .parent1.div3 .parent1.div4 .parent1.div5 .parent1.div6 .parent1.div7 .parent1.div 8 .parent1.div9 .parent1.div10 .parent1.div10');
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
        }else {
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
 

// function validateFormation() {
//   let valid = true;

//   divs.forEach(div => {
//     const divPosition = div.getAttribute('data-position');
//     const player = div.querySelector('.position');

//     if (!player || player.textContent.trim() !== divPosition) {
//       valid = false;
//     }
//   });

//   if (valid) {
//     alert("formation players accepte");
//   } else {
//     alert("is it erur in Formation u can changes");
//   }
// }


// document.getElementById('validateBtn').addEventListener('click', validateFormation);

// waring 

// form reset





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
  }
    closeModal();  
  }


function closeModal() {
  var modalElement = document.getElementById('addPlayerModal');
  var modal = bootstrap.Modal.getInstance(modalElement); 
  modal.hide(); 
}




function addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc) {
  const container = document.getElementById('playercard-fitsch');
  const card = document.createElement('div');
  card.classList.add('d-flex', 'item2');
  card.setAttribute('draggable', 'true');

  card.innerHTML = `
    <div class="card-info2">
      <p class="position">${position}</p>
      <p class="rating">${shooting}</p>
      <img src="${flag}" alt="flag" class="flag" />
    </div>
    <div class="card-image2">
      <img src="${imageSrc}" alt="" />
    </div>
  `;
   
  container.appendChild(card);
  dragItem();
}


// 

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
      reader.onload = function(e) {
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





// function showmodal(){
//   console.log("jajfkajf")
//   document.getElementById("modalsecond").style.display = "block"
// }



{/* <button class="btn btn-warning edit-btn" onclick="openEditModal('${player.position}', '${player.rating}', '${player.flag}', '${player.photo}', '${player.Name}', '${player.physical}','${player.defending}','${player.dribbling}'
  ,'${player.passing}','${player.shooting}','${player.pace}','${player.logo}','${player.club}','${player.nationality}')">Edit</button>  */}
  // playerCard.setAttribute('id', `player-${player.id}`); 
  // <button class="btn btn-warning edit-btn" data-bs-toggle="modal" data-bs-target="#Editplayer" onclick="openEditModal('${player.id}', '${player.position}'
  // , '${player.rating}', '${player.flag}', '${player.photo}', '${player.name}', '${player.physical}', '${player.defending}', '${player.dribbling}',
  //  '${player.passing}', '${player.shooting}', '${player.pace}', '${player.logo}', '${player.club}', '${player.nationality}')">Edit</button>

