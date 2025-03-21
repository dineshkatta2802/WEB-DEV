let user = {
    name : "Dinesh",
    age : 18,
    gender : "male",

    // The methods in js can be declared in 2 ways
    //1.Like Key:Value pair
    add : function(a,b){
        return a + b;
    },
    //2.ShortHand function
    sub(a,b){
        return a - b;
    }
};

console.log(user.add(1,2));
console.log(user.sub(10,20));

