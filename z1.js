let zmienna = true;
console.log(zmienna);
if (zmienna) {
    console.log("Zmienna ma wartość true.");
}
if (!zmienna) {
    console.log("Zmienna ma wartość false.");
} else {
    console.log("Zmienna jest prawdziwa.");
}
zmienna = !zmienna;
console.log(zmienna);
if (zmienna) {
    console.log("Zmienna ma wartość true.");
} else {
    console.log("Zmienna ma wartość false.");
}