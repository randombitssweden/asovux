function genMathNum() {
 return Math.ceil(Math.random() * 10);
}
var buffer1 = 0;
var buffer2 = 1;
var inputName = prompt("Vad heter du?:");
if (isNaN(inputName) == false ) {
    var inputName = prompt("Ditt namn innehåller siffror\nVad heter du?:");

}
if (isNaN(inputName) == false ) {
    alert("Då kallar jag dig för " +inputName);
}
inputName[0] = inputName[0].toUpperCase ; 
var firstName = [];
var spaceCharCheck = inputName.indexOf(" ");
var spaceCharCheckEnd = inputName.lastIndexOf(" ");
if ( spaceCharCheck != spaceCharCheckEnd ) {
    for (i = 0; i < spaceCharCheck +1 ; i++) {
        firstName += inputName[i];
    }
    var confirmNameOK = confirm("Är det ok om jag kallar dig " +firstName +"?");
    if (confirmNameOK = 0) {
        alert("Då kallar jag dig förvirrad. För det är jag.")
        firstName = "Förvirrad"
    } else {

    }
} else {
    if ( spaceCharCheck == -1 ) {
        firstName = inputName;
    } else {
        for (i = 0; i < spaceCharCheck +1 ; i++) {
            firstName += (inputName[i]);
        }
    }
}
var tal1 = [];
var tal2 = [];
var svar = [];
var counter = 0;

for (i = 0; i < 5; i++) {
    while ( buffer1 < buffer2 ) {
        buffer1 = genMathNum();
        buffer2 = genMathNum();    
    }
    tal1[i] = buffer1;
    tal2[i] = buffer2;
    buffer1 = 0;
    buffer2 = 1;
    svar[i] = prompt("Vad blir " +tal1[i] +"-" +tal2[i] +"?:" );
    if (svar[i] == "") {
        svar[i] == "Inget svar."
    }
    while (isNaN(svar[i]) == true) {
        console.log("NaN entered.")
        svar[i] = prompt("Du måste ange en siffra mellan 0-9.\nVad blir " +tal1[i] +"-" +tal2[i] +"?:");
    }
}
document.body.innerHTML+="Hej " +firstName;
document.body.innerHTML+="<br>Dina resultat:<br>";
for ( i = 0 ; i < 5 ; i++ ) {
    document.body.innerHTML+=i+1 +". " +tal1[i] +" - " +tal2[i] +" = " +svar[i];
    if ( tal1[i]-tal2[i] == svar[i] ) {
        document.body.innerHTML+=" <font color=\"green\">Rätt!</fontcolor><br>"
        counter++;
    } else {
        document.body.innerHTML+=" <font color=\"red\">Fel.</font> Det rätta svaret är: <i>";
        document.body.innerHTML+=tal1[i]-tal2[i] +"</i><br>";
    }
}
if (counter == 5) {
    document.body.innerHTML+=("<br>Grattis! Du fick alla rätt!<br>");
} else {
    document.body.innerHTML+="<br>Du fick " +counter +" rätt!";
}
