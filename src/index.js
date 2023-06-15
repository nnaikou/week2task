import "./styles.css";


let dit = x => "Tämä on "+x

console.log(dit("koira"))

let button = document.getElementById("btn")

/*let hello = function(x) {*/
function hello(x) {
    console.log("Luku on "+x)
}


button.addEventListener("click", () => hello(5))

 