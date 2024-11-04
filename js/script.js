const emailList = ["primo@gmail.com", "secondo@gmail.com", "terzo@gmail.com", "quarto@gmail.com"];
console.log(emailList);
const emailUtente = prompt("dimmi la tua email");
let verifica = "";
for (let i = 0; i < emailList.length; i++){
    const emailpresent = emailList[i];
    if (emailpresent === emailUtente){
        verifica = "presente"
        i = 100;
    } else {
        verifica = "non presente"
    }
}

console.log("la tua email è " + verifica);