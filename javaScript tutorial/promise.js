
const stimulator = true;
function getUserList() {
    return new Promise((resolve, reject) => {
        let userList;
        if (stimulator == true) {

            setTimeout(() => {
                resolve(userList = [{ id: "1", name: "mr. meow" }, { id: "2", name: "mr. Tom" }, { id: "3", name: "mr. jerry" }])
            }, 5000)

        }

        else {
            reject("something went wrong")

        }

    })

}

function greetUser(userList) {
    userList.forEach(element => {
        console.log(`hello ${element.name}`)
    });
}




const p = getUserList();
p.then((userList) => greetUser(userList))
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("application ends here");
    })



