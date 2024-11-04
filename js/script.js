const emailList = ["primo@gmail.com", "secondo@gmail.com", "terzo@gmail.com", "quarto@gmail.com", "quinto@gmail.com"];
console.log(emailList);
const emailUtente = prompt("dimmi la tua email");
let verifica = "non presente";
for (let i = 0; i < emailList.length; i++){
    const emailpresent = emailList[i];
    if (emailpresent === emailUtente){
        verifica = "presente"
        i = emailList.length +1;
    } 
}

console.log("la tua email è " + verifica);



const primoNumero = Math.floor(Math.random() * 6) + 1;
const secondoNumero = Math.floor(Math.random() * 6) + 1;

if (primoNumero > secondoNumero) {
    console.log("vince l'utente")
} else if (primoNumero < secondoNumero) {
    console.log("vince il computer")
} else if (primoNumero === secondoNumero) {
    console.log("pareggio")
}
console.log("primo numero " + primoNumero);
console.log("secondo numero " + secondoNumero);