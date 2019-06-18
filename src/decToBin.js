export const decToBin = (number) => {
  var bin = (number >>> 0).toString(2);
  return parseInt(bin);
}
