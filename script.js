let renderAnsw = document.getElementById("trOrFl");
let counts = document.getElementById("counts");
let attempts = document.getElementById("attempts");
let renderCounts = 0;
let attempt = 3

function render() {
    let inp = document.getElementById("inp").value;
    let rand = 1 - 0.5 + Math.random() * (5 - 1 + 1);
    let randoms = Math.round(rand);
    if (inp == randoms) {
        renderAnsw.innerHTML = `You guessed! Robot says ${randoms}.`;
        renderCounts++;
        counts.innerHTML = renderCounts;
    } else if (attempt <= 0) {
        alert("Game over! Your score " + renderCounts);
        attempt = 3;
        renderCounts = 0;
        attempts.innerHTML = attempt;
        counts.innerHTML = renderCounts;
    } else {
        renderAnsw.innerHTML = `Not that. Right number is ${randoms}.`;
        attempt--;
        attempts.innerHTML = attempt;
    }
}

document.getElementById("checkButton").onclick = render;

