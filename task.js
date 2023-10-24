const body = document.querySelector('body');
const button = document.createElement('button');
const modal = document.createElement('div');
const a = document.createElement('a')
const cancel = document.createElement('button')
button.textContent = "Click Me!";
button.classList = "btn"
cancel.classList = "clicker"
cancel.textContent = "X"
a.textContent = "salam"
a.classList = "text"
modal.style.width = "400px";
modal.style.height = "400px";
modal.style.backgroundColor = "#fca855";
modal.style.display = "none"

button.onclick = () => {
    modal.style.display = "block"
}
cancel.onclick = () => {
    modal.style.display = "none"
}

body.append(button)
body.append(modal)
modal.append(cancel)
modal.append(a)





