const creat = document.querySelector(".create-task-btn");

let tasks =   [
    { text: 'Visit party', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Buy milk', done: false },
    { text: 'Buy meat', done: true },
    { text: 'Visit doctor', done: true }
];

const creatObj = () => {
    let inputText = document.querySelector(".task-input").value;
    class task {
        constructor (text) {
            this.text = text,
            this.done = false
        }
    };
    let newTask = new task(inputText);
    tasks.unshift(newTask);
    render(tasks)
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

document.querySelector('.list').addEventListener('click',function (event) {
    if (event.target.className === 'list__item-checkbox') {
        event.target.parentElement.classList.toggle('done');
        let elements = document.querySelectorAll(".list__item");
        for (let i = 0; i < elements.length; i++) {
           if (elements[i].className === 'list__item done') {
               document.querySelector('.list').append(elements[i])
           }
        }
    }
});

