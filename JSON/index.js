//(() => { 
const boxEditor = document.querySelector('[js-box-editor]');
const code = document.querySelector('[js-editor]');
const borderBox = document.querySelector('[js-border-color]');
const activeHighlight = document.querySelector('[js-button-hl]');
const selectLanguage = document.querySelector('[js-select-language]');
const saveButton = document.querySelector('[js-save-button]');
const popAlert = document.querySelector('[js-alert-message]');
const projectDescribe = document.querySelector('[js-describe-project]');
const projectName = document.querySelector('[js-name-project]');
const color = document.querySelector('[js-input-color]')

// color-picker, function to change the border color 

color.addEventListener('change', changeColor);

function changeColor() {
     borderBox.style.backgroundColor = color.value;
}

// active Highlight on click

activeHighlight.addEventListener('click', () => {
    initHighlight();
});

function initHighlight() {
    let newCode = boxEditor.innerText
    boxEditor.innerHTML = `<code type="textarea" ${selectLanguage.value} contenteditable="true" class="box__editor hljs" aria-label="Code Editor" js-editor></code>`
    boxEditor.querySelector('code').textContent = newCode
    hljs.highlightElement(boxEditor.querySelector('code'))
} 

// Save your project

saveButton.addEventListener('click', () => {
 
    if (typeof(Storage) !== "undefined") {
        
            const newProject = grabCode() 
            saveLocalStorage(newProject) 
         
    }else{
        console.log("nao suporta")
    }
}) 

function grabCode(){
    let newProject = {
        'id': creatNewId(),
        'projectDetails': {
            'border': color.value,
            'color': color.value,
            'name': projectName.value,
            'descripction': projectDescribe.value,
            'language': selectLanguage.value,
            'code': boxEditor.querySelector('code').innerText,
            'allMyLikes': 0,
            'likeCount': false,
            'comments': 0,
            'userPic': "./img/d1.jpg",
            'userName': "@Helo, Nina"
        }
    }
    return newProject
}
function creatNewId() {
        return localStorage.length    
}

function saveLocalStorage(objectJson) {
    localStorage.setItem(objectJson.id, JSON.stringify(objectJson))
}

// Search button  ***under construction***

const searchButton = document.querySelector('[js-input-search]')
const card = document.querySelectorAll('.card__info')

searchButton.addEventListener('input', () => {
     
    card.forEach(newProject => {
        const fastSearch = new RegExp(this.value, 'i')
        
        if (!fastSearch.test(projectName) && !fastSearch.test(projectDescribe)) {
            card.classList.add('hide')
        }else{
            card.classList.remove('hide')
        }
    })

})


//}; 