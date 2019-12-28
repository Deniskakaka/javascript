async function getUsersBlogs(urls) {
    let mass  = [];
    for (let i = 0; i < urls.length; i++) {
        try{
            let  response = await fetch(`https://api.github.com/users/${urls[i]}`);
            if (!response.ok) {
                return null;
            }
            let result = await response.json()
            mass.push(result.blog)  
        } catch(err) {
            throw new Error ('faild')
        }
    }
    return mass;
};

getUsersBlogs(['', 'facebook', 'gaearon']).then(result => console.log(result))

