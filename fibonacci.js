function fibonacciGenerator(n) {
    var sequence = [];
        if (n == 1) {
            sequence = [0];
        } else if (n == 2) {
            sequence = [0,1];
         }
        else {
            sequence = [0,1];
        for (var position = 2; position < n; position++) {
            var lower = sequence[position - 2];
            var higher = sequence[position - 1];
            sequence.push(lower + higher);
            }
        }
        return (sequence);
    }
    console.log(fibonacciGenerator(10));