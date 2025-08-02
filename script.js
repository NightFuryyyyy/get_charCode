const p = document.querySelector("p");
const input = document.querySelector("input");

input.onkeypress = e => {
    input.value = "";
    p.textContent = e.charCode;
};

input.focus()