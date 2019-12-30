 async function getUsersBlogs(urls) {
    const requests = urls
    .map(userId => fetch(`https://api.github.com/users/${userId}`)
    .then(response => {
        if (response.ok) {
           return  response.json()
        } else {
            throw new Error('Failed to load data')
        }
    }));
    const usersData = await Promise.all(requests);
    return usersData.map(user => user.blog)
};

getUsersBlogs(['google', 'facebook', 'gaearon','twitter']).then(result => console.log(result))
    

