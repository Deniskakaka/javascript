const counter = document.querySelector('.counter');
const counterValueElement = document.querySelector('.counter__value');

const counterChange = e => {
    const button = e.target.classList.contains('counter__button');
    let value = Number(counterValueElement.textContent);
    if (!button) {
       return;
    }
    const data = e.target.dataset.action;
    const newValue = data === 'increase' ? value + 1: value - 1;
    localStorage.setItem('count',newValue);
    counterValueElement.textContent = newValue;
};

counter.addEventListener('click',counterChange); 

window.addEventListener('storage', (e) => {
    counterValueElement.textContent = e.newValue;
});