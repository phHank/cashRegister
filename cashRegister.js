function checkCashRegister(price, cash, cid) {
  // gives change in cents to avoid rounding error.
  let change = Math.round((cash - price) * 100);

  // total change available in cash drawer (cid) in cents
  let totalCID = Math.round(cid.map(aubArray => aubArray[1]).reduce((acc, cur) => acc += cur) * 100);

  // creat output array to be populated with denomitions of changes 
  let outputArr= [
    ['ONE HUNDRED', 0],
    ['TWENTY', 0],
    ['TEN', 0],
    ['FIVE', 0],
    ['ONE', 0],
    ['QUARTER', 0],
    ['DIME', 0],
    ['NICKEL', 0],
    ['PENNY', 0]
  ];

  //creat Object from cid with denomination as key and amount as val. 
  const cidObj = Object.assign(...cid.map(([v, k]) => ({ [v]: k })));

  let exactChange = true;

  if (change < 0) {
    return 'INSUFFICIENT_FUNDS';
    } else if (totalCID === change) {
      return 'CLOSED';
    } else {
      while (exactChange && change > 0) {
              if (change >= 10000 && cidObj['ONE HUNDRED'] >= 100) {
              outputArr[0][1] += 100;
              cidObj['ONE HUNDRED'] -= 100;
              change -= 10000;
              totalCID -= 10000;
            } else if (change >= 2000 && cidObj['TWENTY'] >= 20) {
              outputArr[1][1] += 20;
              cidObj['TWENTY'] -= 20;
              change -= 2000;
              totalCID -= 2000;
            } else if (change >= 1000 && cidObj['TEN'] >= 10) {
              outputArr[2][1] += 10;
              cidObj['TEN'] -= 10;
              change -= 1000;
              totalCID -= 1000;
            } else if (change >= 500 && cidObj['FIVE'] >= 5) {
              outputArr[3][1] += 5;
              cidObj['FIVE'] -= 5; 
              change -= 500;
              totalCID -= 500;
            } else if (change >= 100 && cidObj['ONE'] >= 1) {
              outputArr[4][1] += 1;
              cidObj['ONE'] -= 1;
              change -= 100;
              totalCID -= 100;
            } else if (change >= 25 && cidObj['QUARTER'] >= 0.25) {
              outputArr[5][1] += .25;
              cidObj['QUARTER'] -= 0.25
              change -= 25;
              totalCID -= 25;
            } else if (change >= 10 && cidObj['DIME'] >= 0.1) {
              outputArr[6][1] += .1;
              cidObj['DIME'] -= 0.1;
              change -= 10;
              totalCID -= 10;
            } else if (change >= 5 && cidObj['NICKEL'] >= 0.05) {
              outputArr[7][1] += .5;
              cidObj['NICKEL'] -= 0.05;
              change -= 5;
              totalCID -= 5;
            } else if (change >= 1 && cidObj['PENNY'] >= 0.01) {
              outputArr[8][1] += .01;
              cidObj['PENNY'] -= 0.01;
              change -= 1;
              totalCID -= 1;
            } else {
              exactChange = false;
            }
          }
        }

      if (!exactChange) {
        return 'INSUFFICIENT_FUNDS';
    }

  return 'OPEN';
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]));

// returns: { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }