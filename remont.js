let flat = {
    squareTotal: 56.5,
    stageHeight: 2.8,
    roomBath: 4.48,
    roomSleep: 12.33,
    roomDining: 18.3,
    roomKitchen: 10.91,
    roomHall: 8.06,
    roomWardrobe: 1.58,
    roomBalcony: 4.69
}
let sum = 0;
let realSquare = 0;
function sumSquares(rooms) {

    for (let sqr of Object.values(rooms)) {
        sum += sqr;
    }
  
    return sum; 
  }
  sumSquares(flat);
  console.log(sum.toFixed(2));

