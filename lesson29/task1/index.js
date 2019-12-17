export function requestUserData (id) {
    return  new Promise((resolve, reject) => {
        if (id === 'broken') {
            setTimeout(() =>{
                reject(new Error('User not found'));
            },500)
        }
        else {
            setTimeout(() => {
                resolve(
                    { name: 'John',
                    age: 17,
                    userId: `${id}`,
                    email: `${id}@example.com`
                });
            },1000);
        }
    });
}

//let result = requestUserData('broken');

//result.then(
   // data => console.log(data),
   // error => console.log(error)
//);

