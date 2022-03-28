// button like

const buttonLike = document.getElementById('[js-button-likes]');
const countLikes = document.querySelector('[js-give-likes]');
const iconLike = document.querySelector('[js-icon-likes]')

// function to save and print the codes from Editor to Community

const communityPojects = document.querySelector('[js-comu-projects]')

new function () {
    showMyProjects()
}

function showMyProjects() {
    if (localStorage.length == 0) {
        return
    }
    let project = []
    for (let i = 0; i < localStorage.length; i++) {
        project.push(JSON.parse(localStorage.getItem(i)))
    }
    project.forEach(printNewProjects => {
        communityPojects.innerHTML += newCard(printNewProjects)
        const codeHtml = communityPojects.querySelector(`[data-id="${printNewProjects.id}"]`)
    })
     
}

function newCard(printNewProjects) {  //card creaction to push on HTML
      let card = `
         <div class="your-code-card">

            <div class="your-code" style="background-color:${printNewProjects.projectDetails.color}" js-management>
              <code class="box__editor-card hljs" js-editor>${printNewProjects.projectDetails.code}</code>
            </div>
          
            <div class="your-code-info"
              <h2 class="card__info" js-name-project>${printNewProjects.projectDetails.name}</h2>
              <h3 class="card__info">${printNewProjects.projectDetails.language}</h3>
              <p class="card__info" js-describe-project>${printNewProjects.projectDetails.descripction}</p>
            </div>

            <div class="your-code-description">
              <button class="card__management card__management__comment--comments" js-comments="">
                <img src="img/comment-solid.svg" alt="icon comment" class="card__management-comment">
                <span js-comments="${printNewProjects.id}">${printNewProjects.projectDetails.comments}</span>
              </button>

              <button class="card__management card__management__like--like" js-button-likes>
                <img src="img/heart-notLike.svg" alt="like icon" class="card__management--like" js-icon-likes>
                <span js-give-likes>${printNewProjects.projectDetails.allMyLikes}</span>
              </button>

              <button class="card__management card__management__delete" js-delet-card>
                <img src="img/trash-solid.svg" alt="Delete icon" class="card__management-delete" js-delete-card>
              </button> 

              <button class="card__management_profile"> 
                <img src="img/d1.jpg" alt="User icon" class="card-profile">
                <p class="card-profile-name">Nina</p>
              </button>  
            </div>
        
        </div>
   `
      return card
}

  
//    update LocalSotrage


      function updateLocalStorage() {
          
        const saveCodes = JSON.parse(localStorage.getItem('newProject')) || []

        saveCodes.forEach(card => {
            const updateQuantity = document.querySelector(`[js-give-likes="${card.id}"]`).textContent

            if (updateQuantity != card.projectDetails.allMyLikes) {
                card.projectDetails.likeCount = !card.projectDetails.likeCount
            }

            card.projectDetails.allMyLikes = updateQuantity

            localStorage.setItem('newProject', JSON.stringify(saveCodes))
        })
    }

