// Code your solution in this file!

function distanceFromHqInBlocks (someValue) {
  
  return Math.abs (someValue -42);

}

//console.log(distanceFromHqInBlocks(13));

function distanceFromHqInFeet(someValue){

return distanceFromHqInBlocks(someValue) * 264;

}

function distanceTravelledInFeet(startBlock, endBlock){
let distance = Math.abs(startBlock-endBlock);
return distance * 264;
}

function calculatesFarePrice(start, destination) {

  let distance = distanceTravelledInFeet(start, destination);
  let cost;

if (distance < 400 ) {

  cost = 0;
  return cost;

} else if (distance >= 400 && distance <= 2000){

  cost = (distance * 0.02) - (400 * 0.02);
  return cost;

}else if (distance > 2000 && distance <= 2500){

  cost = 25;
  return cost;

}else {

  return 'cannot travel that far';

}

}
