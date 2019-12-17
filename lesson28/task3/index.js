export function addImageV2(imgSrc) {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt','My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
    return new Promise((resolve, reject) => {
        const addImage = (imgSrc, (error, data) => {
            if (error) {
                reject(error);
                return
            }
            resolve(data);
        });
    });
};

//addImageV2('https://st2.depositphotos.com/3324449/6393/i/450/depositphotos_63937059-stock-photo-rose-placed-on-the-books.jpg');