function mostJunior() {
    setTimeout(() => {
        console.log("most junior");
    }, 10000)

}

function junior(fn) {
    fn();
    setTimeout(() => {
        console.log("junior");
    }, 6000)
}

function senior(fn) {
    fn(mostJunior);
    setTimeout(() => {
        console.log("Senior");
    }, 8000)
}

function mostSenior(fn) {
    fn(junior);
    setTimeout(() => {
        console.log("most Senior");
    }, 2000)
}

mostSenior(senior);


