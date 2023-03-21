const btn = document.querySelector("button");
const app = document.querySelector(".app");
const input = document.querySelector("input");

input.addEventListener('keydown', () =>
    event.key === 'Enter' ? btn.click() : "");

btn.addEventListener("click", () => {
    let myDiv = document.createElement('div');
    myDiv.classList.add('clas1');
    myDiv.innerHTML = `
    <div>${input.value}</div>
    <div class="domc">
        <span class="material-icons icon1">edit</span>
        <span class="material-icons icon2">delete</span>
        <input class="icon3" type="checkbox">
    </div>`
    app.appendChild(myDiv);

    const editIcon = myDiv.querySelector('.icon1');
    const removeIcon = myDiv.querySelector('.icon2');
    const checkIcon = myDiv.querySelector('.icon3');

    editIcon.addEventListener('click', () => {
        const div = myDiv.querySelector('div');
        div.contentEditable = true;
        div.style.padding = '5px';
        div.focus();
    });

    removeIcon.addEventListener('click', () => myDiv.remove());

    checkIcon.addEventListener('click', () => {
        const div = myDiv.querySelector('div');
        if (checkIcon.checked) div.style.textDecoration = 'line-through'
        else div.style.textDecoration = 'none';
    });

    input.value = "";
});

