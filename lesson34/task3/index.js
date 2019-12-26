const button = document.querySelector('.btn');
const spinner = document.querySelector('.spinner_hidden');
const img = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const loc = document.querySelector('.user__location')
const list = document.querySelector('.repo-list');

function showDateUser(str) {
    fetch(`https://api.github.com/users/${str}`)
    .then(response => response.json())
    .then(result => {
        img.src = result.avatar_url;
        userName.textContent = result.name;
        loc.textContent = result.location;
        spinner.style.display = 'none';

        fetch(result.repos_url)
        .then( response => response.json())
        .then(result => {
          result.forEach(i => {
              let li = document.createElement('li');
              li.textContent = i.name;
              li.classList.add('repo-list__item');
              list.append(li)
          });
        });
    })
}

button.addEventListener('click', () => {
    let name = document.querySelector('.name-form__input').value;
    spinner.style.display = 'block';
    showDateUser(name);
});
