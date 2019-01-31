// Skapa en funktion for att ge oss ett slumpat tal.
function genMathNum() {
 return Math.ceil(Math.random() * 10);
}
// skapa lite tillfälliga platser att lagra information.
var buffer1 = 0;
var buffer2 = 1;
// Fråga användaren om namn.
var inputName = prompt("Vad heter du?:");
// Kolla om användaren angivit en siffra som namn.
if (isNaN(inputName) == false ) {
    var inputName = prompt("Ditt namn innehåller siffror\nVad heter du?:");

}
// Kolla en gång om dom rättat sig. 
// Denna del skulle kunna förbättras genom att tvinga användaren 
// att använda ett namn istället för en siffra.
if (isNaN(inputName) == false ) {
    alert("Då kallar jag dig för " +inputName);
}
// Gör om första bokstaven till stor bokstav. 
inputName[0] = inputName[0].toUpperCase ; 
var firstName = [];
// Använd bara "första" namnet som är angivet. 
var spaceCharCheck = inputName.indexOf(" ");
var spaceCharCheckEnd = inputName.lastIndexOf(" ");
// Kör lite extra koll om det finns mer än ett namn inskrivet.
if ( spaceCharCheck != spaceCharCheckEnd ) {
    for (i = 0; i < spaceCharCheck +1 ; i++) {
        firstName += inputName[i];
    }
    var confirmNameOK = confirm("Är det ok om jag kallar dig " +firstName +"?");
    // Ge upp och tvinga ett "namn".
    if (confirmNameOK = 0) {
        alert("Då kallar jag dig förvirrad. För det är jag.")
        firstName = "Förvirrad"
    } else {
        // Else gör inget. Vi tvingar programmet att göra inget, om vi inte fått förväntade svar.
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
// skapa en array för talen och svaren.
var tal1 = [];
var tal2 = [];
var svar = [];
// Och för att räkna hur många rätt eller fel det blev. 
var counter = 0;

for (i = 0; i < 5; i++) {
    // "while" (medans) buffer1 är mindre än buffer2 så slumpar vi fram tal. 
    while ( buffer1 < buffer2 ) {
        buffer1 = genMathNum();
        buffer2 = genMathNum();    
    }
    tal1[i] = buffer1;
    tal2[i] = buffer2;
    // "nolla" buffer1 & buffer2 (säkerställ att buffer2 är större än buffer1 inför while loopen)
    buffer1 = 0;
    buffer2 = 1;
    svar[i] = prompt("Vad blir " +tal1[i] +"-" +tal2[i] +"?:" );
    if (svar[i] == "") {
        svar[i] == "Inget svar."
    }
    // dubbbelkolla så att vi får siffror som tal. 
    while (isNaN(svar[i]) == true) {
        console.log("NaN entered.")
        svar[i] = prompt("Du måste ange en siffra mellan 0-9.\nVad blir " +tal1[i] +"-" +tal2[i] +"?:");
    }
}
// Skriv ut talen och svaren och räkna antalet rätt. 
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
