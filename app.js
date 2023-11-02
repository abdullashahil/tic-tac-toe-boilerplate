const boxes = document.querySelectorAll(".box")

let flag = 1;
let count = 0;

const x_pos = [];
const o_pos = [];

winning_combos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

boxes.forEach((el) => {
    el.addEventListener('click', (event) => {
        startgame(event.target)
    })
})

function startgame(e) {
    if (x_pos.includes(Number(e.parentElement.id)) || (o_pos.includes(Number(e.parentElement.id)))) {
        console.log("hhvajsc")
    }

    else {
        if (flag == 1) {
            const p = document.createElement("p")
            p.innerText = "X";
            x_pos.push(Number(e.id))
            p.style.color = "red"
            e.appendChild(p);

            if (check_win(x_pos, winning_combos) == true) {
                document.getElementById("result").style.visibility = "visible"
                document.getElementById("message").innerText = "X won"
                document.getElementById("button").addEventListener("click", () => {
                    window.location.reload();
                })
            }
            flag = 0;
        }
        else if (flag == 0) {
            const p = document.createElement("p")
            p.innerText = "O";
            p.style.color = "black"
            e.appendChild(p);
            o_pos.push(Number(e.id))
            if (check_win(o_pos, winning_combos) == true) {
                document.getElementById("result").style.visibility = "visible"
                document.getElementById("message").innerText = "O won";
                document.getElementById("button").addEventListener("click", () => {
                    window.location.reload();
                })
            }
            flag = 1;
        }
        count += 1;
        if (count == 9) {
            document.getElementById("result").style.visibility = "visible"
            document.getElementById("message").innerText = "Its Draw"
            document.getElementById("button").addEventListener("click", () => {
                window.location.reload();
            })
        }
    }
}

function check_win(arr, winning_combos) {
    for (let i = 0; i < winning_combos.length; i++) {
        const boole = winning_combos[i].every((el) => {
            return arr.includes(el)
        })
        if (boole == true) {
            return true
        }
    }
    return false
}