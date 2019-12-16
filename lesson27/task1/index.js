export const addImage = (url,callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt','photo');
    imgElem.src = url;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {width, height} = imgElem;
        callback(null, {width: 200, height: 100});
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));
};

addImage('https://server.com/image.png', onImageLoaded);