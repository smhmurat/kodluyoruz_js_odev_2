let taskDOM = document.querySelector('#task');
let listDOM = document.querySelector('#list');
let taskButtonDOM = document.querySelector('#liveToastBtn');
taskButtonDOM.addEventListener('click', newElement);

function newElement() {
    if (taskDOM.value == "" || taskDOM.value == " ") {
        $('#liveToastError').toast('show');
    } else {
        $('#liveToastSuccess').toast('show');
        const liDOM = document.createElement('li');
        liDOM.innerHTML = taskDOM.value;
        listDOM.append(liDOM);
        taskDOM.value = "";
    }
}

let listItem = document.querySelector('ul#list>li')
listItem.addEventListener('click', addList);

function addList () {
    if (listItem.classList.contains('checked')) {
        listItem.classList.remove('checked');
    } else {
        listItem.classList.add('checked');
    }
}


function delElement() {

}