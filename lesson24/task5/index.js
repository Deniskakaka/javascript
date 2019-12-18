const creat = document.querySelector(".create-task-btn");
const list = document.querySelector('.list');
let tasks =  [];


const creatObj = () => {
    const inputText = document.querySelector(".task-input").value;
    const obj =  {
        text: inputText,
        done: false,
        dataCreate: new Date()
    };
    tasks.unshift(obj);
    render(tasks);
}

creat.addEventListener('click', creatObj);

function render (arr) {
    const list = document.querySelector('.list');

    let listItems = arr.sort((a,b) => a.done - b.done).map(({text,done}) => {
        const listItemElem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.classList.add('list__item-checkbox');
        checkBox.checked = done;
        listItemElem.classList.add('list__item');
        listItemElem.append(checkBox,text);
        if (done) {
            listItemElem.classList.add('done')
        }
        return listItemElem;
    });
    list.innerHTML = null;
    return list.append(...listItems);
};


render(tasks);

const check = (event) => {
    if (event.target.className === 'list__item-checkbox') {
        event.target.parentElement.classList.toggle('done');
        const stringText = event.target.parentElement.textContent;
        
        tasks.map((elem) => {
            if (elem.text === stringText) {
                elem.done === false ? elem.done = true : elem.done = false;
            }
        });
        render(tasks);
    }
}


list.addEventListener('click', check);

