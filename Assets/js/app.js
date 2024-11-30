

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


      data.players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.setAttribute('draggable', 'true');
        playerCard.classList.add('d-flex', 'item2');

        playerCard.innerHTML =
          ` <div class="card-info2"> <p class="position">${player.position}</p>
      <p class="rating">${player.rating}</p>
      <img src="${player.flag}" alt="flag" class="flag" />
      </div>
      <div class="card-image2">
      <img src="${player.photo}" alt="" />
      </div></div>`
          ;

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


// editng player

function openEditModal(id, position, rating, flag, photo, name, physical, defending, dribbling, passing, shooting, pace, logo, club, nationality) {
  document.getElementById('position').value = position;
  document.getElementById('rating').value = rating;
  document.getElementById('flag').value = flag;
  document.getElementById('photo').value = '';
  document.getElementById('Name').value = name;
  document.getElementById('nationality').value = nationality;
  document.getElementById('club').value = club;
  document.getElementById('logo').value = logo;
  document.getElementById('pace').value = pace;
  document.getElementById('shooting').value = shooting;
  document.getElementById('passing').value = passing;
  document.getElementById('dribbling').value = dribbling;
  document.getElementById('defending').value = defending;
  document.getElementById('physical').value = physical;

  
  document.getElementById('edit-player-id').value = id;

  const editModal = new bootstrap.Modal(document.getElementById('Editplayer'));
  editModal.show();
}

function saveEditedPlayer(event) {
  event.preventDefault();

  const id = document.getElementById('edit-player-id').value;

  const updatedPlayer = {
    position: document.getElementById('position').value,
    rating: document.getElementById('rating').value,
    flag: document.getElementById('flag').value,
    photo: document.getElementById('photo').files[0] ? URL.createObjectURL(document.getElementById('photo').files[0]) : '',
    name: document.getElementById('Name').value,
    nationality: document.getElementById('nationality').value,
    club: document.getElementById('club').value,
    logo: document.getElementById('logo').value,
    pace: document.getElementById('pace').value,
    shooting: document.getElementById('shooting').value,
    passing: document.getElementById('passing').value,
    dribbling: document.getElementById('dribbling').value,
    defending: document.getElementById('defending').value,
    physical: document.getElementById('physical').value
  };

  updateplayer(id, updatedPlayer);
}

function updateplayer(id, updatedPlayer) {
  const playerCard = document.getElementById(player-${id});

  if (playerCard) {
    playerCard.querySelector('.position').textContent = updatedPlayer.position;
    playerCard.querySelector('.rating').textContent = updatedPlayer.rating;
    playerCard.querySelector('.flag').src = updatedPlayer.flag;
    playerCard.querySelector('.player-photo').src = updatedPlayer.photo || '';
    playerCard.querySelector('.card-name').textContent = updatedPlayer.name;
    playerCard.querySelector('.nationality').textContent = updatedPlayer.nationality;
    playerCard.querySelector('.club').textContent = updatedPlayer.club;
  }
}

function updateplayer(updatedPlayer) {
  const playerCards = document.querySelectorAll('.player-card');

  playerCards.forEach(card => {
    const playerName = card.querySelector('.card-name').textContent;  

    if (playerName === updatedPlayer.name) {

      card.querySelector('.position').textContent = updatedPlayer.position;
      card.querySelector('.rating').textContent = updatedPlayer.rating;
      card.querySelector('.flag').src = updatedPlayer.flag;
      card.querySelector('.player-photo').src = updatedPlayer.photo || '';  
      card.querySelector('.card-name').textContent = updatedPlayer.name;
      card.querySelector('.nationality').textContent = updatedPlayer.nationality;
      card.querySelector('.club').textContent = updatedPlayer.club;

    }
  });
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

