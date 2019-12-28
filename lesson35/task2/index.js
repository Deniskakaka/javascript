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

const onSearchUser = async () => {
    showSpinner();
    listElem.innerHTML = '';
    const userName = document.querySelector('.name-form__input').value;
    try{
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const repoList = await fetchRepositories(userData.repos_url);
        renderRepos(repoList);
    } catch (err) {
        alert(err.message);
        hideSpinner();
    } finally {
        hideSpinner();
    } 
};

showUserBtnElem.addEventListener('click',onSearchUser);