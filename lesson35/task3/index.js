export async function getUserBlogs(urls) {
    let mass = [];
    for (let i = 0; i < urls.length; i++) {
        mass.push(await fetch(`https://api.github.com/users/${urls[i]}`))
    }
    let arr = []
    for (let i = 0; i < mass.length; i++) {
        arr.push(await mass[i].json())
    }
    return arr.map(i => i.blog)
};