let avatar = document.querySelector('.user__avatar');
let name = document.querySelector('.user__name');
let search = document.querySelector('.search');
let number = document.querySelector('.number');
let user = document.querySelector('.userId');
let repo = document.querySelector('.repoId');


function getMassUsers(days, value) {
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
    };
    avatarUrl = value.filter(i => i.commit.author.email === mass[0].email).map(i => i.author.avatar_url)[0]
    mass.sort((a,b) => b.count - a.count);
    let topUser = mass[0].count;
    return  mass;
}

function render(value,avatarImg) {
  name.textContent = value[0].name; 
};

export function getMostActiveDevs(obj) {
   return  fetch(`https://api.github.com/repos/${obj.userId}/${obj.repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(result => getMassUsers(obj.days, result))
};

//search.addEventListener('click', () => {
  // getMostActiveDevs({days: number.value, userId: user.value, repoId: repo.value})
  // .then(result => render(result,avatarUrl));
//});