function averageOfArray(arr){
  var sum = 0, average = 0;
  for(var i=0; i< arr.length; i++){
    sum += arr[i];
  }
  
  average = Math.floor(sum / arr.length) ; 
  console.log((average));
}
