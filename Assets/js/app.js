

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
      <img src="${player.photo}" alt="" />
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


let errorel = document.getElementById('error');
function addPlayer() {
  const form = document.getElementById('form');
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

 form.addEventListener('submit',function(e){
  
  let error = [];


if (Name.trim() === '') {
  error.push(' entre name of player is important');
}
if (Name.length < 6) {
  error.push('name est long');
}
if (Name.length > 20) {
  error.push('Name est court');
}


if(club.trim() === '') {
  error.push('Club name of player is important');
}
if(club.length < 6) {
  error.push('Club name est long');
}
if(club.value.length > 20) {
  error.push('Club name est court');
}

if (physical.trim() === '' || physical == null){
  error.push('Pyhysical is important Write a Physicql nu;ber ')
}
if(physical<= 1 || physical > 100){
  error.push('error just enter biywen a 1 to 100 ')
}

if(defending.trim() === '' || defending == null){
  error.push('defending is important Write a defending nu;ber ')
}
if(defending <= 1 && defending > 100){
  error.push('error defending just enter biywen a 1 to 100 ')
}

if(dribbling.trim() === '' || dribbling == null){
  error.push('dribbling is important Write a dribbling nu;ber ')
}
if(dribbling <= 1 && dribbling > 100){
  error.push('error dribbling just enter biywen a 1 to 100 ')
}

if(passing.trim() === '' || passing == null){
  error.push('passing is important Write a passing nu;ber ')
}
if(passing <= 1 && passing > 100){
  error.push('error passing just enter biywen a 1 to 100 ')
}

if(shooting.trim() === '' || shooting == null){
  error.push('shooting is important Write a shooting nu;ber ')
}
if(shooting <= 1 && shooting > 100){
  error.push('error shooting just enter biywen a 1 to 100 ')
}

if(pace.trim() === '' || pace == null){
  error.push('pace is important Write a pace nu;ber ')
}
if(pace <= 1 && pace > 100){
  error.push('error pace just enter biywen a 1 to 100 ')
}

if(shooting.trim() === '' || shooting == null){
  error.push('shooting is important Write a pace nu;ber ')
}
if(shooting <= 1 && shooting > 100){
  error.push('error shooting just enter biywen a 1 to 100 ')
}



      function validurl(url) {
        return url && 
               url.startsWith('https://') && 
               url.endsWith('.png');
      }
      
      if (!validurl(nationality.value)) {
        error.push('Nationality URL is important');
      }
      
      if (!validurl(flag.value)) {
        error.push('Flag URL is important');
      }
      
      if (!validurl(logo.value)) {
        error.push('Logo URL is important');
      }


  if(error.length > 0){
    e.preventDefault();
    errorel.innerHTML= error.join('<br>');
  }else 
 

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
)};



function closeModal() {
  var modalElement = document.getElementById('addPlayerModal');
  var modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}



function addCard(position, physical, defending, dribbling, passing, shooting, club, pace, logo, flag, nationality, Name, imageSrc) {
  const container = document.getElementById('playercard-fitsch');
  const card =  ` <div class="d-flex item2" dragable="true"><div class="card-info2">
  <p class="position">${position}</p>
  <p class="rating">${shooting}</p>
  <img src="${flag}" alt="flag" class="flag" />
  </div>
  <div class="card-image2">
  <img src="${imageSrc}" alt="" />
  </div></div></div>`;

  container.innerHTML += card;
}


// function showmodal(){
//   console.log("jajfkajf")
//   document.getElementById("modalsecond").style.display = "block"
// }

{/* <button onclick="editPlayer"></button> */ }



