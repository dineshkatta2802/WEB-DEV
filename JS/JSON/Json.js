let user = {
    name: 'Dinesh',
    age: 18,
    role: {
        isEmployee: false,
        isStudent: true,
    }
};

// Corrected JSON.stringify syntax
let json = JSON.stringify(user, ["name", "role"], 10);
console.log(json);
