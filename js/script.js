const emailList = ["primo@gmail.com", "secondo@gmail.com", "terzo@gmail.com", "quarto@gmail.com"];
console.log(emailList);
const emailUtente = prompt("dimmi la tua email");

for (let i = 0; i < emailList.length; i++){
    const emailpresent = emailList[i];
    if (emailpresent === emailUtente){
        console.log("la tua email è presente nella lista benvenuto " + emailUtente);
    } else {
        console.log("la tua email non è presente");
    }
}