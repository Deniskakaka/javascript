async function getUsersBlogs(urls) {
    let mass  = [];
    for (let i = 0; i < urls.length; i++) {
        try{
            let response = await fetch(`https://api.github.com/users/${urls[i]}`);
            let result = await response.json()
            mass.push(result.blog); 
        } catch(err) {
             console.log(err.message)  
        }
    }
    return mass;
};

getUsersBlogs(['', 'facebook', 'gaearon','twitter']).then(result => console.log(result))
    

