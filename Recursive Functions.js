<!DOCTYPE html>
<html>
<head>
    <title>Recursive Functions</title>
    <script>
        function calculateFactorial() {
            var number = parseInt(document.getElementById("factorialNum").value);
            var result = factorial(number);
            document.getElementById("factorialResult").innerHTML = "Factorial: " + result;
        }

        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }

        function calculateFibonacciInRange() {
            var start = parseInt(document.getElementById("fibonacciStart").value);
            var end = parseInt(document.getElementById("fibonacciEnd").value);
            var result = generateFibonacciInRange(start, end);
            document.getElementById("fibonacciRangeResult").innerHTML = "Fibonacci Sequence in Range: " + result.join(", ");
        }

        function generateFibonacciInRange(start, end) {
            var fibonacciSequence = [];
            for (var i = start; i <= end; i++) {
                fibonacciSequence.push(fibonacci(i));
            }
            return fibonacciSequence;
        }

        function fibonacci(n) {
            if (n <= 1) {
                return n;
            } else {
                return fibonacci(n - 1) + fibonacci(n - 2);
            }
        }

        function calculatePower() {
            var base = parseInt(document.getElementById("powerBase").value);
            var exponent = parseInt(document.getElementById("powerExponent").value);
            var result = power(base, exponent);
            document.getElementById("powerResult").innerHTML = "Power: " + result;
        }

        function power(base, exponent) {
            if (exponent === 0) {
                return 1;
            } else {
                return base * power(base, exponent - 1);
            }
        }
    </script>
</head>
<body>
    <h1>Recursive Functions</h1>

    <h2>Factorial Calculator</h2>
    <label for="factorialNum">Enter a number:</label>
    <input type="number" id="factorialNum">
    <br>
    <button onclick="calculateFactorial()">Calculate Factorial</button>
    <div id="factorialResult"></div>

    <h2>Fibonacci Sequence Generator in Range</h2>
    <label for="fibonacciStart">Enter the start of the range:</label>
    <input type="number" id="fibonacciStart">
    <br>
    <label for="fibonacciEnd">Enter the end of the range:</label>
    <input type="number" id="fibonacciEnd">
    <br>
    <button onclick="calculateFibonacciInRange()">Generate Fibonacci in Range</button>
    <div id="fibonacciRangeResult"></div>

    <h2>Power Calculator</h2>
    <label for="powerBase">Enter the base:</label>
    <input type="number" id="powerBase">
    <br>
    <label for="powerExponent">Enter the exponent:</label>
    <input type="number" id="powerExponent">
    <br>
    <button onclick="calculatePower()">Calculate Power</button>
    <div id="powerResult"></div>
</body>
</html>

