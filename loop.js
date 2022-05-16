let greeting ="";
let n = 5
for(i=1;i<=5;i++) {

    for(j=1; j<=i;j++) {
         
       greeting += j + " ";
    }
    greeting += "\n" + "<br>";
}
document.getElementById("text").innerHTML = greeting;