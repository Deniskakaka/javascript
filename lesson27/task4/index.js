export const requestUserData = (userId, callback) =>{
    let random = Math.floor(getRandomArbitrary(1, 4));
        setTimeout(() => {
            if (userId === 'broken') {
                 callback(null,'Failed to load user data');
                 return;
            } else {
               callback(userId);
            }    
        }, random * 1000);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}