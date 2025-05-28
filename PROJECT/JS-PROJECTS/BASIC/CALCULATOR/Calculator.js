let inp = document.querySelector('input');
let btns = document.querySelectorAll('button');

let expression = '';
let arr = Array.from(btns);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const btnText = e.target.textContent;

        if (btnText === '=') {
            try {
                expression = eval(expression);
                inp.value = expression;
            } catch {
                inp.value = 'Error';
                expression = '';
            }
        } else if (btnText === 'AC') {
            expression = '';
            inp.value = expression;
        } else if (btnText === 'DEL') {
            expression = expression.slice(0, -1);
            inp.value = expression;
        } else {
            expression += btnText;
            inp.value = expression;
        }
    });
});
