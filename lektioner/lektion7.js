var cal = document.getElementById("kalender");
var dag = ["mån", "tis", "ons", "tors", "fre", "lör", "sön"];
//var månad
for (var i = 0 ; i < 28 ; i++) {
  /*  console.log(i%7);
    if(i%7 == 2){
        cal.style.color="red";
    } else {
        cal.style.color="black";
    }*/
    if(i < 9) {
        cal.innerHTML+=dag[i%7]+" &nbsp;"+(i +1)+" feb<br>"
    } else {
    cal.innerHTML+=dag[i%7]+" "+(i +1)+" feb<br>";
    }
    //if 
}

var tal = [];
var nr = 0;
while(true) {
    // var temp = parseInt(prompt("Ange tal. 0 for quit"));
    var temp = prompt("Jalla.")
    if (temp==0) { break; } ; 
    tal[nr] = temp;
    nr++;
    console.log(nr);
}
cal.innerHTML+="Du skrev in " +tal.length +" tal<br>";
var tal2 = tal.sort();
while(nr+1 != 1) {
    console.log(nr);
    cal.innerHTML+=tal2[nr-1]+"<br>";
    nr--
}

