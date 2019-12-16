const addImage = (url,callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt','photo');
    imgElem.src = url;
    const container = document.querySelector('.page');
    container.append(imgElem);
    const onImageLoaded = () => {
        const {width, height} = imgElem;
        callback(null, {width: 200, height: 100});
    }
    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));
};

let urlImg = 'https://server.com/image.png';

const onImageLoaded = (error,data) => {
    if (error) {
        console.log(error);
        return;
    }
    const {width, height} = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

addImage(urlImg, onImageLoaded);