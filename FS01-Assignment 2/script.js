let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');  // Changed variable name to buttons

let string = "";
let arr = Array.from(buttons);  // Changed variable name to buttons
arr.forEach(button => {
    button.addEventListener('click', (e) => {  // Fixed typo in 'click'

        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;  // Fixed typo in 'strring'
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
