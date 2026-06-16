let sti1 = true;

async function mostJunior() {
    return new Promise((resolve, reject) => {
        if (sti1) {
            setTimeout(() => {
                resolve("most junior")
            }, 3000)
        }
        else {
            reject("rejected from most junior");
        }
    });
}


let sti2 = true;

async function junior() {
    return new Promise((resolve, reject) => {
        if (sti2) {
            setTimeout(() => {
                resolve(" junior")
            }, 2000)
        }
        else {
            reject("rejected from junior");
        }
    });
}


let sti3 = false;

async function senior() {
    return new Promise((resolve, reject) => {
        if (sti3) {
            setTimeout(() => {
                resolve("senior")
            }, 3000)
        }
        else {
            reject("rejected from senior");
        }
    });
}

async function main() {

    try {
        let msg1 = await mostJunior();
        console.log(msg1);
        let msg2 = await junior();
        console.log(msg2);
        let msg3 = await senior();
        console.log(msg3);




    }
    catch (error) {
        console.log(error);
    }

}

main();




// const p = mostJunior();
// p.then((msg) => {
//     console.log(msg);
//     return junior();
// }).then((msg) => {
//     console.log(msg);
//     return senior();
// }).then((msg) => {
//     console.log(msg);
// }).catch((error) => {
//     console.log(error);
// })