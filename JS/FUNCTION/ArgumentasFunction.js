function iteration(func , count){
    for (let i = 0; i < count; i++) {
        func();
    }
}

let greet = function(){
    console.log("Hello!");
}

iteration(greet , 10);