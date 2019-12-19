let avatar = document.querySelector('.user__avatar');
let name = document.querySelector('.name');
let search = document.querySelector('.search');
let number = document.querySelector('.number');
let user = document.querySelector('.userId');
let repo = document.querySelector('.repoId');

function fetchUser(userId, repoId) {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits`)
           .then(response => response.json())
}

function render(days, value) {
    let searchDays = new Date().setDate(new Date().getDate() - days);
    let commit = value.map(({ commit: {author : {email, date, name} } }) => ({
        date,
        name,
        email,
    })).filter(i => new Date(i.date).getDate() > +new Date(searchDays).getDate())
    .reduce((acc, { email, name }) => {
        const oldCount = acc[email] ? acc[email].count : 0;
        return {
            ...acc,
            [email]: {  count: oldCount + 1, name, email}
        };
    }, {});
    let mass = [];
    for (let key in commit) {
        mass.push(commit[key])
    }
    mass.sort((a,b) => b.count - a.count);
    const avatarUrl = value.filter(i => i.commit.author.email === mass[0].email).map(i => i.author.avatar_url)[0]
    avatar.src = avatarUrl;
    name.textContent = mass[0].name;
}

export function getMostActiveDevs(obj) {
      fetchUser(obj.userId,obj.repoId).then(result => render(obj.days, result));
}



search.addEventListener('click', () => {
    getMostActiveDevs({days: number.value, userId: user.value, repoId: repo.value})
})