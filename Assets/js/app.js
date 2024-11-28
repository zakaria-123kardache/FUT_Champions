

function f() {
  fetch('player.json') 
  .then(res => res.json())
  .then(data => {
    
    const playercard = document.getElementById('playercard-fitsch');
    playercard.innerHTML = '';
    
    
    data.players.forEach(player => {
      const playerCard = document.createElement('div');
      playerCard.setAttribute('draggable', 'true');
      playerCard.classList.add('d-flex', 'item2');
      
      playerCard.innerHTML = 
      ` <div class="d-flex item2" dragable="true"><div class="card-info2">
      <p class="position">${player.position}</p>
      <p class="rating">${player.rating}</p>
      <img src="${player.flag}" alt="flag" class="flag" />
      </div>
      <div class="card-image2">
      <img src="${player.photo}" alt="${player.name}" />
      </div></div></div>`
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

function dragItem(){
  let players = document.querySelectorAll('.d-flex[draggable="true"]');
  players.forEach(player =>{

  player.addEventListener('dragstart' , function(e){
    drag = player;
    player.style.opacity = '0.5';
    // console.log('dragstar');
    // console.log(player);
    // console.log('e.target');
  })

  player.addEventListener('dragend' , function(e){
    drag = null;
    player.style.opacity = '1';
    // console.log('dragend');
    // console.log(player);
    // console.log('e.target');
  })
  divs.forEach(div =>{
    div.addEventListener('dragover',function(e){
      e.preventDefault();

      console.log('dragover');
      this.style.background = '#090';
    })

    div.addEventListener('dragleave', function(){
      this.style.background = '##333';
    })

    div.addEventListener('drop',function(){
      div.append(drap);
    })


  })

 })

};





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
  
  <div class="zakaria">
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


