export async function fetchUser(userId) {
    try{
        let response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json()
        return userData;
    } catch(err) {
        throw new Error('faild')
    } 
};
