function greeter(person) {
    return "Hello, " + person;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(user);
