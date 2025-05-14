<!DOCTYPE html>
<html>
<head>
    <title>Sum of Digits Calculator</title>
    <script>
        function calculateSumOfDigits() {
            var number = document.getElementById("number").value;
            var sum = 0;

            for (var i = 0; i < number.length; i++) {
                sum += parseInt(number.charAt(i));
            }

            document.getElementById("result").innerHTML = "Sum of digits: " + sum;
        }
    </script>
</head>
<body>
    <h1>Sum of Digits Calculator</h1>
    <label for="number">Enter a number:</label>
    <input type="number" id="number">
    <br>
    <button onclick="calculateSumOfDigits()">Calculate Sum</button>
    <div id="result"></div>
</body>
</html>

