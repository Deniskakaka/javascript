export const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt','My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {width, height} = imgElem;
        resolve({width, height});
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
    });
    return p;
};

//let result = addImageWidthPromise('https:///2001755/5408/i/950/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg');

//result.then(
  //  data => console.log(data),
 //   error => console.log(error)
//);