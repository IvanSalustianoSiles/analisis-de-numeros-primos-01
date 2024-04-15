const LIMIT = 10000;
const BASE = 1;
const primos = [];
for (let i = BASE; i <= LIMIT; i++) {
  let booleanPrimo = true;
  for (let k = 2; k < i; k++) {
    if (i % k == 0) {
      booleanPrimo = false;
    }
  }
  booleanPrimo && primos.push(i);
}

let distanceObject = {};
let distanceArray = [];
let sumDist = 0;
let cantDistance = 0;
let maxDist = 1;
let cantExist = false;
let maxmsg = "";
let commonDistances = {};
let moreCommon = 1;
let lessCommon = 10;
let moreText = "";
let lessText = "";
for (let i = BASE; i <= LIMIT; i++) {
  let distance = primos[i] - primos[i-1];
  if (primos[i]) {
    distanceObject = {...distanceObject, [`Distancia entre el ${primos[i-1]} y el ${primos [i]}`]: distance};
    distanceArray.push(distance);
    if (commonDistances[distance]) {
      commonDistances[distance] = commonDistances[distance] + 1;
    } else {
      commonDistances[distance] = 1;
    }
    sumDist = sumDist + distance;
    if (distance > maxDist) {
      maxDist = distance;
      maxmsg = `La distancia máxima fue de ${maxDist}, entre ${primos[i-1]} y ${primos[i]}.`
    } 
  }
}

let promDist = sumDist / LIMIT;

Object.values(commonDistances).forEach((distanceValue, k) => {
  if (distanceValue >= moreCommon) {
    moreCommon = distanceValue;
    moreText = `La distancia entre primos más frecuente es de ${Object.keys(commonDistances)[k]}, apareciendo ${moreCommon} veces.`

  } else if (distanceValue <= lessCommon) {
    lessCommon = distanceValue;
    if (lessCommon == 1) {
      lessText = `La distancia entre primos menos frecuente es de ${Object.keys(commonDistances)[k]}, apareciendo sólo una vez.`
    } else {
      lessText = `La distancia entre primos menos frecuente es de ${Object.keys(commonDistances)[k]}, apareciendo sólo ${lessCommon} veces.`
    }
  }
})

console.log(`Números primos del ${BASE} al ${LIMIT}:`);
console.log(primos);
console.log("Distancias entre primos consecutivos:");
console.log(distanceObject);
console.log(`En promedio, la distancia entre los primos del ${BASE} al ${LIMIT} fue de ${promDist}.`);
console.log(maxmsg);
console.log(lessText);
console.log(moreText);
