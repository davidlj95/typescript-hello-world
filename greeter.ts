interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
