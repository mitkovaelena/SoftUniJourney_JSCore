function subSum(arr, ind1, ind2){
    let sum = 0;
    if(!Array.isArray(arr)) return NaN;
    if(Number(ind1) < 0) ind1 =0;
    if(Number(ind2) > arr.length-1) ind2 =arr.length-1;

    for(let i = ind1; i<=ind2; i++){
    sum += Number(arr[i])
}
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300)