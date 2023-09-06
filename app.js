function narsisticNumber(number) {

    let digits = String(number).split('').map(Number)

    let calculation = 0

    let response

    for (let index = 0; index < digits.length; index++) {
        let i = digits[index] ** digits.length
        calculation = i + calculation
    }

    if (number == calculation) {
        response = true
    } else {
        response = false
    }

    console.log('narsistic number ', response);
    return response

}

function parityOutlier(number) {

    let genap = []
    let ganjil = []

    let response

    for (let index = 0; index < number.length; index++) {
        if (number[index] % 2 === 0) {
            genap.push(number[index])
        } else {
            ganjil.push(number[index])
        }
    }

    if (genap.length == 1) {
        response = genap[0] + " the only even number"
    } else if (ganjil.length == 1) {
        response = ganjil[0] + " the only odd number"
    }

    if (genap.length == 0) {
        response = false + " (all even integer, no outlier)"
    } else if (ganjil.length == 0) {
        response = false + " (all odd integer, no outlier)"
    }
    console.log('parity outlier', response);
    return response
}

function findNeedle(array, key) {

    let response

    for (let index = 0; index < array.length; index++) {
        if (array[index] == key) {
            response = index + " as the index of the needle (" + key + ")"
        }
    }

    console.log('find needle ', response);
    return response
}

function blueOcean(array1, array2) {

    let response
    let position

    for (let index = 0; index < array1.length; index++) {

        if (array1[index] == array2[0]) {

            position = index + 1
        }
    }

    response = array1.slice(position)

    console.log('blueOcean ', response + "because " + array2[0] + "is present in the second list");

    return response
}

narsisticNumber(111)
parityOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
findNeedle(["red", "blue", "yellow", "black", "grey"], "blue")
blueOcean([1, 2, 3, 4, 6, 10], [1])