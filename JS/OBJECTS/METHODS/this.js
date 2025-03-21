let user = {
    name : "Dinesh",
    age : 18,
    display() {
        let greet = "Hello " + this.name;
        console.log(greet);
        
    }
}

function sayHi() {
    alert( this.name );
  }
