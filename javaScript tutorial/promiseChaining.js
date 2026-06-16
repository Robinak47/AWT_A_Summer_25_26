let sti1 = true;
function getUserList() {
    return new Promise((resolve, reject) => {
        if (sti1) {
            setTimeout(() => {
                resolve("user 1")
            }, 2000);
        }

        else {
            reject("something went wrong");
        }
    });
}
let sti2 = false;
function greetUser() {
    return new Promise((resolve, reject) => {
        if (sti2) {
            setTimeout(() => {
                resolve(
                    " welcome"
                );

            }, 3000)
        }
        else {
            reject("greet user went wrong")
        }
    });
}

const p = getUserList();
p.then((msg) => {
    console.log(msg)
    return greetUser()

}).then((msg) => {
    console.log(msg)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("application ends here");
})