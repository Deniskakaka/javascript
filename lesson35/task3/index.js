 async function getUsersBlogs(urls) {
    const requests = urls
    .map(userId => fetch(`https://api.github.com/users/${userId}`).then(response => response.json()));
    const usersData = await Promise.all(requests);
    return usersData.map(user => user.blog)
};

getUsersBlogs(['', 'facebook', 'gaearon','twitter']).then(result => console.log(result))
    

