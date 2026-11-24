for (let hundreds = 1; hundreds <= 9; hundreds++) {
    for (let tens = 0; tens <= 9; tens++) {
        for (let units = 0; units <= 9; units++) {

            let number = (hundreds * 100) + (tens * 10) + units;
            let sumOfSquares = (hundreds**2) + (tens**2) + (units**2);

            if (sumOfSquares == number) {
                console.log(number);
            }
        }
    }
}
