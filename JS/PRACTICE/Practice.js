let inp = document.querySelector("input");
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.append(item);
    inp.value = "";

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
});

let del = document.querySelectorAll('.delete');
for(delBtn of del){
    delBtn.addEventListener('click', function(){
        let parent = this.parentElement;
        parent.remove();
    })
}
