const  divElem = document.querySelector('.rect_div');
const  pElem = document.querySelector('.rect_p');
const  spanElem = document.querySelector('.rect_span');
const attachment = document.querySelector(".attach-handlers-bth");
const remove = document.querySelector(".remove-handlers-btn");
const clear = document.querySelector('.clear-btn');
const placeShow = document.querySelector(".events-list");

const logTarget = (text,color) => {
    placeShow.innerHTML += `<span style ="color : ${color}; margin-left: 8px">${text}</span>`
};

const logGreenDiv = logTarget.bind(null,'DIV', 'green');
const logGreenP = logTarget.bind(null,'P', 'green');
const logGreenSpan = logTarget.bind(null,'SPAN', 'green');

const logGreyDiv = logTarget.bind(null,'DIV', 'grey');
const logGreyP = logTarget.bind(null,'P', 'grey');
const logGreySpan = logTarget.bind(null,'SPAN', 'grey');

const delet = () => {
    divElem.removeEventListener('click',logGreenDiv);
    pElem.removeEventListener('click',logGreenP);
    spanElem.removeEventListener('click',logGreenSpan);

    divElem.removeEventListener('click',logGreyDiv, true);
    pElem.removeEventListener('click',logGreyP, true);
    spanElem.removeEventListener('click',logGreySpan, true);
};
    

const add = () => {
    divElem.addEventListener('click',logGreyDiv, true);
    pElem.addEventListener('click',logGreyP, true);
    spanElem.addEventListener('click',logGreySpan, true);

    divElem.addEventListener('click',logGreenDiv);
    pElem.addEventListener('click',logGreenP);
    spanElem.addEventListener('click',logGreenSpan);
};

add();

attachment.addEventListener('click',add);
remove.addEventListener('click',delet);
clear.addEventListener('click', () => {
    placeShow.innerHTML = '';
});