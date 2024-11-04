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