import{addImage} from './add.js'

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

addImageV2('https://images.wallpaperscraft.ru/image/tuman_derevia_sklon_153126_1920x1080.jpg');