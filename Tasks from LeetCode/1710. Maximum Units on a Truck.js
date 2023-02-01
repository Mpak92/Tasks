const maximumUnits = (boxTypes, truckSize) => {
  let totalUnits = 0;
  let truckFreeSpace = truckSize;
  const boxTypesSort = boxTypes.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < boxTypesSort.length; i++) {
    if (truckFreeSpace < boxTypesSort[i][0]) {
      totalUnits += truckFreeSpace * boxTypesSort[i][1];
      truckFreeSpace = 0;
    } else {
      totalUnits += boxTypesSort[i][0] * boxTypesSort[i][1];
      truckFreeSpace -= boxTypesSort[i][0];
    }
    if (truckFreeSpace === 0) break;
  }
  return totalUnits;
};

const boxTypes = [[1, 3], [2, 2], [3, 1]];
const truckSize = 4;

console.log(maximumUnits(boxTypes, truckSize));
