import { fetchUserData, fetchRepositories } from './gateWays.js'
import { renderUserData } from './user.js'
import {renderRepos} from './repos.js'
import {showSpinner, hideSpinner} from './spiner.js'

const showUserBtnElem = document.querySelector('.name-form__btn');
const defaultUser = {
    avatar_url :  `https://avatars3.githubusercontent.com/u10001`,
    name: '',
    location : '',
}

renderUserData(defaultUser);
const listElem = document.querySelector('.repo-list');

const onSearchUser = () => {
    showSpinner();
    listElem.innerHTML = '';
    const userName = document.querySelector('.name-form__input').value;
    fetchUserData(userName)
    .then(userData => {
        renderUserData(userData);
        return userData.repos_url
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
        renderRepos(reposList);
        hideSpinner();
    })
    .catch(err => {
        hideSpinner();
        alert('Failed to load data')
    })
};

showUserBtnElem.addEventListener('click',onSearchUser);