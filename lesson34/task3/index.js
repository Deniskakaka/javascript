import { fetchUserData, fetchRepositories } from './gateWays.js'
import { renderUserData } from './user.js'
import {renderRepos} from './repos.js'

const showUserBtnElem = document.querySelector('.name-form__btn');
const spiner = document.querySelector('.spinner_hidden');
const defaultUser = {
    avatar_url :  `https://avatars3.githubusercontent.com/u10001`,
    name: '',
    location : '',
}

renderUserData(defaultUser);

const onSearchUser = () => {
    const userName = document.querySelector('.name-form__input').value;
    fetchUserData(userName)
    .then(userData => {
        renderUserData(userData);
        spiner.style.display = 'none'
        return userData.repos_url
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
        return renderRepos(reposList);
    })
    .catch(err => {
        spiner.style.display = 'none'
        alert(err.message)
    })
};

showUserBtnElem.addEventListener('click',() => {
    onSearchUser()
    spiner.style.display = 'block'
});