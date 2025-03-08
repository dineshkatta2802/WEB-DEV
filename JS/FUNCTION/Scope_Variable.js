let value = "Dinesh";//Global or Outer Variable
function message(){
    let value = "Divya";// Local Variable
    alert(value);
}
message();// Divya
alert(value);// Dinesh