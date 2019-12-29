async function getUsersBlogs(urls) {
    let mass  = [];
    for (let i = 0; i < urls.length; i++) {
            let response = await fetch(`https://api.github.com/users/${urls[i]}`);
                let result = await response.json()
                mass.push(result.blog);         
    }
    return mass;
};

getUsersBlogs(['Gуавпврпвп', 'facebook', 'gaearon','twitter']).then(result => console.log(result))
    

