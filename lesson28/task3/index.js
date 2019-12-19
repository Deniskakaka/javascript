import{addImage} from './addImage.js'

function addImageV2(imgSrc) {
    return new Promise((resolve, reject) => {
        addImage(imgSrc, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        });
    });
};


addImageV2('https://images.wallpaperscraft.ru/image/ruka_paltsy_zvezda_153256_1920x1080.jpg').then(result => console.log(result))
