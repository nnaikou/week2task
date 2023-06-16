import "./styles.css";

// this is for preventing the site on reloading
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// counter for how many children we have in HTML Table, in starting point six:
let i = 6

const submitButton = document.getElementById("submit-data")

submitButton.addEventListener("click", () => {
    const tableBody = document.getElementById("tableBody")

    let newCell = document.createElement("tr")

    let username = document.getElementById("input-username").value
    let email = document.getElementById("input-email").value
    let address = document.getElementById("input-address").value

    if (document.querySelector("#input-admin").checked) {
        newCell.innerHTML = "<td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>X</td>"
    } else {
        newCell.innerHTML = "<td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>-</td>"
    }

    tableBody.appendChild(newCell)
    i++
})


const emptyButton = document.getElementById("empty-table")

emptyButton.addEventListener("click", () => {
    const tableBody = document.getElementById("tableBody")
    
    for(let j=i; j>0; j--) {
        tableBody.removeChild(tableBody.lastChild)
        console.log("x")
        i--
    }
    
})










/*let dit = x => "Tämä on "+x

console.log(dit("koira"))

let button = document.getElementById("btn")

/*let hello = function(x) {*
function hello(x) {
    console.log("Luku on "+x)
}


button.addEventListener("click", () => hello(5))*/

 