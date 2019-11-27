let tasks =   [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: true },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

function render (arr) {
    const list = document.querySelector('.list');

    let listItems = arr.map((i) => {
        const listItemElem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.classList.add('list__item-checkbox');
        checkBox.checked = i.done;
        listItemElem.classList.add('list__item');
        listItemElem.append(checkBox,i.text);
        if (i.done) {
            listItemElem.classList.add('done')
        }
        return listItemElem;
    });
    list.append(...listItems);
};

render(tasks);