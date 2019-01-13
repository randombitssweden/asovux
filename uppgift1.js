function genMathNum() {
 return Math.ceil(Math.random() * 10);
}
var buffer1 = 0;
var buffer2 = 1;
//var username = "Peter";
var inputName = prompt("Vad heter du?:");
var firstName = [];
// Vi kollar om vi fått förväntad input. [förnamn] eller [förnamn efternamn]
var spaceCharCheck = inputName.indexOf(" ");
var spaceCharCheckEnd = inputName.lastIndexOf(" ");
if ( spaceCharCheck != spaceCharCheckEnd ) {
    // Confirm non standard name
} else {
    // Check and confirm first name
    if ( spaceCharCheck == -1 ) {
        firstName = inputName;
    } else {
        // Not working with space in name. "TypeError cannot set property of '0' undefined." Fixed now?
        for (i = 0; i < spaceCharCheck +1 ; i++) {
            firstName[i] = inputName[i];
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
    // Inserting generated numbers to array
    tal1[i] = buffer1;
    tal2[i] = buffer2;
    // "reset" our buffers
    buffer1 = 0;
    buffer2 = 1;
    svar[i] = prompt("Vad blir " +tal1[i] +"-" +tal2[i] +"?:" );

    // Buggy results.
    if ( ! isNaN(svar[i]) ) {
        svar[i] = prompt("Du måste ange en siffra mellan 0-9.\nVad blir " +tal1[i] +"-" +tal2[i] +"?:");
    }
}
document.body.innerHTML+="Dina resultat:<br>";
for ( i = 0 ; i < 5 ; i++ ) {
    document.body.innerHTML+=i+1 +". " +tal1[i] +" - " +tal2[i] +" = " +svar[i];
    if ( tal1[i]-tal2[i] == svar[i] ) {
        document.body.innerHTML+=" <font color=\"green\">Rätt!</fontcolor><br>"
        counter++;
    } else {
        document.body.innerHTML+="Fel. Det rätta svaret är: <i>" +tal1[i]-tal2[i];
    }
}

document.body.innerHTML+=firstName;