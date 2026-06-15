

function getUserList() {
    let userList = []
    setTimeout(() => {
        userList = [{ id: "1", name: "mr. meow" }, { id: "2", name: "mr. Tom" }, { id: "3", name: "mr. jerry" }]

    }, 5000);
    return userList;
}

function greetUser() {
    const userList = getUserList();
    userList.forEach(element => {
        console.log(`hello ${element.name}`);
    });
}


greetUser();