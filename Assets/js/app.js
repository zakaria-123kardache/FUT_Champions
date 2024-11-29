

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
  if(Name.value === !'' || Name == null){
    error.push('name of player is important')
  }
  if(Name.value.length <8){
    error.push('Club name shold be more of 6 caractere')
  }
  if(Name.value.length >20){
    error.push('Club name shold be more au moin 20 caractere')
  }


  if(club.value.length <8){
    error.push('Club name of clube shold be more of 6 caractere')
  }
  if(club.value.length >20){
    error.push('Club name of clube shold be more au moin 20 caractere')
  }

  if(club.value === !'' || Name == null){
    error.push('club is important Write a club name ')
  }
  
  if(nationality.value === (url[i].value[0] == 'h' || url[i].value[1] == 't' || url[i].value[2] == 't' || url[i].value[3] == 'p' 
    || url[i].value[4] == 's' || url[i].value[5] == ':' || url[i].value[6] == '/' || url[i].value[7] == '/' || url[i-1].value[i-1] == '.png') ){
    error.push('Url is important')
  }
  if(flag.value === (url[i].value[0] == 'h' || url[i].value[1] == 't' || url[i].value[2] == 't' || url[i].value[3] == 'p' 
    || url[i].value[4] == 's' || url[i].value[5] == ':' || url[i].value[6] == '/' || url[i].value[7] == '/' || url[i-1].value[i-1] == '.png') ){
    error.push('Url is important')
  }
  if(logo.value === (url[i].value[0] == 'h' || url[i].value[1] == 't' || url[i].value[2] == 't' || url[i].value[3] == 'p' 
    || url[i].value[4] == 's' || url[i].value[5] == ':' || url[i].value[6] == '/' || url[i].value[7] == '/' || url[i-1].value[i-1] == '.png') ){
    error.push('Url is important')
  }


  // 
  // (url[i].value[0] == 'h' || url[i].value[1] == 't' || url[i].value[2] == 't' || url[i].value[3] == 'p' 
  //   || url[i].value[4] == 's' || url[i].value[5] == ':' || url[i].value[6] == '/' || url[i].value[7] == '/' || url[i-1].value[i-1] == '.png')
  // https://.png
  // 

  




  if(error.length > 0){
    e.preventDefault();
    errorel.innerHTML= error.join('<br>');
  }
  

  // alert('form');
 })




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




