
export const renderRepos = reposList => {
   const repostListElems = reposList
   reposList.forEach(i => {
    let li = document.createElement('li');
    li.textContent = i.name;
    li.classList.add('repo-list__item');
    document.querySelector('.repo-list').append(li)
   });
};