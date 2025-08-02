const p = document.querySelector("p");
const input = document.querySelector("input");

input.onkeydown = e => {
    input.value = "";
    p.textContent = e.keyCode;
};

document.onkeydown = () => input.focus();

input.value = "";
input.focus()