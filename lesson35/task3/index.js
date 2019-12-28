 async function getUsersBlogs(urls) {
    let mass  = [];
    for (let i = 0; i < urls.length; i++) {
            let response = await fetch(`https://api.github.com/users/${urls[i]}`);
            if (response.ok) {
                let result = await response.json()
                mass.push(result.blog);  
            } else {
                throw new Error('Failed to load data');    
            }
           
    }
    return mass;
};

getUsersBlogs(['dsfsdffs', 'facebook', 'gaearon','twitter']).then(result => console.log(result))
    

