const arr = [2, 3, 4, 5, 6, 7];

const multiply = data => {
    let all = 1;
    for(let i = 0; i < data.length; i++){
        all *= data[i];
    }

    return all;
}

const result = multiply(arr);

console.log(result);