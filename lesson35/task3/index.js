export async function getUserBlogs(urls) {
    let mass  = [];
    for (let i = 0; i < urls.length; i++) {
       let  response = await fetch(`https://api.github.com/users/${urls[i]}`)
        if (!response.ok) {
            return null;
        } else {
             mass.push(await response.json())
        }
       
    }
   return mass.map(i => i.blog)
};