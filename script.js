let renderAnsw = document.getElementById("trOrFl");

function render() {
    let inp = document.getElementById("inp").value;
    let rand = 1 - 0.5 + Math.random() * (5 - 1 + 1);
    let randoms = Math.round(rand);
    if (inp == randoms) {
        renderAnsw.innerHTML = `You trust! Robot says ${randoms}`;
    } else {
        renderAnsw.innerHTML = `Not that. Wrong number is ${randoms}`;
    }
}

document.getElementById("checkButton").onclick = render;