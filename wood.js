/**
 *
 * fixed: per item wood requirement
 * 1. chair => 3 cft
 * 2. table => 10 cft
 * 3. bed => 50 cft
 *
 * vary: quantity
 *
 */

function woodCalulator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = perChairWood * chairQuantity;
  const tableWood = perTableWood * tableQuantity;
  const bedWood = perBedWood * bedQuantity;
//   console.log(chairQuantity, tableQuantity, bedQuantity);
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalulator(2, 2, 5);
console.log(totalWood);

