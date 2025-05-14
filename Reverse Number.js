<!DOCTYPE html>
<html>
<head>
    <title>Reverse Number</title>
    <script>
        function reverseNumber() {
            var number = document.getElementById("number").value;
            var reversed = 0;
            var originalNumber = number;

            while (number > 0) {
                var digit = number % 10;
                reversed = (reversed * 10) + digit;
                number = Math.floor(number / 10);
            }

            document.getElementById("result").innerHTML = "Original number: " + originalNumber +" Reversed number: " + reversed;
        }
    </script>
</head>
<body>
    <h1>Reverse Number Calculator</h1>
    <label for="number">Enter a number:</label>
    <input type="number" id="number">
    <br>
    <button onclick="reverseNumber()">Reverse Number</button>
    <div id="result"></div>
</body>
</html>

