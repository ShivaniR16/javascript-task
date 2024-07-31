function arrayDifference(arr1, arr2) {
    const diff1 = arr1.filter(x => !arr2.includes(x));
    const diff2 = arr2.filter(x => !arr1.includes(x));
    return [...diff1, ...diff2];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const difference = arrayDifference(array1, array2);

console.log(difference); 
