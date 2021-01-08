const OGscores = (89+96+108);
console.log(`The total score for OG is ${OGscores} points.`);
const OGaverage = OGscores / 3;
console.log(`The average score for OG is ${OGaverage} points.`);
const ALLIANCEscores = (88 + 91 + 110);
console.log(`The total score for Alliance is ${ALLIANCEscores} points.`);
const ALLIANCEaverage = ALLIANCEscores / 3;
console.log(`The average score for Alliance is ${ALLIANCEaverage} points.`);

if (OGaverage > ALLIANCEaverage) {
    console.log("OG wins!");
}
else {
    console.log("Alliance wins!")
}