const vetor = [2, 1, 3];


function ordenar(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}


ordenar(vetor)