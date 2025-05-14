<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Functions</title>
    <script>
        function calculateGCD() {
            var num1 = parseInt(document.getElementById("gcdNum1").value);
            var num2 = parseInt(document.getElementById("gcdNum2").value);

            while (num2 !== 0) {
                var temp = num2;
                num2 = num1 % num2;
                num1 = temp;
            }

            document.getElementById("gcdResult").innerHTML = "GCD: " + num1;
        }

        function reverseNumber() {
            var number = document.getElementById("reverseNum").value;
            var reversed = 0;

            while (number > 0) {
                var digit = number % 10;
                reversed = (reversed * 10) + digit;
                number = Math.floor(number / 10);
            }

            document.getElementById("reverseResult").innerHTML = "Reversed number: " + reversed;
        }

        function generateRandomNumber() {
            var min = parseInt(document.getElementById("randomMin").value);
            var max = parseInt(document.getElementById("randomMax").value);
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById("randomResult").innerHTML = "Random number: " + randomNumber;
        }
    </script>
</head>
<body>
    <h1>JavaScript Functions</h1>

    <h2>GCD Calculator</h2>
    <label for="gcdNum1">Enter the first number:</label>
    <input type="number" id="gcdNum1">
    <br>
    <label for="gcdNum2">Enter the second number:</label>
    <input type="number" id="gcdNum2">
    <br>
    <button onclick="calculateGCD()">Calculate GCD</button>
    <div id="gcdResult"></div>

    <h2>Number Reverser</h2>
    <label for="reverseNum">Enter a number:</label>
    <input type="number" id="reverseNum">
    <br>
    <button onclick="reverseNumber()">Reverse Number</button>
    <div id="reverseResult"></div>

    <h2>Random Number Generator</h2>
    <label for="randomMin">Enter the minimum value:</label>
    <input type="number" id="randomMin">
    <br>
    <label for="randomMax">Enter the maximum value:</label>
    <input type="number" id="randomMax">
    <br>
    <button onclick="generateRandomNumber()">Generate Random Number</button>
    <div id="randomResult"></div>
</body>
</html>

