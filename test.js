document.body.innerHTML="Hello world!<br>";
var mittNamn = prompt("Ange ditt namn:\nInput name:");
//var mittNamn = "Peter Roosdorp"
document.body.innerHTML+="Ditt namn är " +mittNamn+ ".<br>";
document.body.innerHTML+="Ditt namn har " +mittNamn.length+ " tecken<br>";
var spaceChar = mittNamn.indexOf(" ");
var spaceCharEnd = mittNamn.lastIndexOf(" ");
if (spaceChar != spaceCharEnd) {
    document.body.innerHTML+="Ditt namn följer inte standarden med 'Förnamn Efternamn'<br>"
} else {
    document.body.innerHTML+="Dina initialer är "+mittNamn[0]+mittNamn[spaceChar+1]+ "<br>";
}
//document.body.sytle.color+="#C00";
document.body.innerHTML+="På rasten drack vi &#9749;<br>";

var talEtt = prompt("Ange första talet:");
var talTvå = prompt("Ange ett till tal:")
//document.body.innerHTML+=talEtt%2
var i;
for (i=0; i < talEtt+1 ; i++) {
    if (i%2 == 0) {
        if (i == talEtt) {
            document.body.innerHTML+="Ditt första tal är ett primtal.<br>";
            break;
        } else {
            document.body.innerHTML+="Det första talet är inte ett primtal.<br>"
            break;
        }
    }
}

document.body.innerHTML+="Du valde " +talEtt +"och " +talTvå +"<br>"
document.body.innerHTML+=talEtt +" delat med " +talTvå +" blir = <br>"
document.body.innerHTML+="Svaret är " +Math.round(talEtt/talTvå) +" med Math.round<br>";
document.body.innerHTML+="Svaret är " +Math.ceil(talEtt/talTvå) +" med Math.ceil<br>";
document.body.innerHTML+="Svaret är " +Math.floor(talEtt/talTvå) +" med Math.floor<br>";

var fortsätt = confirm("Vill du forsätta?");

if (fortsätt != true) {
    document.body.innerHTML="'Ingen' output eftersom du inte ville fortsätta.";
}
