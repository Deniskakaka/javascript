const button = document.querySelector('.name-form__btn');
const string = document.querySelector('.name-form__input');
const avatar = document.querySelector('.user__avatar');
const name = document.querySelector('.user__name');
const loc = document.querySelector('.user__location');

function getUser(str) {
   return  fetch(`https://api.github.com/users/${str}`)
    .then(response => response.json())
    .then(result => result);
};

function render(obj) {
    console.log(obj)
    avatar.src = obj.avatar_url;
    name.textContent = obj.login;
    loc.textContent = obj.location;
}

button.addEventListener('click', () =>{
    getUser(string.value).then(result => render(result))
});