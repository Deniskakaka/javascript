export const requestUserData = (userId, callback) =>{
    let random = Math.floor(getRandomArbitrary(1, 4));
    if (userId === 'broken') {
      return  callback('Failed to load user data');
    } else {
        setTimeout(() => {
            return callback(userId);
        }, random * 1000);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const back = (value) => {
    return value;
}


console.log(requestUserData('broken',back))